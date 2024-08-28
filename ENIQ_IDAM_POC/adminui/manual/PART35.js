var C35=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">35 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_rf2k\"></a><a name=\"CHAPTER35\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Migration from DU (G1) to Baseband Radio\n" +
"Nodes (G2) and Rollback from Baseband to DU Radio Nodes</a></span></h1>\n" +
"\n" +
"<p>\n" +
"This is only applicable for customers who want to migrate from\n" +
"(LTE or WCDMA) DU Radio Nodes (G1) to Baseband Radio Nodes (G2) or\n" +
"rollback from (LTE or WCDMA) Baseband Radio Nodes to DU Radio Nodes\n" +
"and keep the same node names.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C35_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">35.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_r0yv\"></a><a name=\"CHAPTER35.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Migration from DU to Baseband Radio Nodes</a></span></h2>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If a customer does not delete an existing (LTE or WCDMA)\n" +
"DU Radio Node and adds a new Baseband Radio Node with the same name,\n" +
"it results in duplicate topology data coming to ENIQ and results in\n" +
"duplicate rows in the KPI reports. Before adding the new (LTE or WCDMA)\n" +
"Baseband Radio Node, run the <tt class=\"file-path\">delete_duplicate_preventive.bsh</tt> script on the ENIQ server to delete the existing DU Radio Nodes\n" +
"topology entries.</dd></dl><br />\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server as <tt class=\"file-path\">dcuser</tt> using SSH. (In a Multi-Blade deployment, run the steps on the <tt class=\"file-path\">coordinator</tt> Blade.)</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to the <tt class=\"file-path\">/eniq/sw/installer</tt> directory:<p>\n" +
"<tt class=\"file-path\">#cd /eniq/sw/installer</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following script:<p>\n" +
"    <tt class=\"input\"><b>#./delete_duplicate_preventive.bsh -t <i class=\"var\">&lt;Technology&gt;</i> -f <i class=\"var\">&lt;&lt;Technology&gt;_node.txt&gt;</i> -o <i class=\"var\">&lt;OSS_ID&gt;</i> -m</b></tt></p>\n" +
"<p>\n" +
"Where options</p>\n" +
"<p>\n" +
"-t: &lt;Technology&gt; is either WCDMA or LTE.</p>\n" +
"<p>\n" +
"-f: &lt;&lt;Technology&gt;_node.txt&gt; is its corresponding WCDMA_node.txt\n" +
"or LTE_node.txt, which has the list of node names separated by a new\n" +
"line and should be present in <tt class=\"file-path\">/eniq/sw/installer</tt> directory.</p>\n" +
"<p>\n" +
"-o: OSS alias name.</p>\n" +
"<p>\n" +
" This takes a backup of DU Radio Nodes data in <tt class=\"file-path\">/eniq/local_logs/iq/DURadioNodes_backup_data</tt> and deletes it from the affected Topology tables.</p>\n" +
"</li></ol>\n" +
"\n"+
"</div>\n";

var C35_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">35.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_256h\"></a><a name=\"CHAPTER35.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rollback from Baseband to DU Radio\n" +
"Nodes</a></span></h2>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If the user wants to rollback from (LTE or WCDMA) Baseband\n" +
"Radio nodes to DU Radio Nodes, execute the following steps.</dd></dl><br />\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server as <tt class=\"file-path\">dcuser</tt> using SSH (in a Multi-Blade deployment, run the steps on the <tt class=\"file-path\">coordinator</tt> Blade).</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to the <tt class=\"file-path\">/eniq/sw/installer</tt> directory.<p>\n" +
"<tt class=\"file-path\">#cd /eniq/sw/installer</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following script:<p>\n" +
"<tt class=\"input\"><b>#./delete_duplicate_preventive.bsh -t <i class=\"var\">&lt;Technology&gt;</i> -f <i class=\"var\">&lt;&lt;Technology&gt;_node.txt&gt;</i> -o <i class=\"var\">&lt;OSS_ID&gt;</i> -r</b></tt></p>\n" +
"<p>\n" +
"Where options</p>\n" +
"<p>\n" +
" -t: &lt; Technology &gt; is either WCDMA or LTE. </p>\n" +
"<p>\n" +
" -f: &lt;&lt;Technology&gt;_node.txt&gt; is its corresponding WCDMA_node.txt\n" +
"or LTE_node.txt, which has the list of Node names separated by a new\n" +
"line and should be present in <tt class=\"file-path\">/eniq/sw/installer</tt> directory.</p>\n" +
"<p>\n" +
"-o: OSS alias name.</p>\n" +
"</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>During the rollback process, the user is asked to select\n" +
"one of the following options: \n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Delete the Baseband Radio Nodes topology data.</li>\n" +
"<li class=\"UNORD\">Delete the Baseband Radio Nodes topology data and restore\n" +
"the DU Radio Nodes topology data.</li>\n" +
"<li class=\"UNORD\">Exit</li></ul><p>\n" +
"Second option takes a backup of Baseband Radio\n" +
"Nodes data in <tt class=\"file-path\">/eniq/local_logs/iq/BasebandRadioNodes_backup_data</tt> and deletes it from the affected Topology tables.</p>\n" +
"</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C35_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">35.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_kw48\"></a><a name=\"CHAPTER35.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Corrective Steps in case if the\n" +
"Migration from DU to Baseband Radio Nodes procedure is not followed\n" +
"While Migrating to Baseband Radio Nodes from DU Radio Nodes</a></span></h2>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If the user did not execute the <tt class=\"file-path\">delete_duplicate_preventive.bsh</tt> during migration from DU to Baseband radio nodes, then run the following\n" +
"steps on the ENIQ server to delete the duplicate topology entries:</dd></dl><br />\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server as <tt class=\"file-path\">dcuser</tt> using SSH. (In a Multi-Blade deployment, run all the steps on the <tt class=\"file-path\">coordinator</tt> Blade.)</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to the <tt class=\"file-path\">/eniq/sw/installer</tt> directory:<p>\n" +
" <tt class=\"file-path\">#cd /eniq/sw/installer</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following script:<p>\n" +
"<tt class=\"input\"><b>#./delete_duplicate_corrective.bsh</b></tt></p>\n" +
"</li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

