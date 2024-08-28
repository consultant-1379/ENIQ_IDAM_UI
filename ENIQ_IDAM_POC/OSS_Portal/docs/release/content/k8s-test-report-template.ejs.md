# K8S Test Reports for GUI Aggregator Lightweight

## Testing Environment

| Application | Version                  |
| ----------- | ------------------------ |
| Kubernetes  | <%= kubernetesVersion %> |
| Helm        | <%= helmVersion %>       |

## Baseline Description

| Service                              | Version                       |
| ------------------------------------ | ----------------------------- |
| eric-sec-key-management              | <%= secKeyManagement %>       |
| eric-sec-sip-tls                     | <%= secSipTls %>              |
| eric-data-distributed-coordinator-ed | <%= distributedCoordinator %> |

## Deployment Metrics

| Deployment Phase               | Time (seconds)                                                  |
|--------------------------------|-----------------------------------------------------------------|
| Install                        | <%= installFinishTime - installStartTime %>                     |
| Restart                        | <%= rolloutRestartFinishTime - rolloutRestartStartTime %>       |
| Rollback                       | <%= rollbackFinishTime - rollbackStartTime %>                   |
| Scale Out                      | <%= scaleOutFinishTime - scaleOutStartTime %>                   |
| Scale In                       | <%= scaleInFinishTime - scaleInStartTime %>                     |
| Baseline Upgrade               | <%= baselineUpgradeFinishTime - baselineUpgradeStartTime %>     |
| Latest Plus Upgrade            | <%= upgradeLatestPlusFinishTime - upgradeLatestPlusStartTime %> |
| Loss Of Service during upgrade | <%= lossOfService %>                                            |

## Docker Image Details

| Docker Image Property | Docker Image Property Value |
| --------------------- | --------------------------- |
| Name                  | <%= dockerImageName %>      |
| Tag                   | <%= dockerImageTag %>       |
| Size                  | <%= dockerImageSize %>      |
