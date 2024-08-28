var C5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><a name=\"AdminUI\"></a><span class=\"CHAPNUMBER\">5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_lpyi\"></a><a name=\"CHAPTER5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">AdminUI</a></span></h1>\n" +
"\n" +
"<p>\n" +
"The Administrative client, AdminUI, is hosted by Ericsson Network\n" +
"IQ (ENIQ) Server. AdminUI provides a web interface for various administrative\n" +
"tasks.</p>\n" +
"\n" +
"<p>\n" +
"AdminUI includes a default username <tt class=\"file-path\">eniq</tt> with default password.</p>\n" +
"\n" +
"<p>\n" +
"It is mandatory to change the default password. For more details,\n" +
"see <em class=\"LOWEMPH\">Changing AdminUI User Password through CLI</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ChangingAdminUIPasswordthroughCLI\")' class=\"xref\">Section  5.19.1</a>.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To start AdminUI:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Open the web browser.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>AdminUI supports Microsoft Internet Explorer browser and\n" +
"Mozilla-based browser as per PAM document.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Navigate to <tt class=\"file-path\">https://<i class=\"var\">YourLoaderServerIP</i>:8443/adminui/</tt>, where <tt class=\"input\"><b><i class=\"var\">YourLoaderServerIP</i></b></tt> is the IP address of the ENIQ Server.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>In a Multi-Blade deployment, enter the IP address of the\n" +
"Coordinator Blade.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Type the username and password.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Login</b>.</li></ol>\n" +
"<p>\n" +
"AdminUI has its own online help. Click a [help] link on left-hand\n" +
"panel to view the corresponding help topic. <a name=\"AdminuiGUIlinks\" href='javascript:parent.parent.parent.showAnchor(\"AdminuiGUIlinks\")' class=\"xref\"> Table 2</a> lists all AdminUI links and the user can\n" +
"access the features by clicking them.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE2\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 2 &nbsp;&nbsp; AdminUI Links</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"35%\">\n" +
"\n" +
"<p><b class=\"object\">AdminUI link</b></p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"65%\">\n" +
"\n" +
"<p><b class=\"object\">Click to</b></p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"100%\" colspan=\"2\">\n" +
"<p><b class=\"object\">System\n" +
"Monitoring</b></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>System Status</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View system status</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>ETLC Monitoring</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View running, queued, executed, and <tt class=\"file-path\">failed</tt> ETL sets</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>ETLC Set History</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View logs from a selected session</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>ETLC Set Scheduling</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View the execution status of a set</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>ENIQ Monitoring Services</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Monitor the use of system resources</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Monitoring Commands</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Use monitoring utilities</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>TechPack Installation</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View installation information for the ENIQ Features and\n" +
"Tech Packs</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"100%\" colspan=\"2\">\n" +
"<p><b class=\"object\">ENM Interworking</b></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Granularity Configuration </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Configures the ROP granularity for the node type</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Role Assignment Tool</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Assign a Role to Server. This option is only enabled in\n" +
"AdminUI when multi ENIQ-S is integrated with ENM.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Node Assignment Tool</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View and configure the node assignment for all ENIQ-S in\n" +
"the multi ENIQ-S configuration on the ENIQ-S Master. This option is\n" +
"enabled in AdminUI only when multi ENIQ-S is integrated with ENM.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>FLS Monitoring</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>This feature is used to query files in FLS mode by providing\n" +
"date and time. This is not enabled in AdminUI by default.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"100%\" colspan=\"2\">\n" +
"<p><b class=\"object\">Feature Version Manager</b> </p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Pre Check </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Verifies the ENIQ Statistics server stability</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Update Features</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Provides facility to update ENIQ Statistics features</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Install Features</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Enables user to install new ENIQ Statistics features</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Report Extraction </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Facilitates user to extract the ENIQ Statistics BO reports</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"100%\" colspan=\"2\">\n" +
"<p><b class=\"object\">Data Flow\n" +
"Monitoring</b></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Show Loadings</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Check that measurement data is loaded correctly on the\n" +
"system</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Show Aggregations</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View the status of aggregations for a Tech Pack</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Reaggregation</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Manually request aggregation</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Session Logs</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View selected session log files</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"100%\" colspan=\"2\">\n" +
"<p><b class=\"object\">Data Verification</b></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Data Row Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Check if database tables contain data</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Data Row Summary</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Check the Tech Pack level summary of row counts and ROP\n" +
"counts</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Show Reference Tables</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View the contents of reference tables</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Busy Hour Information</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Check if there is data in selected Busy Hour tables</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>RANKBH Information</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Check if there is data in selected RANKBH tables</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"100%\" colspan=\"2\">\n" +
"<p><b class=\"object\">Configuration</b></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Monitoring Rules</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Define the measurement types to be shown in Show Loadings</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Monitored Types</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Activate, inactivate, delete, and add monitored types</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Type Configuration</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Activate, inactivate , and change storage time of types</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>DWH Configuration</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Change storage time of partition plans</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Logging Configuration</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Configure logging properties for engine, scheduler, and\n" +
"performance for all packages</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>EBS Upgrader</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Update the EBS Tech Pack and corresponding EBS Universes</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Polling Start Time</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Configure polling start time per Tech Pack adapter interface</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Busy Hour Configuration</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Configure Busy Hour Criteria</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>User Manual</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>View Online Help</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Change Password</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Change AdminUI User Password</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"35%\">\n" +
"<p>Logout</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"65%\">\n" +
"<p>Log out of AdminUI</p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C5_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_2w0f\"></a><a name=\"CHAPTER5.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">System Monitoring</a></span></h2>\n" +
"\n" +
"<p>\n" +
"This section describes system monitoring.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_1_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"SystemStatus\"></a><span class=\"CHAPNUMBER\">5.1.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_9h75\"></a><a name=\"CHAPTER5.1.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking System\n" +
"Status</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to check system status.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check system status:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <strong class=\"MEDEMPH\">System Status</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">The information available from System Status view is shown\n" +
"in <a name=\"SystemStatusView\" href='javascript:parent.parent.parent.showAnchor(\"SystemStatusView\")' class=\"xref\"> Table 3</a>.</li></ol>\n" +
"\n" +
"<a name=\"TABLE3\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 3 &nbsp;&nbsp; System Status View</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"31%\">\n" +
"\n" +
"<p>System Detail</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"69%\">\n" +
"\n" +
"<p>Information On</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>Host Information</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>Server hardware</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>ENIQ DWH</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>DWH database</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>ENIQ REP</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>REP database</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>Engine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>ENIQ engine</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>Scheduler</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>ENIQ scheduler</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>FLS</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>ENIQ FLS</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>License server</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>Installed licenses</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>License Manager</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>License logs</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>Certificate Expiry</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>Certificate Expiry Details. Lists certificate details related\n" +
"to self-signed and CA-signed certificates present in ENIQ, BIS, OCS\n" +
"and NetAn servers. These details include certificate alias, purpose\n" +
"of the certificate, expiry date of the certificate and days left for\n" +
"the certificate to expire. Once Window Client servers are installed\n" +
"and configured properly, ENIQ connects to these servers everyday at\n" +
"1 AM and fetches the latest available file containing certificate\n" +
"expiry details and displays the same details in AdminUI.</p><br />\n" +
"<p>For information on renewal procedure for </p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Self-signed certificates used by AdminUI, see section <em><strong class=\"HIGHEMPH\">Self Signed Certificate Renewal</strong></em> in <em class=\"LOWEMPH\">Ericsson Network IQ Security Admin Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ENIQ_SecurityAdminGuide\")' class=\"xref\">Reference [36]</a>.</p>\n" +
"</li>\n" +
"<li><p>CA-signed certificates used by AdminUI, see sub section <em><strong class=\"HIGHEMPH\">CA Signed Certificate from ENM Renewal</strong></em> in section <em><strong class=\"HIGHEMPH\">Configuring ENIQ Statistics Tomcat Server</strong></em> of <em class=\"LOWEMPH\">Ericsson Network IQ Security Admin Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ENIQ_SecurityAdminGuide\")' class=\"xref\">Reference [36]</a>.</p>\n" +
"</li>\n" +
"<li><p>Certificates used by FLS or Alarms, see section <em><strong class=\"HIGHEMPH\">Manage Existing ENM Certificates</strong></em> in <em class=\"LOWEMPH\">OSS Configuration for ENIQ Statistics</em>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a>.</p>\n" +
"</li>\n" +
"<li><p>Certificates used by BIS applications, see section <em><strong class=\"HIGHEMPH\">HTTPS and Ericsson Business Intelligence Deployment</strong></em> in <em class=\"LOWEMPH\">Ericsson Network IQ Security Admin Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ENIQ_SecurityAdminGuide\")' class=\"xref\">Reference [36]</a>.</p>\n" +
"</li>\n" +
"<li><p>Certificates used by OCS applications, see section <em><strong class=\"HIGHEMPH\">HTTPS and OSS Client Solution (OCS)</strong></em> in <em class=\"LOWEMPH\">Ericsson Network IQ Security Admin Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ENIQ_SecurityAdminGuide\")' class=\"xref\">Reference [36]</a>.</p>\n" +
"</li>\n" +
"<li><p>Certificates used by NetAn applications, see section <em><strong class=\"HIGHEMPH\">Certificate Management</strong></em> in <em class=\"LOWEMPH\">Network\n" +
"Analytics Server System Administrator Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"NetworkAnalyticserver\")' class=\"xref\">Reference [3]</a>.</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>Database Users</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>Customized users in database. This is disabled in AdminUI\n" +
"by default and enabled only if there are any customized database users\n" +
"created in the server. For more information, see section <em class=\"LOWEMPH\">Database User Hardening</em> in <em class=\"LOWEMPH\">ENIQ-S Node Hardening\n" +
"Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"Node_Hardening_Guide\")' class=\"xref\">Reference [31]</a>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"31%\">\n" +
"<p>OS Users Detail</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"69%\">\n" +
"<p>OS users password expiry date. By default, OS users detail\n" +
"is not enabled. It is enabled only when password expiry policy is\n" +
"configured in the server. For more information, see Section <em class=\"LOWEMPH\">Optional Password Aging for Super Users</em> in <em class=\"LOWEMPH\">ENIQ-S Node Hardening Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"Node_Hardening_Guide\")' class=\"xref\">Reference [31]</a>.</p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"An example of the System Status view is shown in <a href='javascript:parent.parent.parent.showAnchor(\"Viewing_System_Status\")' class=\"xref\"> Figure 4</a>.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"Viewing_System_Status\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE4\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-SystemStatus_20.4.JPG\" border=\"0\" width=\"684\" height=\"749\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 4 &nbsp; Viewing System Status</i></p></div>\n" +
"\n" +
"<a name=\"TABLE4\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 4 &nbsp;&nbsp; Description of Links in System Status</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"50%\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">Category</strong></p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"50%\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">Link Name</strong></p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">Description</strong></p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>ENIQ DWH database</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Show status details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the ENIQ DWH database status details.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>ENIQ DWH database</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Show connection status details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the ENIQ DWH database connection\n" +
"information.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>ENIQ DWH database</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>IQ Multiplex status Details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the IQ Multiplex status details\n" +
"for ENIQ DWH database.<sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote4-1\")'>(1)</a></sup></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>ENIQ REP database</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Show status details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the ENIQ REP database status details.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>ENIQ REP database</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Show connection status details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the information about ENIQ REP\n" +
"database connections.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Engine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Show status details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the engine status details.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Scheduler</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Show status details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the scheduler status details.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>FLS</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Show status details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the FLS status details.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>License Server</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Show installed licenses</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the installed licenses.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>License Manager</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Show license logs</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to show the license logs.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Certificate Expiry</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Certificate Expiry Details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to view details related to self-signed\n" +
"and CA-signed certificates present in ENIQ, BIS, OCS, and NetAn servers.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Database Users</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"50%\">\n" +
"<p>Customized Database User Details</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Click this link to view customized database users and password\n" +
"expiry details.</p>\n" +
"</td></tr></table><p class=\"tnote\"><a name=\"tnote4-1\">(1) &nbsp;</a>If the system is installed in rack environment,\n" +
"the table showing IQ Multiplex status details is empty.<br /></p><br />\n" +
"<p>\n" +
"Go to System Monitoring &gt; System Status &gt; ENIQ REP &gt; Show connection\n" +
"status details, the first row of the result table <tt class=\"file-path\">IQ\n" +
"Connection status details</tt> shows empty as the data is\n" +
"collected from the sp_iqconnection. Statement Performance Manager\n" +
"Connection is internal to IQ and it can be ignored while displaying\n" +
"connection details on the AdminUI. <a href='javascript:parent.parent.parent.showAnchor(\"IQ_Connection_status\")' class=\"xref\"> Figure 5</a> shows the first entry in the sp_iqconnection. Stored procedure\n" +
"output doesn't have any specific details.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"IQ_Connection_status\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE5\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-IQ.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 5 &nbsp; IQ Connection Status Details</i></p></div>\n" +
"<p>\n" +
"Service status is indicated by a traffic light. The colors and\n" +
"what they represent are listed in <a name=\"ServiceStatusColourCodes\" href='javascript:parent.parent.parent.showAnchor(\"ServiceStatusColourCodes\")' class=\"xref\"> Table 5</a>.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE5\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 5 &nbsp;&nbsp; Service Status Color Codes</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"9%\">\n" +
"\n" +
"<p>Color</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"16%\">\n" +
"\n" +
"<p>Engine or Scheduler or FLS</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"16%\">\n" +
"\n" +
"<p>Host Information</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"15%\">\n" +
"\n" +
"<p>ENIQ DWH or ENIQ REP</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"15%\">\n" +
"\n" +
"<p>License Info</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"15%\">\n" +
"\n" +
"<p>Certificate Expiry</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"15%\">\n" +
"\n" +
"<p>OS Users Detail</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"9%\">\n" +
"<p>Green</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Specific ETLC process is running normally.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Host details are acquired successfully.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>Database is operational.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>License server is online. <br />License Manager is running\n" +
"normally.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>No certificate expires in the next 180 days.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>OS User password is valid.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"9%\">\n" +
"<p>Yellow</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>The profile of the engine execution is in NoLoads profile.</p><br />\n" +
"<p>The profile of the FLS execution is in OnHold profile.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Not Applicable</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>Database is operational, but no backup of the database\n" +
"is created.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>Not Applicable</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>One or more certificates expire in the next 180 days. </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>OS User password is going to expire within configured number\n" +
"of days. For more information, see Section <em class=\"LOWEMPH\">Optional\n" +
"Password Aging for Super Users</em> in <em class=\"LOWEMPH\">ENIQ-S Node\n" +
"Hardening Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"Node_Hardening_Guide\")' class=\"xref\">Reference [31]</a>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"9%\">\n" +
"<p>Red</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Specific ETLC process is not running.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Host details are not acquired.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>Database is not running or ENIQ DWH database is full.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>License server is offline. <br />License Manager is not\n" +
"running.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>One or more certificates expire in the next 30 days or\n" +
"have already expired.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>OS User password has expired.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"9%\">\n" +
"<p>Gray</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Not Applicable</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Not Applicable</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>Cannot fetch ENIQ DWH status as ENIQ REP is down.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>Not Applicable</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>Not Applicable</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p>Not Applicable</p>\n" +
"</td></tr></table>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>When execution profile of the engine is <tt class=\"file-path\">InActive</tt>:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">When <tt class=\"file-path\">engine</tt> is online and <tt class=\"file-path\">repdb</tt> goes offline, engine remains online but in <tt class=\"file-path\">InActive</tt> profile. Once <tt class=\"file-path\">repdb</tt> comes online, the profile of the engine becomes <tt class=\"file-path\">Normal</tt>.</li>\n" +
"<li class=\"UNORD\">ENIQ user does not manually set this profile using <tt class=\"file-path\">changeProfile</tt> command on the engine.</li>\n" +
"<li class=\"UNORD\">Parsing and loading does not work in <tt class=\"file-path\">InActive</tt> profile.</li></ul></dd></dl><br />\n" +
"\n"+
"</div>\n";

var C5_1_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"MonitoringCommands\"></a><span class=\"CHAPNUMBER\">5.1.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_0q5g\"></a><a name=\"CHAPTER5.1.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking\n" +
"Installed Tech Packs</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to view a list of the Tech Packs installed on the system,\n" +
"and the corresponding product and version numbers.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check installed Tech Packs:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <strong class=\"MEDEMPH\">Monitoring Commands</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select <b>Installed Tech Packs</b> from the\n" +
"commands list and click <strong class=\"MEDEMPH\">Start</strong>. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewInstalledTechPacks\")' class=\"xref\"> Figure 6</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewInstalledTechPacks\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE6\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-TPacksnum.GIF\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 6 &nbsp; Viewing Installed Tech Packs</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_1_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.1.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_bfl3\"></a><a name=\"CHAPTER5.1.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking Disk Space</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to check disk space available on the server.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check disk space:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <strong class=\"MEDEMPH\">Monitoring Commands</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select <b>Disk space information</b> from the\n" +
"commands list and click <strong class=\"MEDEMPH\">Start</strong>. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewDiskSpace\")' class=\"xref\"> Figure 7</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewDiskSpace\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE7\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-disk_space.gif\" border=\"0\" width=\"627\" height=\"468\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 7 &nbsp; Viewing Disk Space Information</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_1_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.1.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_akqs\"></a><a name=\"CHAPTER5.1.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking Installed Modules</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to view the modules that are installed on the system.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check installed modules:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <strong class=\"MEDEMPH\">Monitoring Commands</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select <b>Installed modules</b> from the commands\n" +
"list and click <strong class=\"MEDEMPH\">Start</strong>. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewInstalledModulesUpd\")' class=\"xref\"> Figure 8</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewInstalledModulesUpd\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE8\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Viewing_Installed_Modules.png.png\" border=\"0\" width=\"342\" height=\"646\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 8 &nbsp; Viewing Installed Modules</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_1_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.1.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_34w3\"></a><a name=\"CHAPTER5.1.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking Installed Features</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to check all the installed features on the server.</p>\n" +
"\n" +
"<p>\n" +
"To check the installed features and the supported node versions\n" +
"for the features, click <strong class=\"MEDEMPH\">Update Features</strong> in AdminUI under <b>Feature Version Manager</b> Section.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_1_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.1.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_x8pa\"></a><a name=\"CHAPTER5.1.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking Active Processes</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to view the active processes on the system.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check active processes:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <strong class=\"MEDEMPH\">Monitoring Commands</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select <b>Most active processes</b> from the\n" +
"commands list and click <strong class=\"MEDEMPH\">Start</strong>. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewActiveProcesses\")' class=\"xref\"> Figure 9</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewActiveProcesses\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE9\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-most_active_processes.PNG.png\" border=\"0\" width=\"360\" height=\"280\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 9 &nbsp; Viewing Active Processes</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_1_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"EniqMonitoring\"></a><span class=\"CHAPNUMBER\">5.1.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_dux3\"></a><a name=\"CHAPTER5.1.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ENIQ Monitoring\n" +
"Services</a></span></h3>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">ENIQ Monitoring Services</strong> are added to monitor the\n" +
"use of system resources like engine heap, scheduler heap, number of\n" +
"RepDB connections, number of DWHDB connections and so on.</p>\n" +
"\n" +
"<p>\n" +
"Usage metrics in AdminUI are represented in graphical format for\n" +
"Resource Usage vs Time scale. These metrics are captured every minute.</p>\n" +
"\n" +
"<p>\n" +
"They are monitored in two ways:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Day Level: Where the user monitors resource usage for\n" +
"a particular day.</li>\n" +
"<li class=\"UNORD\">Range Level: Use this option, if the user wants to monitor\n" +
"the maximum resource usage for a particular day or range of days.<p>\n" +
"The user can select the start and end date along with the maximum\n" +
"number of rows for each day (if the select value is N, it gives top\n" +
"N rows where the resource usage is more for all the days in that range).</p>\n" +
"</li></ul>\n" +
"\n"+
"</div>\n";

var C5_1_8=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"TPInstallation\"></a><span class=\"CHAPNUMBER\">5.1.8 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_evw0\"></a><a name=\"CHAPTER5.1.8\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Tech Pack\n" +
"Installation Information</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to view installation information for the ENIQ Features\n" +
"and Tech Packs.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <strong class=\"MEDEMPH\">TechPack Installation</strong>.\n" +
"Based on the status in the server:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">It displays <strong class=\"MEDEMPH\">No TechPack Installation In Progress</strong> if there is no installation in progress. It also displays a list\n" +
"of all the active installed Tech Packs on the server.</li>\n" +
"<li class=\"UNORD\">It displays <strong class=\"MEDEMPH\">Pre-install Processes and Checks Running</strong> if the installation process has started but the pre-install processes\n" +
"and steps are still executing.</li>\n" +
"<li class=\"UNORD\">It displays three tables with details of the <strong class=\"MEDEMPH\">Feature Installation\n" +
"In Progress</strong>, <strong class=\"MEDEMPH\">Feature Queued For Installation</strong> and <strong class=\"MEDEMPH\">Feature Installation Complete</strong> as part of the installation\n" +
"process currently under execution. In addition to this, as part of\n" +
"the <strong class=\"MEDEMPH\">Feature Installation In Progress</strong> table, it also contains\n" +
"details of the individual Tech Packs installed as part of the feature,\n" +
"specifically subsections in the tables with details of <strong class=\"MEDEMPH\">Tech\n" +
"Pack Installation In Progress</strong>, <strong class=\"MEDEMPH\">Tech Pack Queued For Installation</strong> and <strong class=\"MEDEMPH\">Tech PackInstallation Complete</strong>.</li></ul></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">At the top of the section, view the date and time for\n" +
"which the status is displayed. Click the <strong class=\"MEDEMPH\">Refresh</strong> button\n" +
"to reload the status in the current time.</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This link is used only during a feature upgrade and not during\n" +
"Initial Install.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C5_1_9=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"FMAlarm\"></a><span class=\"CHAPNUMBER\">5.1.9 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_3e3i\"></a><a name=\"CHAPTER5.1.9\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">FM Alarm</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to view the error occurred (if any) while connecting\n" +
"to ENM.</p>\n" +
"\n" +
"<p>\n" +
"It displays a table that provides information about the ENM hostname,\n" +
"Detailed Error message (Status code of the response, content type,\n" +
"and so on), the time of error occurrence and so on. This page is displayed\n" +
"only when the FM Alarm configuration is done using the script <strong class=\"MEDEMPH\">post_integration_script.bsh</strong>.</p>\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

var C5_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_qohi\"></a><a name=\"CHAPTER5.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ENM Interworking</a></span></h2>\n" +
"\n"+
"</div>\n";

var C5_2_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.2.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ftp0\"></a><a name=\"CHAPTER5.2.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Handle Multiple ROP Granularity</a></span></h3>\n" +
"\n"+
"</div>\n";

var C5_2_1_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">5.2.1.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_iauj\"></a><a name=\"CHAPTER5.2.1.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Overview</a></span></h4>\n" +
"\n" +
"<p>\n" +
"This section describes the use of <strong class=\"MEDEMPH\">Granularity Configuration</strong> utility in ENIQ Statistics GUI.</p>\n" +
"\n" +
"<p>\n" +
"This utility configures the ROP granularity for the installed TechPacks\n" +
"on the ENIQ Statistics server for supported Node Type in FLS Mode.</p>\n" +
"\n" +
"<p>\n" +
"To integrate ENIQ Statistics in FLS mode, see <em class=\"LOWEMPH\">OSS Configuration for ENIQ Statistics</em>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a>.</p>\n" +
"\n" +
"<p>\n" +
"If ENIQ-S is down and not processing files, then there is a chance\n" +
"of data loss for nodes supporting ROP granularity &lt; 15 min, like\n" +
"1 min and 5 min. As a recommendation, backup of ENM source files must\n" +
"be taken and later loaded to ENIQ-S. This is required when ENIQ-S\n" +
"is down for more than the default support retention of source file\n" +
"on ENM (like in the event of Feature update, ENIQ-S full upgrade and\n" +
"migration).  </p>\n" +
"\n" +
"<p>\n" +
"For ENM File Retention, see <em class=\"LOWEMPH\">ENM Performance Management\n" +
"System Administrator Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ENM_Performance_Management_System_Administrator_Guide\")' class=\"xref\">Reference [32]</a>.</p>\n" +
"\n" +
"<p>\n" +
"For example: Nodes support 1 min granularity and retention is 3\n" +
"hours for ENM source file. If ENIQ-S is down for more than 3 Hours,\n" +
"recovery of these node files is impacted.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_2_1_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">5.2.1.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_zi1x\"></a><a name=\"CHAPTER5.2.1.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Prerequisites</a></span></h4>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">ENM on 19.3 release or later releases.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Perform the ENIQ Statistics Upgrade. For more information,\n" +
"see <em class=\"LOWEMPH\">ENIQ Statistics Rack Upgrade Procedure</em>, <a href='javascript:parent.parent.parent.showAnchor(\"RackUpgradeProcedure\")' class=\"xref\">Reference [22]</a>, and <em class=\"LOWEMPH\">ENIQ\n" +
"Statistics X86 Blade Upgrade Procedure</em>, <a href='javascript:parent.parent.parent.showAnchor(\"EniqUpgradeProc\")' class=\"xref\">Reference [6]</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Configure the ENM Server with the desired granularity\n" +
"for each required Node Type. For more information, see <em class=\"LOWEMPH\">ENM Performance Management System Administrator Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ENM_Performance_Management_System_Administrator_Guide\")' class=\"xref\">Reference [32]</a>,\n" +
"and <em class=\"LOWEMPH\">ENM Interwork Description for File Lookup Service\n" +
"(FLS)</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ENM_Interwork_Description_for_File_Lookup_Service\")' class=\"xref\">Reference [33]</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">ENIQ Statistics server must be integrated in FLS mode\n" +
"with the ENM server. Follow the <em class=\"LOWEMPH\">OSS Configuration\n" +
"for ENIQ Statistics</em>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a>,\n" +
"if not integrated , else this step is skipped.</li></ol>\n" +
"\n"+
"</div>\n";

var C5_2_1_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">5.2.1.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_wk1p\"></a><a name=\"CHAPTER5.2.1.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Feature Description</a></span></h4>\n" +
"\n"+
"</div>\n";

var C5_2_1_3_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h5><span class=\"CHAPNUMBER\">5.2.1.3.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_7n92\"></a><a name=\"CHAPTER5.2.1.3.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">\n" +
"ROP Granularity Configuration</a></span></h5>\n" +
"\n" +
"<p>\n" +
"This utility configures the ROP granularity for the Node Type so\n" +
"that the PM files are queried based on the chosen ROP granularity\n" +
"from the ENM server.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The Configured Granularity on ENIQ Statistics server must\n" +
"be in alignment with the measurement initiation on ENM. If there is\n" +
"a ROP granularity mismatch, then the PM files symbolic link is not\n" +
"created for ENIQ Statistics in FLS mode. For ROP granularity, see <em class=\"LOWEMPH\">ENM Performance Management System Administrator Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ENM_Performance_Management_System_Administrator_Guide\")' class=\"xref\">Reference [32]</a>, and <em class=\"LOWEMPH\">ENM Interwork Description for File Lookup\n" +
"Service (FLS)</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ENM_Interwork_Description_for_File_Lookup_Service\")' class=\"xref\">Reference [33]</a>.</dd></dl><br />\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE10\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-ENM_Interworking.png.png\" border=\"0\" width=\"236\" height=\"421\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 10 &nbsp; ENM Interworking</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_2_1_3_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h5><a name=\"FLSGranularityConfiguration\"></a><span class=\"CHAPNUMBER\">5.2.1.3.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ud1l\"></a><a name=\"CHAPTER5.2.1.3.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Configure ROP Granularity on ENIQ Statistics</a></span></h5>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to AdminUI. See <em class=\"LOWEMPH\">To start AdminUI</em> procedure, <a href='javascript:parent.parent.parent.showAnchor(\"startup\")' class=\"xref\">Section  8.12</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Under <strong class=\"MEDEMPH\">ENM Interworking</strong> tab, click the <strong class=\"MEDEMPH\">Granularity Configuration</strong>, Default Granularity and Configured\n" +
"Granularity. Node type is displayed for installed TechPacks on the\n" +
"ENIQ Statistics server mapped against the technology it belongs to,\n" +
"as shown in the following figure.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"Granularity_Configuration\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE11\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Gui_main_page.PNG.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 11 &nbsp; Granularity Configuration</i></p></div>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The Configured Granularity is reset by clicking the Clear\n" +
"button. The Clear button resets the Configured Granularity to its\n" +
"current Configured Granularity and not to its Default Granularity.</dd></dl><br />\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"3\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the required granularity from the drop-down list\n" +
"against the Node Type, as shown in the following figure:</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE12\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Gui_main_page2.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 12 &nbsp; Select Granularity</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"4\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click Continue to go to the confirmation page as shown\n" +
"in the following figure:</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"Submit_Granularity\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE13\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Submit.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 13 &nbsp; Submit Granularity</i></p></div>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>To change or modify the granularity, click the Back button\n" +
"in the confirmation page. It redirects to the original page as shown\n" +
"in <a href='javascript:parent.parent.parent.showAnchor(\"Granularity_Configuration\")' class=\"xref\"> Figure 11</a>.</dd></dl><br />\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"5\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click the Submit button to save the changes.</li></ol>\n" +
"<p>\n" +
"After successfully submitting the changes, FLS starts querying\n" +
"the ENM server for the PM files with newly configured granularity\n" +
"for a particular Node Type.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Do not use the browser back button to navigate from the confirmation\n" +
"page, see <a href='javascript:parent.parent.parent.showAnchor(\"Submit_Granularity\")' class=\"xref\"> Figure 13</a> to the original page,\n" +
"see <a href='javascript:parent.parent.parent.showAnchor(\"Granularity_Configuration\")' class=\"xref\"> Figure 11</a>. Instead, use the\n" +
"Back button provided on the confirmation page.</dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

var C5_2_1_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">5.2.1.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_h0mt\"></a><a name=\"CHAPTER5.2.1.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ROP Granularity: Behavior</a></span></h4>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics supports singular granularity at Node\n" +
"Type level. Multiple granularity support at Node Type is not supported.</li>\n" +
"<li class=\"UNORD\">If multiple ENIQ Statistics servers are connected to\n" +
"a single ENM, then the user can configure the required ROP granularity\n" +
"for a Node Type in each ENIQ Statistics server.</li>\n" +
"<li class=\"UNORD\">If multiple ENMs are connected to a single ENIQ Statistics\n" +
"server, then the ROP granularity configuration is at ENIQ Statistics\n" +
"server for a Node Type.</li>\n" +
"<li class=\"UNORD\">After changeover from one granularity to another, there\n" +
"is data with different granularity for a Node Type. (For example,\n" +
"before changing it can be 15 minutes granularity and post change it\n" +
"can be 5 minutes granularity for a Node Type). This can impact the\n" +
"Aggregated KPIs.</li>\n" +
"<li class=\"UNORD\">Overall 15-minutes equivalent counter volume must not\n" +
"exceed the supported maximum limit, when changing the granularity\n" +
"to a level lower than 15-minutes.</li>\n" +
"<li class=\"UNORD\">Granularity configuration for data types other than\n" +
"'PM_STATISTICAL' is not supported. For instance, the Granularity level\n" +
"of Event datatypes such as 'PM_EBSL','PM_EBSN_CUUP' and so on cannot\n" +
"be changed from the AdminUI.</li>\n" +
"<li class=\"UNORD\">For node types that can span across multiple technologies,\n" +
"for example, for mixed node types, PM queries are sent for all the\n" +
"chosen granularities. For example, if granularity for node type 'RadioNode'\n" +
"is selected as '15MIN' under 'LTE' technology and '24HOUR' under 'WCDMA'\n" +
"technology, then the PM queries are sent for both '15MIN' and '24HOUR'\n" +
"granularities for 'RadioNode'.</li></ul>\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

var C5_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"RoleAssignmentTool\"></a><span class=\"CHAPNUMBER\">5.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_t75x\"></a><a name=\"CHAPTER5.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Role\n" +
"Assignment Tool</a></span></h2>\n" +
"\n" +
"<p>\n" +
"For more details, see section <em class=\"LOWEMPH\">Role Assignment\n" +
"Tool</em> in <em class=\"LOWEMPH\">OSS Configuration for ENIQ Statistics</em>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"NodeAssignmentTool\"></a><span class=\"CHAPNUMBER\">5.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_w813\"></a><a name=\"CHAPTER5.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Node\n" +
"Assignment Tool</a></span></h2>\n" +
"\n" +
"<p>\n" +
"For more details, see section <em class=\"LOWEMPH\">Node Assignment\n" +
"Tool</em> in <em class=\"LOWEMPH\">OSS Configuration for ENIQ Statistics</em>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"FlsMonitoring\"></a><span class=\"CHAPNUMBER\">5.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_x9ho\"></a><a name=\"CHAPTER5.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">FLS Monitoring</a></span></h2>\n" +
"\n" +
"<p>\n" +
"For more details, see section <em class=\"LOWEMPH\">Backdated Query\n" +
"using FLS</em> in <em class=\"LOWEMPH\">OSS Configuration for ENIQ Statistics</em>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"CustomNodes\"></a><span class=\"CHAPNUMBER\">5.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_h97e\"></a><a name=\"CHAPTER5.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Custom FLS\n" +
"Nodes</a></span></h2>\n" +
"\n"+
"</div>\n";

var C5_6_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.6.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_zutk\"></a><a name=\"CHAPTER5.6.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Custom Node Utility</a></span></h3>\n" +
"\n" +
"<p>\n" +
"This section describes the use of Custom Nodes utility in ENIQ\n" +
"Statistics GUI. This utility is used to configure custom nodes which\n" +
"are available in ENM to ENIQ STATS. <br />Add and Delete custom nodes\n" +
"functionality are provided in this utility.</p>\n" +
"\n" +
"<p>\n" +
"The utility can be accessed using <tt class=\"file-path\">ENIQ AdminUI</tt>:</p>\n" +
"\n" +
"<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Image-1.png.png\" border=\"0\" width=\"187\" height=\"202\" class=\"tab0\" /></a></p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_6_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.6.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_n5l2\"></a><a name=\"CHAPTER5.6.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Prerequisites</a></span></h3>\n" +
"\n" +
"<p>\n" +
"ENIQ Statistics server must be integrated in FLS mode with the\n" +
"ENM server.</p>\n" +
"\n" +
"<p>\n" +
"Follow the <em class=\"LOWEMPH\">OSS Configuration for ENIQ Statistics</em>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a> if not integrated, else this\n" +
"step is skipped.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_6_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.6.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_geud\"></a><a name=\"CHAPTER5.6.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Custom Nodes Description</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Description of the fields required to add custom nodes:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Node Type: The custom Node Type required to be configured.</li>\n" +
"<li class=\"UNORD\">Technology: The technology associated with the Node\n" +
"Type.</li>\n" +
"<li class=\"UNORD\">Topology Data Type: Used to obtain topology related\n" +
"metadata files.</li>\n" +
"<li class=\"UNORD\">Topology Node Type Dir: Initial part of the input directory\n" +
"(indir) associated with the ENIQ interface which is required to parse\n" +
"the topology files for the Node Type.</li>\n" +
"<li class=\"UNORD\">Topology SubDir: Rearmost part of the input directory\n" +
"(indir) associated with the ENIQ interface which is required to parse\n" +
"the topology files for the Node Type.</li>\n" +
"<li class=\"UNORD\">PM Data Type: Used to obtain Performance Management\n" +
"(PM) related metadata files.</li>\n" +
"<li class=\"UNORD\">PM Node Type Dir: Input directory (indir) associated\n" +
"with the ENIQ interface which is required to parse the PM files for\n" +
"the Node Type.</li>\n" +
"<li class=\"UNORD\">Number of Nodes: Number of Nodes configured in ENM.\n" +
"This parameter will be used to create number of subdirs where symlinks\n" +
"will be created.</li>\n" +
"<li class=\"UNORD\">File Filter: File Filter is used to filter the files\n" +
"coming from ENM. This field uses java regex.</li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>All fields are case sensitive.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C5_6_3_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">5.6.3.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_cugk\"></a><a name=\"CHAPTER5.6.3.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Restrictions for Custom Nodes</a></span></h4>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Custom Node details won't be added if PM NodeTypeDir\n" +
"matches with any standard Node Types. So this field has to be unique\n" +
"for each Node Type.</li>\n" +
"<li class=\"UNORD\">Node Types with multiple technologies are not supported.\n" +
"Adding same Node Type with multiple technologies can affect this UI\n" +
"functionality.</li>\n" +
"<li class=\"UNORD\">Topology DataType field has to be entered with the selected\n" +
"technology value.<br />Syntax: <tt class=\"file-path\">TOPOLOGY_&lt;TOPOLOGY&gt;</tt><br />Example: <tt class=\"file-path\">TOPOLOGY_CORE</tt></li>\n" +
"<li class=\"UNORD\">While deleting, delete both PM and topology entries\n" +
"together.</li>\n" +
"<li class=\"UNORD\">File Filter uses only java regex rules to filter the\n" +
"files coming from ENM. The following table describes the rules to\n" +
"be followed:</li></ul>\n" +
"\n" +
"<a name=\"TABLE6\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 6 &nbsp;&nbsp; Regex Rules</caption>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><b class=\"object\">Regular Expresion</b></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p><b class=\"object\">Description</b></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Matches any character</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>^regex</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Finds regex that must match at the beginning of the line.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>regex$</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Finds regex that must match at the end of the line.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>[abc]</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Set definition, can match the letter a or b or c.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>[abc][vz]</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Set definition, can match a or b or c followed by either\n" +
"v or z.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>[^abc]</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>When a caret appears as the first character inside square\n" +
"brackets, it negates the pattern. This pattern matches any character\n" +
"except a or b or c.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>[a-d1-7]</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Ranges: matches a letter between a and d and figures from\n" +
"1 to 7, but not d1.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>X|Z</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Finds X or Z.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>XZ</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Finds X directly followed by Z.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>$</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Checks if a line end follows.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>\\d</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Any digit, short for [0-9]</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>\\D</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>A non-digit, short for [^0-9]</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>\\s</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>A whitespace character, short for [ \\t\\n\\x0b\\r\\f]</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>\\S</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>A non-whitespace character, short for</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>\\w</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>A word character, short for [a-zA-Z_0-9]</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>\\W</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>A non-word character [^\\w]</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>\\S+</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Several non-whitespace characters</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>\\b</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Matches a word boundary where a word character is [a-zA-Z0-9_]</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>*</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Occurs zero or more times, is short for {0,}</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>+</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Occurs one or more times, is short for {1,}</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>?</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Occurs no or one times, ? is short for {0,1}.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>{X}</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Occurs X number of times, {} describes the order of the\n" +
"preceding liberal</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>{X,Y}</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>Occurs between X and Y times,</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>*?</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"72%\">\n" +
"<p>? after a quantifier makes it a reluctant quantifier. It\n" +
"tries to find the smallest match. This makes the regular expression\n" +
"stop at the first match.</p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C5_6_3_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">5.6.3.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_s9xv\"></a><a name=\"CHAPTER5.6.3.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Add Custom Nodes</a></span></h4>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to <tt class=\"file-path\">AdminUI</tt>. See <em class=\"LOWEMPH\">Starting AdminUI</em> procedure, <a href='javascript:parent.parent.parent.showAnchor(\"startup\")' class=\"link\"> Section 8.12</a></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Under <tt class=\"file-path\">ENM Interworking</tt> tab,\n" +
"click the <tt class=\"file-path\">Custom Nodes</tt>. Node Type, Data\n" +
"Type, Node Type Dir, Sub Dir and File Filter are displayed and mapped\n" +
"to the technology that belongs to.<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Image-2.png.png\" border=\"0\" width=\"609\" height=\"195\" class=\"tab0\" /></a></p>\n" +
"<p>\n" +
"If no custom node configurations are found in the ENIQ statistics\n" +
"server then \"No Custom node Configuration found\" message will be displayed.</p>\n" +
"<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Image-3.png.png\" border=\"0\" width=\"554\" height=\"202\" class=\"tab0\" /></a></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click the <tt class=\"file-path\">Add New Custom Node</tt> button to add a new custom nodes in FLS.<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-image-4.png.png\" border=\"0\" width=\"425\" height=\"401\" class=\"tab0\" /></a></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><tt class=\"file-path\">Reset</tt> button will reset the details\n" +
"entered in all the fields.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">All the required fields marked with (*) have to be filled/selected\n" +
"from the drop down and click <tt class=\"file-path\">Continue</tt> button\n" +
"to go to the confirmation page.<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Image-5.png.png\" border=\"0\" width=\"427\" height=\"399\" class=\"tab0\" /></a></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click the <tt class=\"file-path\">Submit</tt> button to\n" +
"save the changes.<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Image-6.png.png\" border=\"0\" width=\"502\" height=\"370\" class=\"tab0\" /></a></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>To change or modify any field, click the \"Back\" button in\n" +
"the confirmation page. It redirects to the original page.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">After successfully submitting the changes, the page will\n" +
"be redirected to the main page and it will display all the submitted\n" +
"details.<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Image-7.png.png\" border=\"0\" width=\"610\" height=\"202\" class=\"tab0\" /></a></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Do not use the browser back button to navigate from the confirmation\n" +
"page, instead use the <tt class=\"file-path\">Back</tt> button provided\n" +
"on the confirmation page.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">For the changes to take effect in the ENIQ Statistics,\n" +
"click <tt class=\"file-path\">FLS Restart</tt> button. It will restart\n" +
"the FLS service.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>After FLS Restart button is clicked, it will restart the\n" +
"FLS service. Till the time FLS comes up it will stop TOPOLOGY/PM querying\n" +
"from the ENM server.</dd></dl><br /></li></ol>\n" +
"\n"+
"</div>\n";

var C5_6_3_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">5.6.3.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_veyn\"></a><a name=\"CHAPTER5.6.3.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Delete Custom Nodes</a></span></h4>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to <tt class=\"file-path\">AdminUI</tt>. See <em class=\"LOWEMPH\">Starting AdminUI</em> procedure, <a href='javascript:parent.parent.parent.showAnchor(\"startup\")' class=\"link\"> Section 8.12</a></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Under <tt class=\"file-path\">ENM Interworking</tt> tab,\n" +
"click the <tt class=\"file-path\">Custom Nodes</tt>. Node Type, Data\n" +
"Type, Node Type Dir, Sub Dir and File Filter are displayed and mapped\n" +
"to the technology that belongs to.<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Image-2.png.png\" border=\"0\" width=\"609\" height=\"195\" class=\"tab0\" /></a></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <tt class=\"file-path\">Delete</tt> button under delete\n" +
"column, to delete any particular configuration. After clicking delete\n" +
"button it will ask for a confirmation.<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Image-8.png.png\" border=\"0\" width=\"633\" height=\"204\" class=\"tab0\" /></a></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">After clicking <tt class=\"file-path\">OK</tt>, the particular\n" +
"configuration will be deleted.<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Image-10.png.png\" border=\"0\" width=\"609\" height=\"192\" class=\"tab0\" /></a></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">For the changes to take effect in the ENIQ Statistics,\n" +
"click <tt class=\"file-path\">FLS Restart</tt> button. It will restart\n" +
"the FLS service.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>After FLS Restart button is clicked, it will restart the\n" +
"FLS service. Till the time FLS comes up it will stop TOPOLOGY/PM querying\n" +
"from the ENM server.</dd></dl><br /></li></ol>\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

var C5_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_rn1v\"></a><a name=\"CHAPTER5.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Feature Version Manager</a></span></h2>\n" +
"\n" +
"<p>\n" +
"For more details, see <em class=\"LOWEMPH\"> Feature Version Manager</em>, <a href='javascript:parent.parent.parent.showAnchor(\"FeatureVerManager\")' class=\"xref\">Reference [27]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_7_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"PreCheck\"></a><span class=\"CHAPNUMBER\">5.7.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_sloq\"></a><a name=\"CHAPTER5.7.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Pre Check</a></span></h3>\n" +
"\n" +
"<p>\n" +
"For more details, see Section <em class=\"LOWEMPH\">Precheck Execution\n" +
"Instruction</em> in <em class=\"LOWEMPH\"> Feature Version Manager</em>, <a href='javascript:parent.parent.parent.showAnchor(\"FeatureVerManager\")' class=\"xref\">Reference [27]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_7_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"UpdateFeatures\"></a><span class=\"CHAPNUMBER\">5.7.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_po3i\"></a><a name=\"CHAPTER5.7.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Update\n" +
"Features</a></span></h3>\n" +
"\n" +
"<p>\n" +
"For more details, see Section <em class=\"LOWEMPH\">Update Feature Overview</em> in <em class=\"LOWEMPH\"> Feature Version Manager</em>, <a href='javascript:parent.parent.parent.showAnchor(\"FeatureVerManager\")' class=\"xref\">Reference [27]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_7_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"InstallFeatures\"></a><span class=\"CHAPNUMBER\">5.7.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_oebh\"></a><a name=\"CHAPTER5.7.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Install\n" +
"Features</a></span></h3>\n" +
"\n" +
"<p>\n" +
"For more details, see Section <em class=\"LOWEMPH\">Install Feature\n" +
"Overview</em> in <em class=\"LOWEMPH\"> Feature Version Manager</em>, <a href='javascript:parent.parent.parent.showAnchor(\"FeatureVerManager\")' class=\"xref\">Reference [27]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_7_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"ReportExtraction\"></a><span class=\"CHAPNUMBER\">5.7.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_7x6z\"></a><a name=\"CHAPTER5.7.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Report\n" +
"Extraction</a></span></h3>\n" +
"\n" +
"<p>\n" +
"For more details, see Section <em class=\"LOWEMPH\">Report Extraction</em> in <em class=\"LOWEMPH\"> Feature Version Manager</em>, <a href='javascript:parent.parent.parent.showAnchor(\"FeatureVerManager\")' class=\"xref\">Reference [27]</a>.</p>\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

var C5_8=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"ShowLoadings\"></a><span class=\"CHAPNUMBER\">5.8 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_uodf\"></a><a name=\"CHAPTER5.8\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitoring\n" +
"Data Flow</a></span></h2>\n" +
"\n"+
"</div>\n";

var C5_8_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"CheckDataLoadStatus\"></a><span class=\"CHAPNUMBER\">5.8.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_3lnx\"></a><a name=\"CHAPTER5.8.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking Data Loading Status</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to view data loading status.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check data loading status:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Show Loadings</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select <b>Date</b>, <b>Tech Pack</b>, and filter.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Get Information</b>.<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-4_1543-CSA11363_1Uen.V37-ENIQSAG521.jpg\" border=\"0\" width=\"610\" height=\"573\" class=\"tab0\" /></a></p>\n" +
"</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">If the file received is in UTC time zone format, then\n" +
"DataTime on <strong class=\"MEDEMPH\">Show Loadings</strong> page in AdminUI\n" +
"is calculated based on UTC time zone and its offset. <br />For example,\n" +
"if a file is received at 6:15 AM and the offset is +0100, then DataTime\n" +
"on the <strong class=\"MEDEMPH\">Show Loadings</strong> page is 5:15 AM.</li>\n" +
"<li class=\"UNORD\">If the system is under heavy load (for example: during\n" +
"the nightly aggregations), there are few instances when the Loader\n" +
"and Update Monitoring sets are delayed by a couple of minutes. There\n" +
"should be no impact during normal system operation or during normal\n" +
"working hours.</li></ul></dd></dl><br />\n" +
"<p>\n" +
"Only measurements that are loaded are displayed. <tt class=\"file-path\">Inactive</tt> measurement types are not included. For more information on activating\n" +
"and inactivating measurement types, see <a href='javascript:parent.parent.parent.showAnchor(\"ActivateInactivateMeasTypes\")' class=\"xref\">Section  5.9.5</a>.</p>\n" +
"\n" +
"<p>\n" +
"The different data loading status is explained in <a name=\"DataLoadingStatuses\" href='javascript:parent.parent.parent.showAnchor(\"DataLoadingStatuses\")' class=\"xref\"> Table 7</a>.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE7\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 7 &nbsp;&nbsp; Data Loading Status Information</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"33%\">\n" +
"\n" +
"<p>Status</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"16%\">\n" +
"\n" +
"<p>Color</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"51%\">\n" +
"\n" +
"<p>Denotes</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Green</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Data is loaded into database.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>NOT_LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Yellow</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Data is not yet loaded into the database or no ROP file\n" +
"is received for this period.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>CHECK_FAILED</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Blue</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Monitoring rule thresholds are not met.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>HOLE</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Red</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Not_Loaded (missing) data between two consecutively loaded\n" +
"ROPs.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>CALCULATING</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"16%\">\n" +
"<p>Black</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>ENIQ calculates the number of rows that are loaded.</p>\n" +
"</td></tr></table>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>ENIQ: Stores the cbt (collection being time) time-stamp as <tt class=\"file-path\">DATETIME_ID</tt> for gauge counters.<p>\n" +
"SDM: Stores the mts (mean time-stamp) time-stamp as <tt class=\"file-path\">TIME</tt> for gauge counters.</p>\n" +
"<p>\n" +
"ENIQ supports the time levels (1 minute, 5 minutes, 10 minutes,\n" +
"15 minutes, 30 minutes, 1 hour, 6 hours, 12 hours, and 24 hours) at\n" +
"an instance for a single node. If data for multiple time levels are\n" +
"loaded simultaneously for a single node (even if this data comes from\n" +
"different node types that the single node belongs to, for instance\n" +
"SGSN &amp; SGSN-MME), then loading and aggregation are not appropriate.</p>\n" +
"<p>\n" +
"Initial aggregation triggers, if one of the following conditions\n" +
"is met:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">All the data ROPS of previous day is loaded and 1.5\n" +
"hours threshold limit is passed.</li>\n" +
"<li class=\"UNORD\">All the data ROPS is not loaded and the last loaded\n" +
"(for example: LATEST Loading) data is of 1.5 hours before.</li>\n" +
"<li class=\"UNORD\">Aggregation of LATE_DATA is considered in Re-Aggregation.</li></ul><p>\n" +
"See <em class=\"LOWEMPH\">Troubleshooting</em> <a href='javascript:parent.parent.parent.showAnchor(\"chl-ES_troubleshooting\")' class=\"xref\">Section  37</a>, if you observe a delay in initial\n" +
"aggregation.</p>\n" +
"</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C5_8_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.8.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_yu3g\"></a><a name=\"CHAPTER5.8.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Viewing Detailed Loadings</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The <tt class=\"file-path\">Hours</tt> column shows the time level\n" +
"for the loading. This is set when monitoring is added for a measurement\n" +
"type (see <a href='javascript:parent.parent.parent.showAnchor(\"MonitoredTypes\")' class=\"xref\">Section  5.8.7</a>).</p>\n" +
"\n" +
"<p>\n" +
"The time levels possible are: 1 minute, 5 minutes, 10 minutes,\n" +
"15 minutes, 30 minutes, 1 hour, 6 hours, 12 hours, and 24 hours.</p>\n" +
"\n" +
"<p>\n" +
"To view the detailed loadings for a measurement type, click the\n" +
"type name. This displays the loading status for each period.</p>\n" +
"\n" +
"<p>\n" +
"For the hour time level, the loadings start at the beginning of\n" +
"the hour (for example: 23:00) or on the 30th minute (for example:\n" +
"23:30), see <a href='javascript:parent.parent.parent.showAnchor(\"DetailedLoadingsForHour\")' class=\"xref\"> Figure 14</a>. The loadings\n" +
"can start on the 30th minute if the data is for a timezone that is\n" +
"on the half hour. For example, for India the timezone is +0530.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"DetailedLoadingsForHour\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE14\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Loaded_on_hour.jpg\" border=\"0\" width=\"701\" height=\"44\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 14 &nbsp; Detailed Loadings for a Measurement Type at Hour Time Level</i></p></div>\n" +
"<p>\n" +
"In this case, the entry for 23:00 is the hour from 23:00 to 00:00\n" +
"and it is marked in green because data is loaded for that time at\n" +
"the hour time level. The entry for 23:30 is marked as HOLE because\n" +
"no data is loaded with the time stamp 23:30 at hour time level.</p>\n" +
"\n" +
"<p>\n" +
"In the Main Show Loadings page, loadings at hour level are in green\n" +
"if the load takes place either at the beginning of the hour, or at\n" +
"the 30th minute. For more details, see <a href='javascript:parent.parent.parent.showAnchor(\"MainShowLoadingsForHour\")' class=\"xref\"> Figure 15</a>. To view whether the loading starts\n" +
"at the 0th minute or 30th minute, click the measurement type name\n" +
"for the detailed list of loadings.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"MainShowLoadingsForHour\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE15\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Show_loadings_main_page.jpg\" border=\"0\" width=\"772\" height=\"83\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 15 &nbsp; Main Show Loadings Page for Data at Hour Level</i></p></div>\n" +
"<p>\n" +
"<a name=\"ShowLoadingsTable\" href='javascript:parent.parent.parent.showAnchor(\"ShowLoadingsTable\")' class=\"xref\"> Table 8</a> shows different status for\n" +
"the hour level data loading at the 0th and 30th minutes, and its display\n" +
"in the main Show Loadings Page:</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE8\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 8 &nbsp;&nbsp; Status of Loadings for Hour Level Data and How It Is Displayed\n" +
"in the Show Loadings Page</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Scenario</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>0th minute Loading Status</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>30th minute Loading Status</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Result in Show Loadings Page in AdminUI</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>1</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>NOT_LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED (Green for the hour)</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>2</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>HOLE</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED (Green for the hour)</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>3</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>NOT_LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED (Green for the hour)</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>4</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>HOLE</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED (Green for the hour)</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>5</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>RESTORED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED (Green for the hour)</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>6</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>RESTORED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>LOADED (Green for the hour)</p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C5_8_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.8.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_1gbk\"></a><a name=\"CHAPTER5.8.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Reloading Data</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to reload data that is not parsed or reloaded:</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To reload data:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ system as <tt class=\"file-path\">dcuser</tt> .<p>\n" +
"Rejected data is found in:</p>\n" +
"<p>\n" +
"<tt class=\"file-path\">/eniq/data/rejected/<i class=\"var\">&lt;tech pack name&gt;/&lt;measurement\n" +
"type name&gt;</i>/</tt></p>\n" +
"<p>\n" +
"For example: <tt class=\"file-path\">/eniq/data/rejected/DC_E_RAN/DC_E_RAN_UCELL_V_RAW/</tt></p>\n" +
"<p>\n" +
"Move the reloaded data to the following directory:</p>\n" +
"<p>\n" +
"<tt class=\"file-path\">/eniq/data/pmdata/#OSS/#NELEMENT/#ANY/</tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Where #OSS is OSS present, #NELEMENT is required network\n" +
"element, and #ANY is any given directory.<p>\n" +
"For example, /eniq/data/pmdata/eniq_oss_1/DC_E_RAN /1/ if the OSS\n" +
"identifier is eniq_oss_1.</p>\n" +
"</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>ETLC Set Scheduling</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select <b>Interface</b> from the <b>Set\n" +
"type</b> drop-down menu.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In the <b>Package</b> drop-down menu, select\n" +
"the interface that corresponds to the Tech Pack for loading data.<p>\n" +
"In this case, the corresponding interface for the Tech Pack used\n" +
"in step 1 is <tt class=\"file-path\">Adapter_INTF_DC_E_RNC-eniq_oss_1</tt> if the interface is activated for <tt class=\"file-path\">eniq_oss_1</tt>.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the set named Adapter_INTERFACE_NAME (in this case <tt class=\"file-path\">Adapter_INTF_DC_E_RNC-eniq_oss_1</tt>) on the result table\n" +
"and click <b>Start</b>. AdminUI automatically redirects\n" +
"to the ETLC Monitoring view.</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Duplicate files are rejected by the adapter. This option\n" +
"is disabled by default, to avoid storing the duplicate data in the\n" +
"database which causes load on aggregation and report queries. To <tt class=\"file-path\">enable</tt> this option, contact local Ericsson Support.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C5_8_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"ShowAggregations\"></a><span class=\"CHAPNUMBER\">5.8.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_5shk\"></a><a name=\"CHAPTER5.8.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking\n" +
"Aggregation Status</a></span></h3>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check aggregation status:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <strong class=\"MEDEMPH\">Show Aggregations</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select <b>Date</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the required <b>Tech Pack</b> from list\n" +
"of available Tech Packs in the drop-down menu.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <strong class=\"MEDEMPH\">Get Information</strong>.</li></ol>\n" +
"<p>\n" +
"An example of the Show Aggregations view that displays day, week,\n" +
"and month aggregations for the selected date and Tech Pack is shown\n" +
"in <a href='javascript:parent.parent.parent.showAnchor(\"ViewAggregations\")' class=\"xref\"> Figure 16</a>. All measurement types are included.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewAggregations\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE16\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-showaggre2.gif\" border=\"0\" width=\"552\" height=\"599\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 16 &nbsp; Viewing Aggregations</i></p></div>\n" +
"<p>\n" +
"The basic status for aggregations in AdminUI is NOT_LOADED, LOADED,\n" +
"QUEUED, AGGREGATED, and LATE_DATA. See <a name=\"AggregationStatuses\" href='javascript:parent.parent.parent.showAnchor(\"AggregationStatuses\")' class=\"xref\"> Table 9</a> for all aggregation status.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE9\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 9 &nbsp;&nbsp; Aggregation Status</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"38%\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">Status</strong></p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"62%\">\n" +
"\n" +
"<p><b class=\"object\">Denotes</b></p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">MANUAL</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Aggregation was set to <tt class=\"output\">MANUAL</tt> state by\n" +
"user for reaggregation.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">IGNORED</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Aggregation was set to <tt class=\"output\">IGNORED</tt> state by\n" +
"user. Automatic aggregation ignores this aggregation.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">LOADED</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Data is loaded into database.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">NOT LOADED</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Data is not yet loaded into database.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">LATE_DATA</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>The measurement type is aggregated, but data is loaded\n" +
"to the database after the aggregation.</p><br />\n" +
"<p>Aggregation of LATE_DATA is considered in Re-Aggregation.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">CHECK_FAILED</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Monitoring rule thresholds are not met.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">AGGREGATED</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Successful aggregation</p><br />\n" +
"<p><b class=\"object\">WEEK</b> and <b class=\"object\">MONTH</b> aggregations\n" +
"show <tt class=\"output\">FAILED DEPENDENCY</tt> status even if <b class=\"object\">DAY</b> aggregations have <tt class=\"output\">NOT LOADED</tt> status .</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">ERROR</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Unrecoverable error during aggregation.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">BLOCKED</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Aggregation is prevented by gatekeeper to avoid aggregation\n" +
"conflicts. Aggregation is attempted again on the next execution of\n" +
"automatic aggregation.</p><br />\n" +
"<p>In this case, an aggregation is allowed to run again, but only\n" +
"until the threshold time limit is reached. The threshold time limit\n" +
"is the time the aggregation is first blocked, plus a predefined number\n" +
"of minutes. The number of minutes is 180 by default (three hours),\n" +
"but can be overridden by specifying a value for the <tt class=\"file-path\">GateKeeper.thresholdLimit</tt> property in the <tt class=\"file-path\">/eniq/sw/conf/static.properties</tt> file.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">QUEUED</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Aggregation has started.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">FAILED DEPENDENCY</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Aggregations prevented by gatekeeper are attempted again\n" +
"on the next execution of <tt class=\"file-path\">AutomaticReAggregationAction</tt>. An aggregation is allowed to run until the threshold time limit\n" +
"is reached (three hours by default). After this time, the aggregation\n" +
"status is set to <tt class=\"output\">FAILED DEPENDENCY</tt> (Pink).</p><br />\n" +
"<p>When the <tt class=\"file-path\">AutomaticReAggregationAction</tt> is run, it checks to see if the status of any aggregation is equal\n" +
"to <tt class=\"output\">FAILED DEPENDENCY</tt> and <tt class=\"output\">LATE_DATA</tt> and <tt class=\"output\">ERROR</tt>, which is not older than three days.\n" +
"If these conditions are satisfied, the aggregation is run again. The\n" +
"threshold time limit is disabled in this case.</p><br />\n" +
"<p>If the aggregation is blocked by the gatekeeper again when it\n" +
"runs, the threshold time limit is set again, but the time limit is\n" +
"three hours from the time AutomaticReAggregation is run. When the\n" +
"engine is restarted, the threshold time limit is disabled for all\n" +
"aggregations blocked by the <tt class=\"output\">Requeue_queued_aggregations</tt> set.</p><br />\n" +
"<p>Dates older than three days can be aggregated again if they are\n" +
"set to <b class=\"object\">Manual </b>. Run the <tt class=\"file-path\">AutomaticReAggregationAction</tt>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">NOT MONITORED</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>Any measurement type that is not monitored is displayed\n" +
"as a white box.</p><br />\n" +
"<p>Future aggregation dates are also displayed as a white box as\n" +
"monitoring does not exist for these dates.</p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"See <a href='javascript:parent.parent.parent.showAnchor(\"StatusDiagramSuccessAggreg\")' class=\"xref\"> Figure 17</a> for the successful\n" +
"aggregation status diagram.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"StatusDiagramSuccessAggreg\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE17\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-statdia.gif\" border=\"0\" width=\"800\" height=\"865\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 17 &nbsp; Status Diagram, Successful Aggregation</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_8_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.8.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_0sw3\"></a><a name=\"CHAPTER5.8.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Setting Threshold Limit Value</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The threshold limit defines the number of minutes an aggregation\n" +
"stays in <tt class=\"output\">BLOCKED</tt> status (if it is blocked), before\n" +
"changing to <tt class=\"output\">FAILED_DEPENDENCY</tt> status.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server as <tt class=\"file-path\">dcuser</tt> .</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following engine command:<p>\n" +
"<tt class=\"input\"><b>engine -e updatethresholdLimit <i class=\"var\">&lt;number of minutes&gt;</i></b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b><i class=\"var\">&lt;number of minutes&gt;</i></b></tt> is the number\n" +
"of minutes aggregations are allowed to stay in <tt class=\"output\">BLOCKED</tt> status before changing to <tt class=\"output\">FAILED_DEPENDENCY</tt>.<br />For example, <tt class=\"input\"><b>engine -e updatethresholdLimit 120</b></tt>,\n" +
"changes the threshold limit to two hours. <br />The threshold limit\n" +
"value is stored in the file: <br /><tt class=\"file-path\">/eniq/sw/conf/static.properties</tt> as the property <tt class=\"file-path\">GateKeeper.thresholdLimit</tt>.</p>\n" +
"</li></ol>\n" +
"\n"+
"</div>\n";

var C5_8_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"Reaggregation\"></a><span class=\"CHAPNUMBER\">5.8.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_9hld\"></a><a name=\"CHAPTER5.8.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Reaggregating\n" +
"Data</a></span></h3>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <strong class=\"MEDEMPH\">Reaggregation</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the time level, start time, end time, and Tech\n" +
"Pack.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <strong class=\"MEDEMPH\">List</strong> to get a list of measurement types\n" +
"to be reaggregated.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the measurement types to be reaggregated, and click <strong class=\"MEDEMPH\">Aggregate</strong>. See <a href='javascript:parent.parent.parent.showAnchor(\"SelectForReAggeration\")' class=\"xref\"> Figure 18</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"SelectForReAggeration\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE18\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-reaggre.gif\" border=\"0\" width=\"637\" height=\"558\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 18 &nbsp; Selecting Measurement Types for Reaggregation</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"5\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Selected measurement types are now set to manual state.\n" +
"See <a href='javascript:parent.parent.parent.showAnchor(\"ManualAggregations\")' class=\"xref\"> Figure 19</a>. Automatic reaggregation,\n" +
"reaggregates aggregations set to manual state during the next execution.<p>\n" +
"If the data is aggregated before, then the reaggregation starts\n" +
"at 7 PM. If the data is not aggregated before, then the aggregation\n" +
"starts after an hour.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>It is recommended to do manual aggregations for single date\n" +
"and time for measurements with large data (like DC_E_ERBS_EUTRANCELLFDD_V,\n" +
"DC_E_ERBS_EUTRANCELLFDD).</dd></dl><br /></li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ManualAggregations\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE19\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Aggregations_Set_to_Manual.png.png\" border=\"0\" width=\"684\" height=\"495\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 19 &nbsp; Aggregations Set to Manual</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_8_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"MonitoredTypes\"></a><span class=\"CHAPNUMBER\">5.8.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_64xy\"></a><a name=\"CHAPTER5.8.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitored\n" +
"Types</a></span></h3>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">The following actions are performed on monitored types:</strong></p>\n" +
"\n" +
"\n" +
"<table class=\"deflist\">\n" +
"<tr class=\"dlentry\">\n" +
"<td class=\"dt\">\n" +
"<b>Add:</b></td><td class=\"dd\">\n" +
"Add a monitoring type enables the user to\n" +
"view loadings for a particular measurement type in Show Loadings.\n" +
"This creates an entry in <tt class=\"file-path\">Log_MonitoredTypes</tt> table in <tt class=\"file-path\">DWHDB</tt>.</td></tr>\n" +
"<tr class=\"dlemp\"><td colspan=\"3\"></td></tr>\n" +
"<tr class=\"dlentry\">\n" +
"<td class=\"dt\">\n" +
"<b>Delete:</b></td><td class=\"dd\">\n" +
"Delete removes the measurement type entries\n" +
"from <tt class=\"file-path\">Log_MonitoredTypes</tt>, and the measurement\n" +
"type is no longer visible in Show Loadings.</td></tr>\n" +
"<tr class=\"dlemp\"><td colspan=\"3\"></td></tr>\n" +
"<tr class=\"dlentry\">\n" +
"<td class=\"dt\">\n" +
"<b>Activate:</b></td><td class=\"dd\">\n" +
" Activate sets the status of a particular\n" +
"measurement type in <tt class=\"file-path\">Log_MonitoredTypes</tt> so\n" +
"that it  is measured. .</td></tr>\n" +
"<tr class=\"dlemp\"><td colspan=\"3\"></td></tr>\n" +
"<tr class=\"dlentry\">\n" +
"<td class=\"dt\">\n" +
"<b>Deactivate:</b></td><td class=\"dd\">\n" +
" Deactivate sets the status of a \n" +
"particular measurement type in <tt class=\"file-path\">Log_MonitoredTypes</tt> so that it  is not measured. If a particular measurement type is\n" +
"made <tt class=\"file-path\">inactive</tt>, the status in <tt class=\"file-path\">LogMonitoredTypes</tt> is set to <tt class=\"file-path\">INACTIVE</tt> and is not visible in Show Loadings.</td></tr>\n" +
"<tr class=\"dlemp\"><td colspan=\"3\"></td></tr>\n" +
"</table>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>After deleting or deactivating the measurement type, it takes\n" +
"three days to update in Show Loadings.</dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

var C5_9=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.9 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_bldi\"></a><a name=\"CHAPTER5.9\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Maintenance Operations</a></span></h2>\n" +
"\n" +
"<p>\n" +
"</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_9_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.9.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_9pb4\"></a><a name=\"CHAPTER5.9.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ENIQ Database Maintenance</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Database maintenance is handled automatically by DWHManagement\n" +
"sets. The data in DWH is stored in three different partition types.</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Partitioned type</li>\n" +
"<li class=\"UNORD\">Unpartitioned type</li>\n" +
"<li class=\"UNORD\">Simple type</li></ul>\n" +
"<p>\n" +
"Unpartitioned and simple types are used for storing small amount\n" +
"of data and therefore do not need daily management. The actual measurement\n" +
"data is stored in partitioned types.</p>\n" +
"\n" +
"<p>\n" +
"ENIQ stores measurement data in time limited database tables called\n" +
"partitions. Each partition has an explicit start time and end time.\n" +
"ENIQ creates the minimum number of partitions needed to cover the\n" +
"required storage time. The partition shift is handled in such a way\n" +
"that when the end time of the current partition approaches data retention\n" +
"limit, the oldest of the partition is truncated and reassigned to\n" +
"start where the newest partition ends. There is no explicit drop of\n" +
"data that is older than the required storage time.</p>\n" +
"\n" +
"<p>\n" +
"ENIQ handles data retention for performance reasons: deleting rows\n" +
"from database tables is slower than truncating a whole table. ENIQ\n" +
"guarantees that there is always measurement data for at least the\n" +
"time described by the storage time. There can also be data that is\n" +
"older than the desired storage time stored temporarily.</p>\n" +
"\n" +
"<p>\n" +
"During the initial installation of ENIQ, Tech Pack partitions are\n" +
"created for the entire storage time. Data is loaded into the whole\n" +
"storage time range.</p>\n" +
"\n" +
"<p>\n" +
"However, ENIQ load monitoring is performed for data that is not\n" +
"older than three days, by default. Therefore, measurement data loadings\n" +
"that are older than three days at the time of the loading are not\n" +
"displayed in AdminUI.</p>\n" +
"\n" +
"<p>\n" +
"There is a workaround for updating ENIQ data monitoring for the\n" +
"measurement data of the last 30 days, see <a href='javascript:parent.parent.parent.showAnchor(\"chl-ES_troubleshooting\")' class=\"xref\">Section  37</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_9_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.9.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ybz2\"></a><a name=\"CHAPTER5.9.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Daily Database Maintenance</a></span></h3>\n" +
"\n" +
"<p>\n" +
"A partitioned type is a set of partitions and database tables used\n" +
"with circular buffer algorithm. Because of finite length of storage\n" +
"time in a circular buffer, partitioned types need daily maintenance.\n" +
"Daily management is performed by DWHM_Partition sets. Each Tech Pack\n" +
"contains a partitioning set. Partitioning sets are triggered by Trigger_Partitioning\n" +
"set in DWH_BASE Tech Pack. The user can verify the execution of daily\n" +
"database maintenance by running the Verify_Partitioning set in DWH_BASE\n" +
"Tech Pack. However, this is normally not necessary.</p>\n" +
"\n" +
"<p>\n" +
"<b>To verify the execution of daily database maintenance:</b></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>ETLC Set Scheduling</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>Set type</b>, select <b>Maintenance</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>Package</b>, select <b>DWH_BASE</b> package. See <a href='javascript:parent.parent.parent.showAnchor(\"DailyDatabaseMaintenence\")' class=\"xref\"> Figure 20</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"DailyDatabaseMaintenence\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE20\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-setscheduling.GIF\" border=\"0\" width=\"640\" class=\"tab1\" /></a></p><p align=\"left\"><i>Figure 20 &nbsp; Daily Database Maintenance</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"4\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Find the set named Verify_Partitioning and click <b>Start</b>. AdminUI automatically redirects to the ETLC Monitoring\n" +
"view.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Wait until the Verify_Partitioning set is executed and\n" +
"refresh the page manually.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">When Verify_Partitioning is successfully executed, click\n" +
"the set name column for the set in Executed ETL Sets.<p>\n" +
"If the log contains warnings, there is a problem in partitioning.\n" +
"Check the execution of DWHM_Partition sets for all Tech Packs on the\n" +
"list. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewExecutionDWHMPartitionSets\")' class=\"xref\"> Figure 21</a>.</p>\n" +
"</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewExecutionDWHMPartitionSets\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE21\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-logdetails.gif\" border=\"0\" width=\"601\" height=\"410\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 21 &nbsp; Viewing the Execution of DWHM_Partition Sets</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_9_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.9.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_c6ba\"></a><a name=\"CHAPTER5.9.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Executing Partitioning Manually</a></span></h3>\n" +
"\n" +
"<p>\n" +
"If there is a problem in partitioning, or the system must be recovered,\n" +
"then the user can execute the partitioning manually. There is a set\n" +
"DWHM_Partition_TechPackName for each Tech Pack to execute partitioning.\n" +
"The partitioning is performed by manually triggering this set.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To execute manual partitioning:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>ETLC Set Scheduling</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>Set type</b>, select <b>Tech Pack</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>Package</b>, select the name of the\n" +
"Tech Pack.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select <tt class=\"input\"><b>DWHM_Partition_TechPackName</b></tt> from\n" +
"the list and click <b>Start</b> link of the pack. AdminUI\n" +
"automatically transfers into ETLC monitoring view, where the user\n" +
"can monitor the set execution. See <a href='javascript:parent.parent.parent.showAnchor(\"StartManualPartitioning\")' class=\"xref\"> Figure 22</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">After the set is executed, check the log for errors.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"StartManualPartitioning\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE22\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-startmanualpart.GIF\" border=\"0\" width=\"640\" class=\"tab1\" /></a></p><p align=\"left\"><i>Figure 22 &nbsp; Starting Manual Partitioning</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_9_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"TypeConfiguration\"></a><span class=\"CHAPNUMBER\">5.9.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ollv\"></a><a name=\"CHAPTER5.9.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking\n" +
"Partition Status</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The user can check the ENIQ partition status by logging into the\n" +
"DWH repository, by viewing log files, or by using AdminUI. Using the\n" +
"AdminUI is the simplest of the three.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To view partition status:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Type Configuration</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select Tech Pack and table level. <br />The status column\n" +
"displays the partition status of each Tech Pack.</li></ol>\n" +
"<p>\n" +
"Partition status is explained in <a href='javascript:parent.parent.parent.showAnchor(\"PartitionStatus\")' class=\"xref\"> Table 10</a>.</p>\n" +
"\n" +
"<p>\n" +
"For more information on INSANE partitions, see <a name=\"PartitionStatus\" href='javascript:parent.parent.parent.showAnchor(\"troublepartition\")' class=\"xref\">Section  37.5</a>.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE10\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 10 &nbsp;&nbsp; Partition Statuses</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"25%\">\n" +
"\n" +
"<p>Partition Status</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"75%\">\n" +
"\n" +
"<p>Explanation</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>ACTIVE</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>The partition is working.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>MANUAL</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>The partition is created manually.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>MIGRATED</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>The partition plan is updated.</p><br />\n" +
"<p>This status is used when partitions are being deleted. The status\n" +
"is changed to MIGRATED, sanity check is run, and then the partition\n" +
"is deleted.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>READONLY</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>The Partition can only be read. No data can be inserted.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>NEW</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>A new partition that is not activated yet.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>INSANE_AC</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>An active partition that is incorrect.\n" +
"For example, it does not correspond to the Partition Definitions in\n" +
"the DWH Repository.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>INSANE_MA</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>A manual partition that is incorrect. For example, it does\n" +
"not correspond to the Partition Definitions in the DWH Repository.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>INSANE_MG</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>A migrated partition that is incorrect.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>INSANE_RO</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>A read-only partition that is incorrect.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"25%\">\n" +
"<p>INSANE_NE</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"75%\">\n" +
"<p>New Partition that is incorrect. For example, it contains\n" +
"data.</p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C5_9_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"ActivateInactivateMeasTypes\"></a><span class=\"CHAPNUMBER\">5.9.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ryor\"></a><a name=\"CHAPTER5.9.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Activating and Inactivating Types</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To <tt class=\"file-path\">disable</tt> or <tt class=\"file-path\">enable</tt> data load for a specific measurement type, activate or inactivate\n" +
"the measurement type using AdminUI.</p>\n" +
"\n" +
"<p>\n" +
"Inactivated measurement types are not displayed in <b>Show\n" +
"Loadings</b> after the default three day lookback\n" +
"time. For more information on viewing loading status, see <a href='javascript:parent.parent.parent.showAnchor(\"CheckDataLoadStatus\")' class=\"xref\">Section  5.8.1</a>. <b>Show Aggregations</b> always includes all measurement types. For more information on viewing\n" +
"aggregations, see <a href='javascript:parent.parent.parent.showAnchor(\"ShowAggregations\")' class=\"xref\">Section  5.8.4</a>.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To activate and inactivate types</strong>:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Type Configuration</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select Tech Pack and table level. See <a href='javascript:parent.parent.parent.showAnchor(\"ActivateInactivateTypes\")' class=\"xref\"> Figure 23</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ActivateInactivateTypes\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE23\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-5.7.png.png\" border=\"0\" width=\"681\" height=\"538\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 23 &nbsp; Activating and Inactivating Types</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"3\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click the check box to the left of the type name to select\n" +
"at least one type.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Activate selected</b> to activate the\n" +
"selected types.</li></ol><div class=\"bridge\" style=\"padding-left:13pt\">\n" +
"<p>\n" +
"or</p>\n" +
"</div>\n" +
"\n" +
"<ol start=\"5\" compact=\"compact\" class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Inactivate selected</b> to inactivate\n" +
"the selected types.</li></ol>\n" +
"\n"+
"</div>\n";

var C5_9_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.9.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_797w\"></a><a name=\"CHAPTER5.9.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Adjusting Storage Times</a></span></h3>\n" +
"\n" +
"<p>\n" +
"By default, each type of Techpack initially uses storage time from\n" +
"a partition plan. Use AdminUI to check and change storage times.<strong class=\"MEDEMPH\">Prerequisite for adjusting storage times for WCDMA feature:</strong></p>\n" +
"\n" +
"<p>\n" +
"Before executing the following steps that require recreation of\n" +
"a combined view, it is mandatory to install the latest WCDMA feature\n" +
"that is available in the Software Gateway. </p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Steps to adjust storage times:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Type Configuration</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the required Tech Pack from drop-down menu.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the type by clicking its Typename in the resulting\n" +
"table. See <a href='javascript:parent.parent.parent.showAnchor(\"AdjustStorageTimes\")' class=\"xref\"> Figure 24</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Adjust storage time value or select <b>Use default\n" +
"storage time</b> to use the default storage time defined by the\n" +
"partition plan type.<br /> Decreasing storage time results in loss\n" +
"of data for all affected measurement types. To save this data, take\n" +
"a backup before adjusting the storage time.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">To save changes, click <b>Save</b>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"AdjustStorageTimes\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE24\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-adjuststorage.gif\" border=\"0\" width=\"599\" height=\"530\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 24 &nbsp; Adjusting Storage Times</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"6\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Prevent the IQ users <b>dcbo</b> and <b>dcpublic</b> from accessing the ENIQ server by locking their\n" +
"usernames. See <a href='javascript:parent.parent.parent.showAnchor(\"lock\")' class=\"xref\">Section  8.19</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">After the changes are performed and IQ users are locked,\n" +
"set the loader into maintenance mode (see <a href='javascript:parent.parent.parent.showAnchor(\"maintenance\")' class=\"xref\">Section  8.17</a>) and execute the Tech Pack DWHM_StorageTimeUpdate. It is set to\n" +
"modify the partition scheme according to the new settings.<p>\n" +
"Follow these steps to execute DWHM_StorageTimeUpdate set:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">In AdminUI, click ETLC Set Scheduling.</li>\n" +
"<li class=\"UNORD\">Select Techpack from the Set type drop-down menu.</li>\n" +
"<li class=\"UNORD\">In the Package drop-down menu, select the techpack for\n" +
"which the StorageTimeUpdate set needs to be executed (Example - DC_E_AFG).</li>\n" +
"<li class=\"UNORD\">Select the set named DWHM_StorageTimeUpdate_&lt;techpackName&gt;(Example\n" +
"- DWHM_StorageTimeUpdate_DC_E_AFG) on the result table and click Start.</li>\n" +
"<li class=\"UNORD\">AdminUI automatically redirects to the ETLC Monitoring\n" +
"view.</li></ul></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">After executing Tech Pack <tt class=\"file-path\">DWHM_StorageTimeUpdate</tt>, unlock IQ users (see <a href='javascript:parent.parent.parent.showAnchor(\"unlock\")' class=\"xref\">Section  8.20</a>) and set ENIQ into\n" +
"normal mode (see <a href='javascript:parent.parent.parent.showAnchor(\"normal\")' class=\"xref\">Section  8.18</a>).</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If the <tt class=\"file-path\">DWHM_StorageTimeUpdate</tt> is\n" +
"executed for DC_E_ERBS, DC_E_ERBSG2, and DC_E_RBS, DC_E_RBSG2 Tech\n" +
"Packs, it is mandatory to execute the combined view creation steps,\n" +
"see <a href='javascript:parent.parent.parent.showAnchor(\"Combined_View_Creation\")' class=\"link\"> section 5.9.8</a> for\n" +
"combined view creation.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C5_9_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"DWHConfiguration\"></a><span class=\"CHAPNUMBER\">5.9.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_da7g\"></a><a name=\"CHAPTER5.9.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Adjusting\n" +
"Partition Plans</a></span></h3>\n" +
"\n" +
"<p>\n" +
"ENIQ uses a set of predefined partition plans. These partition\n" +
"plans cannot be removed and new plans cannot be created, but storage\n" +
"times of partition plans can be changed.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To change storage times of partition plans:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>DWH Configuration</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select one of the partition plans by clicking its name.\n" +
"The selected partition plan and its details are shown. See <a href='javascript:parent.parent.parent.showAnchor(\"ChangeStorageTimes\")' class=\"xref\"> Figure 25</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Edit the storage time and click <b>Save</b>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ChangeStorageTimes\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE25\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-5.8.7.png.png\" border=\"0\" width=\"617\" height=\"502\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 25 &nbsp; Changing Storage Time</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"4\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">After saving the new partition plan storage time, execute\n" +
"DWHM_StorageTimeUpdate for all Tech Packs.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If the DWHM_StorageTimeUpdate is executed for partition plans\n" +
", it is mandatory to execute the combined view creation steps. See <a href='javascript:parent.parent.parent.showAnchor(\"Combined_View_Creation\")' class=\"link\"> section 5.9.8</a> for combined\n" +
"view creation.</dd></dl><br /></li></ol>\n" +
"\n"+
"</div>\n";

var C5_9_8=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"Combined_View_Creation\"></a><span class=\"CHAPNUMBER\">5.9.8 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ukkl\"></a><a name=\"CHAPTER5.9.8\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Combined View Creation</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Follow the steps for combined view creation:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Make sure that no users are using <tt class=\"file-path\">DC_E_ERBS</tt> and <tt class=\"file-path\">DC_E_ERBSG2 TP</tt> (in ERBS combined\n" +
"view) or <tt class=\"file-path\">DC_E_RBS </tt>and <tt class=\"file-path\">DC_E_RBSG2\n" +
"TP</tt> (in WCDMA Combined view) table through BO reports\n" +
"or SQL query.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Make sure that ENIQ is not accessing these views. We need\n" +
"to put the engine to <tt class=\"file-path\">NoLoads</tt> with the following\n" +
"command: <p>\n" +
"<tt class=\"input\"><b>/eniq/sw/bin/engine -e changeProfile NoLoads</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Procedure to create the combined view's (In Multi Blade\n" +
"execute on Coordinator blade. Script must be executed as dcuser):<p>\n" +
"<tt class=\"input\"><b>{dcuser}# cd /eniq/sw/installer</b></tt> </p>\n" +
"<p>\n" +
"(in ERBS combined view)</p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>{dcuser}# ./erbscombinedview.bsh</b></tt></p>\n" +
"<p>\n" +
"or (in WCDMA combined view)</p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>{dcuser}# ./WCDMACombinedViewCreation.bsh</b></tt></p>\n" +
"<p>\n" +
"The script takes 15&ndash;20 mins to complete execution.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">After the script execution is complete, change the engine\n" +
"profile to Normal.<p>\n" +
"<tt class=\"input\"><b>/eniq/sw/bin/engine -e changeProfile Normal</b></tt></p>\n" +
"</li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_10=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"LoggingConfiguration\"></a><span class=\"CHAPNUMBER\">5.10 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ixjx\"></a><a name=\"CHAPTER5.10\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ETLC\n" +
"Logging</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Logging configuration files are located in <tt class=\"LITERALMONO\">/eniq/sw/conf</tt> directory:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><tt class=\"file-path\">engineLogging.properties</tt></li>\n" +
"<li class=\"UNORD\"><tt class=\"file-path\">schedulerLogging.properties</tt></li>\n" +
"<li class=\"UNORD\"><tt class=\"file-path\">engine.log4j.properties</tt></li></ul>\n" +
"<p>\n" +
"By default, all logs are stored under <tt class=\"file-path\">/eniq/log/sw_log</tt>.</p>\n" +
"\n" +
"<p>\n" +
"Each Tech Pack, interface and activated OSS have their own directory\n" +
"under <tt class=\"file-path\">/eniq/log/sw_log</tt>.  Each day has its\n" +
"own log. File log contains a log of operated files. Engine log contains\n" +
"events concerning a Tech Pack or an interface. Events which are not\n" +
"related to any Tech Pack or to any interface and scheduling logs are\n" +
"logged under the <tt class=\"file-path\">root</tt> of <tt class=\"file-path\">/eniq/sw/conf</tt>.</p>\n" +
"\n" +
"<p>\n" +
"See <a href='javascript:parent.parent.parent.showAnchor(\"EngineRootLogging\")' class=\"xref\"> Table 11</a> and <a name=\"EngineRootLogging\" href='javascript:parent.parent.parent.showAnchor(\"InterfaceLogExample\")' class=\"xref\"> Table 12</a>.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE11\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 11 &nbsp;&nbsp; Engine Root Logging</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"48%\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">Log File</strong></p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"52%\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">Description</strong></p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/engine/engine-YYYY_MM_DD.log</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"52%\">\n" +
"<p>Generic engine events not related to any Tech Pack</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/engine/schedule-YYYY_MM_DD.log</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"52%\">\n" +
"<p>Scheduling logs</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/engine/error-YYYY_MM_DD.log</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"52%\">\n" +
"<p><a name=\"InterfaceLogExample\"></a>Error log</p>\n" +
"</td></tr></table>\n" +
"\n" +
"<a name=\"TABLE12\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 12 &nbsp;&nbsp; Interface Logging Example, INTF_DC_E_BSS</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">Log File</strong></p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">Description</strong></p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/engine/INTF_DC_E_BSS-&lt;oss_name&gt;/engine-YYYY_MM_DD.log</tt></p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Engine events for INTF_DC_E_BSS interface</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/engine/INTF_DC_E_BSS-&lt;oss_name&gt;/file-YYYY_MM_DD.log</tt></p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Events of INTF_DC_E_BSS interface for files</p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To configure ETLC logging:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Logging Configuration</b>. See <a href='javascript:parent.parent.parent.showAnchor(\"LoggingConfigurationGUI\")' class=\"xref\"> Figure 26</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">On Logging Configuration page, set logging properties\n" +
"for engine, scheduler, performance, and all packages by selecting\n" +
"values from the corresponding log level list boxes. The logging levels\n" +
"are SEVERE, WARNING, INFO, CONFIG, FINE, FINER, and FINEST.<p>\n" +
"If there is no specific need for detailed information on engine,\n" +
"scheduler, or package, set the logging level to INFO. If no logging\n" +
"level is set, default logging is used.</p>\n" +
"<p>\n" +
"ENIQ Logging can be set to FINEST only if the current use of <b>/eniq/log</b> filesystem is less than 60%.</p>\n" +
"<p>\n" +
"ENIQ Logging can be set to FINER only if the current use of <b>/eniq/log</b> filesystem is less than 70%.</p>\n" +
"<p>\n" +
"ENIQ Logging can be set to FINE only if the current use of <b>/eniq/log</b> filesystem is less than 75%.</p>\n" +
"<p>\n" +
"These logging levels are monitored every one minute and if the\n" +
"use of <b>/eniq/log</b> filesystem exceeds 80% then the\n" +
"logging levels revert to default.</p>\n" +
"<p>\n" +
"All the mentioned values can be configured.</p>\n" +
"<p>\n" +
"If customer wants to change the default logging limit for the logging\n" +
"levels, then perform the following:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Log on ENIQ server, or in a Multi-Blade deployment on\n" +
"the Engine Blade, as <tt class=\"file-path\">dcuser</tt>.</li>\n" +
"<li class=\"UNORD\">Edit the following entries in the <b>/eniq/sw/conf/static.properties </b> and save it:</li>\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b>FINEST.limit=60</b></tt></li>\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b>FINER.limit=70</b></tt></li>\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b>FINE.limit=75</b></tt></li>\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b>Logging.MaxLimit=80</b></tt><dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The values must be configured so that the maximum limit value\n" +
"is not greater than 100%, FINEST limit is not greater than the finer\n" +
"limit. FINER limit is not greater than the FINE limit and FINE or\n" +
"FINER limit is not greater than the maximum limit value.<p>\n" +
"Log level does not change if these conditions are not met.</p>\n" +
"</dd></dl><br /></li></ul><dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">The FINE/FINER/FINEST logging levels can dramatically\n" +
"increase the log file sizes. Use these levels only for short testing\n" +
"periods to avoid disk space issues (which can potentially cause server\n" +
"crashes).</li>\n" +
"<li class=\"UNORD\">If large files are parsed while logging is set to FINEST\n" +
"for even a couple of ROPs, there can be problems checking the logs\n" +
"using AdminUI. If this occurs, move the logs to a local system for\n" +
"further analysis.</li></ul></dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Save changes</b>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"LoggingConfigurationGUI\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE26\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Logging_Configuration.png.png\" border=\"0\" width=\"568\" height=\"822\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 26 &nbsp; Logging Configuration</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_11=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"SessionLogs\"></a><span class=\"CHAPNUMBER\">5.11 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_4q5h\"></a><a name=\"CHAPTER5.11\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Session Logging</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Session logs are used to inspect data that passes through the system.\n" +
"There are three types of session logs:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Adapter</li>\n" +
"<li class=\"UNORD\">Loader</li>\n" +
"<li class=\"UNORD\">Aggregation</li></ul>\n" +
"<p>\n" +
"Adapter session logs contain information on the adaptations performed\n" +
"in the system. For example, start and end time of the adaptation,\n" +
"the original filename of the adapted data, and the status of the adaptation.</p>\n" +
"\n" +
"<p>\n" +
"Loader session logs contain information on system data loading.\n" +
"For example, start and end time of the loading, number of rows loaded,\n" +
"and loading status. <b>Status</b> field is not applicable\n" +
"for loader session logs.</p>\n" +
"\n" +
"<p>\n" +
"Aggregation session logs contain the information on aggregations.\n" +
"For example, start and end time of the aggregation, number of rows\n" +
"aggregated, and the status of the aggregation. <b>Status </b> field is not applicable for aggregation session logs.</p>\n" +
"\n" +
"<p>\n" +
"The <b>Source</b> field refers to the node type. For\n" +
"example, RBS or RNC or interface names, <tt class=\"file-path\">INTF_DC_E_RBS</tt> or <tt class=\"file-path\">INTF_DIM_RAN_BASE_RBS</tt>.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The <b>Source</b> search is based on string contents\n" +
"and returns any row containing the entered search string.</dd></dl><br />\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check session logs:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Session Logs</b>. See <a href='javascript:parent.parent.parent.showAnchor(\"SelectSessionLogSearchPars\")' class=\"xref\"> Figure 27</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select search parameters.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Search</b>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"SelectSessionLogSearchPars\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE27\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-sessionlogsearch.gif\" border=\"0\" width=\"423\" height=\"245\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 27 &nbsp; Selecting Session Log Search Parameters</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"4\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">To view detailed row information, select a file by clicking\n" +
"the filename or typename depending on the information returned. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewDetailedRowInfo\")' class=\"xref\"> Figure 28</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewDetailedRowInfo\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE28\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-rowinfo.gif\" border=\"0\" width=\"640\" class=\"tab1\" /></a></p><p align=\"left\"><i>Figure 28 &nbsp; Viewing Detailed Row Information</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"5\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Close</b> to close the row info view.</li></ol>\n" +
"\n"+
"</div>\n";

var C5_12=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.12 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_5ejw\"></a><a name=\"CHAPTER5.12\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Data Verification</a></span></h2>\n" +
"\n" +
"<p>\n" +
"</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_12_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"DataRowInfo\"></a><span class=\"CHAPNUMBER\">5.12.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_tw0y\"></a><a name=\"CHAPTER5.12.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking Data Row\n" +
"Information</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to check that database tables contain data.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check database tables:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Data Row Info</b>. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewDataRowInfo\")' class=\"xref\"> Figure 29</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>TechPack</b>, select required Tech Pack.\n" +
"A list of available measurement types is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>Measurement Type</b>, select measurement\n" +
"type. The user can select optional parameters: <b>Level</b>, <b>Date</b>, <b>Search Days</b>, and <b>Search Direction</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Get Information</b>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewDataRowInfo\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE29\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-datarow_small.gif\" border=\"0\" width=\"700\" height=\"272\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 29 &nbsp; Viewing Data Row Information</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"5\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">On the <b>Data Row Raw Info</b> view, left click\n" +
"a date for a detailed view of the loadings. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewDataRowRawInfo\")' class=\"xref\"> Figure 30</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewDataRowRawInfo\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE30\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-datarowraw.gif\" border=\"0\" width=\"407\" height=\"548\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 30 &nbsp; Viewing Data Row Raw Information</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_12_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.12.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_iw01\"></a><a name=\"CHAPTER5.12.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking Data Row Summary</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to check the Tech Pack level summary of row counts\n" +
"and ROP counts of RAW/DAY/DAYBH/COUNT for a period of minimum 1 day\n" +
"and maximum 31 days.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To Check the database tables:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Data Row Summary</b>. See <a href='javascript:parent.parent.parent.showAnchor(\"DataRowSummary\")' class=\"xref\"> Figure 31</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>TechPack</b>, select required Tech Pack.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the parameters: <b>Date</b>, <b>Search Days </b>, <b>Level</b>, and <b>Search\n" +
"Direction</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Get Information</b>. A list of available\n" +
"measurement types with the row and ROP count value for the selected\n" +
"number of dates is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click the data cells to get the ROP level view for the\n" +
"selected day for the respective measurement type for RAW/DAY/DAYBH/COUNT.\n" +
"See <a href='javascript:parent.parent.parent.showAnchor(\"DataRowSummaryDrillDown\")' class=\"xref\"> Figure 32</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"DataRowSummary\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE31\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-DataRowSummary.jpg\" border=\"0\" width=\"734\" height=\"379\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 31 &nbsp; Viewing Data Row Summary Information</i></p></div>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"DataRowSummaryDrillDown\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE32\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-DataRowSummaryDrilldown.jpg\" border=\"0\" width=\"296\" height=\"379\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 32 &nbsp; Viewing Drill Down Data Row Summary</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_12_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"ShowReferenceTables\"></a><span class=\"CHAPNUMBER\">5.12.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_vnhl\"></a><a name=\"CHAPTER5.12.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking\n" +
"Reference Table Data</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to check that reference tables contain data.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check database reference tables:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Show Reference Tables</b>. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewReferenceTables\")' class=\"xref\"> Figure 33</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>Select table</b>, select a reference\n" +
"table.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Filter the results by using the filter options. By default,\n" +
"the results only show 500 rows.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Show</b> to see the contents of the\n" +
"reference table.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewReferenceTables\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE33\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-reftables.jpg\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 33 &nbsp; Viewing Reference Tables</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_12_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"BusyhourInformation\"></a><span class=\"CHAPNUMBER\">5.12.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_fxsc\"></a><a name=\"CHAPTER5.12.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking\n" +
"Busy Hour Information</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to check that Busy Hour tables contain data.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check Busy Hour information:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, select <b>Busy Hour Information</b>. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewBusyHourInfo\")' class=\"xref\"> Figure 34</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>Available BH Tables</b>, select a table.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Specify date range for the search.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Get BH Information</b> to view the\n" +
"Busy Hour information.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewBusyHourInfo\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE34\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-bhinfo.GIF\" border=\"0\" width=\"694\" height=\"390\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 34 &nbsp; Viewing Busy Hour Information</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_12_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"RANKBHInformation\"></a><span class=\"CHAPNUMBER\">5.12.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_djy8\"></a><a name=\"CHAPTER5.12.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Checking\n" +
"RANKBH Information</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to check that RANKBH tables contain data.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To check RANKBH information:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>RANKBH Information</b>.\n" +
"See <a href='javascript:parent.parent.parent.showAnchor(\"ViewRANKBHInfo\")' class=\"xref\"> Figure 35</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">From <b>Search RANKBH Tables</b>, select a table.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Specify date range for the search.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Enter the number of rows that must be returned.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Get Information</b> to view the RANKBH\n" +
"information.</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Number of rows are limited to top 500 rows.</dd></dl><br />\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewRANKBHInfo\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE35\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-rankbhinfo_small.gif\" border=\"0\" width=\"502\" height=\"485\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 35 &nbsp; Viewing RANKBH Information</i></p></div>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_13=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"EBSUpgrader\"></a><span class=\"CHAPNUMBER\">5.13 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_anlo\"></a><a name=\"CHAPTER5.13\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Using EBS\n" +
"Upgrader</a></span></h2>\n" +
"\n" +
"<p>\n" +
"To check the EBS features supported by ENIQ-S with respect to the\n" +
"corresponding mediation (OSS-RC or ENM), see <em class=\"LOWEMPH\">Support\n" +
"Network Element</em>, <a href='javascript:parent.parent.parent.showAnchor(\"Support_Network_Elements\")' class=\"xref\">Reference [40]</a>.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Prerequisites:</strong></p>\n" +
"\n" +
"<p>\n" +
"To start the EBS Universe update, the following services and information\n" +
"are required:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Business Objects BI4.2 SP06 must be installed on the\n" +
"client machine.</li>\n" +
"<li class=\"UNORD\">Microsoft .NET Framework Version 4.6.2 Redistributable\n" +
"Package (x86). This must be installed on the machine running the EBS\n" +
"upgrade. The Microsoft .NET Framework version 4.6.2 (x86) redistribute\n" +
"package installs the .NET Framework runtime and associated files required\n" +
"to run applications developed to target the .NET Framework v4.6.2.<p>\n" +
"See Microsoft web site <a href='javascript:parent.parent.parent.showAnchor(\"MSwebsite\")' class=\"xref\">Reference [9]</a> for download\n" +
"and installation instructions.</p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Microsoft Data Access Components (MDAC) 2.8<p>\n" +
"Microsoft Data Access Components (MDAC) 2.8 contains core Data\n" +
"Access components such as the Microsoft SQL Server&trade; OLE DB provider\n" +
"and ODBC driver.</p>\n" +
"<p>\n" +
"See Microsoft web site, <a href='javascript:parent.parent.parent.showAnchor(\"MSwebsite\")' class=\"xref\">Reference [9]</a> for download\n" +
"and installation instructions.</p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Java<p>\n" +
"Java version 8 must be installed. Java is available from <a href='javascript:parent.parent.parent.showAnchor(\"Javawebsite\")' class=\"xref\">Reference [10]</a>.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>For OCS installation, see <b>OCS Windows Servers, Installation\n" +
"Instructions</b>, available in the relevant ENIQ Calstore Library.<p>\n" +
"For OCS without Citirx installation, see <strong class=\"MEDEMPH\">EBID\n" +
"Installation and Upgrade Instructions</strong> document, available in\n" +
"the relevant ENIQ Calstore Library.</p>\n" +
"</dd></dl><br /><p>\n" +
"After ISO is mounted, the Java executable is available in the following\n" +
"path of server where BI Platform 4 client tools are installed:<br /><br /><tt class=\"input\"><b><i class=\"var\">&lt;MOUNTED DRIVE&gt;</i>MSWIN-x86-64\\jre-8u321-windows-x64.exe[64bit]</b></tt></p>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Steps to Install JAVA:</strong></p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Double-click <b>jre-8u321-windows-x64.exe</b>.</li>\n" +
"<li class=\"UNORD\">Click <b>Install</b> button.</li>\n" +
"<li class=\"UNORD\"><b>You have successfully Installed</b> dialog\n" +
"box is displayed.</li></ul><dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><tt class=\"file-path\">java.policy</tt> file in JAVA installed\n" +
"path must be updated with the following lines:<br /> To launch <tt class=\"file-path\">universeupdateinstaller</tt> package when delivered as unsigned\n" +
"packages:<p>\n" +
"<b>grant { permission java.security.AllPermission; };</b></p>\n" +
"<p>\n" +
"For example: <tt class=\"file-path\">C:\\Program Files\\Java\\jre8\\lib\\sec urity\\java.policy</tt></p>\n" +
"</dd></dl><br /></li>\n" +
"<li class=\"UNORD\">Sybase driver<p>\n" +
"Sybase SQL Anywhere Studio version 9.0.2 or later must be installed\n" +
"before using the EBS upgrader. The EBS upgrader requires Sybase SQL\n" +
"Anywhere driver version 9.00.02 or greater.</p>\n" +
"<p>\n" +
"This is verified in the Windows Control Panel, under Administrative\n" +
"Tools, Data Sources (ODBC). The driver versions installed are shown\n" +
"in the Drivers tab.</p>\n" +
"<p>\n" +
"Updates for the Sybase SQL Anywhere drivers are downloaded from\n" +
"the Sybase web site <a href='javascript:parent.parent.parent.showAnchor(\"Sybasewebsite\")' class=\"xref\">Reference [11]</a>.</p>\n" +
"</li>\n" +
"<li class=\"UNORD\">The following details must be provided to start the\n" +
"universe update:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><b>BO Repository</b>: The address of the BO\n" +
"server used. It must be in the following format and must include the\n" +
"server port number. For example, <tt class=\"file-path\"><i class=\"var\">&lt;BO server name&gt;</i>:6400</tt>. The full server address must be entered if an\n" +
"alias is not defined in the Windows hosts file.</li>\n" +
"<li class=\"UNORD\"><b>BO username and password</b>: The username\n" +
"and password that is used to log on to the BO repository.</li>\n" +
"<li class=\"UNORD\"><b>ODBC connection</b>: The ODBC database\n" +
"connection set up on the local machine of the user to the DWHREP database\n" +
"on the server where the Tech Pack is installed.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>In the OCS and OCS without Citirx server, a 64-bit ODBC connection\n" +
"of Sybase SQL Anywhere must be present from BI4 and future releases.<p>\n" +
"If SQL Anywhere 64-bit driver is not present in OCS, see Section <em class=\"LOWEMPH\">SAP IQ 16</em> mentioned in <em class=\"LOWEMPH\">Ericsson\n" +
"Business Intelligence Deployment (EBID) Installation and Upgrade Instructions</em> for installation, <a href='javascript:parent.parent.parent.showAnchor(\"Ebidinstall\")' class=\"xref\">Reference [16]</a>.</p>\n" +
"</dd></dl><br /></li>\n" +
"<li class=\"UNORD\"><b>Techpack Identification</b>: The version\n" +
"of the Tech Pack that is used to update the universe.</li>\n" +
"<li class=\"UNORD\"><b>Base Identification</b>: The version of\n" +
"the base Tech Pack that is used by the Tech Pack itself (set automatically).</li>\n" +
"<li class=\"UNORD\"><b>Working directory</b>: The directory where\n" +
"the updated universe is stored. The universe is stored in a sub directory\n" +
"of this directory, called <strong class=\"MEDEMPH\">\\unv</strong>.</li></ul></li>\n" +
"<li class=\"UNORD\">Ensure that JRE 8.X is installed on the OCS, OCS without\n" +
"Citrix and BIS. For more information, consult local Ericsson support.</li>\n" +
"<li class=\"UNORD\">Ensure that an ODBC Data Source to DWHREP on the ENIQ\n" +
"Server is configured from the BIS and OCS. The Sybase SQL Anywhere\n" +
"driver must be used, and the TCP-IP protocol must be <tt class=\"file-path\">\"host=<i class=\"var\">&lt;servername&gt;</i>:2641\"</tt>.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This is the database connection set up on the local machine\n" +
"of the user to the DWHREP database on the server where the Tech Pack\n" +
"is installed.</dd></dl><br /></li>\n" +
"<li class=\"UNORD\">EBS upgrade must be done from OCS server.</li></ul>\n" +
"<div class=\"ADMON\"><span class=\"ADMONMSG2\">Caution!</span><p class=\"ADMONDESC\">\n" +
"If any objects, either counters or attributes, are not present\n" +
"in the MOM but are present in the database, then these objects are\n" +
"removed from the database as part of EBS upgrade. If any new objects,\n" +
"either counters or attributes, are present in the MOM but not present\n" +
"in the database then these objects are added to the database.</p>\n" +
"</div>\n" +
"<p>\n" +
"EBS Upgrader updates EBS Tech Packs according to the MOM file found\n" +
"in the input directory. The path to the input directory is, for example: <tt class=\"file-path\">/eniq/data/pmdata/ebs/ebs_<i class=\"var\">&lt;app&gt;</i></tt>.</p>\n" +
"\n" +
"<p>\n" +
"Ensure that only a single EBS PM-MOM file is present in the directory.</p>\n" +
"\n" +
"<p>\n" +
"After updating EBS technology package, use the <b>Universe\n" +
"Update</b> to update the corresponding universes. See <a href='javascript:parent.parent.parent.showAnchor(\"ViewEBSUpgradeStatus\")' class=\"xref\"> Figure 36</a>.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ViewEBSUpgradeStatus\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE36\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-EBSUpgrader.gif\" border=\"0\" width=\"600\" height=\"325\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 36 &nbsp; Viewing EBS Upgrade Status</i></p></div>\n" +
"<p>\n" +
"<b>To upgrade EBS Tech Packs:</b></p>\n" +
"\n" +
"<div class=\"ADMON\"><span class=\"ADMONMSG2\">Caution!</span><p class=\"ADMONDESC\">\n" +
"Do not use the FINEST level of login during an EBS upgrade as the\n" +
"login information generated requires a lot of disk space.</p>\n" +
"</div>\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>EBS Upgrader</b>.<br />Three\n" +
"types of EBS Tech Packs are displayed. Only the packs that have an <b>Upgrade now!</b> button are upgraded. The button is displayed\n" +
"when a MOM file is detected in the input directory.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click the <b>Upgrade now!</b> button that corresponds\n" +
"to the Tech Pack to be upgraded.<p>\n" +
"Click <b>Upgrade now!</b>, set the engine in <b>NoLoads</b> status and put the EBS Upgrade set in the queue.\n" +
"After the Upgrade set is executed, the engine status is set back to <b>Normal</b>. More than one upgrade can be started at a time but\n" +
"they are executed one by one.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>refresh status</b> to refresh the <b>Configured EBS Upgrades</b> view after an upgrade.</li></ol>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To view the details of an upgrade:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>EBS Upgrader</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click the <b>Details</b> button that corresponds\n" +
"to the upgraded Tech Pack.<p>\n" +
"A new page containing the login information on the progress of\n" +
"the upgrade is displayed. Details of the last upgrade remains until\n" +
"the next upgrade is started.</p>\n" +
"</li></ol>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To update EBS universes:</strong></p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Update Procedure</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>EBS Upgrader</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Universe Update Installer</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Start Universe Update From Host Name</b> <br />where <strong class=\"MEDEMPH\">Host Name</strong> is the name of your server.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In the <b>File Download</b> window, click <b>Open</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In the <b>Universe update</b> window, enter\n" +
"the required information. Mandatory fields are pink in colour.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <b>Initiate update</b>. See <a href='javascript:parent.parent.parent.showAnchor(\"IntiatingUniverseUpdate\")' class=\"xref\"> Figure 37</a>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"IntiatingUniverseUpdate\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE37\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Figure_37.png.png\" border=\"0\" width=\"289\" height=\"300\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 37 &nbsp; Initiating Universe Update</i></p></div>\n" +
"<p>\n" +
"</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Snapshot Procedure:</strong></p>\n" +
"\n" +
"<p>\n" +
"If there is any failure, a snapshot is used as a quick way of recovering\n" +
"the system to working state.</p>\n" +
"\n" +
"<p>\n" +
"To take a snapshot of system, see <em class=\"LOWEMPH\">Creating Rolling\n" +
"Snapshots</em>, <a href='javascript:parent.parent.parent.showAnchor(\"RollingSnapshotCreation\")' class=\"xref\">Section  16.1.3</a>.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Start EBS upgrade:</strong></p>\n" +
"\n" +
"<p>\n" +
"Start an EBS Upgrade through the Admin user interface after placing\n" +
"the corresponding MOM file in the EBS directories.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Ignore the following error message seen in logs while doing\n" +
"Universe upgrade for EBS:<p>\n" +
"<tt class=\"file-path\">Adding object to universe: General/TP Version<br />Error\n" +
"adding object to universe: System.Runtime.InteropServices.COMException\n" +
"(0x0000006A): Cannot find Table<br />at System.RuntimeType.ForwardCallToInvokeMember(String\n" +
"memberName, BindingFlags flags, Object target, Int32[] aWrapperTypes,\n" +
"MessageData&amp; msgData)<br /> at Designer.ITables.get_Item(Object\n" +
"Index)<br /> at TPIdeUniverseWizard.BOObjectsTPIde.addObjectToUniverse(String\n" +
"className, String objName, String&amp; TechPackTPIde, String objSelect,\n" +
"String objWhere, String description, String objectType, String qualification,\n" +
"String aggregation)</tt></p>\n" +
"</dd></dl><br />\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Rollback Procedure</strong></p>\n" +
"\n" +
"<p>\n" +
"This is executed if the EBS upgrade fails. It is necessary to restore\n" +
"the system to the pre-upgrade state. See section <em class=\"LOWEMPH\">Recovery Using Rolling Snapshot</em> <a href='javascript:parent.parent.parent.showAnchor(\"RollingSnapshotRecovery\")' class=\"xref\">Section  16.2</a></p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_14=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.14 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_oh5k\"></a><a name=\"CHAPTER5.14\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">EBS Configuration</a></span></h2>\n" +
"\n" +
"<p>\n" +
"The mounted filesystems must be updated so that the EBS Tech Pack\n" +
"can read the statistics file.</p>\n" +
"\n" +
"<p>\n" +
"Run the script <tt class=\"file-path\">manage_mountpoints.bsh</tt> to update the mounted filesystem.</p>\n" +
"\n" +
"<p>\n" +
"The EBS-W Managed Component in OSS is configured to generate data\n" +
"for ENIQ. Set the OutputTarget parameter to 3GPP, ENIQ.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_15=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"AddingNewAdminUIUsers\"></a><span class=\"CHAPNUMBER\">5.15 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_dmi7\"></a><a name=\"CHAPTER5.15\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Adding New AdminUI Users</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To add a new AdminUI user:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to server as <tt class=\"file-path\">dcuser</tt> </li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following script: <p>\n" +
"/eniq/sw/installer/manage_tomcat_user.bsh -A ADD_USER</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Only alphanumeric characters are allowed in username.<p>\n" +
"Password must be at least 8 characters in length.</p>\n" +
"<p>\n" +
"Alphanumeric characters are allowed in password.</p>\n" +
"<p>\n" +
"The following special characters are not allowed &amp; &lt; &gt; '\n" +
"\" / \\ in username and password.</p>\n" +
"<p>\n" +
"No spaces are allowed in username and password.</p>\n" +
"<p>\n" +
"Password must contain at least one uppercase and one lowercase\n" +
"character.</p>\n" +
"<p>\n" +
"For security reasons, AdminUI encrypts passwords. After successful\n" +
"script execution, new password in the user database file is encrypted\n" +
"automatically.</p>\n" +
"</dd></dl><br /></li></ol>\n" +
"\n"+
"</div>\n";

var C5_16=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.16 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_spnr\"></a><a name=\"CHAPTER5.16\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Removing AdminUI Users</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\"> To remove AdminUI user:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following script to remove user:<p>\n" +
"/eniq/sw/installer/manage_tomcat_user.bsh -A REMOVE_USER</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">The script prompts for username and the existing password.</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Must have at least one user to access the AdminUI.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C5_17=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"ConfigureNumberofSessionsPerUser\"></a><span class=\"CHAPNUMBER\">5.17 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_zch6\"></a><a name=\"CHAPTER5.17\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Manage Number of AdminUI Sessions Per User</a></span></h2>\n" +
"\n" +
"<p>\n" +
"In ENIQ Statistics, the number of AdminUI sessions per user is\n" +
"restricted to one by default.</p>\n" +
"\n" +
"<p>\n" +
"This section lists the steps required to configure the number of\n" +
"sessions per user and to get the number of configured sessions per\n" +
"user.</p>\n" +
"\n" +
"<p>\n" +
"One session per user is defined as one login per user in a browser.</p>\n" +
"\n" +
"<p>\n" +
"Log on to the ENIQ server as <tt class=\"file-path\">dcuser</tt>.\n" +
"In a Multi-blade deployment, run the following steps on the coordinator\n" +
"blade:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b>cd /eniq/sw/installer</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b>bash adminui_sessions.bsh -A &lt;Actions&gt;</b></tt></li></ol>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Example1:</strong></p>\n" +
"\n" +
"<p><tt class=\"input\"><b>bash adminui_sessions.bsh -A GET_SESSIONS</b></tt></p>\n" +
"<p><tt class=\"output\">Number of Logon sessions set is : 1</tt></p>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Example2:</strong></p>\n" +
"\n" +
"<p><tt class=\"input\"><b>bash adminui_sessions.bsh -A SET_SESSIONS</b></tt></p>\n" +
"<p><tt class=\"output\">Enter the number of Logon sessions to be set</tt></p>\n" +
"<p><tt class=\"input\"><b>5</b></tt></p>\n" +
"<p><tt class=\"output\">Number of Logon sessions has been updated to : 5</tt></p>\n" +
"<p><tt class=\"output\">Restarting webserver...     </tt></p>\n" +
"<p><tt class=\"output\">Service stopping eniq-webserver </tt></p>\n" +
"<p><tt class=\"output\">Service enabling eniq-webserver </tt></p>\n" +
"<p><tt class=\"output\">Webserver restarted successfully</tt></p>\n" +
"<p>\n" +
"The number of sessions for all AdminUI users increases on the successful\n" +
"execution of the script.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_18=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.18 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_wpz8\"></a><a name=\"CHAPTER5.18\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Configuring AdminUI User Session\n" +
"Timeout</a></span></h2>\n" +
"\n" +
"<p>\n" +
"In ENIQ Statistics, the session timeout for each user of AdminUI\n" +
"is set to 180 minutes by default. After 180 minutes, the user session\n" +
"expires and the user has to login again. </p>\n" +
"\n" +
"<p>\n" +
"This section lists the steps required to configure the session\n" +
"timeout value and to get the current configured session timeout value. </p>\n" +
"\n" +
"<p>\n" +
"Log on to the ENIQ server as <tt class=\"file-path\">dcuser</tt>.\n" +
"In a Multi-blade deployment, run the following commands on the coordinator\n" +
"blade:</p>\n" +
"\n" +
"<p><tt class=\"input\"><b>cd /eniq/sw/installer</b></tt></p>\n" +
"<p><tt class=\"input\"><b>bash adminui_sessions.bsh -A &lt;Actions&gt;</b></tt></p>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Example 1:</strong></p>\n" +
"\n" +
"<p><tt class=\"input\"><b>bash adminui_sessions.bsh -A GET_SESSION_TIMEOUT</b></tt></p>\n" +
"<p><tt class=\"output\">User session timeout is set to 180 minutes.</tt></p>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Example 2:</strong></p>\n" +
"\n" +
"<p><tt class=\"input\"><b>bash adminui_sessions.bsh -A SET_SESSION_TIMEOUT</b></tt></p>\n" +
"<p><tt class=\"output\">Enter the new session timeout value in minutes</tt></p>\n" +
"<p><tt class=\"input\"><b>10</b></tt></p>\n" +
"<p><tt class=\"output\">User session timeout has been updated to 10 minutes.</tt></p>\n" +
"<p><tt class=\"output\">Restarting webserver...</tt></p>\n" +
"<p><tt class=\"output\">Service stopping eniq-webserver</tt></p>\n" +
"<p><tt class=\"output\">Service enabling eniq-webserver</tt></p>\n" +
"<p><tt class=\"output\">Webserver restarted successfully</tt></p>\n" +
"<p>\n" +
"Changing the user session time out restarts Webserver and user\n" +
"has to login again. </p>\n" +
"\n" +
"<p>\n" +
"The session timeout for all AdminUI users changes to the input\n" +
"value on the successful execution of the script.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_19=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"ChangingAdminUIUserPassword\"></a><span class=\"CHAPNUMBER\">5.19 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_n6j7\"></a><a name=\"CHAPTER5.19\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing AdminUI User Password</a></span></h2>\n" +
"\n"+
"</div>\n";

var C5_19_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"ChangingAdminUIPasswordthroughCLI\"></a><span class=\"CHAPNUMBER\">5.19.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_6u0g\"></a><a name=\"CHAPTER5.19.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing AdminUI User Password through CLI</a></span></h3>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To change password for ENIQ through CLI:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to server as <tt class=\"file-path\">dcuser</tt> .</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following script: <p>\n" +
"<tt class=\"input\"><b>/eniq/sw/installer/manage_tomcat_user.bsh -A CHANGE_PASSWORD</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">The script prompts for existing password (if it is not\n" +
"default)<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Alphanumeric characters are allowed.<p>\n" +
"Password must be at least 8 characters in length.</p>\n" +
"<p>\n" +
"The following special characters are not allowed &amp; &lt; &gt; '\n" +
"\" / \\</p>\n" +
"<p>\n" +
"No spaces are allowed.</p>\n" +
"<p>\n" +
"Password must contain at least one uppercase and one lowercase\n" +
"character.</p>\n" +
"</dd></dl><br /><p>\n" +
"All the AdminUI users must re-login after the script is executed. </p>\n" +
"</li></ol>\n" +
"\n"+
"</div>\n";

var C5_19_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.19.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_u1i5\"></a><a name=\"CHAPTER5.19.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing AdminUI User Password\n" +
"through AdminUI</a></span></h3>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To change AdminUI logged in user password for ENIQ through\n" +
"AdminUI:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to AdminUI.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <b>Change Password</b>. See <a href='javascript:parent.parent.parent.showAnchor(\"changePass\")' class=\"xref\"> Figure 38</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Enter Old Password and New Password. Then click <b>Submit</b>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">After successfully changing the password, webserver is\n" +
"restarted. See <a href='javascript:parent.parent.parent.showAnchor(\"Afterchange\")' class=\"xref\"> Figure 39</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">User has to re-login after successful restart of webserver.\n" +
"Only one tomcat user can change the password at a time.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Alphanumeric characters are permitted.<p>\n" +
"The following special characters are not permitted &amp; &lt; &gt;\n" +
"' \" / \\</p>\n" +
"<p>\n" +
"Spaces are not permitted.</p>\n" +
"<p>\n" +
"Minimum password length is 8 characters.</p>\n" +
"<p>\n" +
"Webserver is restarted after clicking the Submit button</p>\n" +
"</dd></dl><br /><p>\n" +
"If one AdminUI user changes password, all the other users must\n" +
"re-login.</p>\n" +
"<p>\n" +
"For security reasons, AdminUI encrypts passwords. After successful\n" +
"execution of the procedure, new password in the user database file\n" +
"is encrypted automatically.</p>\n" +
"</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"changePass\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE38\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Figure_38.png.png\" border=\"0\" width=\"790\" height=\"506\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 38 &nbsp; Changing AdminUI Password</i></p></div>\n" +
"<div style=\"margin-top: 12pt\"><a name=\"Afterchange\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE39\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Figure_39.png.png\" border=\"0\" width=\"790\" height=\"506\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 39 &nbsp; After Successful Password Change</i></p></div>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_20=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"BusyHourConfig\"></a><span class=\"CHAPNUMBER\">5.20 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_gwg4\"></a><a name=\"CHAPTER5.20\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Busy Hour\n" +
"Configuration</a></span></h2>\n" +
"\n" +
"<p>\n" +
"This section describes Busy Hour Configuration.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_20_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.20.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_bx1x\"></a><a name=\"CHAPTER5.20.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Overview</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Busy Hours are created from Busy Hour criteria and Busy Hour support.\n" +
"There are a number of criteria for each support. Busy Hour support\n" +
"is connected to one or more measurements (fact table) in a Tech Pack.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Some CPP Busy Hour Aggregations for LTE nodes might appear\n" +
"in a <tt class=\"file-path\">failed</tt> state as LTE does not implement\n" +
"all CPP counters.<p>\n" +
"Mtraftype statistics must beat CLUSTER level for TRDIP DAYBH data\n" +
"to get loaded.</p>\n" +
"</dd></dl><br />\n" +
"<p>\n" +
"Busy Hour support contains two types of placeholders: product and\n" +
"custom placeholder.</p>\n" +
"\n" +
"<p>\n" +
"Criteria in product placeholders are defined when the Tech Pack\n" +
"is developed and cannot be edited.</p>\n" +
"\n" +
"<p>\n" +
"Criteria in custom placeholders are used when the end user (admin)\n" +
"wants to create a new or edit an existing criteria with AdminUI. Criteria\n" +
"in custom placeholders can be added, removed, and edited using AdminUI\n" +
"or by Ericsson.</p>\n" +
"\n" +
"<p>\n" +
"Complete the following steps to create Busy Hour view of the Tech\n" +
"Pack:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Select <b>Busy Hour Configuration</b> on AdminUI\n" +
"GUI.</li>\n" +
"<li class=\"UNORD\">Select required Tech Pack from the drop-down list and\n" +
"click <b>Show</b>.</li>\n" +
"<li class=\"UNORD\">Select the measurement type to see what product or custom\n" +
"placeholders are defined for that measurement type, see <a href='javascript:parent.parent.parent.showAnchor(\"SelectPlaceholder\")' class=\"xref\">Section  5.20.2</a>.</li>\n" +
"<li class=\"UNORD\">Define Busy Hour rules for each measurement type as\n" +
"outlined in <a href='javascript:parent.parent.parent.showAnchor(\"UseBusyHourConfigUI\")' class=\"xref\">Section  5.20.3</a>.</li>\n" +
"<li class=\"UNORD\">Click on the Tech Pack to return to the main page to\n" +
"select <b>Update Busy Hours</b> to activate the changes.</li>\n" +
"<li class=\"UNORD\">After the Busy Hour criteria is defined and activated,\n" +
"run the AggregationRuleCopy under Set Type Maintenance and Package\n" +
"DWH_MONITOR from the AdminUI.</li>\n" +
"<li class=\"UNORD\">After executing AggregationRuleCopy, the user must run\n" +
"UpdateMonitoring set under Set Type Maintenance and Package DWH_MONITOR\n" +
"from the AdminUI.</li></ul>\n" +
"\n"+
"</div>\n";

var C5_20_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"SelectPlaceholder\"></a><span class=\"CHAPNUMBER\">5.20.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_s8ur\"></a><a name=\"CHAPTER5.20.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Selecting\n" +
"Placeholder</a></span></h3>\n" +
"\n" +
"<p>\n" +
"An example of the product and custom placeholders defined for measurement\n" +
"type <tt class=\"file-path\">DC_E_CMN_STS_C7SL1BH </tt> for sample Tech\n" +
"Pack <tt class=\"file-path\">DC_E_CMN_STS:((4))</tt> is shown in <a href='javascript:parent.parent.parent.showAnchor(\"ProductCustomPlaceholder\")' class=\"xref\"> Figure 40</a>.</p>\n" +
"\n" +
"<p>\n" +
"There are several operations available in this GUI: it is possible\n" +
"to <tt class=\"file-path\">enable</tt> or <tt class=\"file-path\">disable</tt> placeholders, and define the required criteria for any custom placeholder\n" +
"as outlined in <a href='javascript:parent.parent.parent.showAnchor(\"ProductCustomPlaceholder\")' class=\"xref\"> Figure 40</a>.</p>\n" +
"\n" +
"<p>\n" +
"See <a href='javascript:parent.parent.parent.showAnchor(\"PlaceholderParameters\")' class=\"xref\"> Table 13</a> for further details\n" +
"on each of the parameters listed.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"ProductCustomPlaceholder\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE40\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-SelectingPlaceholder.jpg\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 40 &nbsp; Product and Custom Placeholder Main Screen</i></p></div>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><a name=\"PlaceholderParameters\"></a>Placeholders that appear in italics and Tech Packs that have\n" +
"an asterisk (*) are edited but changes are not yet activated in the\n" +
"database.</dd></dl><br />\n" +
"\n" +
"<a name=\"TABLE13\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 13 &nbsp;&nbsp; Placeholder Parameters</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Field</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Description</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Values</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Type</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p><b class=\"object\">PPx</b></p><br />\n" +
"<p>Indicates that it is a product placeholder. This cannot be modified.</p><br />\n" +
"<p><b class=\"object\">CPx</b></p><br />\n" +
"<p>Indicates that it is a custom placeholder. This can be modified.</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p><img src=\"15_1543-CSA11363_1Uen.T-Disabledredsquare.jpg\" border=\"0\" width=\"14\" height=\"14\" class=\"tab0\" /></p><br />\n" +
"<p>Click this icon to <tt class=\"file-path\">disable</tt> the placeholder</p><br />\n" +
"<p><img src=\"15_1543-CSA11363_1Uen.T-greentriangleenabled.jpg\" border=\"0\" width=\"17\" height=\"18\" class=\"tab0\" /></p><br />\n" +
"<p>Click this icon to <tt class=\"file-path\">enable</tt> the placeholder</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Description</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>This is the name assigned to the placeholder.</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"&nbsp;\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Busy Hour Type</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>The Busy Hour Type associated with the placeholder.</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>See <a href='javascript:parent.parent.parent.showAnchor(\"BusyHourTypeGUI\")' class=\"xref\"> Figure 43</a> and <a href='javascript:parent.parent.parent.showAnchor(\"BusyHourTypes\")' class=\"xref\"> Table 15</a> for more detail.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Enabled</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Indicates if the placeholder is enabled or disabled.</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"&nbsp;\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C5_20_2_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">5.20.2.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_lw42\"></a><a name=\"CHAPTER5.20.2.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Enabling or Disabling Product Place Holder\n" +
"through CLI Script</a></span></h4>\n" +
"\n" +
"<p>\n" +
"It is possible to <tt class=\"file-path\">enable</tt> or <tt class=\"file-path\">disable</tt> the active Product Placeholder through CLI.</p>\n" +
"\n" +
"<p>\n" +
"To <tt class=\"file-path\">enable</tt> or <tt class=\"file-path\">disable</tt> any particular Product Placeholder for any Tech Pack, follow these\n" +
"steps:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on ENIQ server as <tt class=\"file-path\">dcuser</tt> using SSH. In a Multi-Blade deployment, run these steps on the Coordinator\n" +
"Blade:</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to the following directory:<p>\n" +
"<tt class=\"input\"><b>cd /eniq/sw/installer</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following script:<p>\n" +
"<tt class=\"input\"><b>./disableOrEnableBusyHourSets.bsh <i class=\"var\">&lt;source_tp&gt;</i> <i class=\"var\">&lt;set_name&gt;</i> <i class=\"var\">&lt;PP&gt;</i> <i class=\"var\">&lt;disable/enable&gt;</i></b></tt><br />where,</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><tt class=\"file-path\">source_tp</tt> = Techpack name</li>\n" +
"<li class=\"UNORD\"><tt class=\"file-path\">set_name</tt> = Measurement Type</li>\n" +
"<li class=\"UNORD\"><tt class=\"file-path\">PP</tt> = Product Placeholder\n" +
"which is enabled or disabled</li>\n" +
"<li class=\"UNORD\"><tt class=\"file-path\">disable/enable </tt>= Status which\n" +
"is enabled or disabled</li></ul></li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>To check the status of Product Placeholders of a particular\n" +
"measurement type in the <strong class=\"MEDEMPH\">Busy Hour Configuration</strong>, web\n" +
"server service must be restarted.</dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

var C5_20_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"UseBusyHourConfigUI\"></a><span class=\"CHAPNUMBER\">5.20.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_6wjj\"></a><a name=\"CHAPTER5.20.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Using\n" +
"Busy Hour Configuration UI</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Click <img src=\"15_1543-CSA11363_1Uen.T-iconforplaceholder.jpg\" border=\"0\" width=\"27\" height=\"22\" class=\"tab0\" /> for any placeholder to display the GUI which shows the parameters\n" +
"that exist for that placeholder, see <a href='javascript:parent.parent.parent.showAnchor(\"BHCplaceholderMainUI\")' class=\"xref\"> Figure 41</a>.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"BHCplaceholderMainUI\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE41\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-UsingBHConfigUI.jpg\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 41 &nbsp; Busy Hour Custom Placeholder Main User Interface</i></p></div>\n" +
"<p>\n" +
"<b>Save placeholder</b> and <b>Clear placeholder</b> are only visible for custom placeholders as it is not possible to\n" +
"modify product placeholders through the Busy Hour Configuration User\n" +
"Interface. <b>Save placeholder</b> saves the changes to\n" +
"the database, <b>Clear placeholder</b> clears all data entered\n" +
"by the user.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>It is important to remember that the changes are not activated\n" +
"unless the <b>Update Busy Hours</b> is selected. This does\n" +
"not apply to changes done to <tt class=\"file-path\">Description</tt> values.</dd></dl><br />\n" +
"<p>\n" +
"Busy Hour placeholder parameters are described in <a name=\"BusyHourParameters\" href='javascript:parent.parent.parent.showAnchor(\"BusyHourParameters\")' class=\"xref\"> Table 14</a>.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE14\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 14 &nbsp;&nbsp; Busy Hour Parameters</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"33%\">\n" +
"\n" +
"<p>Variable</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"33%\">\n" +
"\n" +
"<p>Description</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"34%\">\n" +
"\n" +
"<p>Example</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Description</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>This is a short description of the criteria.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>This is a free text field.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Sources</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>There are a number of source tables in the criteria. Source\n" +
"tables are used to calculate the actual Busy Hour. If there is more\n" +
"than one source table, it is possible to use the <b class=\"object\">key</b> and/or the <b class=\"object\">where</b> parameter to define how the different\n" +
"tables are used in the view creation. Source tables are selected from\n" +
"any <tt class=\"file-path\">active</tt> Tech Pack installed on the server\n" +
"but only DIM, raw, or count tables can be used.</p><br />\n" +
"<p>It is possible to type in the source table name in the Typename\n" +
"field manually. This means the corresponding Tech Pack need not be\n" +
"installed on the server. However, as the free text input in this field\n" +
"is not verified by the Busy Hour feature, it is important that the\n" +
"data input is correct. <sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote14-1\")'>(1)</a></sup></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>Use<img src=\"15_1543-CSA11363_1Uen.T-dotdotdot.gif\" border=\"0\" width=\"16\" height=\"27\" class=\"tab0\" /> to see the list of available\n" +
"tables for any installed Tech Pack.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Where</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Contains the where part of the Busy Hour view creation.\n" +
"It is possible to define additional conditions for the create view\n" +
"clause.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>This can be left empty.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Formula</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Contains the actual formula used to calculate the Busy\n" +
"Hour from the defined source tables. This formula must return a numeric\n" +
"value. Result of this calculation is cast to an sql data type numeric(18,8)\n" +
"in the Create View clause. Where columns from more than one source\n" +
"table are required, the table of the used column is defined in the\n" +
"clause as table.column.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>This is a free text field. Ensure that the formula is a\n" +
"valid calculation.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Keys</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>If there is more than one source table, the user can use\n" +
"the <b class=\"object\">key</b> and/or the <b class=\"object\">where</b> parameter\n" +
"to define how the different tables are used in the view creation.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>Use<img src=\"15_1543-CSA11363_1Uen.T-dotdotdot.gif\" border=\"0\" width=\"16\" height=\"27\" class=\"tab0\" /> to see the list of available\n" +
"keys or to define new keys for this placeholder.</p><br />\n" +
"<p>See <a href='javascript:parent.parent.parent.showAnchor(\"PlaceholderKeyGui\")' class=\"xref\"> Figure 42</a> for more detail.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Busy Hour Type</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Defines the Busy Hour type of the criteria. There are four\n" +
"different types of aggregations to select from: Timelimited, Slidingwindow,\n" +
"Timelimited + Timeconsistent and Slidingwindow + Timeconsistent.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>See <a href='javascript:parent.parent.parent.showAnchor(\"BusyHourTypeGUI\")' class=\"xref\"> Figure 43</a> and <a href='javascript:parent.parent.parent.showAnchor(\"BusyHourParameters\")' class=\"xref\"> Table 14</a> for more detail.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Mapped Types</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>A criteria or support pair is attached to a number of fact\n" +
"tables. This means that the daybh is calculated separately for all\n" +
"these fact tables. The Mapped Types field allows the user to limit\n" +
"the number of actual aggregations for this criteria.</p><br />\n" +
"<p>Mapped types contain a list of all the fact tables that are affected\n" +
"by this criteria.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>Click the <b class=\"object\">Enabled</b> button to set the target\n" +
"tables for aggregation.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Enabled</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"33%\">\n" +
"<p>Flag is set to <tt class=\"file-path\">enable</tt> or <tt class=\"file-path\">disable</tt>.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>Setting <tt class=\"file-path\">enable</tt> or <tt class=\"file-path\">disable</tt> affects RANKBH aggregations. If Busy Hour placeholder\n" +
"is enabled, RANKBH aggregations are generated. If Busy Hour placeholder\n" +
"is disabled, then those aggregations are not generated for that Busy\n" +
"Hour. <sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote14-2\")'>(2)</a></sup></p>\n" +
"</td></tr></table><p class=\"tnote\"><a name=\"tnote14-1\">(1) &nbsp;</a>Replace blank spaces in source names\n" +
"with the underscore (_) character. For example, SOURCE_NAME1, SOURCE_NAME2.<br /></p><p class=\"tnote\"><a name=\"tnote14-2\">(2) &nbsp;</a>If flag is set on a placeholder that is being edited,\n" +
"aggregations are not generated until the placeholder is activated.<br /></p><br />\n" +
"<p>\n" +
"The Placeholder CPO key GUI is shown in <a href='javascript:parent.parent.parent.showAnchor(\"PlaceholderKeyGui\")' class=\"xref\"> Figure 42</a>.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"PlaceholderKeyGui\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE42\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-PlaceholderKeyGuiUpdated.eps.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 42 &nbsp; Placeholder Key GUI</i></p></div>\n" +
"<p>\n" +
"<b>Key Name</b> defines the name of the key in the source\n" +
"table. See relevant Tech Pack description for more details.</p>\n" +
"\n" +
"<p>\n" +
"<b>Key Value</b> defines the value of the key in the\n" +
"source table and varies according to the report required.</p>\n" +
"\n" +
"<p>\n" +
"The Busy Hour Type GUI is shown in <a href='javascript:parent.parent.parent.showAnchor(\"BusyHourTypeGUI\")' class=\"xref\"> Figure 43</a>.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"BusyHourTypeGUI\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE43\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-BusyHourTypeGuiUpdated.eps.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 43 &nbsp; Busy Hour Type GUI</i></p></div>\n" +
"<p>\n" +
"Parameters that are defined for the various Busy Hour Type are\n" +
"shown in <a name=\"BusyHourTypes\" href='javascript:parent.parent.parent.showAnchor(\"BusyHourTypes\")' class=\"xref\"> Table 15</a>.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE15\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 15 &nbsp;&nbsp; Busy Hour Types</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Type</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Description</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Timelimited</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>This is the standard busy hour type. It is calculated from\n" +
"x:00 to (x+1):00 where x is an hour of the day from 0 to 23. Busiest\n" +
"Hour is the hour with highest value from the defined busy hour criteria.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Slidingwindow</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>This allows the Busy Hour Window (exactly 1 hour long)\n" +
"to &ldquo;slide&rdquo; or start at an offset of incoming granularity.\n" +
" </p><br />\n" +
"<p>This means that for every one hour, four busy hours will be calculated\n" +
"for 15 min granularity. </p><br />\n" +
"<p>00:00 &ndash; 01:00, 00:15 &ndash; 01:15, 00:30 &ndash; 01:30,\n" +
"00:45 &ndash; 01:45, and so on. This gives a total of 96 busy hours\n" +
"instead of the usual 24 as in Time Limited. The Aggregation action\n" +
"takes the busiest hour from the 96 and saves it to the DAYBH table.\n" +
"In Slidingwindow, busy hour can span across hour of a day. This will\n" +
"have two hours in busy hour table.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Timelimited + Timeconsistent</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>This allows the ranking of a busy hour based on long-time\n" +
"average. So instead of looking at a single day in RAW measurement\n" +
"it is possible to look back as far as the number of days (Lookback)\n" +
"specified in the criteria for the busy hour. </p><br />\n" +
"<p>When the busy hour is calculated, first the average busiest hour\n" +
"is calculated from the last number of days (up to Lookback). </p><br />\n" +
"<p>Then the latest busy hour is calculated from the previous day\n" +
"as in the flow above (Time Limited BH). If this busy hour is the same\n" +
"or plus (P Threshold)/minus (N Threshold) hours from the average busiest\n" +
"hour, then it is deemed a valid busy hour. The values for P Threshold\n" +
"(Positive Threshold) and N Threshold (Negative Threshold) are specified\n" +
"in the criteria of the BH.</p><br />\n" +
"<p>If it is outside this threshold value the next busiest hour is\n" +
"selected. It too is tested against the Threshold value. This continues\n" +
"until a busy hour within the threshold is found.</p><br />\n" +
"<p>This method filters out occasional peaks in the DAYBH.</p><br />\n" +
"<p>Valid input for Lookback is up to 90 days.</p><br />\n" +
"<p>Valid input for P or N Threshold values is max and min values\n" +
"of the Measurement Type.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Slidingwindow + Timeconsistent</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>This is the same as Timeconsistent but a single busy hour\n" +
"is calculated the same way as in Slidingwindow.</p><br />\n" +
"<p>Valid input for Lookback is up to 90 days.</p><br />\n" +
"<p>Valid input for P or N Threshold values is max and min values\n" +
"of the Measurement Type.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>PeakRop</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>This is the highest ROP in a day matching the defined criteria.\n" +
"Same is reflected in the busy hour table.</p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"Parameters that are defined for various Busy Hour Type are shown\n" +
"in <a name=\"BysyHourTypeParameterMatrix\" href='javascript:parent.parent.parent.showAnchor(\"BysyHourTypeParameterMatrix\")' class=\"xref\"> Table 16</a>.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE16\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 16 &nbsp;&nbsp; Busy Hour Type Parameter Matrix</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\">\n" +
"&nbsp;\n" +
"</th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Timelimited</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Slidingwindow</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Timelimited + Timeconsistent</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Slidingwindow + Timeconsistent</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"100%\">\n" +
"\n" +
"<p>PeakRop</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p><strong class=\"MEDEMPH\">Lookback</strong></p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>-</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>-</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Y</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Y</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"100%\">\n" +
"<p>-</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p><strong class=\"MEDEMPH\">Positive Threshold</strong></p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>-</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>-</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Y</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Y</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"100%\">\n" +
"<p>-</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p><strong class=\"MEDEMPH\">Negative Threshold</strong></p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>-</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>-</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Y</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Y</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"100%\">\n" +
"<p>-</p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"To create custom placeholders for ELEMBH the following keys requires\n" +
"modifications:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ELEMENT_TYPE --&gt; Give Node Type as value. For example,\n" +
"REDB.</li>\n" +
"<li class=\"UNORD\">ELEMENT_NAME --&gt; Give Node Name as an input.</li>\n" +
"<li class=\"UNORD\">Key Name - ELEMENT_TYPE: Source table is left blank\n" +
"and Key Value is set to Node Type. Example for Redback: Key Value\n" +
"- REDB.</li>\n" +
"<li class=\"UNORD\">Key Name - ELEMENT_NAME: The Key Value is ELEMENT_NAME.\n" +
"Change it to node name.</li></ul>\n" +
"<p>\n" +
"Example for REDBACK Tech Pack:</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE44\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-REDBACK.png.png\" border=\"0\" width=\"788\" height=\"52\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 44 &nbsp; Key Modifications</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_20_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">5.20.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_8u7b\"></a><a name=\"CHAPTER5.20.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Viewing Busy Hour GUI Logs</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To view log files using command line:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server as <tt class=\"file-path\">dcuser</tt> using SSH.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Enter the following to print the contents of the logs\n" +
"for a given date:<p>\n" +
"<tt class=\"input\"><b>- cd /eniq/log/sw_log/busyhourcfg/</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>- cat busyhourcfg.log.<i class=\"var\">&lt;year&gt;</i>-<i class=\"var\">&lt;month&gt;</i>-<i class=\"var\">&lt;day&gt;</i></b></tt></p>\n" +
"<p>\n" +
"Where <tt class=\"file-path\">&lt;year&gt;</tt>, <tt class=\"file-path\">&lt;month&gt;</tt>, and <tt class=\"file-path\">&lt;day&gt;</tt> are the required date values.</p>\n" +
"</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Always <tt class=\"file-path\">disable</tt> Busy Hour\n" +
"configuration using the Busy Hour criteria through AdminUi-Busy Hour\n" +
"Configuration.</li>\n" +
"<li class=\"UNORD\">Do not make measurement type entries <tt class=\"file-path\">inactive</tt> under AdminUi-Type Configuration. This causes some sets to fail\n" +
"with the error <tt class=\"output\">Partition not found</tt>. This is because,\n" +
"partition plan is not updated if the measurement type is made <tt class=\"file-path\">inactive</tt> from AdminUi-Type Configuration.</li></ul></dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

var C5_21=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"INTFPollingDelayConf\"></a><span class=\"CHAPNUMBER\">5.21 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_cif9\"></a><a name=\"CHAPTER5.21\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Configuring\n" +
"Polling Start Time</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Use AdminUI to configure the polling start time for the data files.\n" +
"This allows system administrators to change the polling start time\n" +
"per Tech Pack adapter interface. It provides the ability to tune the\n" +
"ENIQ statistics to make the data available sooner in the database\n" +
"by matching the time with when the data files are available on the\n" +
"OSS.</p>\n" +
"\n" +
"<p>\n" +
"For Example:</p>\n" +
"\n" +
"<p>\n" +
"For a particular Tech Pack adapter interface is schedule to run\n" +
"every 15 minutes. Instead of running at 15th Min, polling can be changed\n" +
"to say 4th Min. This will be done by changing the polling start time\n" +
"in <strong class=\"MEDEMPH\">Change To</strong> column to 4 minutes. Now it\n" +
"make the scheduler to execute after 4th minute for first time and\n" +
"after that it will continue to execute at an interval of 15 minutes.</p>\n" +
"\n" +
"<p>\n" +
"Do the following to configure polling start time:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">In AdminUI, click <strong class=\"MEDEMPH\">Polling Start Time</strong> link\n" +
"under Configuration section of left menu bar. See <a href='javascript:parent.parent.parent.showAnchor(\"PollingStartTimeConfiguration\")' class=\"xref\"> Figure 45</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><a name=\"Figure38\"></a>For the adapter interface for which\n" +
"user wants to change the start polling time, select the time using\n" +
"drop-down list provided under column <strong class=\"MEDEMPH\">Change To</strong> for the respective adapter interface. See <a href='javascript:parent.parent.parent.showAnchor(\"PollingStartTimeConfiguration\")' class=\"xref\"> Figure 45</a>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Press <strong class=\"MEDEMPH\">Save</strong> after making changes.\n" +
"See <a href='javascript:parent.parent.parent.showAnchor(\"PollingStartTimeConfiguration\")' class=\"xref\"> Figure 45</a>.</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Value indicates time in minutes.<p>\n" +
"Each interface is having a different time range between [0-59]\n" +
", [0-14] and [0-4] to set the pooling start time in <strong class=\"MEDEMPH\">Change To</strong> column. Interface that are schedule to run every\n" +
"5 minutes have time range between [0-4],interface that are schedule\n" +
"to run every 60 minutes have time range between [0-59] and interface\n" +
"that are schedule to run every 15 minutes have time range between\n" +
"[0-14].</p>\n" +
"</dd></dl><br />\n" +
"<div style=\"margin-top: 12pt\"><a name=\"PollingStartTimeConfiguration\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE45\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Polling_Start_Time_Configuration.png.png\" border=\"0\" width=\"782\" height=\"512\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 45 &nbsp; Polling Start Time Configuration</i></p></div>\n" +
"<p>\n" +
" </p>\n" +
"\n" +
"\n"+
"</div>\n";

var C5_22=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.22 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_pzrj\"></a><a name=\"CHAPTER5.22\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitoring Counter Volumes</a></span></h2>\n" +
"\n" +
"<p>\n" +
"As part of AdminUI counter volume monitoring, the counter volume\n" +
"calculation involves the average of the normalized counter volume\n" +
"of 1 minute, 5 minutes, 15 minutes, 30 minutes, 1 hour, 6 hours, 12\n" +
"hours and 24 hours to 15 minutes equivalent. BULKCM is considered\n" +
"and normalized to 15 minutes ROP value by allowing 1 million counters\n" +
"for every 3K of network cells.</p>\n" +
"\n" +
"<p>\n" +
"AdminUI Counter Volume represents the average counters parsed per\n" +
"PM file ROP time for the last 96 ROPs. Even in case of recovery or\n" +
"backlog, AdminUI displays counter volume on basis of PM file ROP time\n" +
"parsed.</p>\n" +
"\n" +
"<p>\n" +
"PM data for Granularity must be &lt; 15 Min, that is , 1 minute\n" +
"and 5 minute can take longer to parse and load within ROP time, but\n" +
"gets parsed and loaded over a period. ENIQ do not guarantee parsing\n" +
"and loading of lower granularity to happen with in the same ROP time.</p>\n" +
"\n" +
"<p>\n" +
"As 5 minute ROP where, INTF is scheduled to run at every 5 minute,\n" +
"there is no guarantee that 5 minute ROP is parsed and loaded with\n" +
"in 5 minute. This behavior is because, all Interface's share the same\n" +
"execution slot and there is no dedicated slot for the lower granularity.</p>\n" +
"\n" +
"<p>\n" +
"For Example: </p>\n" +
"\n" +
"<p>\n" +
"In backlog scenario, there are 30000 PM files to be parsed of 15\n" +
"minute ROP time from 12:00 Hrs to 14:00 Hrs, that is, 8 ROPs of 15\n" +
"min.</p>\n" +
"\n" +
"<p>\n" +
"If counter volume for each ROP is received as 100 million and parsing\n" +
"started at 14:00 Hrs, then total counter volume received is 800 million\n" +
"for 8 ROPs. Hence, average is 100 million and the same is shown in\n" +
"AdminUI for ROPs received.</p>\n" +
"\n" +
"<p>\n" +
"AdminUI Counter Volume is shown for last 96 ROPs.</p>\n" +
"\n" +
"<p>\n" +
"For SO-EM, 1 minute and 1440 minutes(24Hours) ROP data is normalized\n" +
"to 15 minutes equivalent.</p>\n" +
"\n" +
"<p>\n" +
"1 million of 15-min ROP SO-EM counter volume is equivalent to 8\n" +
"million for 15 minutes ROP interval data from OSS.</p>\n" +
"\n" +
"<p>\n" +
"For example, in addition to the PM counter volume, every 30K network\n" +
"has additional counter volume of 10 million for BULKCM.</p>\n" +
"\n" +
"<p>\n" +
"During AdminUI login, <tt class=\"output\">Counter Volume exceeded permissible\n" +
"limit</tt> message is displayed if the counter volume loaded on\n" +
"an ENIQ-S server exceeds the counter volume supported for that deployment:</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE46\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-counterVolume_alert.png.png\" border=\"0\" width=\"709\" height=\"75\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 46 &nbsp; Counter Volume Information Message</i></p></div>\n" +
"<p>\n" +
"Detailed information is also available in: <b>AdminUI</b> &gt; <b>System Monitoring</b> &gt; <b>System Status</b> &gt; <b>Counter Volume</b>.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE47\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Ropwise_info.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 47 &nbsp; ROP Wise Information</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_23=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.23 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_tkqz\"></a><a name=\"CHAPTER5.23\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">AdminUI Database Corruption Alarm</a></span></h2>\n" +
"\n" +
"<p>\n" +
"AdminUI generates an alarm if it identifies any database corruption\n" +
"for handling the Rolling snapshot and OMBS Backup failures.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE48\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Capture.PNG.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 48 &nbsp; AdminUI Database Corruption Alarms</i></p></div>\n" +
"\n"+
"</div>\n";

var C5_24=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">5.24 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_nb1p\"></a><a name=\"CHAPTER5.24\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">AdminUI User Activity Logs</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Every adminUI user activity is captured under <tt class=\"input\"><b>/eniq/log/sw_log/adminui/localhost_access_log&lt;date&gt;.log</b></tt>.</p>\n" +
"\n" +
"<p>\n" +
"Logs captures:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">System IP from where the UI is launched</li>\n" +
"<li class=\"UNORD\">Logged user name to the UI</li>\n" +
"<li class=\"UNORD\">Date and time as per the ENIQ standard logging format</li>\n" +
"<li class=\"UNORD\">First line of the request made</li>\n" +
"<li class=\"UNORD\">HTTPS status code of the response</li>\n" +
"<li class=\"UNORD\">Time taken to process the request</li></ul>\n" +
"\n" +
"\n"+
"</div>\n";

