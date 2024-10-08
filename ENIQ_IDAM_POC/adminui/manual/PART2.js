var C2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_8z9p\"></a><a name=\"CHAPTER2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">System Overview</a></span></h1>\n" +
"\n" +
"<p>\n" +
"The reference architecture for Ericsson Network IQ is shown in <a href='javascript:parent.parent.parent.showAnchor(\"RefArchitecture\")' class=\"xref\"> Figure 1</a>.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"RefArchitecture\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE1\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-ENIQ_Reference_Architecture.jpg\" border=\"0\" width=\"528\" height=\"373\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 1 &nbsp; Ericsson Network IQ Reference System Architecture</i></p></div>\n" +
"\n"+
"</div>\n";

var C2_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">2.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_lxc7\"></a><a name=\"CHAPTER2.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ENIQ Statistics Deployments</a></span></h2>\n" +
"\n" +
"<p>\n" +
"ENIQ Statistics supports the following deployments:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">x86 Rack</li>\n" +
"<li class=\"UNORD\">x86 Blade</li>\n" +
"<li class=\"UNORD\">x86 Multi-Blade</li></ul>\n" +
"<p>\n" +
"For more information on deployments, see <a href='javascript:parent.parent.parent.showAnchor(\"OSSDeploymentSpecifications\")' class=\"xref\">Reference [30]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C2_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">2.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_g0tu\"></a><a name=\"CHAPTER2.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Data Flow on Ericsson Network IQ</a></span></h2>\n" +
"\n" +
"<p>\n" +
"The raw measurement data produced by OSS is delivered to the <tt class=\"file-path\">pmdata</tt> directories on Ericsson Network IQ Server, or\n" +
"in a Multi-Blade deployment, to the <tt class=\"file-path\">pmdata</tt> directories on the <tt class=\"file-path\">engine</tt> Blade. This\n" +
"delivery is handled by mediators, OSS, or by Ericsson Network IQ (ENIQ)\n" +
"mediation actions.</p>\n" +
"\n" +
"<p>\n" +
"The ENIQ Server or in a Multi-Blade deployment, the <tt class=\"file-path\">engine</tt> Blade performs Extract, Transform, and Load\n" +
"(ETL) procedures on the raw data. After ETL processing, the data is\n" +
"available on the <tt class=\"file-path\">DWH</tt> database. In a Multi-Blade\n" +
"deployment, the data is available on the <tt class=\"file-path\">dwh_reader_2</tt> Blade. The ENIQ Server performs aggregations and Busy Hour ranking\n" +
"for data. The administrative client (AdminUI) is hosted by the ENIQ\n" +
"Server or in a Multi-Blade deployment by the Coordinator Blade.</p>\n" +
"\n" +
"<p>\n" +
"See <a href='javascript:parent.parent.parent.showAnchor(\"DataFlow\")' class=\"xref\"> Figure 2</a>.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><a name=\"DataFlow\"></a><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE2\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-dataflow.gif\" border=\"0\" width=\"550\" height=\"338\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 2 &nbsp; Data Flow</i></p></div>\n" +
"\n"+
"</div>\n";

var C2_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">2.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_7kzh\"></a><a name=\"CHAPTER2.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Ericsson Network IQ Directory Structure</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Ericsson Network IQ directory structure is a standard directory\n" +
"structure. The common directories of Ericsson Network IQ and their\n" +
"content are outlined in <a name=\"TableforDirectoryStructure\" href='javascript:parent.parent.parent.showAnchor(\"TableforDirectoryStructure\")' class=\"xref\"> Table 1</a>.</p>\n" +
"\n" +
"<a name=\"TABLE1\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 1 &nbsp;&nbsp; Directory Structure</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"62%\">\n" +
"\n" +
"<p><b class=\"object\">Directory</b></p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"38%\">\n" +
"\n" +
"<p><b class=\"object\">Contains</b></p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/data/pmdata</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Links to PM files.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/data/etldata_XX</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>On a raw device data processed by Ericsson Network IQ.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/data/etldata</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>On a rack device data processed by Ericsson Network IQ.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Ericsson Network IQ log files.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/sw/conf</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Ericsson Network IQ configuration files.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/sw/bin</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Scripts to start and stop Ericsson Network IQ services.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/database</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Ericsson Network IQ database files.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/archive/<i class=\"var\">eniq_oss_&lt;n&gt;/&lt;node\n" +
"type name&gt;</i>/processed</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Processed data from parser.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/archive/<i class=\"var\">eniq_oss_&lt;n&gt;/&lt;node\n" +
"type name&gt;</i>/failed</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Failed data from parser.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/archive/<i class=\"var\">eniq_oss_&lt;n&gt;/&lt;node\n" +
"type name&gt;</i>/double</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Duplicate data.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/data/etldata/<i class=\"var\">techpack_name_counter_name</i>/failed</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Failed data from loader.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/sentinel/lic</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>ENIQ licenses.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>	<tt class=\"file-path\">/eniq/local_logs/installation</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Contains initial installation log files.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sentinel_logs</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Contains license logs.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/tunnel_logs</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Contains logs regarding the tunnel connection.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/rolling_snapshot_logs</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Contains logs regarding the rollback service and manual\n" +
"snapshots.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/busyhourcfg</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Contains logs regarding Busy Hour configuration.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/iq/dwhdb.iqmsg</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"file-path\">Master</tt> database log file (Rack).</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\">/eniq/local_logs/iq/dwhdb.iqmsg</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p><tt class=\"file-path\">Master</tt> database log file (Blade).</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p><tt class=\"file-path\"><i class=\"var\">&lt;ENIQ_VOLUME_MT_POINT&gt;</i>/redback/&lt;nodetype&gt;</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>The location where symbolic links to the PM counter files\n" +
"from Redback nodes are available. <sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote1-1\")'>(1)</a></sup></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"62%\">\n" +
"<p>	<tt class=\"file-path\">/eniq/data/pmdata_soem</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"38%\">\n" +
"<p>Links to PM files from SO-EM node.</p>\n" +
"</td></tr></table><p class=\"tnote\"><a name=\"tnote1-1\">(1) &nbsp;</a>Where <tt class=\"file-path\">ENIQ_VOLUME_MT_POINT</tt> is <tt class=\"file-path\">/ossrc/data/pmMediation/pmData</tt> which\n" +
"is set in <tt class=\"file-path\">/ericsson/eniq/etc/eniq.env</tt> and\n" +
"the node type is <tt class=\"file-path\">edge</tt>, <tt class=\"file-path\">cpg</tt> or <tt class=\"file-path\">MLPPP</tt><br /></p><br />\n" +
"\n" +
"\n"+
"</div>\n";

