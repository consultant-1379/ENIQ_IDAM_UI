var C39=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">39 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_u4yv\"></a><a name=\"CHAPTER39\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Check Monitor Job Results for the Internal\n" +
"Brocade SAN Switches</a></span></h1>\n" +
"\n"+
"</div>\n";

var C39_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">39.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ytaw\"></a><a name=\"CHAPTER39.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Overview</a></span></h2>\n" +
"\n" +
"<p>\n" +
"The internal Brocade switch monitoring job once configured as described\n" +
"in Configure Monitor Job for Internal Brocade SAN Switches, periodically\n" +
"monitors all the internal SAN switches, performs remedial actions\n" +
"as necessary and logs its actions. This section describes how to check\n" +
"the logs of the monitor job and view any alarms raised.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C39_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">39.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_oj9v\"></a><a name=\"CHAPTER39.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Prerequisites</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Monitoring job is configured as per the section <a href='javascript:parent.parent.parent.showAnchor(\"chl_Configure_monitor_job\")' class=\"link\"> Configure monitor job for internal\n" +
"brocade SAN Switches.</a></p>\n" +
"\n" +
"\n"+
"</div>\n";

var C39_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">39.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_tq5e\"></a><a name=\"CHAPTER39.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Steps to check the logs</a></span></h2>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\"> Log on to the following servers as <tt class=\"file-path\">root</tt> user:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ-S Standalone Server</li>\n" +
"<li class=\"UNORD\">ENIQ-S Multi-Blade (Coordinator) Server</li></ul></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">The Alarms raised as part of remedial measures are logged\n" +
"on ENIQ servers if any fault is identified. Check the alarms as follows:<br /><tt class=\"input\"><b>#ls -lrt /var/log/hwcomm/current_brocadeport_alarms_&lt;DATE_TIME&gt;.txt</b></tt><br /><br />If the file mention in previous step is present, run the\n" +
"following command to view the alarm information:<br /><tt class=\"input\"><b>#cat /var/log/hwcomm/current_brocadeport_alarms_&lt;DATE_TIME&gt;.txt</b></tt><br /><dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Perform necessary remedial action with the help of vendor\n" +
"support if the port is disabled.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check the <tt class=\"file-path\">/var/log/hwcomm/hwmonitor_monitor_&lt;DATE&gt;_0.log</tt> log file to view all the monitoring actions that are performed.<br /><tt class=\"input\"><b>#less /var/log/hwcomm/hwmonitor_monitor_20210520_0.log</b></tt></li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

