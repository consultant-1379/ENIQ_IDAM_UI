var C4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_xpkn\"></a><a name=\"CHAPTER4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Administering ENIQ-S System</a></span></h1>\n" +
"\n"+
"</div>\n";

var C4_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">4.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_oik7\"></a><a name=\"CHAPTER4.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">\n" +
"Monitoring ENIQ-S</a></span></h2>\n" +
"\n"+
"</div>\n";

var C4_1_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">4.1.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_125l\"></a><a name=\"CHAPTER4.1.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitoring ENIQ-S Services</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The ENIQ-S AdminUI monitors the ENIQ-S components installed on\n" +
"the ENIQ-S servers and SAP IQ. See <a href='javascript:parent.parent.parent.showAnchor(\"AdminUI\")' class=\"xref\">Section  5</a> for more\n" +
"information on monitoring using the AdminUI.</p>\n" +
"\n" +
"<p>\n" +
"If the AdminUI is not accessible, use the following command to\n" +
"check the status of the ENIQ-S services, if it is in <tt class=\"file-path\">active</tt>, <tt class=\"file-path\">inactive</tt>, or <tt class=\"file-path\">failed</tt> state:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on as <tt class=\"file-path\">root user</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following command: <br /><tt class=\"input\"><b># services -s eniq</b></tt><tt class=\"LITERALMONO\"></tt></li></ol>\n" +
"\n" +
"<table frame=\"void\" class=\"grd\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-connectd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-dwhdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-dwh_reader.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">failed</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-engine.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-esm.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-fls.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-licmgr.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-lwphelper.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-repdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-rmiregistry.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-roll-snap.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-scheduler.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p><tt class=\"output\">eniq-webserver.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr></table>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This displays all the ENIQ-S services that are available\n" +
"on the system. These services depend on the installed server type\n" +
"(Rack or Blade).</dd></dl><br />\n" +
"<p>\n" +
"Use the following command to check the detailed status of the NAS\n" +
"services:</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># services -s NAS -d</b></tt></p>\n" +
"\n" +
"<table frame=\"void\" class=\"grd\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"12%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"12%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p><tt class=\"output\">STATUS</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p><tt class=\"output\">SUB_STATE</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p><tt class=\"output\">STATETIME</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p><tt class=\"output\">DESCRIPTION</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"12%\">\n" +
"<p><tt class=\"output\">NASd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"12%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p><tt class=\"output\">disabled</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p><tt class=\"output\">running</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p><tt class=\"output\">&lt;Day_YYYY_MM_HH:MM:SS&gt;</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p><tt class=\"output\">Storage NASd Service</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"12%\">\n" +
"<p><tt class=\"output\">NAS-online.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"12%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p><tt class=\"output\">enabled</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"15%\">\n" +
"<p><tt class=\"output\">running</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p><tt class=\"output\">&lt;Day_YYYY_MM_HH:MM:SS&gt;</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p><tt class=\"output\">Milestone NAS Service0</tt></p>\n" +
"</td></tr></table>\n" +
"\n" +
"<p>\n" +
"ENIQ-S services can be made <tt class=\"file-path\">inactive</tt>, if necessary. For information on restarting ENIQ-S services, see\n" +
"commands in <a href='javascript:parent.parent.parent.showAnchor(\"smf.manage\")' class=\"xref\">Section  4.1.2</a>. For more information, see\n" +
"Systemd service management in <a href='javascript:parent.parent.parent.showAnchor(\"EniqServiceCommands\")' class=\"xref\">Section  8</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C4_1_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"smf.manage\"></a><span class=\"CHAPNUMBER\">4.1.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_figd\"></a><a name=\"CHAPTER4.1.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Managing Services\n" +
"Using Systemd</a></span></h3>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\"><a name=\"chl_4.1.2_Step1\"></a>To <tt class=\"file-path\">enable</tt> and start any ENIQ service, use the following command:<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl enable <i class=\"var\">&lt;service_name&gt;</i></b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl start <i class=\"var\">&lt;service_name&gt;</i></b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">To stop and <tt class=\"file-path\">disable</tt> any ENIQ\n" +
"service, use the following command:<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl stop <i class=\"var\">&lt;service_name&gt;</i></b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl disable <i class=\"var\">&lt;service_name&gt;</i></b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">If a service is in a <tt class=\"file-path\">failed</tt> state, it is necessary to clear the service. Use the following command:<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl reset-failed <i class=\"var\">&lt;service_name&gt;</i></b></tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Using reset- <tt class=\"file-path\">failed</tt>, clears the\n" +
"service from <tt class=\"file-path\">failed</tt> state and moves it\n" +
"to <tt class=\"file-path\">inactive</tt> state. If the service must\n" +
"be operational, then execute the commands mentioned in <a href='javascript:parent.parent.parent.showAnchor(\"chl_4.1.2_Step1\")' class=\"xref\"> Step 1</a>.</dd></dl><br /></li></ol>\n" +
"\n"+
"</div>\n";

var C4_1_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">4.1.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_rhzo\"></a><a name=\"CHAPTER4.1.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitoring SAP IQ and ASA</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The ENIQ AdminUI monitors SAP IQ and ASA. For more information,\n" +
"see <a href='javascript:parent.parent.parent.showAnchor(\"AdminUI\")' class=\"xref\">Section  5</a>.</p>\n" +
"\n" +
"<p>\n" +
"If the AdminUI is not accessible, check the status of SAP IQ and\n" +
"ASA from the command line.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on as the <tt class=\"file-path\">dcuser</tt> .</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following command:<p>\n" +
"<tt class=\"input\"><b># dbisql -c \"UID=DBA\" -host localhost -port <i class=\"var\">&lt;database\n" +
"port&gt;</i> -nogui</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">At the prompt, run the following:<p>\n" +
"For SAP IQ (DWHDB), run the command: <tt class=\"input\"><b>sp_iqstatus</b></tt>.</p>\n" +
"<p>\n" +
"For SAP ASA (REPDB), run the command: <tt class=\"input\"><b>sa_db_properties</b></tt>.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The default port number for DWHDB is <tt class=\"input\"><b>2640</b></tt>.\n" +
"The port number for REPDB is <tt class=\"input\"><b>2641</b></tt>.</dd></dl><br /></li></ol>\n" +
"<p>\n" +
"Check the usage of main space (Main IQ Blocks used). If the main\n" +
"space use is over 95% of the main database space, the database needs\n" +
"to be expanded. Contact Ericsson Support for assistance.</p>\n" +
"\n" +
"<p>\n" +
"Temp space (Temp IQ Blocks used) is used by IQ to handle large\n" +
"queries. It is allocated and released continuously. For this reason,\n" +
"sporadic monitoring of temp space is not useful. Filling up temp space\n" +
"leads to failure of one or more running queries (not to mention a\n" +
"substantial performance impact). If a query or ENIQ task fails because\n" +
"of temp space filling up, contact Ericsson Support for assistance.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C4_1_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">4.1.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_bwdb\"></a><a name=\"CHAPTER4.1.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitoring File System Usage</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The ENIQ AdminUI provides basic file system usage monitoring. See <a href='javascript:parent.parent.parent.showAnchor(\"AdminUI\")' class=\"xref\">Section  5</a> for more information.</p>\n" +
"\n" +
"<p>\n" +
"If the AdminUI is not accessible, check the file system usage from\n" +
"the command line.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">LV File Systems:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on as <tt class=\"file-path\">root</tt> user.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">For LV file systems, run the following command:<br /><tt class=\"input\"><b># df -hk | grep /dev/mapper</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check for the available space in the file system. If any\n" +
"of the file systems are over 90%, contact Ericsson Support.</li></ol>\n" +
"<p>\n" +
"The following is an example of output produced by the <tt class=\"file-path\"># df -hk | grep /dev/mapper</tt> command:</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE3\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Section_4.1.4_SAG_Document.PNG.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 3 &nbsp; Command Output</i></p></div>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">NAS File Systems:</strong></p>\n" +
"\n" +
"<p>\n" +
"If ENIQ is installed on a Blade, check the NAS file systems.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the NAS console as <tt class=\"file-path\">master</tt> user.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following command:<br /><tt class=\"input\"><b>storage fs list</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check for available space on the file systems. If any\n" +
"of the file systems are over 90%, contact Ericsson Support.</li></ol>\n" +
"<p>\n" +
"The following is an example of output produced by the <tt class=\"file-path\">storage fs list</tt> command:</p><pre class=\"prencd\">FS STATUS SIZE LAYOUT MIRRORS COLUMNS USE% NFS SHARED CIFS \n" +
"SHARED SECONDARY TIER POOL LIST\n" +
"\n" +
"========================= ====== ==== ====== ======= \n" +
"======= ==== ========== =========== ============== \n" +
"=========\n" +
"\n" +
"stats1-admin online 2.00G simple - - 3% yes no \n" +
"no stats1\n" +
"\n" +
"stats1-archive online 8.00G simple - - 0% yes no \n" +
"no stats1\n" +
"\n" +
"stats1-backup online 10.00G simple - - 1% yes no \n" +
"no stats1\n" +
"\n" +
"stats1-etldata online 50.00G simple - - 0% yes no \n" +
"no stats1\n" +
"\n" +
"stats1-fmdata online 1.00G simple - - 6% yes no \n" +
"no stats1\n" +
"\n" +
"stats1-home online 10.00G simple - - 1% yes no \n" +
"no stats1\n" +
"\n" +
".......................\n" +
"\n" +
".......................\n" +
"</pre><p></p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This list depends on the installation listed by the additional\n" +
"filesystems.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C4_1_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">4.1.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_4q8t\"></a><a name=\"CHAPTER4.1.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitoring the NAS Pool (Blade\n" +
"Only)</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Log on to the NAS console as <tt class=\"file-path\">master</tt> user\n" +
"and run the following command:</p>\n" +
"\n" +
"<p><tt class=\"input\"><b>storage pool free</b></tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><strong class=\"MEDEMPH\">This is applicable only where ENIQ is installed on\n" +
"a Blade.</strong></dd></dl><br />\n" +
"\n"+
"</div>\n";

var C4_1_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">4.1.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_5ozx\"></a><a name=\"CHAPTER4.1.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitoring the NAS Filesystems\n" +
"(Blade Only)</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To mount the NAS filesystems, both the <tt class=\"file-path\">NASd</tt> service and the <tt class=\"file-path\">NAS-online</tt> milestone\n" +
"must be in <tt class=\"file-path\">active</tt> state.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This is applicable only when ENIQ is installed on a Blade.</dd></dl><br />\n" +
"<p>\n" +
"To check this, run the following command:</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># services -s NAS</b></tt></p>\n" +
"\n" +
"<table frame=\"void\" class=\"grd\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"output\">NASd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"output\">NAS-online.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr></table>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>To manage a service, see to <a href='javascript:parent.parent.parent.showAnchor(\"smf.manage\")' class=\"xref\">Section  4.1.2</a>.</dd></dl><br />\n" +
"<p>\n" +
"The NAS-online milestone moves into <tt class=\"file-path\">active</tt> state after the <tt class=\"file-path\">NASd</tt> service is in <tt class=\"file-path\">active</tt> state (unless it is stopped manually).</p>\n" +
"\n" +
"<p>\n" +
"The following log file is referenced for troubleshooting errors:</p>\n" +
"\n" +
"<p><tt class=\"output\">/eniq/local_logs/NASd/NASd.log</tt></p>\n" +
"\n"+
"</div>\n";

var C4_1_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">4.1.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_kwql\"></a><a name=\"CHAPTER4.1.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Database Consistency Check</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The Database Consistency Check (DBCC) verifies the validity and\n" +
"consistency of the current database. It detects allocation problems\n" +
"and index inconsistencies. It also checks the available <tt class=\"file-path\">iqmsg</tt> files on the IQ nodes and reports damaged index\n" +
"messages if found.</p>\n" +
"\n" +
"<p>\n" +
"The Database Consistency Check script performs the following tasks:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Database allocation (<tt class=\"file-path\">db_allocation</tt>)</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Table verification (<tt class=\"file-path\">verify_tables</tt>)</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">iqmsg log check (<tt class=\"file-path\">iqmsg_check</tt>)</li></ol>\n" +
"<p>\n" +
"Only one action can be performed at a time on a server. <tt class=\"file-path\">iqmsg</tt> log check is executed by default while performing\n" +
"the other two tasks: database allocation and table verification. If\n" +
"necessary, each task can be run independently.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Database allocation:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Database allocation checks allocation with blockmap\n" +
"information for the entire database.</li>\n" +
"<li class=\"UNORD\">It checks for metadata consistency and reports any errors.</li>\n" +
"<li class=\"UNORD\">In the end, the <tt class=\"file-path\">iqmsg</tt> log\n" +
"checks for damaged index messages present in the <tt class=\"file-path\">iqmsg</tt> files on IQ nodes.</li>\n" +
"<li class=\"UNORD\">Run the DB allocation on a monthly basis.</li></ul><dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>DB Allocation affects data loading on ENIQ Statistics server\n" +
"as it requires a restart of the ENIQ (<tt class=\"file-path\">engine</tt> and <tt class=\"file-path\">dwhdb</tt>) services at the beginning\n" +
"and at the end of the db_allocation check. However, there is no downtime\n" +
"for the rest of the duration of DBCC run.<p>\n" +
"For example, for ~75 K tables, it takes around 2 hours with no\n" +
"downtime.</p>\n" +
"</dd></dl><br /><p>\n" +
"To perform database allocation, run the following command as <tt class=\"file-path\">root</tt> user on the following server types:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (standalone)</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator</li></ul><p>\n" +
"<tt class=\"input\"><b># bash /eniq/admin/bin/DbCheck.bsh -a db_allocation [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Table Verification:<p>\n" +
"Table verification performs three levels of checks:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">First level check is done on all tables in the database\n" +
"using the <tt class=\"file-path\">dbisql</tt> utility. It scans complete\n" +
"tables and reports erroneous tables.<p>\n" +
"Error Scenario:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">If the database is down or non-completed indexes are\n" +
"found, then the table is pushed to second level check.</li>\n" +
"<li class=\"UNORD\">If inconsistent indexes are found in first level check,\n" +
"then those indexes are collected and pushed to third level check that\n" +
"is <tt class=\"file-path\">verify index</tt> function is performed on\n" +
"the indexes.</li></ul></li>\n" +
"<li class=\"UNORD\"> Second level of check is done on the tables in the\n" +
"database using the <tt class=\"file-path\">dbisql</tt> utility. <tt class=\"file-path\">check table</tt> function is performed on those tables that\n" +
"are pushed from first level check to second level check.<p>\n" +
"Error Scenario:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">If the database is down or non-completed indexes are\n" +
"found, then the table is marked as not checked and is picked in the\n" +
"next DBCC run.</li>\n" +
"<li class=\"UNORD\">If inconsistent indexes are found in second level check,\n" +
"then those indexes are collected and third level check that is <tt class=\"file-path\">verify index</tt> is performed on those indexes</li></ul></li>\n" +
"<li class=\"UNORD\">Third level check is performed on the inconsistent indexes\n" +
"taken from first level or second level check by running <tt class=\"file-path\">sp_iqcheckdb</tt> procedure with <tt class=\"file-path\">verify</tt> mode where detailed index check is done.\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">If the database is down or non-completed indexes are\n" +
"found, then those indexes are marked as not verified and the corresponding\n" +
"table is marked as not checked. Not checked tables are picked in the\n" +
"next DBCC run.</li>\n" +
"<li class=\"UNORD\"> If inconsistent indexes are found in third level check,\n" +
"then those indexes are marked as \"Errors Detected\" and reported to\n" +
"the user. Error report is generated in the verifyindexerror_&lt;TIMESTAMP&gt;\n" +
"log and the erroneous index names are logged in <tt class=\"file-path\">/eniq/log/sw_log/iq/DbCheckLogs/IndexError.log</tt> file</li></ul></li></ul><p>\n" +
"Contact Ericsson support if any errors are reported.</p>\n" +
"<p>\n" +
"There are two types of table verifications:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><strong class=\"MEDEMPH\">Full Run:</strong> By default, the\n" +
"first run of the table verification is a full run and it checks all\n" +
"the tables in the database.</li>\n" +
"<li class=\"UNORD\"><strong class=\"MEDEMPH\">Delta Run:</strong> After the first\n" +
"run is completed, all consecutive runs are delta runs. It checks the\n" +
"tables that are updated since the previous run.</li></ul><p>\n" +
"The following commands show how to perform the Full Run and Delta\n" +
"Run table verifications:</p>\n" +
"\n" +
"<ol type=\"a\">\n" +
"\n" +
"<li class=\"substep\">Full Run:\n" +
"<p>\n" +
"A Full Run affects data loading on ENIQ Statistics server as it\n" +
"requires ENIQ (<tt class=\"file-path\">engine</tt> and <tt class=\"file-path\">dwhdb</tt>) services to restart at the beginning and end\n" +
"of the table verification check. However, there is no downtime when\n" +
"Full Run takes place.</p>\n" +
"\n" +
"<p>\n" +
"Full Run takes longer to complete as compared to delta runs. Perform\n" +
"a Full Run when there is minimal load on the ENIQ Statistics Server.</p>\n" +
"\n" +
"<p>\n" +
"A Full Run is performed when the database consistency check is\n" +
"executed for the first time on a newly installed server. It checks\n" +
"all the tables in the database. </p>\n" +
"\n" +
"<p>\n" +
"DBCC Full Run for ~140k tables takes around 19 Hours on a newly\n" +
"installed server on a Multi-Blade server having config G with 750\n" +
"million counter volume load. </p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Required time for a Full Run DBCC is higher for a server\n" +
"with continuous data loading.</dd></dl><br />\n" +
"<p>\n" +
"To perform Full Run table verification, run the following command\n" +
"as <tt class=\"file-path\">root</tt> user on the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (standalone)</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator</li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Delete the files <tt class=\"file-path\">/eniq/admin/etc/dbcc_restart_service_stop_indicator</tt> and <tt class=\"file-path\">/eniq/admin/etc/dbcc_full_run_indicator</tt> if they exist by using the following commands:<p>\n" +
"<tt class=\"input\"><b># rm -f /eniq/admin/etc/dbcc_full_run_indicator</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># rm -f /eniq/admin/etc/dbcc_restart_service_stop_indicator</b></tt></p>\n" +
"</dd></dl><br />\n" +
"<p>\n" +
"<tt class=\"input\"><b># bash /eniq/admin/bin/DbCheck.bsh -a verify_tables -f [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"\n" +
"</li>\n" +
"\n" +
"<li class=\"substep\">Delta Run:\n" +
"<p>\n" +
"Only tables that are modified after the last run of table verification\n" +
"are checked.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>No downtime is required while performing a Delta Run.</dd></dl><br />\n" +
"<p>\n" +
"To perform a Delta Run, execute the following command as <tt class=\"file-path\">root</tt> user on the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (standalone)</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator</li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>By default, table verification when run for the first time\n" +
"performs Full Run irrespective of passing <tt class=\"file-path\">-f</tt> option or not.</dd></dl><br />\n" +
"<p>\n" +
"<tt class=\"input\"><b># bash /eniq/admin/bin/DbCheck.bsh -a verify_tables [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"\n" +
"</li>\n" +
"</ol></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Iqmsg log check:<p>\n" +
"The <tt class=\"file-path\">iqmsg_check</tt> checks the damaged index\n" +
"messages present in all the available <tt class=\"file-path\">iqmsg</tt> log files on IQ nodes.</p>\n" +
"<p>\n" +
"Initially, it checks from the start of the available iqmsg files\n" +
"on IQ nodes. It checks for the damaged index messages only after last\n" +
"iqmsg check is performed.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>By default, iqmsg log check is done while performing two\n" +
"actions: db_allocation and verify_tables. Log check is run separately\n" +
"as follows:</dd></dl><br /><p>\n" +
"To perform <tt class=\"file-path\">iqmsg</tt> check, run the following\n" +
"command as <tt class=\"file-path\">root</tt> user on the following server\n" +
"types:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (standalone)</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator</li></ul><p>\n" +
"<tt class=\"input\"><b># bash /eniq/admin/bin/DbCheck.bsh -a iqmsg_check [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"</li></ol>\n" +
"<p>\n" +
"DBCC checks for any corruption in the database. The check is done\n" +
"in two phases. </p>\n" +
"\n" +
"<p>\n" +
"During the first level check, if DBCC identifies corruption on\n" +
"any table, then these tables are pushed for a second level check which\n" +
"is more exhaustive and can take longer time to check if tables are\n" +
"corrupted. </p>\n" +
"\n" +
"<p>\n" +
"The time taken during the second level check depends on the underlying\n" +
"index structure, row density, column cardinality, resource availability\n" +
"and few other aspects. </p>\n" +
"\n" +
"<p>\n" +
"A snapshot of ENIQ Filesystem can take a long time to complete\n" +
"and OMBS backup can time out if the DBCC check is taking a long time.\n" +
"In such cases, DBCC still runs in the background to complete the database\n" +
"sanity check. These measures are taken to avoid taking a backup of\n" +
"the corrupted database. </p>\n" +
"\n" +
"<p>\n" +
"The OMBS backup and rolling snapshot are triggered as per the next\n" +
"schedule. If there are any corrupted tables reported in DBCC check,\n" +
"then it must be rectified for the successful completion of OMBS backup\n" +
"and rolling snapshot.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C4_1_8=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">4.1.8 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_g605\"></a><a name=\"CHAPTER4.1.8\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Truncating DWHDB Transaction Log</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The <tt class=\"file-path\">dwhdb</tt> transaction logs do not have\n" +
"a limit, but the <tt class=\"file-path\">dwhdb</tt> partitions that\n" +
"contain the logs have a defined limit. To avoid filling up of <tt class=\"file-path\">dwhdb</tt> partition, the transaction logs are rolled over.\n" +
"Check the current size of <tt class=\"file-path\">dwhdb.log</tt>. If\n" +
"the size is greater than 10 GB, do the following:</p>\n" +
"\n" +
"<div class=\"ADMON\"><span class=\"ADMONMSG2\">Caution!</span><p class=\"ADMONDESC\">\n" +
"Perform the following steps during a Maintenance Window (this procedure\n" +
"involves Database downtime):</p>\n" +
"</div>\n" +
"<p>\n" +
"To truncate <tt class=\"file-path\">dwhdb</tt> transaction log, run\n" +
"the following command on these server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (standalone)</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator</li></ul>\n" +
"<p><tt class=\"input\"><b>{root} #: bash /eniq/admin/bin/transaction_log_admin.bsh -t\n" +
"dwhdb -R -l /eniq/local_logs/transaction_log_admin.txt -N</b></tt></p>\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Verify the following logs for successful completion of\n" +
"step 4.1.9:<p>\n" +
"Example output: </p>\n" +
"<p>\n" +
"<tt class=\"file-path\">Checking for correct user and server type to execute\n" +
"script. <br />=&lt; 2016-03-02_09.18.20 - Starting /eniq/admin/bin/transaction_log_admin.bsh\n" +
"&gt;= <br />Getting an ordered list of server(s).<br />Setting engine to\n" +
"noloads and waiting for execution slots to empty<br />Running engine\n" +
"command for NoLoads locally<br />Oracle Corporation      SunOS 5.10\n" +
"     Generic Patch   January 2005<br />Changing profile to: NoLoads<br />Change profile requested successfully<br />Backing up original /eniq/database/dwh_main/dwhdb.cfg\n" +
"file<br />Oracle Corporation      SunOS 5.10      Generic Patch   January\n" +
"2005<br />Starting the process to truncate the database transaction\n" +
"log.<br />Running sql in the database.<br />Oracle Corporation     \n" +
"SunOS 5.10      Generic Patch   January 2005<br />Execution time: 0.005\n" +
"seconds<br />Execution time: 0.054 seconds<br />Execution time: 0.051\n" +
"seconds<br />Execution time: 0.053 seconds<br />Stopping the database.<br />==============&lt; 2016-03-02_09.18.27 - Stopping ENIQ services\n" +
"&gt;============<br />2016-03-02_09.18.27 - Stopping ENIQ service eniq-dwhdb<br /> ENIQ services stopped correctly on atrcxb2332<br />Starting the\n" +
"database with -m flag to truncate transaction log.<br />=======&lt;\n" +
"2016-03-02_09.18.33 - Starting ENIQ services on atrcxb2332 &gt;=====<br />2016-03-02_09.18.33 - Starting ENIQ service eniq-dwhdb<br />ENIQ\n" +
"services started correctly on atrcxb2332<br />Restoring original /eniq/database/dwh_main/dwhdb.cfg\n" +
"file<br />Oracle Corporation      SunOS 5.10      Generic Patch   January\n" +
"2005<br />Restarting the database.<br />=============&lt; 2016-03-02_09.18.59\n" +
"- Restarting ENIQ services &gt;===========<br /> 2016-03-02_09.18.59 -\n" +
"Stopping ENIQ service eniq-dwhdb<br />2016-03-02_09.19.00 - Starting\n" +
"ENIQ service eniq-dwhdb<br />Renaming the database transaction log\n" +
"from dwhdb.log to dwhdb.tran.<br />==============&lt; 2016-03-02_09.19.25\n" +
"- Stopping ENIQ services &gt;============<br />2016-03-02_09.19.25 - Stopping\n" +
"ENIQ service eniq-dwhdb<br />ENIQ services stopped correctly on atrcxb2332<br />Oracle Corporation      SunOS 5.10      Generic Patch   January\n" +
"2005<br />SQL Anywhere Transaction Log Utility Version 16.0.0.809<br />\"/eniq/database/dwh_main/dwhdb.db\" was using log file \"dwhdb.log\"<br />\"/eniq/database/dwh_main/dwhdb.db\" is using no log mirror file<br />\"/eniq/database/dwh_main/dwhdb.db\" is now using log file \"/eniq/database/dwh_main/dwhdb.tran\"<br />Transaction log starting offset is 0184019024<br />Transaction log\n" +
"current relative offset is 0000004300<br />=======&lt; 2016-03-02_09.19.27\n" +
"- Starting ENIQ services on atrcxb2332 &gt;=====<br />2016-03-02_09.19.27\n" +
"- Starting ENIQ service eniq-dwhdb<br />ENIQ services started correctly\n" +
"on atrcxb2332<br />Setting engine to original profile.<br />Running\n" +
"engine command for Normal locally<br />Oracle Corporation      SunOS\n" +
"5.10      Generic Patch   January 2005<br />Changing profile to: Normal<br />Change profile requested successfully<br />=&lt; 2016-03-02_09.19.53\n" +
"- Finishing /eniq/admin/bin/transaction_log_admin.bsh &gt;=</tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Contact Ericsson Support, if these steps are not successfully\n" +
"completed.</dd></dl><br /></li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

var C4_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">4.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_qmux\"></a><a name=\"CHAPTER4.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Managing ENIQ System</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Take snapshots during a planned system maintenance activity.</p>\n" +
"\n" +
"<p>\n" +
"During an upgrade or backup procedure, the user is requested to\n" +
"accept or release a snapshot.</p>\n" +
"\n" +
"<p>\n" +
"Snapshots are stored on the ENIQ server for the period required\n" +
"to perform the maintenance activity. Snapshots occupy significant\n" +
"disk space.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Ensure that only one snapshot exists on the system,\n" +
"before performing a rollback in a Blade or Multi-Blade deployment.\n" +
"Rollback fails if more than one snapshot exists.</li>\n" +
"<li class=\"UNORD\">If snapshots are taken using the <tt class=\"file-path\">prepare_eniq_bkup.bsh</tt> script, then only one active rolling snapshot exists. Rolling snapshot\n" +
"and manual snapshot (upgrade, EU snapshot), both use the same <tt class=\"file-path\">pre_eniq_snapshot.bsh</tt> script. Ensure that only one\n" +
"active rolling snapshot exists at a time.</li></ul></dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

