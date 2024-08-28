# All manual step in release handling

The release process is a semi-autometed process, so some manual steps are required
in most of the time.

[Install Bob](./dev-env.md#bob) first as the steps below build on it.

You need to set some environment variables to be able to use the bob rules written in this document.
Please check these environment variables on [this wiki page](https://eteamspace.internal.ericsson.com/display/EIT/Tokens).

Create a `.bob.env` file with the variables, then these parameters can be permanently set in the
local repository. Also create these variables for your current cli session.
Bob looks for these values in multiple places.

?> The following steps sometimes require to edit yaml files which are very big. Advised to save them
with the `File: Save without Formatting` VSCode command.

## FOSS handling

Register the new/updated FOSS(es) and its dependencies in SCAS.
Related documentation from the used tools can be checked [on this page](https://gerrit.ericsson.se/plugins/gitiles/adp-cicd/bob-adp-release-auto/+/master/foss/README.md).

The FOSSA configuration is in `.fossa.yml`. If a new npm (or other) project is created in
the repo and has production dependencies, add configuration here.

?> The 3pp handling involves multiple systems and sometimes 3pps are registered differently which
can cause issues. Although many cases are automatically covered there might be issues with the flow.
In these case check the [Workarounds](#workarounds) chapter for help.

## Automatic 3pp handling

With the following steps, the content of `dependencies_foss_auto.yaml` can be automatically generated.
To keep consistent formatting there is a `foss-helper:fix-format` bob task to reformat this file.

1. Set the `FOSSA_API_KEY`, `SCAS_TOKEN`, `MUNIN_TOKEN` environment variables

   - Create a `.bob.env` file in the repository root with content from the above wiki page
   - The general FOSS handling process will communicate with the Ericsson SCAS and the FOSSA systems,
     so we need to set the necessary credentials for it.

2. bob foss-analyze-local

   This is an aggregated rule to automatize the 3pp processing steps.
   At the end the `dependencies_foss_auto.yaml` will be updated to the latest 3pps, and new components
   are already updated from SCAS.

   Also the rule tries to fix the most common issues with new components (eg. selecting license,
   filling missing source link, setting Stako to manual, filling in the linking field).

   The last task validates the yaml file and prints any errors which need manual intervention.
   When introducing or upgrading 3pp, there may be errors asking to register in SCAS (go to Step 3).
   For other error cases check the [dependency-update-with-scas](#dependency-update-with-scas)
   chapter (though no need to run that task manually, it is normally used by Drop pipeline only).

   If there are 3pps which are falsely found by Fossa, there is a filtering step. The
   `plms/dependencies_blocked_by_fossa.yaml` config file contains the list of packages which shouldn't
   be in the generated dependencies.yaml file. Only add 3pps here which are 100% false positive results.

   If there is nothing to register then skip SCAS and Munin registration steps and jump to Step 5.

3. Register 3pps in SCAS

   1. bob scas-register

      This rule registers every dependencies which does not have prim number or has
      `register=true` attribute in the `dependencies_foss_auto.yaml`

   2. wait until the manual SCAS approvement process is finished by the 3pp coordinator team,
      or manually add prim numbers

      - You can check the status on our [SCAS SVL page](https://scas.internal.ericsson.com/product-details/5398/overview)
      - If every row is gold, then the process is finished.
      - The registered components are automatically assigned to 3pp coordinators, the process can take
        several days or weeks depending on the number of registered components
      - [Waiting Queue](https://scas.internal.ericsson.com/user-requests/my-requests)
      - If a 3pp exists in SCAS, then you can manually update the bazaar section to
        speed up the registration.
      - [search](https://scas.internal.ericsson.com/search3pp) for the component in SCAS
        and get its PRIM number
      - set `bazaar.prim` to the PRIM number from SCAS
      - NOTE: if this component is newly introduced it won't be shown by the search until registration
        is finished.

   3. bob foss-register-help

      Restart the SCAS scanning and processing steps. It should update `dependencies_foss_auto.yaml`
      with the latest values from SCAS for the unregistered components.

      If there is any component which is not found in SCAS then there may be a name mapping issue.
      Search for the component in SCAS and get the actual name, then update the `plms/scripts/name-mapping.json`.
      Also follow the [Component name mapping](#component-name-mapping) steps.

      If the component name is **2 letters long** in SCAS, then the script won't find it with
      name based search. Manually Update the `bazaar.prim` field.

      See the rule [description](#check-dependencies-files).

4. Register 3pps in Munin

   1. bob foss-helper:merge-dependencies foss-helper:check-munin-sync-status

      As a prerequisite please set the `MUNIN_TOKEN` env variable in your environment.

      This step will check if all 3pps are available in Munin. If not then
      `.bob/munin-sync-status-files` folder will contain 1-2 files which must be sent by email to the
      3PP Team:

      Send a mail to Andrei Dorin Cojocaru <andrei.dorin.cojocaru@ericsson.com>
      and 3PPT <3PPT@ericsson.com> attaching the files from `.bob/munin-sync-status-files`
      and ask them to Sync these items into Munin.

      Wiki page to get the up-to date contact information:
      <https://eteamspace.internal.ericsson.com/display/ACD/FOSS+Evaluation+in+Mimer#FOSSEvaluationinMimer-HowtogetalreadyexistingFOSSfromBazaarintoMunin>

   2. Wait until all of the 3pp's and 2pp's are released in Munin. To check the status, you can rerun
      the bob step from the previous step. If the related 3pp/2pp is blocked by a Munin bug, then it
      can be skipped in the `plms/dependencies_blocked_by_mimer.yaml` until the time of the next
      GUI Aggregator release. The skip file shall be empty to all releases.

   3. bob foss-helper:update-munin-section
      Call a munin search on the `dependencies_foss_auto.yaml` to update it with the actual mimer
      component name and version string.

5. If EUISDK libraries are changed update `product_structure.yaml`.

   - EUISDK is a 2pp which is shown in this file. If EUISDK libraries are updated then update
     `prim` and `rstate` with the relevant release information.
     To get these information for EUISDK release, check the PRI document published in the [release documentation.](https://euisdk.seli.wh.rnd.internal.ericsson.com/showcase/esm-docs/#release)

6. Fill the `plms/encryptions.yaml` in case of a new dependency used for encrypting something.

   For more info check [Mimer workflow](#mimer-workflow)

7. Commit the modified `dependencies_foss_auto.yaml` and `dependencies_manual.yaml` and
   product structure files into the repo.

   The auto file is managed by ADP release scripts and GUI Aggregator specific node js scripts as well.
   The output of these are different, to fix the formatting execute the bob step:
   `bob foss-helper:sort-auto foss-helper:fix-format`.

   Then it is easier to track changes to the generated file in git.

8. (Optional) Handle the Fossa - SCAS naming difference.
   [Component name mapping](#component-name-mapping)

### Component name mapping

Component names in SCAS may be different from the ones discovered by Fossa.
The `bob-adp-release-auto` image contains a name mapping step to overcome these differences.
To make future bazaar scan results better it is better to keep this list up to date.

1. bob foss-name-mapping

   Fetches the actual mapping from the bob docker image, parses the dependency.yaml for different
   names and then generates a CSV, where each line represents a new mapping.
   The format is compatible with the `bazaar_name_map.csv` in the bob image.

2. Create a patchset for <https://gerrit.ericsson.se/plugins/gitiles/adp-cicd/bob-adp-release-auto/+/master/foss/resources/bazaar_name_map.csv>
3. Add reviewers and send email: Avinash Hota, Mounisha Dandu, Mozes Nyitrai, Yasmin Tesfaldet Gebreyesus

## Manual 3pp handling

In some cases the automatic process can't discover or handle 3pps correctly. For this the
`dependencies_manual.yaml` file is used, which should contain all dependencies
which are not detected correctly by FOSSA

1. Add or update 3pp in `dependencies_manual.yaml`

   - Run a SCAS scan for the entry to get up to date info:
     `bob foss-helper:dependency-update-with-scas-manual`
   - Then restore all deleted comments from the file.
   - Important to fill the `mimer.usage` field with description of how the FOSS is used by
     the product.

2. Update product structure files if necessary.

3. Update `plms/manual.license.agreement.json`

   In this step we make sure that when generating License Agreement Fragment document
   in the next step, also the manually documented dependencies have proper license info.
   Since FOSSA/SCAS does not have all necessary info about these dependencies,
   their name, version, license and the copyright text of the license shall be separately provided.

   Add/remove dependencies and/or update their license info in `plms/manual.license.agreement.json`.
   Make sure that `license_type` in license JSON is the same as `selected_licenses` in the `dependencies_manual.yaml`.
   To validate if license info is up-to-date, check SCAS (you may refer to step 11).
   To get copyright text, visit `https://spdx.org/licenses/`.
   Make sure to use `\n` line breaks and escape quote characters when copying the copyright text.

4. bob license-agreement

   - This task takes the `.bob/dependency_merged_full.yaml` file, the generated `.bob/fossa-report.json`
     file and the manually filled `plms/manual.license.agreement.json` file as input,
     and generates License Agreement Fragment JSON document to path `docs/release/metadata/license.agreement.json`.
   - then validates the result

   - If you don't have the merged dependency file, run `bob foss-helper:merge-dependencies` in advance.
   - for the `.bob/fossa-report.json` you have to run a fossa analysis.

## Create Release ('+' version)

To release GUI Aggregator a '+' version of the service must be created with the Release pipeline.
However before the pipeline can be started there may be some required manual approval steps from the
3PP Coordinator and the Trade Expert.

In the following steps use the common CI users to log into the product handling systems.
For password see [Tokens](https://eth-wiki.rnd.ki.sw.ericsson.se/pages/viewpage.action?spaceKey=EIT&title=Tokens).

0. Pre-requisites:

   - check the `docs/release/content/release_notes.md` to be up-to date.
     - If needed, fill manually the release notes based on tasks added since the last release.
     - Suggestions:
       - Check the bullet points from end user perspective.
       - Check the `Migration` part: write here if there is any manual change needed from end user due
         to a non-backward compatible change (ask the team).
       - Under `Bugfixes` list production code or customer document related bug cards.
   - check if the drop version planned to be used for release is passed all staging CIs
     - ADP Staging
     - EEA4
     - OSS Base
     - any other product integrations

1. Log into [Mimer](https://mimer.internal.ericsson.com/home) to see the current product status.

   - If you do not have rights request access on MySupport [page](https://ericsson-dwp.onbmc.com/dwp/app/#/itemprofile/26309).
     (DataReader role is enough for browsing)
   - Search for `Lightweight GUI Aggregator` in the top right search box.
   - Check all Designation: select e.g. `Lightweight GUI Aggregator Service` and select the desired
     version from the `Version` column, then click on the appearing `Compliance Dashboard` in the left
     menu panel.
   - All Yellow state means a manual approval is needed.
     - Write emails / Teams message to the responsible person.
     - Send direct links to all Designations, select proper version for each.
   - At first ask approval for 3pp and Encryption.
     - 3pp Usage review: Tibor Harcsa <tibor.harcsa@ericsson.com> (Teams OK)
     - Encryption review: Tibor Harcsa <tibor.harcsa@ericsson.com> (Teams OK)
   - If there were no 3pp and encryption change, Trade Compliance will get automatic approval,
     when 3pp and Encryption turns to green. Otherwise ask for approval.
     - Trade Expert review: György Sándor <gyorgy.sandor@ericsson.com> (Email OK)
   - After approvals check again the Compliance Dashboards, and you can proceed,
     when `FOSS Usage`, `Encryption` and `Trade Compliance` are all Green.
     (A possible Warning at `Product restriction` is not blocking the release.)

2. Double-check release documents in Eridoc

   - Open [GUI Aggregator Eridoc folder](https://eridoc.internal.ericsson.com/eridoc/?docbase=eridoca&locateId=0b004cffc6b574c5)
   - Take a look at the content of release documents in Eridoc.
   - No manual approve is needed.
     - DPI documents and Test Documents in Eridoc are approved by the release pipeline
       under "Auto approve Eridoc documents" step.
     - Make sure that the `Release documents/...(PRI)` document is not approved.
       This is also approved by the release pipeline.

3. Start the [characteristics pipeline](https://seliius27190.seli.gic.ericsson.se:8443/view/Presentation/job/adp-ui-service-athena-report/)
   to get characteristics report to the release candidate drop version.
   (This step is recommended, but not required for the release pipeline to pass,
   so might be performed later.)

   Set the following parameters to the pipeline:

   - Drop version to the version that is about to be released.
   - Response threshold to 1000.
   - Include Static Assets
   - Publish Athena Report
   - Save Detailed Report

   In case the pipeline fails, investigate if there is any performance drop since last release.
   If so (e.g. there is threshold breach even after re-running the pipeline),
   either postpone the release or create a JIRA ticket about the performance issue.

4. Start the [adp-ui-service-release](https://seliius27190.seli.gic.ericsson.se:8443/view/Presentation/job/adp-ui-service-release/)
   pipeline in Jenkins.

   - Set the `RELEASE_CANDIDATE` to the drop version which should be released (eg. 0.7.2-45).
   - `VERSION_UPDATE`: the version increase method after the release. An automatic commit is created
     with the version increase after a successful release. This version will be the **next** release
     version.
   - `DRY_RUN`: use for development purposes, stages won't do permanent changes.
   - `RUN_STAGES`: by default it is `all`. Can be used to restart the release with only a subset of
     the stages. Useful if the release failed after it has made changes in EVMS or Mimer and those
     stages cannot be started again. However it is important to keep the dependency between stages
     (eg. Marketplace docs requires the SVL generation step).
   - `GERRIT_REFSPEC`: the patchset used for the release pipeline _CI Code_. At this stage GUI Aggregator
     artifacts are fetched from ARM repositores and not rebuilt from GIT.

5. Deploy the released '+' version of GAS to the demo cluster using the
   [adp-ui-service-demo](https://seliius27190.seli.gic.ericsson.se:8443/view/Presentation/job/adp-ui-service-demo)
   pipeline in Jenkins.

   - Set the `GAS_VERSION` to the released version (eg. 2.4.0+21).
   - Set `adp-ui-service` as `DEMO_INGRESS_PATH`. Note that in the URL it will be converted to `adp_ui_service`.
   - Set a namespace name in `DEMO_NAMESPACE` parameter. To avoid being removed by the weekend
     namespace cleanup job, make sure it does not end with number. Note that the demo deploy
     pipeline uses custom namespace labels and based on these it automatically
     removes the previous demo namespace.

After a successful run a new '+' version of GUI Aggregator should be published with all the relevant
artifacts:

- source: docker image, helm charts are uploaded into ARM release repository
- Certified archives in GitCA and ACA
- documentation for the release version at ADP Marketplace
- release documents uploaded to Eridoc
- In Mimer, PRIM, EVMS the release candidate version is marked as released

### Increase major version

If the major version is planned to be changed there are extra manual steps to do:

1. call the last release pipeline with version increase step set to `major`
2. after the release master will contain the increased major version in `VERSION_PREFIX`
3. manually log into Eridocs and copy-paste all GAS documents, increase the `/x` in the document numbers
   to the new major version (e.g. `1/abc de-APR 201 088/x`)
4. update document numbers in marketplace configs, Eridocs upload configs and `product_structure.yaml`

### Troubleshooting

If the pipeline fails it can be restarted after the issue is resolved. However depending how far the
pipeline got there may be some necessary manual steps to reset state in different system.

#### Reset systems

- EVMS:
  - log into [EVMS](https://evms.internal.ericsson.com/) with `EEABAZAAR@ericsson.com` user:
    - Use [Tokens Page](https://eteamspace.internal.ericsson.com/display/EIT/Tokens)
      `Check / Refresh EVMS Token` section's first chapter to get `One Time Password` to the EVMS login.
  - Products (left menu) / Open Tree: Lightweight GUI Aggregator service / _Target version_
  - Click on the Target version and in the right side click on `Edit Version` (Pencil)
  - Set Version Status to `preregistered` and Release Date to a future date
  - Submit
- PRI in Eridoc
  - Open [GUI Aggregator Eridoc folder](https://eridoc.internal.ericsson.com/eridoc/?docbase=eridoca&locateId=0b004cffc6b574c5)
  - Right click on the version of the release that is being created
    (with `APPROVED` status) / Lifecycle / Withdraw
- Mimer
  - In case of Mimer it can be complicated to revert back fully. However a re-triggered pipeline in
    most cases can continue where Mimer processing was stopped
    (eg. if Trade Expert review was missing, then after an approval the pipeline can be re-triggered).
  - For a complete revert or version delete ask Tibor Harcsa
- PRIM
  - _TODO_

#### 3PP issue in input data

In case the `FOSSA Usage` turns from Green to Yellow in Mimer dashboard during release pipeline,
it may indicate some mismatch or glitch in the input data of one or more 3PPs.

- Open the FOSS report in Mimer and find the problematic 3PP's.
- Double-check the blocks of the particular 3PP's in `dependencies_foss_auto.yaml`,
  especially the `mimer:` part.
- If needed, create a new commit with the fix. Note that to avoid failing PreCodeReview,
  you need to withdraw the Test Report in Eridoc. Also a check out and check in is needed.
- To apply the fix, either have the commit submitted and wait for the Drop pipeline,
  or use its Gerrit refspec when re-running the release pipeline. But before re-running the pipeline
  don't forget to withdraw PRI approval in Eridoc and to ask manual FOSS Usage approve again.

#### Partial run

The pipeline can be partially executed with the `RUN_STAGES` parameter. Just add the name of the stage
to a comma separated list. Use the exact same name what is visible on the Jenkins UI (the same string
as set in the stage('...name...') parts in the `Release.jenkinsfile`.

However currently it requires a deeper understanding of the pipeline as there can be dependency
between stages and in these cases all the prerequisite stages must be added to the list. Otherwise
a later stage may fail because it can't found the output of an earlier stage.

## Details of the steps

### foss-analyze-local

This is an aggregated rule to execute all the automated tasks locally. It contains a series
of automatic fixes to the dependency.yaml files to overcome the limitations of the tools
and ease the 3pp handling process.

#### Init

Cleans bob workspace and inits the variables used by further bob steps

#### foss-analyze

This rule executes the FOSSA CLI on the JS projects, collect 3pps and merge into the
`dependencies_foss_auto.yaml` file.

1. bob foss-analyze:analyze

   - During this process the FOSSA server is used to scan all dependencies in the GUI Aggregator.
   - It returns a link where the analysis can be checked

2. bob foss-analyze:status-check

   - We have to wait until the scan is finished. This rule will poll the process status.

3. (Optional) Check the analysis on FOSSA GUI

   - Open the link from step 3, using the credential from the token wiki page (username and _password_).
     Check the dependencies, which can be ignored if recognized falsely.

4. bob foss-analyze:report-attribution

   - All scanning information is fetched from the FOSSA server to `.bob/fossa-report.json`

5. bob foss-analyze:dependency-update-with-foss

   - All information from FOSSA is merged into `plms/dependencies_foss_auto.yaml`

6. bob foss-analyze:fix-primary

   - The `primary` field for the new components are not preserved after the previous FOSSA step.
     It shall be set `- this` for the _direct_ dependencies, and `['']` for the _deep_ dependencies.
   - The task executes a helper script (`plms/scripts/fix-primary-from-package`) to set the
     `primary` field based on package.jsons and update the `mimer.usage` fields with usage info.

     ```bash
     node plms/scripts/fix-primary-from-package.js \
       plms/dependencies_foss_auto.yaml \
       frontend/package.json \
       backend/package.json
     ```

7. bob foss-analyze:fix-linking

   - Set the `linking` filed for the discovered components. For nodejs services it is set to `Dynamically`
     and for UI services which are bundled with webpack it is set to `Statically`

8. bob foss-analyze:enrich

   - enrich 3pps with values from the `plms/dependencies_enrichment.yaml`. Used to add workarounds
     for various 3pp handling issues

9. fix formatting

#### foss-register-help

This rule takes the new components, scans SCAS for matches and updates `dependencies_foss_auto.yaml`.
All components where the value of `bazaar.register` is not `no` will be processed.
It can be `yes` fro new components or a registration number for components under processing.

Also there is a `plms/scripts/name-mapping.json` file which contains the FOSSA - SCAS name mapping
for components where the SCAS name is different.

1. bob foss-register-help:filter-unregistered

   - filter the unregistered components into a temp file
   - changes names for better SCAS scan results

2. bob foss-register-help:dependency-update-with-scas-for-unregistered

   - executes a SCAS scan for the unregistered components

3. bob foss-register-help:rename-unregistered

   - change component names back

4. bob foss-register-help:merge-unregistered

   - merge unregistered list back to `dependencies_foss_auto.yaml`

5. bob foss-register-help:fill-missing-bazaar-src

   - fix missing src attributes

6. bob foss-register-help:fix-license-stako-src

   - fix Stako and license issues automatically

7. bob foss-helper:update-munin-section

   - search for 3pps in mimer and updates the mimer section of the dependencies

8. fix formatting

9. validate dependency files

### foss-helper

This is a collection of tasks related to Foss handling.

!> This rule should not be called directly

Some (not all) tasks are described in details in the next chapters.

#### fix-format

Fix the formatting of the `dependencies_foss_auto.yaml` to be the similar what the adp-release
tasks are producing. Helpful for checking the changes between git commits.

#### check-dependencies-files

This task will analyze the dependencies files and show if there is anything to register.
It shows other issues with the dependencies.

For more info check the [dependency-update-with-scas](#dependency-update-with-scas)
chapter for some tips.

#### dependency-update-with-scas

- This rule will update the auto and manual yaml files, update fields for dependencies
  with latest information from SCAS. It may take time to scan all dependencies one-by-one...
- There can be errors which need manual interventions. Edit the `dependencies_foss_auto.yaml`
  to fix the issues and then rerun the job. Check the _Summary_ section of the logs:

  - At the end the _Issues with MANDATORY Attributes_ error message shows that there are required
    fields which are not filled properly. Check these, and manually fix them according to the
    error message.

  - The warning section shows multiple issues, one type is when a **component is not found in SCAS**

    `* Did not find '@babel/runtime' '7.13.7' in SCAS. Component needs to be registered`

    The cause may be that the module name in fossa and in SCAS is different.
    If so create an update commit according to the [Component name mapping](#component-name-mapping).
    For short term update the `plms/scripts/namemapping.json`.

    Other cause may be that, the version format in fossa is different as in SCAS.
    (eg. 2.0.0 vs 2.0). In that case the `versions` may contain a list,
    where the first item is the version in SCAS, and the second is the version in fossa.

    In this case manually search for the component in SCAS, get the **Component Number**
    and update the `bazaar.prim` attribute of the component in `dependencies_foss_auto.yaml`

    Hint: search for `prim: ''` in the yaml file and then use the `bazaar.register` number
    (_use the numeric part only_) to construct a direct URL to the components:
    `https://scas.internal.ericsson.com/product-details/<productId>/version/<versionId>/request3pp/<requestId>`
    But always double check the result if the relevant component was found.

  - The Error section shows **Selected License**. (If there are multiple available license
    then select one)

  - The Error section shows **Stako** issues. (ESW1-2 are the good levels, ESW3-4 are risks)

    `* Invalid Stako ESW4 for component Form-Data, version 2.3.3`

    Edit `bazaar.stako_decision_reason: automatic` to `manual` in these components.

    Or use the `fix-stako-license.js` script from the `ci-toolbox` image to fix stako and license issues.

    ```bash
    node fix-stako-license.js
      --dependencies-path plms/dependencies_foss_auto.yaml
      --output-dependencies-path plms/dependencies_foss_auto.yaml
    ```

  - The Error section shows issues with **mimer**:

    `* prim number ''is not same as,mimer product_number '2.0.0'`

    Then login to [mimer](https://mimer.internal.ericsson.com/) with `eeamunin` user
    (password is on the tokens page), and try to find the 3pp with module name or prim number
    and update these fields. Note not only the product number, but the version tag may be different.

## EVMS Registration

EVMS means Ericsson Vulnerability Management Service. This system helps to find every registered vulnerability
by scanning all of the registered 3pp's. If one of the owned 3pp is included in a vulnerability alert,
then the owner team shall answer with an action plan to all of them on the [webpage](https://evms.internal.ericsson.com/products).

To login to the page please check the credentials from the [Tokens wiki page](https://eteamspace.internal.ericsson.com/display/EIT/Tokens).

The uploaded product version in the EVMS has two main states. Every drop from the microservice will be
registered with the semantic version as a pre-registered state and every release from the microservice
will be registered as an active state. The main difference between the pre-registered and the active
state is how to handle the alerts. In pre-registered state the microservice owner team is notified only
and there is no any requirements to answer the alerts. On the other hand in active state the owner
team shall answer them.

There are two scenarios to every alarm:

- The team can drop out the 3pp version from the software, because there is a newer version from the
  3pp or the 3pp is not required anymore.

- There is no new version from the 3pp and it can not be dropped out. In this case the owner team shall
  request an exemption.

The full EVMS flow is automated except the alert handling. On the other hand it is worth to mention
if a new product version is started then it shall be accepted by one of the PSIRT Admin (`PSIRT <PSIRT@ericsson.com>`).
This process and the active alarms can be checked in the `Tasks` menu on the EVMS webpage.

## PRI manual content

The PRI document is built from [PRI template](https://gerrit.ericsson.se/plugins/gitiles/adp-cicd/bob-adp-release-auto/+/master/pri/configs/1.8/templates/pri_template.html).
The content is semi-automated, because most of the chapters are created automatically, but there are
some manual content from the `plms/pri_manual_input.json`. The relevant items are the following
(these are shall be filled in extreme cases):

**`Release_criteria_unfulfillments`**: If one of the release criteria is not fulfilled from the
[PRA checklist](https://erid2rest.internal.ericsson.com/d2rest/repositories/eridoca/eridocument/download?number-part=15311-APR201088UEN&REVISION=A),
then it shall be listed here in a string list.

**`Exemptions`**: If there is a security issue in the actual release or not fixed TR or backward
incompatibilities or unsupported Upgrade/rollback paths, then it shall be mentioned in a string list.

**`Upgrade_Information`**: If there is a highlighted upgrade information, then it shall be listed here
in a string list.

The PRI generation is based on Jira requests and git commits. The Jira queries and the git message
format are configured in the `plms/config_adpprg.json` configuration file.

## Mimer workflow

Mimer/Munin is a product life cycle management system (PLMS). To get more details, please check the
[Mimer learning plans degreed page](https://degreed.com/plan/1483359#/).

[Product Structure User Guide](https://gerrit.ericsson.se/plugins/gitiles/adp-cicd/bob-adp-release-auto/+/master/plms/PRODUCT_STRUCTURE_USER_GUIDE.2.0.md)
contains information about the mimer tools and schemas for the config files.

The full release process is automated in Mimer, except two things which require human approvement.
These processes require special permissions to Mimer and to the target product too. To get a big
picture about the release process please check the
[ADP Microservice Release Automation in Mimer wiki page](https://confluence.lmera.ericsson.se/pages/viewpage.action?spaceKey=ACD&title=ADP+Microservice+Release+Automation+in+Mimer).

1. The end of the FOSS evaluation is the manual review and approval on the
   Mimer [GAS Light 3pp/2pp approver webpage](https://mimer.internal.ericsson.com/3ppUsage?contentTabs=%255B%257B%2522contentURL%2522%253A%2522https%253A%252F%252Fmimer.internal.ericsson.com%252Fdataview%252Fapi%252Fv1%252Fviews%252FfossUsage%253FproductNumber%253DCXU1010218%2526productVersion%253D0.5.0%2522%252C%2522targetViewName%2522%253A%25223ppUsage%252FfossUsage%2522%257D%255D)]

   - [This wiki page](https://confluence.lmera.ericsson.se/display/ACD/FOSS+Evaluation+in+Mimer) contains
     all of the details from the process.

2. The end of the trade compliance evaluation is the export control classification and approval on
   the Mimer [GAS Light export control webpage](https://mimer.internal.ericsson.com/exportControl?contentTabs=%255B%257B%2522contentURL%2522%253A%2522https%253A%252F%252Fmimer.internal.ericsson.com%252Fdataview%252Fapi%252Fv1%252Fviews%252FexportControlClassification%253FproductNumber%253DAPR201088%2526productVersion%253D0.5.0%2522%252C%2522targetViewName%2522%253A%2522exportControl%252FexportControlClassification%2522%257D%252C%257B%2522contentURL%2522%253A%2522https%253A%252F%252Fmimer.internal.ericsson.com%252Fdataview%252Fapi%252Fv1%252Fviews%252FexportControlAuthorization%253FproductNumber%253DAPR201088%2526productVersion%253D0.5.0%2522%252C%2522targetViewName%2522%253A%2522exportControl%252FexportControlAuthorization%2522%257D%255D)

   - [This wiki page](https://confluence.lmera.ericsson.se/display/ACD/Trade+Compliance+Evaluation+in+Mimer)
     contains all of the details from the process.
   - This process can be done only by the Trade Specialist, but as a prerequisite the encryption
     status should be closed by one dev member who has write global role in Munin/Mimer and part of
     the product membership list. To do that, the encryption status shall be
     changed to completed in the following pages:
     - `https://munin.internal.ericsson.com/products/CXU1010218/versions/<actual-version>/update-version`
     - `https://munin.internal.ericsson.com/products/CXD1010395/versions/<actual-version>/update-version`

## Workarounds

### FOSSA scan

_If a 3pp is not recognized at all_, then add it as a manual dependency.

_If a 3pp is falsely recognized by FOSSA_, then add to the `plms/dependencies_blocked_by_fossa.yaml`
config file to filter it out. Use it with extreme cautions, as it should be only used for 100% sure
false positive results.

_If a 3pp is recognized and on the FOSSA report page it seems okay, but its license information is not
correctly fetched from FOSSA_. In this case the dependencies.yaml also won't contain license information
which will fail at validation steps.
Check the result of step `foss-register-help:fix-license-stako-src` for unhandled FOSSA errors.
Time to time validate if a workaround is still necessary or not.

- got to the FOSSA report page, search for the dependency and copy the license text. Replace new lines
  with `\n`. (replace `\r\n` with `\\n` in notepad++ or other text editors)
- add the license to `manual.license.agreement.json`. For type values check the `license.agreement.json`
  for similar licenses. Example:

  ```json
  {
    "licenses": [
      //...
      {
        "name": "mime-db",
        "version": "1.50.0",
        "license_type": "MIT License",
        "copyright_text": "... the copied license text goes here ..."
      }
      //...
    ]
  }
  ```

- add an entry to `dependencies_enrichment.yaml` and override the `licenses`, and `selected_licenses`
  attributes. Example:

  ```yaml
  modelVersion: '1.1'
  dependencies:
    # ...
    - ID: mime-db+1.50.0
      licenses:
        - MIT
      selected_licenses:
        - MIT
    # ...
  ```

- after a full re-scan, also try out the license generation and validation

  ```bash
  bob foss-helper:merge-dependencies
  bob license-agreement
  ```

### SCAS scan

_A 3pp is not found by the SCAS scan, but on the UI it can be found._

- _if the 3pp component has 2 letter name._ In this case the bob script refuses to search for the component.
  Manually update the `dependencies_foss_auto.yaml` with the `prim` number then re-run the SCAS scan.
  Keep the `register` attribute on `yes` to make the script to process this 3pp.
- _the 3pp has different name when FOSSA finds it and how it is registered in SCAS._
  Then update the [Component name mapping](#component-name-mapping) CSV. Until it is not merged
  use the `name-mapping.json` as a workaround.

_The version string of a 3pp is different in FOSSA and SCAS._ (eg. '2.0.0' vs '2.0')

- add an entry to `dependencies_enrichment.yaml`, and override the `versions` attribute. The first
  item shall be the version string in SCAS and the second is the normal.

### Mimer registration

_The 3pp is not in mimer._ Then register it into mimer, follow the "Register 3pps in Munin" steps.

_The version of 3pp is not correctly registered._ Check the `mimer` section of the dependencies.yaml.
If the component and the version is already in mimer use the `bob foss-helper:update-munin-section`
to refresh the `mimer` section with the up-to-date values.

_Skip a 3pp temporarily from mimer._ If a 3pp registration into mimer has a blocking issue, then
add the 3pp to the `plms/dependencies_blocked_by_mimer.yaml` file. For more info see
"Register 3pps in Munin" steps.

_Can't change approved FOSS, login to Munin and change fossUsageStatus to InWork for the impacted
FOSS or delete the whole product version before proceeding_. In this case delete the version from Mimer:

1. set Mimer token env variable
2. update .bob/var.version with the version to be deleted.
3. call bob foss-helper:delete-munin-version

Now the current version can be regsitered again in Mimer.
