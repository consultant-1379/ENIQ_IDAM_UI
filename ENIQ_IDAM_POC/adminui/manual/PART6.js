var C6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_q298\"></a><a name=\"CHAPTER6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Start Day of the Week Configuration</a></span></h1>\n" +
"\n" +
"<p>\n" +
"ENIQ system supports any day of the week, which is set by operator\n" +
"as the first day of the week. This means that week aggregations are\n" +
"calculated according to new week calculation after updating first\n" +
"day of the week.</p>\n" +
"\n" +
"<p>\n" +
"Parameter value for the first day of the week is set in static\n" +
"property file. The value is read and used in the platform code.</p>\n" +
"\n" +
"<p>\n" +
"Do the following to change first day of the week and update ENIQ\n" +
"platform:</p>\n" +
"\n" +
"<p>\n" +
"Prerequisite:</p>\n" +
"\n" +
"<p>\n" +
"LV snapshots must be taken off the ENIQ filesystems before any\n" +
"upgrade. All ENIQ services must be <tt class=\"file-path\">inactive</tt> to have the system in a consistent state before taking the snapshot.\n" +
"These snapshots are used to perform a rollback if there is an error.</p>\n" +
"\n" +
"<p>\n" +
"For more details, see <a href='javascript:parent.parent.parent.showAnchor(\"EniqUpgradeProc\")' class=\"xref\">Reference [6]</a>.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the server as <tt class=\"file-path\">dcuser</tt> using SSH.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Type in the command-line <tt class=\"input\"><b>/eniq/sw/bin/startDayOfTheWeek.bsh</b></tt>.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Wait until the command is executed successfully.</dd></dl><br /></li></ol>\n" +
"<p>\n" +
"This command prompts the user to enter the first day of the week\n" +
"as following:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"output\">Enter start day of the week 	(Monday, Tuesday, Wednesday,\n" +
"Thursday, Friday, Saturday, Sunday): </tt> <br />Enter the day\n" +
"the user wants as the first day of the week and hit return.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"3\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the adminUI on the ENIQ server.<p>\n" +
"<tt class=\"file-path\">https://<i class=\"var\">&lt;server_name&gt;</i>:8443/adminui</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click the <b>ETLC set scheduling</b> link on\n" +
"the left hand menu.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Choose <b>Maintenance</b> from the <b>Set\n" +
"type</b> select box.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Choose <b>DWH_BASE</b> from the <b>package\n" +
"select</b> box.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">To run set <b>Update_Dates</b>, click start\n" +
"of a set.</li></ol>\n" +
"<div class=\"ADMON\"><span class=\"ADMONMSG2\">Caution!</span><p class=\"ADMONDESC\">\n" +
"Be careful while entering first day of the week. This feature must\n" +
"be used only once. If a customized value exists, then roll back to\n" +
"a snapshot before the customization. If a snapshot does not exist,\n" +
"the value cannot be changed.</p>\n" +
"</div>\n" +
"<p>\n" +
"To roll back to the point before the start day of the week configuration,\n" +
"see <a href='javascript:parent.parent.parent.showAnchor(\"EniqUpgradeProc\")' class=\"xref\">Reference [6]</a>.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>To aggregate the previous weeks based on the new first day\n" +
"of the week, it is required to run the manual reaggregation. It is\n" +
"recommended to run the reaggregation in batches to reduce performance\n" +
"degradation.</dd></dl><br />\n" +
"\n"+
"</div>\n";

