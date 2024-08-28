var C38=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><a name=\"chl_Configure_monitor_job\"></a><span class=\"CHAPNUMBER\">38 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_znw5\"></a><a name=\"CHAPTER38\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Configure\n" +
"Monitor Job for Internal Brocade SAN Switches</a></span></h1>\n" +
"\n"+
"</div>\n";

var C38_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">38.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_8eqx\"></a><a name=\"CHAPTER38.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Overview</a></span></h2>\n" +
"\n" +
"<p>\n" +
"This section describes the process of configuring the monitor job\n" +
"to monitor the internal Brocade switches on the C7000 enclosures.\n" +
"The internal brocade switch has SFP port used for connecting external\n" +
"device like external switch, SAN, NAS, OMBS, etc. This monitor job\n" +
"monitors this SFP ports.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If ENIQ is co-deployed with ENM and shares the chassis, then\n" +
"monitoring must be done from ENM MS server, no action is required\n" +
"from ENIQ servers.<p>\n" +
"If multiple ENIQ deployments are sharing the same chassis, then\n" +
"monitoring must be done only from any one of the ENIQ deployment.</p>\n" +
"</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C38_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">38.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_idey\"></a><a name=\"CHAPTER38.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Hardware Prerequisites</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Applicable for only C7000 brocade 16GB SAN switches.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C38_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">38.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_7od7\"></a><a name=\"CHAPTER38.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Out of Scope</a></span></h2>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Internal FC ports connected to blade servers.</li>\n" +
"<li class=\"UNORD\">External FC switches.</li></ul>\n" +
"\n"+
"</div>\n";

var C38_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">38.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ggq7\"></a><a name=\"CHAPTER38.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Procedure</a></span></h2>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the following servers as <tt class=\"file-path\">root</tt> user:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ-S Standalone Server</li>\n" +
"<li class=\"UNORD\">ENIQ-S Multi-Blade (Coordinator) Server</li></ul></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following command to Install or Upgrade the\n" +
"HWcomm package:<br /><tt class=\"input\"><b>#rpm -Uvh /net/&lt;MWS IP&gt;/&lt;Latest_O&amp;M\n" +
"Media&gt;/om_linux//HWcomm/ERIChwcomm_*.rpm</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Copy <tt class=\"file-path\">eniq_hw_template</tt> to <tt class=\"file-path\">/var/tmp</tt>.<br /><tt class=\"input\"><b>Example: # cp /opt/ericsson/hw_comm/etc/eniq_hw_template\n" +
"/var/tmp</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following command to check, if the required\n" +
"SAN switches information is available in <tt class=\"file-path\">eniq_hw_template</tt>:<br /><tt class=\"input\"><b># grep SANSW &lt;template path&gt;</b></tt><br /><br /><tt class=\"output\">Example:<br /># grep SANSW /var/tmp/eniq_hw_template<br />enclosure1_SANSW_IP1=<br />enclosure1_SANSW_IP2=<br />enclosure1_SANSW_1_bay=<br />enclosure1_SANSW_2_bay=<br />enclosure1_SANSW_username=<br />enclosure1_SANSW_password=<br />enclosure2_SANSW_IP1=<br />enclosure2_SANSW_IP2=<br />enclosure2_SANSW_1_bay=<br />enclosure2_SANSW_2_bay=<br />enclosure2_SANSW_username=<br />enclosure2_SANSW_password=<br /></tt><br />If it is a single enclosure, then <tt class=\"file-path\">enclosure1_SANSW_*</tt>  fields must be updated. If there are two enclosures, then <tt class=\"file-path\">enclosure1_SANSW_*</tt> and <tt class=\"file-path\">enclosure2_SANSW_*</tt>  fields are to be updated. See <em class=\"LOWEMPH\">Site Engineering\n" +
"Data for ENIQ Stats on X86</em> <a href='javascript:parent.parent.parent.showAnchor(\"Reference37\")' class=\"xref\">Reference [37]</a> document\n" +
"for switch details..</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check the script usage for configure action:<br /><br /><tt class=\"input\"><b># /opt/ericsson/hw_comm/bin/hw_monitor.sh configure -h</b></tt><br /><br />Sample Output:<tt class=\"output\"> # /opt/ericsson/hw_comm/bin/hw_monitor.sh\n" +
"configure -h<br />usage: hw_monitor.py configure [-h] [--cron_freq\n" +
"CRON_FREQ] --sedfile SEDFILE</tt><br /><br />This script is used\n" +
"to configure cron job for internal SAN Switches.<br /><br />optional\n" +
"arguments:<br /> -h, --help show this help message and exit<br /><br />optional arguments:<br /> --cron_freq CRON_FREQ supported cron frequency\n" +
"values are 0 : Monitor job will run immediately and only once. 1,2,3,4,6,8,12\n" +
"and 24 : Other supported values indicate the periodicity in hours\n" +
"and Monitor job will run once in every CRON_FREQ hours.<br /><br />required\n" +
"arguments:<br /> --sedfile SEDFILE SEDTemplate file of the Deployment.<br /><br />Example: # /opt/ericsson/hw_comm/bin/hw_monitor.sh configure\n" +
"--sedfile /var/tmp/depl_sed.txt --cron_freq 1</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Decide at what time interval, the Brocade switch monitoring\n" +
"is to be performed.<br />The time interval is in hours and must be\n" +
"set to any of the values 0, 1, 2, 3, 4, 6, 8, 12 and 24.<br />The value\n" +
"0 must be used to run the monitor job immediately and only once. The\n" +
"default value is 4. The monitoring job will run once in 4 hours, if\n" +
"no cron_freq is specified.<br /><br />Execute the following command\n" +
"to configure the monitoring job with the default frequency of once\n" +
"in 4 hours.<br /><tt class=\"input\"><b># /opt/ericsson/hw_comm/bin/hw_monitor.sh configure\n" +
"--sedfile &lt;template path&gt;</b></tt><br /><br />To set the monitoring\n" +
"frequency to a non default value , execute the following command.<br /><tt class=\"input\"><b># /opt/ericsson/hw_comm/bin/hw_monitor.sh configure --sedfile\n" +
"&lt;template path&gt; --cron_freq &lt;frequency&gt;</b></tt><br /><br />where, <tt class=\"file-path\">&lt;template path&gt;</tt> is the updated HW data file for\n" +
"ENIQ and <tt class=\"file-path\">&lt;frequency&gt;</tt> refers to the frequency\n" +
"of monitor job to be run.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">If the monitoring script fails, follow the <a href='javascript:parent.parent.parent.showAnchor(\"table31_error\")' class=\"link\"> Table 31</a> to resolve the errors.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">If the script is executed successfully, then verify if\n" +
"cron job is configured as desired.<br /><tt class=\"input\"><b># cat /etc/cron.d/sansw_monitor</b></tt><br /><tt class=\"output\">[root@ENIQ]# cat /etc/cron.d/sansw_monitor<br /> 0 */2\n" +
"* * * root [ -f /opt/ericsson/hw_comm/bin/hw_monitor.sh ] &amp;&amp;\n" +
"/opt/ericsson/hw_comm/bin/hw_monitor.sh monitor</tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">If the cronjob is configured successfully, then delete\n" +
"the input template file in <tt class=\"file-path\">/var/tmp</tt>:<br /><tt class=\"input\"><a name=\"table31_error\"></a><b># rm -rf /var/tmp/eniq_hw_template</b></tt></li></ol>\n" +
"\n" +
"<a name=\"TABLE30\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 30 &nbsp;&nbsp; </caption>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>ERROR</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>RESOLUTION</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>ERROR: Switch model xx.xxx is not supported</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Monitoring of only 16G Brocade SAN Switches (C8S46A) is\n" +
"supported. </p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>ERROR: Failed to connect to 10.xxx.xx.xxx <br />Original\n" +
"error: Authentication failed</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Validate the credentials provided in SED for the mentioned\n" +
"IP in error and update SED file with valid credentials and rerun step\n" +
"4.</p>\n" +
"</td></tr></table>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>All the message outputs to the screen are captured in the <tt class=\"file-path\">/var/log/hwcomm/hwmonitor_configure_&lt;DATE&gt;_0.log</tt> log file.<p>\n" +
"Reconfiguring the monitor script is necessary only if any of the\n" +
"following activities is performed:<br />&mdash; ENIQ restore<br />&mdash;\n" +
"Blade replacement<br />&mdash; C7000 SAN Switch configuration changes</p>\n" +
"</dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

