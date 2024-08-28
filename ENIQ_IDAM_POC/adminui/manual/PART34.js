var C34=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><a name=\"correctiveMain\"></a><span class=\"CHAPNUMBER\">34 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_w6bh\"></a><a name=\"CHAPTER34\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Corrective Maintenance</a></span></h1>\n" +
"\n" +
"<p>\n" +
"Actions to take when a system error message is displayed:</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C34_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">34.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_z2ho\"></a><a name=\"CHAPTER34.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Error Handling</a></span></h2>\n" +
"\n"+
"</div>\n";

var C34_1_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">34.1.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_x4a3\"></a><a name=\"CHAPTER34.1.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Engine does not start: ''ERROR: Fault starting eniq-engine''</a></span></h3>\n" +
"\n" +
"<p class=\"titled-block\">Cause</p><p>\n" +
"Engine is in <tt class=\"file-path\">failed</tt> state, because:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Engine script fails to work.<p>\n" +
"or</p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Database is full.</li></ul>\n" +
"<p class=\"titled-block\">Action\n" +
"</p><ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Log on to the ENIQ server with SSH.</li>\n" +
"<li class=\"UNORD\">To check if any ENIQ service is in a <tt class=\"file-path\">failed</tt> state, execute the following command: <tt class=\"LITERALMONO\"># services -s eniq|grep failed</tt></li>\n" +
"<li class=\"UNORD\">To check what has happened during the start of the Engine,\n" +
"see the latest <tt class=\"file-path\">start_engine</tt> logs from <tt class=\"file-path\">/eniq/log/sw_log/engine</tt>.</li>\n" +
"<li class=\"UNORD\">When in a <tt class=\"file-path\">failed</tt> state, check\n" +
"if the database is full. View the dwhdb-usage log file, <tt class=\"file-path\">/eniq/log/sw_log/iq/dwhdb_usage.log</tt>, to see if one\n" +
"of the most recent messages is: &quot;SEVERE: DWHDB is full!&quot;. <br /> If not, the problem is with the engine script.</li>\n" +
"<li class=\"UNORD\">To reset engine state, run command:  <tt class=\"LITERALMONO\">/eniq/smf/bin/eniq_service_start_stop.bsh -s engine -a clear</tt> </li></ul><p>\n" +
"The filling ratio log file is created when the ratio exceeds 85%\n" +
"for first time. If there is no <tt class=\"file-path\">dwhdb_usage.log</tt>, it means that the ratio had never exceeded 85%.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C34_1_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">34.1.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_7vk8\"></a><a name=\"CHAPTER34.1.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Parsing errors ''org.xml.sax.SAXParseException:\n" +
"XML document structures must start and end within the same entity.''</a></span></h3>\n" +
"\n" +
"<p class=\"titled-block\">Cause</p><p>\n" +
"PM data is corrupted or invalid.</p>\n" +
"\n" +
"<p class=\"titled-block\">Action</p><p>\n" +
"Ensure that the data is valid.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C34_1_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">34.1.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_29to\"></a><a name=\"CHAPTER34.1.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Engine error log: ''Can't find\n" +
"table for DC_E_XXX_YYYY:RAW @ YYYY-MM-DD'', but dateString is between\n" +
"current date (YYYY-MM-DD) and last partition endtime (YYYY-MM-DD)</a></span></h3>\n" +
"\n" +
"<p class=\"titled-block\">Cause</p><p>\n" +
"There is no partition for the date selected.</p>\n" +
"\n" +
"<p class=\"titled-block\">Action</p><p>\n" +
"Wait until the Data Warehouse database is updated and a new partition\n" +
"has been created.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C34_1_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">34.1.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_xqih\"></a><a name=\"CHAPTER34.1.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Topology Loaders getting ERRORS\n" +
"because of: ''SybSQLException: SQL Anywhere Error -1009134: Insufficient\n" +
"buffers for 'Sort' ''</a></span></h3>\n" +
"\n" +
"<p class=\"titled-block\">Cause</p><p>\n" +
"It is a SYBASE database error on insufficient buffer. Because of\n" +
"high use of resources like temp_cache, Loader sets stop abruptly during\n" +
"execution.</p>\n" +
"\n" +
"<p class=\"titled-block\">Action</p><p>\n" +
"Reload the topology loader file using these steps:</p>\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check if a recent file is available in the <em class=\"LOWEMPH\">failed</em> directory.<p>\n" +
"<tt class=\"LITERALMONO\">/eniq/data/&lt;ETLDATA&gt;/&lt;DIM_MT&gt;/failed/</tt><br />Where,<br /><tt class=\"LITERALMONO\">&lt;ETLDATA&gt;</tt> is <tt class=\"LITERALMONO\">etldata</tt> in case of FS and <tt class=\"LITERALMONO\">/etldata_/&lt;SUB_DIR&gt;/</tt> where <tt class=\"LITERALMONO\">&lt;SUB_DIR&gt;</tt> is <tt class=\"LITERALMONO\">00</tt>, or <tt class=\"LITERALMONO\">01</tt>, or <tt class=\"LITERALMONO\">02</tt>, or <tt class=\"LITERALMONO\">03</tt>, in case of\n" +
"raw. <br /><tt class=\"LITERALMONO\">&lt;DIM_MT&gt;</tt> is the topology measurement\n" +
"type for which the loader fails.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">If a recent <tt class=\"file-path\">failed</tt> file is\n" +
"available, then move the file to its corresponding ''raw'' directory.\n" +
"Use the command:<br /><br /><tt class=\"input\"><b># mv /eniq/data/&lt;ETLDATA&gt;/&lt;DIM_MT&gt;/failed/'&lt;FAILED_FILE&gt;'\n" +
"/eniq/data/&lt;ETLDATA&gt;/&lt;DIM_MT&gt;/raw/</b></tt><br /><br />Where,<br /><tt class=\"LITERALMONO\">&lt;ETLDATA&gt;</tt> is <tt class=\"LITERALMONO\">etldata</tt> in\n" +
"case of FS and <tt class=\"LITERALMONO\">/etldata_/&lt;SUB_DIR&gt;/</tt> where <tt class=\"LITERALMONO\">&lt;SUB_DIR&gt;</tt> is <tt class=\"LITERALMONO\">00</tt>, or <tt class=\"LITERALMONO\">01</tt>, or <tt class=\"LITERALMONO\">02</tt>, or <tt class=\"LITERALMONO\">03</tt>, in case of\n" +
"raw.<br />`<tt class=\"LITERALMONO\">&lt;DIM_MT&gt;</tt> is topology measurement type\n" +
"for which loader fails.<br /><tt class=\"LITERALMONO\">&lt;FAILED_FILE&gt;</tt> is\n" +
"the recent <tt class=\"file-path\">failed</tt> loader file.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">After moving the <tt class=\"file-path\">failed</tt> file\n" +
"successfully, trigger the corresponding topology Loader set. To load\n" +
"the topology data, follow these steps:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Log on to the AdminUI.</li>\n" +
"<li class=\"UNORD\">Click <b>ETLC Set Scheduling</b>.</li>\n" +
"<li class=\"UNORD\">Select <b>Techpack</b> for <b>Set Type</b>.</li>\n" +
"<li class=\"UNORD\">For <strong class=\"MEDEMPH\">Package</strong>, select corresponding\n" +
"topology Tech Pack for which topology Loader must be triggered.</li>\n" +
"<li class=\"UNORD\">Trigger the corresponding topology Loader set from the\n" +
"preceding result.</li></ul></li></ol>\n" +
"\n"+
"</div>\n";

var C34_1_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">34.1.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ld57\"></a><a name=\"CHAPTER34.1.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Loaders failing with the ERROR\n" +
"''SybSQLException: SQL Anywhere Error -1009134: Insufficient buffers\n" +
"for 'Sort' ''</a></span></h3>\n" +
"\n" +
"<p>\n" +
"It is a SYBASE database error on insufficient buffer.</p>\n" +
"\n" +
"<p class=\"titled-block\">Cause</p><p>\n" +
"Due to high use of resources like temp_cache, Loader sets stop\n" +
"abruptly during execution.</p>\n" +
"\n" +
"<p class=\"titled-block\">Action</p><p>\n" +
"The parsed files which <tt class=\"file-path\">failed</tt> to load\n" +
"are retained and are picked by the loader in the next cycle.</p>\n" +
"\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

