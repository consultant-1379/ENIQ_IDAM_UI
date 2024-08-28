var C37=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><a name=\"chl-ES_troubleshooting\"></a><span class=\"CHAPNUMBER\">37 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_pavy\"></a><a name=\"CHAPTER37\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting</a></span></h1>\n" +
"\n" +
"<p>\n" +
"This chapter describes some possible problems that can occur in\n" +
"ENIQ and presents possible solutions.</p>\n" +
"\n" +
"<p><a name=\"trblshooting\"></a>\n" +
"Contact Ericsson Customer Support for additional\n" +
"assistance.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ox6r\"></a><a name=\"CHAPTER37.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Log Collector Tool</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Log Collector tool is used to consolidate different log files of\n" +
"ENIQ Statistics belonging to a particular date into a zip file. This\n" +
"zip file helps in troubleshooting issues.</p>\n" +
"\n" +
"<p>\n" +
"Log Collector tool is started manually by following these steps:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to Coordinator server as <tt class=\"file-path\">root</tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Enter the following command:<p>\n" +
"<tt class=\"input\"><b>{root} #:bash /eniq/installation/core_install/eniq_log_collector/bin/log_collector.bsh</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Enter the date in ddmmyyyy format, for which logs must\n" +
"be collected.<p>\n" +
"Example: 09112016 indicates 9 November 2016.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">The script may take some time to execute, depending on\n" +
"size of the logs. At the end of the execution, a zip file log_collector_&lt;TimeStamp&gt;\n" +
"is created at path <tt class=\"input\"><b>/eniq/log/log_collector/</b></tt>.<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If Log Collector Tool is not able to create a zip file with\n" +
"this message, then execute these steps: <br /><br /><strong class=\"MEDEMPH\">Message:</strong> <br />Cannot create zip file as the size of zip file log_collector_&lt;TimeStamp&gt;.zip\n" +
"is &lt;n&gt; MB. <br />Maximum Zip file size mentioned in the configuration\n" +
"file is 200 MB. <br />Please modify MAX_ZIP_SIZE in the configuration\n" +
"file.<br /><br /><strong class=\"MEDEMPH\">Steps:</strong> </dd></dl><br />\n" +
"<ol type=\"a\">\n" +
"\n" +
"<li class=\"substep\">Modify the parameter <em class=\"LOWEMPH\">MAX_ZIP_SIZE</em> in the configuration file to attain the required memory size. The\n" +
"required memory size must be a number more than the memory &lt;n&gt;\n" +
"MB displayed in the message.<br /><tt class=\"input\"><b>/eniq/installation/core_install/eniq_log_collector/config/log_collector.cfg</b></tt>\n" +
"</li>\n" +
"\n" +
"<li class=\"substep\">Save the configuration file.\n" +
"</li>\n" +
"</ol></li></ol>\n" +
"<p>\n" +
"The following table lists the log files and their locations:</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE25\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 25 &nbsp;&nbsp; Logs Collected by Log Collector Tool</caption>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p><strong class=\"MEDEMPH\">S NO.</strong></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p><strong class=\"MEDEMPH\">LOG NAME</strong></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><strong class=\"MEDEMPH\">LOG LOCATION</strong></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p><strong class=\"MEDEMPH\">SERVER</strong></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>1</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>adminui.log or adminui.log.&lt;DATE&gt;</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p> <tt class=\"input\"><b>/eniq/log/sw_log/adminui/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>2</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>catalina.out</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/adminui/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>3</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>localhost_access_log.&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/adminui/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>4</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>connectd.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/connectd/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>5</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>engine&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>6</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>engine-PriorityQueue&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>7</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>error-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>8</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>start_engine_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>9</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>stop_engine_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>10</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>start_webserver_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>11</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>stop_webserver_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>12</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>sqlerror-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>13</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>FileSystemCheck-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>14</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>file-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>15</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>failed_loader_file&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>16</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>repdbCount-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>17</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>dwhdbCount-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>18</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>engineHeap-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>19</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>lwphelper-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/lwphelper/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>20</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>stop_lwph_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/lwphelper/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>21</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>start_lwph_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/lwphelper/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>22</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>start_repdb_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/asa/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>23</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>stopt_repdb_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/asa/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>24</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>start_rmiregistry_&lt;DATE&gt;_&lt;Time&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/rmiregistry/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>25</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>stop_rmiregistry_&lt;DATE&gt;_&lt;Time&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/rmiregistry/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>26</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>start_scheduler_&lt;DATE&gt;_&lt;Time&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/scheduler/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>27</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>stop_scheduler_&lt;DATE&gt;_&lt;Time&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/scheduler/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>28</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>scheduler-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/scheduler/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>29</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>error-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/scheduler/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>30</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>licensemanager-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/licensemanager/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>31</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>symboliclinkcreator_&lt;OSS Alias&gt;-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/symboliclinkcreator/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>32</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>DeleteSymlinkFile-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/symboliclinkcreator/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>33</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>stop_fls_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/symboliclinkcreator/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>34</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>start_fls_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/symboliclinkcreator/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>35</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>symboliclinkcreator-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/symboliclinkcreator/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>36</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>start_dwhdb_&lt;DATE&gt;_&lt;Time&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/dwhdb/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>37</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>stop_dwhdb_&lt;DATE&gt;_&lt;Time&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/dwhdb/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>38</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>dwhdb.iqmsg</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>39</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>backup_repdb_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/asa/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>40</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>restore_repdb_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/asa/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>41</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>EngineAdmin-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/EngineAdmin/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>42</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>manage_features.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/feature_management_log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>43</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>dwhdb.*.srvlog</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>44</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>dwhdb.*.stderr</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>45</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>dwh_reader_*.iqmsg</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Reader</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>46</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>dwh_reader_*.*.srvlog</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Reader</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>47</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>dwh_reader_*.*.stderr</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Reader</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>48</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>clean_roll_snap.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/rolling_snapshot_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>49</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>prep_roll_snap.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/rolling_snapshot_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>50</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>save_conf_data.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/backup_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>51</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>cleanup_iq_logs.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/cleanup_iq_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>52</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>esm_&lt;Hostname&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/esm/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>53</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>hostsync.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/hostsync/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>54</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>manage_eniq_services.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/eniq_services_log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>55</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>manage_fs_snapshot.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/snapshot_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>56</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>manage_nas_snapshot.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/snapshot_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>57</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>manage_san_snapshot.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/snapshot_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>58</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>NASd.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/NASd</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>59</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>setup_ssh_FileStore_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/ericsson/storage/log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>60</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>nas.screen_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/ericsson/storage/log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>61</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>nas.cmd_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/ericsson/storage/log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>62</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>&lt;Hostname&gt;_status.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/cleanup_log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>63</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>prep_eniq_snapshots.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/rolling_snapshot_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>64</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>prep_eniq_backup.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/backup_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>65</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>get_fs_backup_list.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/backup_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>66</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>clean_backup.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/backup_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>67</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>services_debug_log.&lt;DATE&gt;</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/eniq_services_log/debug_log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>68</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>backup.syb</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>69</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>messages</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/var/log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>70</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>rhel_linux_upgrade.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/upgrade/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>71</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"34%\">\n" +
"<p>journalctl_logs</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/var/log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>72</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>status_log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/clean_archives/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>73</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>manage_eniq_oss.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/manage_eniq_oss_log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>74</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>create_query_user_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>75</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>create_query_user_login_policy_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>76</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>admin_query_user_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>77</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>user_tracking_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>78</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>&lt;Hostname&gt;_install.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/installation/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>79</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>&lt;DATE&gt;_upgrade_feature_only_eniq_sw.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/upgrade_feature_only/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>80</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>&lt;DATE&gt;_upgrade_eniq_sw.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/upgrade/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>81</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>rlu_console.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/upgrade/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>82</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>&lt;DATE&gt;_post_upgrade_eniq_sw.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/post_upgrade/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>83</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>unpack_core_sw.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/upgrade/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>84</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>post_upgrade.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/upgrade/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>85</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>password_encryption_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/encryption/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>86</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>precheck_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/eniq_checks_log/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>87</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>drop_connection.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>88</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>start_dwh_reader_1.&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>89</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>stop_dwh_reader_1.&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>90</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>start_dwh_reader_2.&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>91</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>stop_dwh_reader_2.&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>92</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>CheckedTables_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/DbCheckLogs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>93</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>&lt;Hostname&gt;_cron_dbcc_log_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/DbCheckLogs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>94</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>SecondLevelCheckTable.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/DbCheckLogs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>95</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>IndexError.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/DbCheckLogs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>96</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>verifyindexerror_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/DbCheckLogs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>97</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>DbCheck_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/DbCheckLogs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>98</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>update_iq_mem_settings.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>99</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>exp_add_mainspacedb_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/expansion/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>100</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>add_temp_dbspaces_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>101</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>add_reader_temp_dbspace_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/iq/</b></tt></p>\n" +
"</td>\n" ;

var C37_1P1=
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>102</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>eniq_vnx_unity_*.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/migration/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>103</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>eniq_linux_*_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/replacement/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>104</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>continue_eniq_replacement_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/var/tmp/continue_replacement/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>105</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>update_sym_link_ini.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/update_sym_ini/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>106</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>eniq_linux_*_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/migration/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>107</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>continue_eniq_migration_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/var/tmp/continue_migration/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>108</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>continue_eniq_recovery_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/var/tmp/continue_recovery/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>109</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>restore_data_&lt;DATE&gt;_&lt;TIME&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/migration/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>110</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>eniq_linux_rack_*_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/migration/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>111</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>eniq_linux_rack_*_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/rack_replacement/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>112</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>eniq_rack_restore_data_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/local_logs/rack_replacement/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>113</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>user_management_mm.dd.yyyy.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/adminui/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>114</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>enm_post_integration_mm.dd.yyyy.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/symboliclinkcreator/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>115</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>security_rollback_mm.dd.yyyy.log	</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>116</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>repdb_user_password_mm.dd.yyyy.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>117</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>encrypt_alarm_password_mm.dd.yyyy.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>118</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>change_alarm_password_mm.dd.yyyy.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>119</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>All logs inside ffu_logs</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/adminui/ffu_logs/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>120</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>collect_certificates_&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>121</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>logmanagement-&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/engine/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>122</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>&lt;DATE&gt;_ManualNodeAssigment.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/symboliclinkcreator/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>123</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>All logs inside platform_installer directory</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/platform_installer</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>124</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>All logs inside tp_installer directory</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/tp_installer</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>125</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>alarmcfg.&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/alarmcfg</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>126</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"34%\">\n" +
"<p>busyhourcfg.&lt;DATE&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"44%\">\n" +
"<p><tt class=\"input\"><b>/eniq/log/sw_log/busyhourcfg</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"14%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"The following table lists the configuration files collected by\n" +
"Log Collector tool:</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE26\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 26 &nbsp;&nbsp; Configuration files collected by Log Collector Tool</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"8%\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">S NO.</strong></p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"30%\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">CONFIGURATION FILE NAME</strong></p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"48%\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">CONFIGURATION FILE LOCATION</strong></p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"13%\">\n" +
"\n" +
"<p><strong class=\"MEDEMPH\">SERVER</strong></p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>1</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>static.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>2</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>niq.ini</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>3</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>SunOS.ini</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/installation/config/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>4</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>dwhdb.cfg</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/database/dwh_main/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>5</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>repdb.cfg</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/database/rep_main/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>6</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>dwhdb.cfg</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/database/dwh_reader/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>7</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>eniq_status</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/admin/version/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>8</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>eniq_history</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/admin/version/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>9</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>alarmcfg.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/runtime/tomcat/webapps/alarmcfg/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>10</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>licensingLogging.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>11</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>versiondb.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>12</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>engineLogging.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>13</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>schedulerLogging.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>14</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>enmserverdetail</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>15</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>symboliclinkcreator.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>16</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>MixedNodeCachePersisted_&lt;OSS_ALIAS&gt;.ser</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>17</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>MaxId_&lt;OSS_ALIAS&gt;.org</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>18</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>MaxId_&lt;OSS_ALIAS&gt;.ser</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>19</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>Persisted_&lt;OSS_ALIAS&gt;.ser</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>20</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>adminui.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/runtime/tomcat/webapps/adminui/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>21</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>ETLCServer.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"8%\">\n" +
"<p>22</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"30%\">\n" +
"<p>storage.ini</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/installation/config/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>23</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p> streaming-probe.properties</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>24</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p>queryUserConf.cfg</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>25</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p>block_storage.ini</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/installation/config/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>26</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p>sym_links.ini</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/installation/config/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>27</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p>ipmp.ini</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/installation/config/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>28</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p>lun_map.ini</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/installation/config/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>29</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p>sentinel.ini</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/installation/config/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>30</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p>iq_header_info</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/installation/config/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>31</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p>disks_partitioned</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/installation/config/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" valign=\"bottom\" width=\"8%\">\n" +
"<p>32</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"30%\">\n" +
"<p>coordinator_sym_links.ini</p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"48%\">\n" +
"<p><tt class=\"input\"><b>/eniq/sw/conf/</b></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" valign=\"bottom\" width=\"13%\">\n" +
"<p>All Blades</p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C37_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"troublechapter\"></a><span class=\"CHAPNUMBER\">37.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"troubleshooting\"></a><a name=\"CHAPTER37.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting Ericsson Network IQ</a></span></h2>\n" +
"\n" +
"<p><a name=\"DailyAggregation\"></a>\n" +
"The table lists the potential issues and actions to perform to\n" +
"solve them:</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE27\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 27 &nbsp;&nbsp; Troubleshooting ENIQ</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"13%\">\n" +
"\n" +
"<p>Sl No</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"22%\">\n" +
"\n" +
"<p>Description</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"23%\">\n" +
"\n" +
"<p>Cause</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"42%\">\n" +
"\n" +
"<p>Action</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>1</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>A warning message <tt class=\"output\">-gn value of 205 is too low for\n" +
"-gm value of 200</tt> seen in <tt class=\"file-path\">/eniq/local_logs_iq/dwhdb.iqmsg\n" +
"log</tt>.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>This warning message is seen when <tt class=\"file-path\">-gn value\n" +
"is not set to 1.5 times of -gm value(200)</tt> based on SAP\n" +
"recommendation.</p><br />\n" +
"<p>The -gm option limits the number of concurrent connections to\n" +
"the database server.</p><br />\n" +
"<p>The  -gn option sets the number of execution threads used for\n" +
"the catalog store and connectivity while running with multiple users. </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Ignore this warning as connections to ENIQ are not more\n" +
"than 100 in normal operations, so there is no impact to SAP IQ performance.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>2</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>AdminUI is not available at<br /><tt class=\"file-path\">https://<i class=\"var\">&lt;YourLoaderServerIP&gt;</i>: 8443/adminui/</tt></p><br />\n" +
"<p><b class=\"object\">&lt;YourLoaderServerIP&gt;</b> refers to Coordinator\n" +
"Blade IP in a Multi-Blade deployment.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>ENIQ Web Server process is not running.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Ensure that the ENIQ Web Server process is running. <br /><tt class=\"input\"><b>/eniq/sw/bin/webserver status</b></tt></p><br />\n" +
"<p>In a Multi-Blade deployment, execute the command on the Coordinator\n" +
"Blade.</p><br />\n" +
"<p>If the process is stopped, start it by executing <br /><tt class=\"input\"><b>/eniq/sw/bin/webserver\n" +
"start</b></tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>3</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Unable to launch AdminUI</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>KeyStore password might not be in sync with the following\n" +
"4 files:</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>niq.ini</p>\n" +
"</li>\n" +
"<li><p>server.xml</p>\n" +
"</li>\n" +
"<li><p>keystore.jks</p>\n" +
"</li>\n" +
"<li><p>truststore.ts</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Follow section <a href='javascript:parent.parent.parent.showAnchor(\"AdminUI_issue\")' class=\"xref\">Section  37.2.1</a>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>4</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>No data is loaded.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>This can occur because of the following:</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>There are no files in the mounted OSS-RC directories,\n" +
"or in the <tt class=\"LITERALMONO\">/eniq/data/pmdata</tt> directory on ENIQ Server</p>\n" +
"</li>\n" +
"<li><p>An ENIQ process is down.</p>\n" +
"</li>\n" +
"<li><p>System is in maintenance mode (execution profile is\n" +
"in NoLoads).</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li><p>If using OSS-RC, check that PM mediators collect data\n" +
"files from the Network Elements, and that symbolic links are created\n" +
"under the following directories on OSS-RC: <tt class=\"LITERALMONO\">/var/opt/ericsson/pmData/</tt> x86 servers. <br />The same links appear under the <tt class=\"LITERALMONO\">/eniq/data/pmdata</tt> directory on ENIQ Server. <br />Check the status of <tt class=\"file-path\">scheduler</tt>, <tt class=\"file-path\">engine</tt>, <tt class=\"file-path\">dwhdb</tt>, and <tt class=\"file-path\">repdb</tt>.</p>\n" +
"</li>\n" +
"<li><p>If using OSS-RC, check that PM mediators are collecting\n" +
"data, NFS/SSH mount is working.</p>\n" +
"</li>\n" +
"<li><p>Check the DWHDB filling ratio (this information is stored\n" +
"in <tt class=\"file-path\">/eniq/log/sw_log/iq/dwhdb_usage.log</tt>.<br />The filling ratio log file is created by default. <br />If the ratio\n" +
"is over 90%, the database is considered full, and ENIQ is switched\n" +
"to maintenance mode. <br />If the DWHDBs filling ratio has been over\n" +
"90% but no recent log entries are found (filling ratio has dropped\n" +
"below 90%), switch ENIQ back to normal mode. Type on the command line:<br /><tt class=\"input\"><b>engine -e changeProfile Normal</b></tt></p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>5</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Database is full.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The database is too small .</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Contact Ericsson Customer Support.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>6</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p><strong class=\"MEDEMPH\">Engine does not start: ''ERROR: Fault starting eniq-engine''</strong>.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Engine is in a <tt class=\"file-path\">failed</tt> state,\n" +
"because:</p><br />\n" +
"<p>Engine script fails to work.</p><br />\n" +
"<p><strong class=\"MEDEMPH\">or</strong></p><br />\n" +
"<p>Database is full.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>See <a href='javascript:parent.parent.parent.showAnchor(\"correctiveMain\")' class=\"link\"> Corrective Maintenance</a> section.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>7</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Server has no free disk space.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>An old snapshot is consuming unnecessary disc space.</p><br />\n" +
"<p><strong class=\"MEDEMPH\">or</strong></p><br />\n" +
"<p>ENIQ logging has been left on detailed level.</p><br />\n" +
"<p><strong class=\"MEDEMPH\">or </strong></p><br />\n" +
"<p>ENIQ has been receiving faulty data which is not cleared from <tt class=\"file-path\">/eniq/data/rejected/ /eniq/data/etldata/*/failed</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Remove unnecessary snapshots if they exist.</p><br />\n" +
"<p>Remove unnecessary log files and decrease the logging level.</p><br />\n" +
"<p>Delete unnecessary faulty data and check the data mediation.</p><br />\n" +
"<p>After the removals, stop all ENIQ processes and start them again.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>8</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Monitoring is showing deactivated measurement types.</p><br />\n" +
"<p><strong class=\"MEDEMPH\">or</strong></p><br />\n" +
"<p>Monitoring is showing deleted measurement types.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Monitored types are not updated.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>When you set a type as <tt class=\"file-path\">inactive</tt> using AdminUI, by default, the type is no longer monitored after\n" +
"three days.</p><br />\n" +
"<p>The default value can be changed by changing the UpdateMonitoring\n" +
"property of the DWH_MONITOR Tech Pack. The <tt class=\"file-path\">lookahead</tt> value shows the number of days from today (the default is 2). To\n" +
"change the value, contact Ericsson Customer Support.</p><br />\n" +
"<p><strong class=\"MEDEMPH\">or</strong></p><br />\n" +
"<p>The system gets measurement types from data stream dynamically\n" +
"after a day and monitoring is built upon these measurement types.\n" +
"If you delete a measurement type, but the data stream includes measurements\n" +
"of the deleted type, then the deleted type continues to be displayed\n" +
"in monitoring.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>9</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>After loading late data, AdminUI does not show data that\n" +
"is older than three days.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>By default, the data that is older than three days is not\n" +
"updated in AdminUI.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li><p>After loading late data, in AdminUI, click <b class=\"object\">ETLC\n" +
"Set Scheduling</b>.</p>\n" +
"</li>\n" +
"<li><p>From <b class=\"object\">Set type</b>, select <tt class=\"input\"><b><i class=\"var\">Maintenance</i></b></tt> and from <b class=\"object\">Package</b>, select <tt class=\"input\"><b><i class=\"var\">DWH_MONITOR</i></b></tt>.</p>\n" +
"</li>\n" +
"<li><p>Select <b class=\"object\">UpdateFirstLoadings</b> and click<b class=\"object\">Start.</b></p>\n" +
"</li>\n" +
"</ul><br />\n" +
"<p>Running this set updates the data loadings for AdminUI from the\n" +
"previous 30 days.</p><br />\n" +
"<p>This operation takes a long time if there is a large amount of\n" +
"data.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>10</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Engine, Scheduler, DWH database, or ETL database displays\n" +
"a red light in AdminUI Loader status view.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The service is stopped.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Ensure that the service with the red light is running by\n" +
"following the instructions in <a href='javascript:parent.parent.parent.showAnchor(\"ShutdownDWH\")' class=\"link\"> Shutdown\n" +
"Eniq Services</a> guide.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>11</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Sets are dropped from queue.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Sets are dropped from the queue when it reaches the maximum\n" +
"priority (15). This occurs in a backlog situation.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>No action is required.</p><br />\n" +
"<p>If this problem occurs frequently, contact Ericsson Customer Support.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>12</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Performance problems in RNC Tech Pack with DC_E_RAN_UCELL_V_PMRES\n" +
"measurement.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Data storage method.</p><br />\n" +
"<p>If there is a large amount of data stored, 15 minute time window\n" +
"is exceeded causing system backlog.</p><br />\n" +
"<p>Previously disabled counters are enabled after Tech Pack upgrade.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Disable the following UCELL_V_PMRES counters that are enabled\n" +
"by default: pmRes7, pmRes8, pmRes9, pmRes10, pmRes11, pmRes12 </p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Log on to the ENIQ server or in a Multi-Blade deployment,\n" +
"on the Engine Blade as <tt class=\"file-path\">dcuser</tt>.</p>\n" +
"</li>\n" +
"<li><p>Change profile to NoLoads:<br /> <tt class=\"input\"><b>engine -e changeProfile\n" +
"NoLoads</b></tt></p>\n" +
"</li>\n" +
"<li><p>Navigate to ENIQ admin directory: <br /><tt class=\"input\"><b>cd /eniq/admin/bin</b></tt></p>\n" +
"</li>\n" +
"<li><p>Run the following script to <tt class=\"file-path\">disable</tt> counters:<br /> <tt class=\"input\"><b>./disableCounters.bsh</b></tt></p>\n" +
"</li>\n" +
"<li><p>Navigate to <tt class=\"file-path\">root</tt> directory<br /> <tt class=\"input\"><b>cd /</b></tt></p>\n" +
"</li>\n" +
"<li><p>Reload engine configurations:<br /> <tt class=\"input\"><b>engine -e\n" +
"reloadConfig</b></tt></p>\n" +
"</li>\n" +
"<li><p>Change the profile back to normal:<br /> <tt class=\"input\"><b>engine\n" +
"-e changeProfile Normal</b></tt></p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>13</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>DIM tables are empty for all corresponding Vector Measurement\n" +
"counters.</p><br />\n" +
"<p><strong class=\"MEDEMPH\">or</strong></p><br />\n" +
"<p>DC_RELEASE column not populated for DIM table related to the individual\n" +
"vector counters. (<br />Example: <tt class=\"file-path\">DIM_E_RBS_NODEBFUNCTION_V_pmCapacityNodeBDlCe</tt>)</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The <tt class=\"file-path\">DWHM_StorageTimeUpdate </tt> set\n" +
"which updates these tables does not run correctly for the TP during\n" +
"installation/upgrade of the TP.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Run the <tt class=\"file-path\">DWHM_StorageTimeUpdate</tt> set for the TP from the AdminUI. <br />Follow steps:</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Go to <b class=\"object\">ETLC Set Scheduling</b> in AdminUI.</p>\n" +
"</li>\n" +
"<li><p>Select <b class=\"object\">Set Type</b> as Tech Pack and <b class=\"object\">Package</b> as the TP for which you want to run the set.</p>\n" +
"</li>\n" +
"<li><p>Start the <tt class=\"file-path\">DWHM_StorageTimeUpdate</tt> set for the TP. <br />Example: <tt class=\"file-path\">DWHM_StorageTimeUpdate_DIM_\n" +
"E_RBS</tt></p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>14</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Upgrade fails if <tt class=\"file-path\">dcuser</tt> is not\n" +
"able to SSH localhost without password</p><br />\n" +
"<p><strong class=\"MEDEMPH\">Or</strong> ExecutionProfiler set fails on running the ENIQ\n" +
"Expansion procedure.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>In the <tt class=\"file-path\">/eniq/home/dcuser/.ssh/directory</tt>, the files <tt class=\"file-path\">id_rsa.pub</tt> and <tt class=\"file-path\">authorized_keys</tt> have different contents.</p><br />\n" +
"<p>To log in through SSH, both files must have the same contents.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Before the upgrade, check the permissions of the <tt class=\"file-path\">authorized_keys</tt> file. If permissions are set to <tt class=\"file-path\">root</tt> change the permissions to <tt class=\"file-path\">dcuser,</tt> then continue the upgrade.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>15</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p><tt class=\"file-path\">/eniq/home</tt> FS is full</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Unnecessary data in <tt class=\"file-path\">/eniq/home</tt> FS</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Delete unnecessary data from <tt class=\"file-path\">/eniq/home</tt> FS as extension of <tt class=\"file-path\">/eniq/home</tt> is not\n" +
"supported and it is already optimized.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>16</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>The following parsing errors are seen:</p><br />\n" +
"<p><tt class=\"output\">...is not supported in binary output mode</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The parsing is because the JVM cache is not updated properly\n" +
"after upgrade.</p><br />\n" +
"<p>The JVM cache holds some data related to the process for a complete\n" +
"session. So if the cache is not refreshed when the JVM is restarted/not\n" +
"restarted, then this error occurs.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Restart of ENIQ services is required to get parsing working\n" +
"again.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>17</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>DWHDB goes into a <tt class=\"file-path\">failed</tt> state\n" +
"frequently.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The database size is configured less than what is recommended\n" +
"for ENIQ, because of which database is full. The connection to the\n" +
"database is lost frequently and hence the database goes into a <tt class=\"file-path\">failed</tt> state.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Dimension the database according to the hardware dimension\n" +
"tools provided.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>18</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Automatic aggregation is not working for TP after upgrade.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>This issue is caused by the following:</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p> The monitored type is <tt class=\"file-path\">active</tt> but in <tt class=\"file-path\">Log_AggregationRules</tt> , monitored\n" +
"type is not present. As a result, when UpdateMonitoring is triggered,\n" +
"the set does not update the Log_AggregationStatus table. </p>\n" +
"</li>\n" +
"<li><p> During AutomaticAggregation, we check the Status column\n" +
"of Log_AggregationStatus table, which is either LOADED or BLOCKED,\n" +
"if the aggregation needs to run.</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Do the following to reaggregate data:</p><br />\n" +
"<p>In AdminUI, click Reaggregation.</p><br />\n" +
"<p>Select the time level, start time, end time, and Tech Pack.</p><br />\n" +
"<p>Click <tt class=\"file-path\">List</tt> to get a list of measurement\n" +
"types to be reaggregated. Select the measurement types to be reaggregated\n" +
"and click Aggregate.</p><br />\n" +
"<p>  To run AutomaticREAggregation: In AdminUI, click ETLC Set Scheduling.\n" +
"Select set type as 'Maintenance' and Package as 'DWH_MONITOR'. Click\n" +
"start AutomaticREAggregation.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>19</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>After init 6, File parsing and loading stopped.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>ENIQ services did not start in proper order after init\n" +
"6.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Restart the ENIQ services. See <a href='javascript:parent.parent.parent.showAnchor(\"restartEniqServices\")' class=\"xref\">Section  12.7</a>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>20</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Discrepancy in <tt class=\"file-path\">PERIOD_DURATION</tt> value between DAY and RAW tables.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The <tt class=\"file-path\">PERIOD_DURATION</tt> values for\n" +
"DAY tables are fetched from <tt class=\"file-path\">DIM_TIMELEVEL</tt>.</p><br />\n" +
"<p>In <tt class=\"file-path\">DIM_TIMELEVEL</tt>, for column <tt class=\"file-path\">TABLELEVEL=DAY</tt> , the <tt class=\"file-path\">DURATIONMIN</tt> value is set to default value 1440.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>To get the accurate values for PERIOD_DURATION, use DATACOVERAGE\n" +
"column from DAY table as it calculates (sum of (PERIOD_DURATION) from\n" +
"RAW), when a comparison of PERIOD_DURATION needs to be done between\n" +
"RAW and DAY tables.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>21</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Few Loaders stuck in priority queue and not moving to execution\n" +
"slot for around 3 ROPs.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>If Alarm interface is also scheduled with 168 reports,\n" +
"then it is a possible reason for the issue. Alarm reports are disabled\n" +
"and issue is not seen again.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Disable the reports or reduce the no of reports to be fetched\n" +
"at a time to 5-10.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>22</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Engine loading stops frequently because engine stoppage\n" +
"happens frequently.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>This is because the JVM cache is not updated properly after\n" +
"upgrade which results in a loading error. The JVM cache is holding\n" +
"some data related to the process for a complete session. So if the\n" +
"cache is not refreshed when the JVM is restarted/not restarted, then\n" +
"the said error occurs.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Restart of ENIQ services is required to get loading working\n" +
"again.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>23</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>While defining the monitoring rules, if <tt class=\"file-path\">MINSOURCE</tt> value is greater than the <tt class=\"file-path\">sourcecount</tt>, it labels the data of the respective ROP as CHECK_FAILED.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>ENIQ expects <tt class=\"file-path\">Minsource</tt> less\n" +
"than <tt class=\"file-path\">Sourcecount</tt> to have incoming data\n" +
"marked as loaded.</p><br />\n" +
"<p>If the mentioned condition is FALSE, ENIQ marks the data as CHECK_FAILED.\n" +
"According to normal ENIQ behavior, the data is picked during re-aggregation\n" +
"time, which runs at around 19:00 hrs daily.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Before applying any monitoring rule, first check the <tt class=\"file-path\">sourcecount</tt> values from ShowLoadings in AdminUI, then\n" +
"define the monitoring rule on respective Tech Pack. <tt class=\"file-path\">MinSource</tt> value is configured less than <tt class=\"file-path\">SourceCount</tt> value.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>24</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Normally, during NAS failover or SFS/VA Reboot, the ENIQ\n" +
"services are automatically restarted and do not require manual intervention.\n" +
"In rare cases, the ENIQ services could be in a continuous <tt class=\"file-path\">failed</tt> state.</p><br />\n" +
"<p>See <a href='javascript:parent.parent.parent.showAnchor(\"EniqServices\")' class=\"xref\">Section  37.2.3</a>.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Symantec Fault</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Ensure that the NASd and NAS-online services are in <tt class=\"file-path\">active</tt> state and sentinel is in online state:</p><br />\n" +
"<p><tt class=\"input\"><b>NASd.service</b></tt></p><br />\n" +
"<p><tt class=\"input\"><b>NAS-online.service</b></tt></p><br />\n" +
"<p><tt class=\"input\"><b>licensing-sentinel.service</b></tt></p><br />\n" +
"<p>After these are online, services recover themselves.</p><br />\n" +
"<p> If services remain <tt class=\"file-path\">inactive</tt>/ <tt class=\"file-path\">failed</tt>, reboot the server by running <tt class=\"input\"><b>init 6</b></tt> in the ENIQ Statistics (standalone) server.</p><br />\n" +
"<p>For a Multi-Blade, run <tt class=\"input\"><b>init 6</b></tt> in the following\n" +
"order</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>ENIQ Statistics Coordinator Server</p>\n" +
"</li>\n" +
"<li><p>ENIQ Statistics Engine Server</p>\n" +
"</li>\n" +
"<li><p>ENIQ Statistics Reader_1 Server</p>\n" +
"</li>\n" +
"<li><p>ENIQ Statistics Reader_2 Server</p>\n" +
"</li>\n" +
"</ul><br />\n" +
"<p>Then restart the services as mentioned in <a href='javascript:parent.parent.parent.showAnchor(\"restartEniqServices\")' class=\"xref\">Section  12.7</a>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>25</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>ENIQ FS is in read-only mode.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>If any ENIQ FS on SFS/VA reaches the defined threshold\n" +
"limit (depends on the configuration), then the FS is in read-only\n" +
"mode and ENIQ functionality is lost.</p><br />\n" +
"<p>All ENIQ services are down until FS is cleaned up. After the FS\n" +
"is cleaned up, the services are restarted and the functionality is\n" +
"recovered.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>To clear unwanted files, follow these steps:</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Log on to the NAS console and cleanup the unwanted files.<br /><sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote27-1\")'>(1)</a></sup></p>\n" +
"</li>\n" +
"<li><p>Restart NAS service. See <a href='javascript:parent.parent.parent.showAnchor(\"NasdRestart\")' class=\"xref\">Section  11.3</a>. <br /><sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote27-2\")'>(2)</a></sup></p>\n" +
"</li>\n" +
"<li><p>Restart all the ENIQ services. See <a href='javascript:parent.parent.parent.showAnchor(\"restartall\")' class=\"xref\">Section  37.7.3</a>.</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>26</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Symbolic links are not deleted even though the file parsing\n" +
"has happened correctly. While loading, the following warning message\n" +
"gets printed in the Loader Engine log of the particular TP: <tt class=\"output\">Move with memory copy failed, deleting the temporary file</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>While loading, the loader picks up the temporary ASCII\n" +
"or binary file from the output file path as defined in the TP interface.\n" +
"But if the TP cache is not refreshed correctly, then the temporary\n" +
"file does not get created correctly in the correct path leading to\n" +
"the warning message.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Refresh the TP cache by reactivating the interface by following\n" +
"the process. For the MB server, run the steps from the Coordinator\n" +
"Blade as <tt class=\"input\"><b>dcuser</b></tt>.</p><br />\n" +
"<p><tt class=\"input\"><b>cd /eniq/sw/installer</b></tt></p><br />\n" +
"<p>Run the command as <tt class=\"input\"><b>./activate_interface -o <i class=\"var\">&lt;OSS_NAME&gt;</i> -i <i class=\"var\">&lt;interface name&gt;</i></b></tt></p><br />\n" +
"<p>Example: <tt class=\"input\"><b>./activate_interface -o eniq_oss_1 -i INTF_DC_E_BULK_CM</b></tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>27</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>When NAS goes into <tt class=\"file-path\">inactive</tt> state\n" +
"and returns to <tt class=\"file-path\">active</tt> state, ENIQ tries\n" +
"to start all the services automatically. But the engine, though enabled,\n" +
"behaves abnormally affecting the parsing and loading.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>After the NAS comes in <tt class=\"file-path\">active</tt> state, all the services try to come in <tt class=\"file-path\">active</tt> state sequentially. But if the services do not come in <tt class=\"file-path\">active</tt> state in a sequence, then engine coming up before\n" +
"repdb leads to failure in refreshing the transformations required\n" +
"for parsing.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>If the transformations do not get updated on engine restart\n" +
"after the NAS comes into <tt class=\"file-path\">active</tt> state,\n" +
"then engine needs to be restarted again in order to update the transformations\n" +
"correctly.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>28</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p><b class=\"object\">::java.lang.ExceptionInInitializationError</b> error while launching techpackide/universeupdateinstaller</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>There is a jar signing issue from 16B as all the packages\n" +
"are unsigned.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>To launch the universeupdateinstaller/techpackide package\n" +
"when delivered as unsigned packages, the <b class=\"object\">java.policy</b> file in JAVA installed path should be updated with the lines. <b class=\"object\">grant { permission java.security.AllPer mission; };</b> For\n" +
"example: C:\\Program Files\\Java\\jre8\\lib\\security\\java.policy</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>29</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>If the security settings block an application from running\n" +
"with an out-of-date or expired version of java.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Security settings</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Change the <b class=\"object\">java security</b> settings in <b class=\"object\">control panel</b>. Follow the steps.</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Go to <b class=\"object\">Control Panel &gt; Java &gt; Security</b></p>\n" +
"</li>\n" +
"<li><p>Click <tt class=\"file-path\">Edit Site List...</tt></p>\n" +
"</li>\n" +
"<li><p>Add URL to this list.. <br />Example: <tt class=\"file-path\">https://<i class=\"var\">&lt;server_ip&gt;</i>:<i class=\"var\">&lt;port&gt;</i>/universeupdateinstaller/</tt></p>\n" +
"</li>\n" +
"<li><p>Click <tt class=\"file-path\">ADD</tt> then click <tt class=\"file-path\">OK</tt>.</p>\n" +
"</li>\n" +
"</ul><br />\n" +
"<p>This is applicable for both EBSMANAGER and Techpackide.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>30</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>During initial install, the following warning is shown\n" +
"in engine logs:</p><br />\n" +
"<p><tt class=\"file-path\">WARNING org.apache.velocity : Could not create file\n" +
"appender 'velocity.log'    java.io.FileNotFoundException: velocity.log\n" +
"(No such file or directory).</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>During initial Install, <strong class=\"MEDEMPH\">DWHMonitor</strong> raises <strong class=\"MEDEMPH\">FileNotFoundException</strong> exception.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>This does not have any impact, so it is ignored.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>31</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Data loading into the database table stops with the following\n" +
"information message in the log file: &lt;Blade_Host_Name&gt;_status_log[_#&lt;number&gt;@&lt;Timestamp&gt;]\n" +
"present at /eniq/log/cleanup_log: <br /><br />INFO: Partition size limit\n" +
"exceeds for filesystems:<br />&lt;FileSystemName&gt;<br /><br /> Setting\n" +
"engine to no load<br /><br />where, <br />[_#&lt;number&gt;@&lt;Timestamp&gt;]\n" +
"is optional <br />&lt;FileSystemName&gt; is the name of the filesystem\n" +
"whose utilization exceeds the threshold limit.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>If the utilization of LV/NAS file system reaches more than\n" +
"90% or the utilization of Root File System reaches more than 95% on\n" +
"any of the blades of the ENIQ Stats server, engine profile changes\n" +
"to NoLoads at 1 AM.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Clean up the directory for which the file system utilization\n" +
"is more than 90% (for <tt class=\"file-path\">Root</tt> File System,\n" +
"threshold is 95%).</p>\n" +
"</li>\n" +
"<li><p>After the LV/NAS file system utilization is less than\n" +
"90% and <tt class=\"file-path\">Root</tt> File System utilization is\n" +
"less than 95%, do the following:</p>\n" +
"</li>\n" +
"<li><p>Log on to the ENIQ Stats Coordinator server as <tt class=\"input\"><b>dcuser</b></tt>.</p>\n" +
"</li>\n" +
"<li><p>Use the following command:<br /><tt class=\"input\"><b> # engine -e getCurrentProfile</b></tt> <br /><tt class=\"output\">It appear as NoLoads.</tt></p>\n" +
"</li>\n" +
"<li><p>To set engine profile to <tt class=\"file-path\">Normal</tt>, use the command: <br /><tt class=\"input\"><b># engine -e changeProfile Normal</b></tt></p>\n" +
"</li>\n" +
"<li><p>Verify the current profile using the following command: <br /><tt class=\"input\"><b># engine -e getCurrentProfile </b></tt><br /><tt class=\"output\">It appear\n" +
"as Normal.</tt></p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>32</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>''<strong class=\"MEDEMPH\">04:00:40 SEVERE 1.Aggregator Error while initializing\n" +
"aggregation due to an SQL exception JZ006: Caught IOException: java.net.SocketTimeoutException:\n" +
"Read timed out use getCause() to see the error chain</strong>'' Error\n" +
"seen during aggregation.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>In <em class=\"LOWEMPH\">eniq/sw/conf</em>, static.properties, <em><strong class=\"HIGHEMPH\">statsdefaultQueryTimeOutInMins</strong></em> value is set to <strong class=\"MEDEMPH\">300 minutes</strong>. This means that any query can run up to a max\n" +
"of 300min (5 hrs) to complete execution.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>The value of <em><strong class=\"HIGHEMPH\">statsdefaultQueryTimeOutInMins</strong></em> can be increased to a higher value in multiples of <strong class=\"MEDEMPH\">60 minutes</strong> to avoid the aggregates from failing with time-out exception.</p><br />\n" +
"<p>After updating the value, restart all the services.</p><br />\n" +
"<p>Log on to the server as <tt class=\"input\"><b>dcuser</b></tt>: <tt class=\"file-path\">#\n" +
"su &ndash; dcuser</tt></p><br />\n" +
"<p>1) Increase the value of the parameter <em><strong class=\"HIGHEMPH\">statsdefaultQueryTimeOutInMins</strong></em> in static.properties under <em class=\"LOWEMPH\">/eniq/sw/conf</em><br />2) Restart all the services <br /><tt class=\"file-path\"># cd /eniq/admin/bin</tt><br /><tt class=\"file-path\"># bash ./manage_deployment_services.bsh -a restart\n" +
"-s ALL</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>33</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>''ERROR: All IQ large memory has been used, allocation\n" +
"cancelled'' seen in /eniq/local_logs/iq/dwhdb.iqmsg.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>This error message is raised if the customized queries\n" +
"are trying to fetch huge amount of data, which in-turn may consume\n" +
"significant IQ memory.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Customized queries should be used optimally to avoid <tt class=\"file-path\">out of memory</tt> issue.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>34</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>During database restart and ENIQ service, the following\n" +
"error message is displayed on the ENIQ log files: <br /><strong class=\"MEDEMPH\">java.sql.SQLException: [Sybase][JDBC Driver][Sybase\n" +
"IQ] connection was terminated.</strong></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>During database restart, database clients receive the error\n" +
"messages which are logged in the ENIQ logs.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Since this does not have any impact, ignore the error messages.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>35</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Data older than three days, must be aggregated manually.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>By default, the data which is older than three days must\n" +
"be aggregated manually.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Run the Reaggregation in batches to reduce performance\n" +
"degradation. For more details, see <a href='javascript:parent.parent.parent.showAnchor(\"Reaggregation\")' class=\"link\"> 5.2.6\n" +
"Reaggregating data</a>.</p><br />\n" +
"<p>This operation takes a long time if there is a large amount of\n" +
"data.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>36</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>More than 100% ENIQ CPU use causes major ENIQ degradation.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The server takes more time to build contiguous large pages\n" +
"because free memory space is low.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Log on to the server using <strong class=\"MEDEMPH\">root</strong> user.</p>\n" +
"</li>\n" +
"<li><p>Edit <strong class=\"MEDEMPH\">/etc/system </strong>file: <tt class=\"file-path\">vi\n" +
"/etc/system</tt></p>\n" +
"</li>\n" +
"<li><p>Add the following line: <br />   <tt class=\"file-path\">set pg_contig_disable\n" +
"= 0x1</tt></p>\n" +
"</li>\n" +
"<li><p>Reboot the server.</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>37</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>AlarmCFG is not available at <br /><tt class=\"file-path\">https://<i class=\"var\">YourLoaderServerIP</i>:8443/alarmcfg/</tt>.</p><br />\n" +
"<p>In a Multi-Blade deployment, it is the IP address of the Coordinator\n" +
"Blade.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>BO SDK APIs are not loaded properly in Web Server Service.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Restart Web Server.</p>\n" +
"</li>\n" +
"<li><p>Run command as <tt class=\"file-path\">dcuser</tt>.</p>\n" +
"</li>\n" +
"<li><p>In a Multi-Blade deployment, execute the command on\n" +
"the Coordinator Blade:</p>\n" +
"</li>\n" +
"</ul><br />\n" +
"<p><tt class=\"input\"><b>{dcuser}# /eniq/sw/bin/webserver restart</b></tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>38</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>During Initial Install following BIOS level warning is\n" +
"seen <tt class=\"file-path\">510- The installed number of DIMMs on one or more\n" +
"processors results in an unbalanced memory configuration across memory\n" +
"controllers. This may result in non-optional memory performance.<br />Action: Consult documentation for memory population guidelines.</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Unbalanced Memory Configuration</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>If the user sees this BIOS level warning as part of Server\n" +
"Startup, Power On or Reboot, it can be ignored.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>39</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>The use of the database filesystems is showing more than\n" +
"90% for cost effective and compact rack deployment</p><br />\n" +
"<p>#df -hk|grep dbspace</p><br />\n" +
"<p>/dev/mapper/eniq_stats_pool-dwh_main_dbspace 1427509896 1383734724\n" +
"43758788 97% /eniq/database/dwh_main_dbspace</p><br />\n" +
"<p>/dev/mapper/eniq_stats_pool-dwh_temp_dbspace 316493992 291208360\n" +
"25269248 93% /eniq/database/dwh_temp_dbspace</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>This is expected. LVM are thick provisioned on Rack hence\n" +
"each file system is dimensioned individually in RHEL (as compared\n" +
"to sharing zpool among FS in case of ENIQ on Solaris). Database files\n" +
"would consume nearly the entire space in dwh_main_dbspace and dwh_temp_dbspace\n" +
"filesystem as those files are reserved explicitly for IQ use.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>No action required. It can be ignored.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>40</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>In Multi-Blade, capacity license value automatically gets\n" +
"changed from 8 to 2 on sentinel service restart. Due to this, ENGINE\n" +
"service does not start and impacts data loading.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>lservrc file contains multiple entries for the same licence\n" +
"which causes the issue.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Login to the server as <tt class=\"file-path\">root</tt> user\n" +
"in Coordinator Blade.</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Take a backup of sentinel file. <br /><tt class=\"input\"><b>{root}#\n" +
"cp /eniq/sentinel/lic/lservrc /eniq/sentinel/lic/lservrc_orgn</b></tt><br /></p>\n" +
"</li>\n" +
"<li><p>Remove all the entries of the capacity license from\n" +
"the /eniq/sentinel/lic/lservrc<br /><tt class=\"input\"><b> {root}# cat /eniq/sentinel/lic/lservrc\n" +
"| grep -v\" &lt; CXC_NO_OF_CAPACITY_LIC &gt;\" &gt;&gt; /var/tmp/lservrc</b></tt><br />Where &lt; CXC_NO_OF_CAPACITY_LIC &gt;is the CXC number of capacity\n" +
"licence. <br /><tt class=\"input\"><b>{root}# cp /var/tmp/lservrc /eniq/sentinel/lic/lservrc</b></tt> <br /> </p>\n" +
"</li>\n" +
"<li><p>Switch to <tt class=\"file-path\">dcuser</tt> and apply\n" +
"the correct capacity license on the server. <br /><tt class=\"input\"><b>{dcuser} #\n" +
"su &ndash; dcuser</b></tt> <br /><tt class=\"input\"><b>{dcuser} # /eniq/sw/bin/licmgr\n" +
"-install &lt;PATH_TO_CAPACITY_LICENSES_FILE&gt;</b></tt><br />Where &lt;PATH_TO_CAPACITY_LICENSES_FILE&gt;\n" +
"is the directory path and file name containing the capacity licenses.<br /> <tt class=\"input\"><b>{dcuser} # exit</b></tt></p>\n" +
"</li>\n" +
"<li><p>Restart sentinel service. <br /><tt class=\"input\"><b>{root}# systemctl\n" +
"restart licensing-sentinel.service</b></tt><sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote27-3\")'>(3)</a></sup></p>\n" +
"</li>\n" +
"<li><p>Restart licmgr and engine services. Run the following\n" +
"command as <tt class=\"file-path\">root</tt> user:<sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote27-4\")'>(4)</a></sup> <br /><tt class=\"input\"><b>{root}# systemctl restart\n" +
"eniq-licmgr.service</b></tt> <br /><tt class=\"input\"><b>{root}# systemctl restart\n" +
"eniq-engine.service</b></tt> <sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote27-5\")'>(5)</a></sup></p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>41</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Any error or exception thrown in DWH_MONITOR engine logs\n" +
"related to log_aggregationrule table. </p><br />\n" +
"<p>The following is the procedure to check the log:</p><br />\n" +
"<p>/eniq/log/sw_log/engine/DWH_MONITOR/engine-&lt;timestamp&gt;.log</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Aggregation sets triggered around 0700 Hrs.</p>\n" +
"</td>\n" ;

var C37_2P1=
"<td align=\"left\" width=\"42%\">\n" +
"<p>No action need to be performed.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>42</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>High system resource utilization (CPU and IQ Resources)\n" +
"is observed on Reader-1 ENIQ server when all of the following conditions\n" +
"are met:</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Deployment Type: Config-F and Config-G</p>\n" +
"</li>\n" +
"<li><p>Counter volume of LTE baseband nodes exceeds 500M</p>\n" +
"</li>\n" +
"<li><p>DU and CELLFDD Busy Hour enabled (Predefined PP&rsquo;s\n" +
"or Custom Defined CP&rsquo;s )</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li><p>High number of rows are inserted in the FDD DAYBH Table\n" +
"during DU and CELLFDD Busy Hour aggregation, resulting in high CPU\n" +
"and IQ Resources usage</p>\n" +
"</li>\n" +
"<li><p>LTE baseband  nodes counter volume exceeds more than\n" +
"500M</p>\n" +
"</li>\n" +
"<li><p>Restricted counters enabled on LTE feature</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>Following options are available for DU and CELLFDD Busy\n" +
"hour Aggregation handling </p><br />\n" +
"<p><strong class=\"MEDEMPH\">Option 1: Disable DU and CELL FDD Busy hour:</strong> </p><br />\n" +
"<p>If DU and CELLFDD busy hour are not required by the user, DU and\n" +
"CELLFDD busy hour can be disabled in the AdminUI. For details, See <a href='javascript:parent.parent.parent.showAnchor(\"BusyHourConfig\")' class=\"xref\">Section  5.20</a>.</p><br />\n" +
"<p><strong class=\"MEDEMPH\">Option 2: Limit Nodes for DU and CELL FDD\n" +
"Busy Hour Aggregation:</strong> </p><br />\n" +
"<p>If DU and CELLFDD busy hour are required then the busy hour configuration\n" +
"must not be done for all the nodes. Configuration should be added\n" +
"only for the nodes which require Busy Hour Calculation. </p><br />\n" +
"<p>For configuration details, see <em class=\"LOWEMPH\">Ericsson LTE Topology\n" +
"Technology Package, User Guide</em> , <a href='javascript:parent.parent.parent.showAnchor(\"LTEUserGuide\")' class=\"xref\">Reference [34]</a>.</p><br />\n" +
"<p>If restricted counters are enabled, then they need to be turned\n" +
"off on the node or alternative counters need to be used. For more\n" +
"details, see <a href='javascript:parent.parent.parent.showAnchor(\"NIR20.2\")' class=\"xref\">Reference [35]</a>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>43</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>In ENIQ servers, <strong class=\"MEDEMPH\">eniq-dwhdb.service</strong> may not\n" +
"come up after reboot in reader servers (Either during RHEL 7.6 to\n" +
"RHEL 7.7 upgrade or any normal system reboot activity).</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>This is due to the unavailability of raw devices and respective\n" +
"multipath disk partitions of maindb and sysmain devices.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p><sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote27-6\")'>(6)</a></sup></p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Download <em class=\"LOWEMPH\">19089-CXP9038650_EN_B_TAR_GZIPV1.tar.gz</em> from the following Gask link to ENIQ server <tt class=\"input\"><b>/var/tmp</b></tt> location: <a href=\"http://gask2web.ericsson.se/pub/get?DocNo=19089-CXP9038650&amp;Lang=EN&amp;Rev=B&amp;Format=TAR_GZIPV1\" title=\"http://gask2web.ericsson.se/pub/get?DocNo=19089-CXP9038650&amp;Lang=EN&amp;Rev=B&amp;Format=TAR_GZIPV1\" target=\"ALEX_EXTERNAL\">http://gask2web.ericsson.se/pub/get?DocNo=19089-CXP9038650&amp;Lang=EN&amp;Rev=B&amp;Format=TAR_GZIPV1</a><br /><sup><a href='javascript:parent.parent.parent.showAnchor(\"tnote27-7\")'>(7)</a></sup></p>\n" +
"</li>\n" +
"<li><p>Extract the package as <tt class=\"file-path\">root</tt> user in the copied location<br /><tt class=\"input\"><b>#cd /var/tmp</b></tt><br /><tt class=\"input\"><b>#tar &ndash;xvzf  19089-CXP9038650_EN_B_TAR_GZIPV1.tar.gz</b></tt></p>\n" +
"</li>\n" +
"<li><p>Execute the script as <strong class=\"MEDEMPH\">root</strong> user from the\n" +
"extracted location.<br /><tt class=\"input\"><b>cd Create_Missed_Raw_disk</b></tt><br /><tt class=\"input\"><b>#./create_missed_raw_disks.py</b></tt></p>\n" +
"</li>\n" +
"<li><p>For ENIQ Multi-blade deployment, execute the following\n" +
"command to recognize the partition in reader blades ( dwh_reader_1\n" +
"and dwh_reader_2)<br />#partprobe</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>44</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>Holes are seen in AdminUI during data loading or missed\n" +
"PM data</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li><p>PM file not received from the connected OSS.</p>\n" +
"</li>\n" +
"<li><p>Error in parsing of the PM files. </p>\n" +
"</li>\n" +
"<li><p>In FLS integration mode, symbolic links are not created\n" +
"by FLS due to some error in FLS.</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li><p>Create the symbolic links manually in the required directory\n" +
"for the missing ROPs for all the node types. To identify directory\n" +
"location for each node type, see <em class=\"LOWEMPH\">Summary of External\n" +
"Interfaces for Ericsson Network IQ</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ExternalInterfacesforENIQ\")' class=\"xref\">Reference [29]</a>.</p>\n" +
"</li>\n" +
"<li><p>If ENIQ-S is integrated in FLS mode, use \"FLS Monitoring\"\n" +
"utility in AdminUI to create symbolic links from a specific date and\n" +
"time. For information related to re-create the symbolic links, see\n" +
"section, <em class=\"LOWEMPH\">Backdated Query using FLS</em> in <em class=\"LOWEMPH\">OSS Configuration for ENIQ Statistics</em>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a>.</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>44</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>If ENIQ-S is integrated with ENM as <tt class=\"file-path\">Master</tt> and <tt class=\"file-path\">Slave</tt> configuration, then any new\n" +
"node added to the following node types remains in <tt class=\"file-path\">unassigned</tt> state, impacting the data load of the new nodes.</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>DSC, vDSC</p>\n" +
"</li>\n" +
"<li><p>MRF, vMRF</p>\n" +
"</li>\n" +
"<li><p>vWCG</p>\n" +
"</li>\n" +
"<li><p>MTAS, vMTAS, MTAS-TSP</p>\n" +
"</li>\n" +
"<li><p>SBG, vSBG, SBG-IS</p>\n" +
"</li>\n" +
"<li><p>BGF, vBGF</p>\n" +
"</li>\n" +
"<li><p>IPWorks, vIPWorks</p>\n" +
"</li>\n" +
"<li><p>vEME</p>\n" +
"</li>\n" +
"<li><p>CSCF, vCSCF, CSCF-TSP</p>\n" +
"</li>\n" +
"<li><p>HSS-FE, vHSS-FE ,HSS-FE-TSP</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The remapping of certain node types from CORE to IMS technology\n" +
"as part of feature file is performed. If there is a policy criteria\n" +
"configuration available only for CORE technology considering the node\n" +
"types, then the new nodes of the node types received will be in <tt class=\"file-path\">unassigned</tt> state.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>To handle the following scenarios in order to make the\n" +
"nodes <tt class=\"file-path\">assigned</tt>, follow the section, <em class=\"LOWEMPH\">Policy and Criteria Configuration</em> in <em class=\"LOWEMPH\">OSS Configuration for ENIQ Statistics</em>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a>.</p><br />\n" +
"<ul class=\"unoL\">\n" +
"<li><p>To make the nodes <tt class=\"file-path\">assigned</tt>, add the IMS technology entry to the policy criteria tool, so that\n" +
"node is in <tt class=\"file-path\">assigned</tt> state.</p>\n" +
"</li>\n" +
"<li><p>To remap the existing node assignment of the node types\n" +
"from CORE to IMS technology, delete the policy criteria entry of the\n" +
"CORE technology, so that the nodes get <tt class=\"file-path\">unassigned</tt>. Once the nodes are <tt class=\"file-path\">unassigned</tt>, add an\n" +
"entry for CORE and IMS technology in the policy criteria tool according\n" +
"to the distribution needed.</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\" rowspan=\"2\">\n" +
"<p>45</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\" rowspan=\"2\">\n" +
"<p>Available free swap memory reaches\n" +
"0 MB</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The kernal uses heuristics to guess which pages of memory\n" +
"are needed and tries to keep those pages in memory, regardless of\n" +
"whether they belong to processes or kernel caches. </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\" rowspan=\"2\">\n" +
"<p>No action required and this is\n" +
"handled by the operating system. This does not have any impact on\n" +
"performance, so it is ignored.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>It is normal for the kernel to swap out process memory,\n" +
"even when there is plenty of cache memory.</p><br />\n" +
"<p>If swap memory is needed for existing or new processes, unused\n" +
"memory pages are freed up from swap (existing or new processes).</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"13%\">\n" +
"<p>46</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"22%\">\n" +
"<p>During Initial Installation following error is seen in\n" +
"dwh_reader.iqmsg:<br /><tt class=\"file-path\">Allocation failed. Dbspace IQ_SYSTEM_TEMP\n" +
"is INVALID I. 09/13 08:34:30. 0000000013 Warning: s_blockmap is throwing\n" +
"while user locked. bmp:0x7f7e28708ee8 lockRefCount:1 created from:stcxtlib/st_database.cxx:5369\n" +
"locked from:slib/s_blockmap.cxx:1341</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>The trace are non-fatal in nature. This error is seen when\n" +
"a client tries to establish a connection with the database that requires\n" +
"IQ_SYSTEM_TEMP which is failing. But later the temp_db files are created\n" +
"successfully. It is just the logging that is getting printed and therefore\n" +
"not impacting any functionality.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"42%\">\n" +
"<p>This does not have any functionality impact, so it can\n" +
"be ignored.</p>\n" +
"</td></tr></table><p class=\"tnote\"><a name=\"tnote27-1\">(1) &nbsp;</a>The user needs to logon to NAS directly as support user and\n" +
"clean up the problem directory on the NAS server itself.<br /></p><p class=\"tnote\"><a name=\"tnote27-2\">(2) &nbsp;</a>NAS service has dependency with Sentinel service,\n" +
"which also needs to be in operational state.<br /></p><p class=\"tnote\"><a name=\"tnote27-3\">(3) &nbsp;</a> Wait till sentinel\n" +
"gets restarted. The user can check sentinel service using <strong class=\"MEDEMPH\">''services\n" +
"-s sentinel''</strong>. <br /></p><p class=\"tnote\"><a name=\"tnote27-4\">(4) &nbsp;</a> Clear service\n" +
"(if any) from maintenance.<br /></p><p class=\"tnote\"><a name=\"tnote27-5\">(5) &nbsp;</a> Wait till services gets restarted.\n" +
"The user can check services using <strong class=\"MEDEMPH\">''services -s &lt;SERVICE_NAME&gt;''</strong>.<br /></p><p class=\"tnote\"><a name=\"tnote27-6\">(6) &nbsp;</a>This fix can be applied only if ENIQ services are\n" +
"up and running till the system is rebooted, and any raw devices and\n" +
"respective disk partitions are not deleted manually as part of other\n" +
"system maintenance operations.<br /></p><p class=\"tnote\"><a name=\"tnote27-7\">(7) &nbsp;</a>In\n" +
"the case of Multi-blade ENIQ server deployment, download the <em class=\"LOWEMPH\">19089-CXP9038650_EN_B_TAR_GZIPV1.tar.gz</em> on the <strong class=\"MEDEMPH\">coordinator</strong> blade server.<br /></p><br />\n" +
"\n"+
"</div>\n";

var C37_2_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"AdminUI_issue\"></a><span class=\"CHAPNUMBER\">37.2.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_bsaj\"></a><a name=\"CHAPTER37.2.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshoot AdminUI\n" +
"Issue</a></span></h3>\n" +
"\n" +
"<p>\n" +
"If unable to launch AdminUI, then we need to sync password in all\n" +
"four files</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Reset password in niq.ini</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Reset password in server.xml</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Generate Self-Signed and CA-Signed certificate for <tt class=\"file-path\">keystore.jks</tt> with reset password</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Generate <tt class=\"file-path\">truststore.ts</tt> file\n" +
"with reset password</li></ol>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To reset password in niq.ini, server.xml and generate self-signed\n" +
"certificate for keystore.jks, follow these steps:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on as <tt class=\"file-path\">root</tt> user on the\n" +
"server, Co-ordinator (in case of Multi-Blade deployment) </li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to installer directory <p>\n" +
"<tt class=\"input\"><b>{root}#: cd /eniq/sw/installer/</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run configure_newkeystore with -r option <p>\n" +
"<tt class=\"input\"><b>{root}# ./configure_newkeystore -r</b></tt></p>\n" +
"</li></ol>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Procedure to generate CA-Signed certificate\n" +
"for keystore:</strong></p>\n" +
"\n" +
"<p>\n" +
"For generating CA-Signed Certificate, see sections 4.1.2 - Preparing\n" +
"ENIQ Statistic Server for CA Signed Certificate Import to Section\n" +
"4.1.5 - Importing Certificates on Browser in <strong class=\"MEDEMPH\">Ericsson\n" +
"Network IQ Security Admin Guide</strong>, <a href='javascript:parent.parent.parent.showAnchor(\"ENIQ_SecurityAdminGuide\")' class=\"xref\">Reference [36]</a>.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Use reset password.</dd></dl><br />\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Procedure to create truststore.ts file:</strong></p>\n" +
"\n" +
"<p>\n" +
"Run the following steps on all ENM Servers connected to ENIQ:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ-S server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following commands to Backup and Delete existing <tt class=\"file-path\">trustore.ts</tt> file:\n" +
"<ol type=\"a\">\n" +
"\n" +
"<li class=\"substep\"><tt class=\"input\"><b>{dcuser} #: mkdir /eniq/home/dcuser/truststore_file_backup</b></tt>\n" +
"</li>\n" +
"\n" +
"<li class=\"substep\"><tt class=\"input\"><b>{dcuser} #: cp /eniq/sw/runtime/jdk/jre/lib/security/truststore.ts\n" +
"/eniq/home/dcuser/truststore_file_backup/</b></tt>\n" +
"</li>\n" +
"\n" +
"<li class=\"substep\"><tt class=\"input\"><b>{dcuser} #: rm truststore.ts</b></tt>\n" +
"</li>\n" +
"</ol></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">For further steps, see section <strong class=\"MEDEMPH\">Update\n" +
"Existing ENM Certificates</strong> in <strong class=\"MEDEMPH\">OSS Configuration\n" +
"for ENIQ Statistics Document</strong>, <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a>.</li></ol>\n" +
"\n"+
"</div>\n";

var C37_2_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"DailyAggregationNot\"></a><span class=\"CHAPNUMBER\">37.2.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_tm1d\"></a><a name=\"CHAPTER37.2.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Daily\n" +
"Aggregation Is Happening Very Late</a></span></h3>\n" +
"\n" +
"<p class=\"titled-block\">Cause</p><p>\n" +
"ENIQ triggers the aggregation for incomplete data only if last\n" +
"loading of data happened 1.5 hours ago.</p>\n" +
"<p>\n" +
"If the data loading pattern is late and continuous without having\n" +
"a 1.5 hour gap between two consecutive loadings, then ENIQ does not\n" +
"trigger initial aggregation.</p>\n" +
"\n" +
"<p class=\"titled-block\">Action</p><p>\n" +
"Execute the following to trigger an initial aggregation at a fixed\n" +
"time with the available data (the data loaded by that time) for a\n" +
"particular Tech Pack:</p>\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server or in a Multi-Blade deployment\n" +
"on the Engine Blade as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Edit the file:<br /><tt class=\"input\"><b>/eniq/sw/conf/static.properties</b></tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Add entries to the static.properties and save it. <br /><tt class=\"input\"><b>AggregationStartTP=<i class=\"var\">&lt;tp_name&gt;</i></b></tt><br /><tt class=\"input\"><b>aggStartTime=<i class=\"var\">&lt;HH:mm:ss&gt;</i></b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Change profile to NoLoads:<br /> <tt class=\"input\"><b>engine -e changeProfile\n" +
"NoLoads</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Reload engine configurations:<br /> <tt class=\"input\"><b>engine -e reloadConfig</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Change the profile back to normal:<br /> <tt class=\"input\"><b>engine\n" +
"-e changeProfile Normal</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Example:<p>\n" +
"If static.properties has entries:</p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>AggregationStartTP=DC_E_ERBS</b></tt> <br /> <tt class=\"input\"><b>aggStartTime=04:00:00</b></tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">The parameters must not contain spaces(DC_E_ERBS, 04:00:00).\n" +
"ENIQ triggers the initial aggregation for DC_E_ERBS Tech Pack around\n" +
"04:00:00 am with the available data (if aggregation is not started\n" +
"by that time).</li>\n" +
"<li class=\"UNORD\">This feature works only with the Tech Pack defined in\n" +
"static.properties. For others, aggregation works in the normal way.</li></ul></dd></dl><br /></li></ol>\n" +
"\n"+
"</div>\n";

var C37_2_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"EniqServices\"></a><span class=\"CHAPNUMBER\">37.2.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_9kz6\"></a><a name=\"CHAPTER37.2.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ENIQ Services\n" +
"in a Continuous Failed State during NAS Failover or SFS/VA Reboot</a></span></h3>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Normally, during a NAS failover or an SFS/VA reboot, the\n" +
"ENIQ services are automatically restarted and do not require manual\n" +
"intervention.<p>\n" +
"In rare circumstances, the ENIQ services can be in a continuous <tt class=\"file-path\">failed</tt> state.</p>\n" +
"</dd></dl><br />\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Manually clearing the service status from a <tt class=\"file-path\">failed</tt> state also does not push the service into an <tt class=\"file-path\">inactive</tt> state.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check the service Systemd logs to check if the messages\n" +
"are seen repeatedly.<p>\n" +
"<tt class=\"output\">systemd[1]: Unit eniq-&lt;service_name&gt;.service entered\n" +
"failed state.</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">systemd[1]: eniq-&lt;service_name&gt;.service failed.</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check /eniq/local_logs/NASd/NASd.log for warnings.<p>\n" +
"<tt class=\"output\">&lt;YYYY-Mon-Date&gt;:: Warning:: NAS filesystems failed to\n" +
"respond within 20 seconds.</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Waiting 10 seconds before retry number 3. This will allowthe\n" +
"NAS to failover and recover before inactive services</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">&lt;YYYY-Mon-Date&gt;:: Warning:: NAS filesystems failed to\n" +
"respond within 20 seconds.</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Waiting 10 seconds before retry number 4. This will allow\n" +
"the NAS to failover and recover before inactive services.</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">&lt;YYYY-Mon-Date&gt;:: INFO:: inactive called for NAS-online.service.</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">&lt;YYYY-Mon-Date&gt;:: WARNING:: NAS filesystems unavailable;\n" +
"NAS milestone is in inactive stage</tt></p>\n" +
"</li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_royb\"></a><a name=\"CHAPTER37.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting IQ Memory Issues</a></span></h2>\n" +
"\n" +
"<p>\n" +
"If the system faces any memory related issues, which are affecting\n" +
"either the performance or any data loading, it is recommended to take\n" +
"help from ENIQ Statistics solution architects to analyze the current\n" +
"memory configuration of the server based on the deployment as specified\n" +
"in <a href='javascript:parent.parent.parent.showAnchor(\"tbl-ramconfiguration\")' class=\"xref\"> Table 28</a>.</p>\n" +
"\n" +
"<p>\n" +
"From 17B, the internal memory use within ENIQ Statistics is increased.\n" +
"As a result, several ENIQ Statistics servers will require additional\n" +
"RAM. Affected server configurations is updated as specified in <a href='javascript:parent.parent.parent.showAnchor(\"tbl-ramconfiguration\")' class=\"xref\"> Table 28</a>.</p>\n" +
"\n" +
"<p>\n" +
"Except for the Multi-Blade deployment Config-E and higher configuration,\n" +
"existing HP Gen8 server configurations are supported provided that\n" +
"ENIQ Statistics server does not experience any memory related issues. <br />As an example, if ENIQ is handling very low volumes, additional\n" +
"RAM is not required.</p>\n" +
"\n" +
"<p>\n" +
"See <a href='javascript:parent.parent.parent.showAnchor(\"ErrorMessagesNew\")' class=\"link\"> Section 29.3.1 </a> for\n" +
"ways to check if ENIQ Statistics is experiencing the following memory\n" +
"related issues: Insufficient Buffer, IQ Large Memory and Main Buffer.\n" +
"Where RAM is not increased, these memory checks are repeated regularly,\n" +
"especially if the ENIQ load changes. When an issue is observed, RAM\n" +
"must be increased.</p>\n" +
"\n" +
"<p>\n" +
"ENIQ Statistics is robust enough to recover from most memory related\n" +
"issues. There is a delay in data availability, but it recovers. The\n" +
"data is not lost. This robustness is not a long-term solution and\n" +
"RAM must be increased.</p>\n" +
"\n" +
"<p>\n" +
"The following <a name=\"tbl-ramconfiguration\" href='javascript:parent.parent.parent.showAnchor(\"tbl-ramconfiguration\")' class=\"xref\"> Table 28</a> summarizes\n" +
"the RAM configuration for ENIQ Statistics deployments from 17B:</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE28\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 28 &nbsp;&nbsp; RAM configuration for ENIQ Statistics Deployments</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"center\" valign=\"top\" width=\"36%\" rowspan=\"2\">\n" +
"\n" +
"<p>ENIQ Deployment</p></th>\n" +
"<th align=\"center\" valign=\"top\" width=\"29%\" rowspan=\"2\">\n" +
"\n" +
"<p>ENIQ Server</p></th>\n" +
"<th align=\"center\" valign=\"top\" width=\"25%\" colspan=\"2\">\n" +
"\n" +
"<p> Memory Requirement</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"center\" valign=\"top\" width=\"17%\">\n" +
"\n" +
"<p>HP Gen 9 server</p></th>\n" +
"<th align=\"center\" valign=\"top\" width=\"19%\">\n" +
"\n" +
"<p>HP Gen 8 server</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"36%\">\n" +
"<p>Single Blade (Config A) </p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>ENIQ Statistics</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>256G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>256G</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"36%\">\n" +
"<p>Single-Blade (Config C) </p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>ENIQ Statistics</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>512G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>256G *</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"36%\" rowspan=\"4\">\n" +
"<p>Multi-Blade (Config\n" +
"D) </p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>Coordinator</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>256G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>128G</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>Engine</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>256G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>128G</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>Reader 1</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>512G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>256G *</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>Reader 2</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>512G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>256G *</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"36%\" rowspan=\"4\">\n" +
"<p>Multi-Blade (Config\n" +
"E) </p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>Coordinator</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>256G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>256G</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>Engine</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>256G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>256G</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>Reader 1</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>512G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>Replace with Gen 9 and 512G **</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"center\" width=\"29%\">\n" +
"<p>Reader 2</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"17%\">\n" +
"<p>512G</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"19%\">\n" +
"<p>Replace with Gen 9 and 512G **</p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"* This server supports 256G provided there are no memory related\n" +
"issues but increasing to 512G is still recommended.</p>\n" +
"\n" +
"<p>\n" +
"** 512G is mandatory. PDU also recommends replacing the Gen 8 server\n" +
"with a Gen 9 server.</p>\n" +
"\n" +
"<p>\n" +
"Mixing Gen 8 and Gen 9 Blades in a Multi-Blade ENIQ Statistics\n" +
"deployment is supported.</p>\n" +
"\n" +
"<p>\n" +
"For any queries, contact OSS PLM Support (<a href=\"mailto:oss.plm.support@ericsson.com\">oss.plm.support@ericsson.com</a>).</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\"><a name=\"ErrorMessagesNew\"></a>29.3.1 Error Messages</strong></p>\n" +
"\n" +
"<p>\n" +
"Run the following three checks to determine if ENIQ Statistics\n" +
"is experiencing &ldquo;Insufficient Buffer&rdquo;, &ldquo;IQ Large\n" +
"Memory&rdquo; or &ldquo;Main Buffer&rdquo; issues, indicating that\n" +
"more RAM is required.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>These memory checks provide a point in time indication of\n" +
"whether ENIQ Statistics servers require more memory. These checks\n" +
"are repeated regularly.</dd></dl><br />\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check Insufficient Buffer:<p>\n" +
"Replace &lt;log_2_check&gt; with the engine log file.</p>\n" +
"<p>\n" +
"Example: /eniq/log/sw_log/engine/engine-2017_02_12.log</p>\n" +
"<p>\n" +
"{dcuser} #: grep -i \"SQL Anywhere Error -1009134\" &lt;log_2_check&gt;\n" +
"| grep -v \"jdbc\" | grep Reason | awk '{print $1\" \"$2\" \"$7\" \"$8\" \"$9\"\n" +
"\"$10}'</p>\n" +
"<p>\n" +
"Example Output</p>\n" +
"<p>\n" +
"12.02 03:33:37 Reason: Error while loading <br />12.02 03:34:24\n" +
"Reason: Error while loading <br />12.02 03:49:13 Reason: Error while\n" +
"loading</p>\n" +
"<p>\n" +
"It is not uncommon for a small number of loads to fail during aggregations.\n" +
"If the command returns more than three errors or returns any failure\n" +
"outside of aggregation times, it means that the deployment is facing\n" +
"memory issues.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check Main Buffer:<p>\n" +
"{dcuser} #: for i, in $(find /eniq/local_logs/iq -name \"dwh*.iqmsg*\";\n" +
"find /eniq/log/sw_log/iq -name \"dwh*.iqmsg*\"); do echo \"$(grep \"Bufman:\n" +
"All buffer cache pages are in use\" $i | awk '{print \"\"$2\" \"$3\"\"$4}'\n" +
"| sort | uniq | awk '{print$1}' | uniq -c) \"; done | sort -k 2</p>\n" +
"<p>\n" +
"Example Output <br />1902 02/12 <br />199 02/13 <br />1884 02/13 <br />1066 02/14 <br />Any occurrence observed here, confirms that the\n" +
"deployment is facing memory issues.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check IQ Large Memory:<p>\n" +
"{dcuser} #: for i, in $(find /eniq/local_logs/iq -name \"dwh*.iqmsg*\";\n" +
"find /eniq/log/sw_log/iq &ndash;name \"dwh*.iqmsg*\"); do echo \"$(grep\n" +
"\"SQL Anywhere Error -1013130\" $i | awk '{print /\"\"$2\" \"$3\" \"$4}' |\n" +
"sort | uniq | awk '{print $1}'| uniq -c) \"; done | sort -k 2</p>\n" +
"<p>\n" +
"Example Output<br /> 5 04/04<br /> 4 04/05<br /> 5 04/06</p>\n" +
"<p>\n" +
"Any occurrence observed here confirms that the deployment is facing\n" +
"memory issues.</p>\n" +
"</li></ol>\n" +
"\n"+
"</div>\n";

var C37_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_akax\"></a><a name=\"CHAPTER37.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting Licensing</a></span></h2>\n" +
"\n" +
"<p>\n" +
"If the user cannot use the License Manager to view ENIQ licenses\n" +
"or features, check the following:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">A valid license exists for the feature</li>\n" +
"<li class=\"UNORD\">For a Multi-Blade deployment, ensure that License Manager\n" +
"is running on the Coordinator Blade</li>\n" +
"<li class=\"UNORD\"><tt class=\"LITERALMONO\">/eniq/sentinel/etc/sentinel.env</tt> host\n" +
"has the correct IP address for the <tt class=\"file-path\">LSHOST</tt> variable</li></ul>\n" +
"<p>\n" +
"If licensing still does not work as planned, inspect the licensing\n" +
"log files for more information.</p>\n" +
"\n" +
"<p>\n" +
"If licenses are not retrieved from the license server, the License\n" +
"Manager appends an error code to the error message. The error codes\n" +
"are explained in <a name=\"tbl-licerrors\" href='javascript:parent.parent.parent.showAnchor(\"errorcodetable\")' class=\"xref\"> Table 29</a><a name=\"errorcodetable\"></a>.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE29\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 29 &nbsp;&nbsp; License Manager Error Codes</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"36%\">\n" +
"\n" +
"<p>Error</p></th>\n" +
"<th align=\"center\" valign=\"top\" width=\"11%\">\n" +
"\n" +
"<p>Value</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"53%\">\n" +
"\n" +
"<p>Description</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_SUCCESS</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>0</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The license server operation was successful.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_BADHANDLE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>1</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Handle given to method represents a bad context.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_INSUFFICIENTUNITS 2</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>2</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Not enough resources to satisfy LSRequest.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_LICENSESYSNOTAVAILABLE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>3</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>License system itself is unavailable.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_LICENSETERMINATED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>4</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>LSUpdate <tt class=\"file-path\">failed</tt>; license expired\n" +
"because of a time-out.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_NOAUTHORIZATIONAVAILABLE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>5</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>License server does not recognize this feature name.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_NOLICENSESAVAILABLE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>6</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>License server has no more license keys for this feature.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_NORESOURCES</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>7</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Insufficient resources (such as memory).</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_NO_NETWORK</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>8</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Network communication problems encountered.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_NO_MSG_TEXT</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>9</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Unable to retrieve message text.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_UNKNOWN_STATUS</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>10</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Unknown code passed.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_BAD_INDEX</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>11</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Invalid index - internal use only.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_NO_MORE_UNITS</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>12</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Additional license keys/units requested are unavailable.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_LICENSE_EXPIRED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>13</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Licensing agreement for this feature has expired.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>LS_BUFFER_TOO_SMALL</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>14</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Buffer provided to method is too small.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_LICENSE_GIVEN</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>15</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Other internal error not listed in this table.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_APP_UNAMED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>16</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>No feature name provided with method.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_HOST_UNKNOWN</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>17</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>License server host is not on the network.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_SERVER_FILE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>18</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Client not initialized with name of license server host.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_SERVER_RUNNING</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>19</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>No license server is running on remote host.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_APP_NODE_LOCKED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>20</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Node locked feature cannot be issued float license key.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_KEY_TO_RETURN</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>21</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>LSrelease called before license key was issued.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_RETURN_FAILED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>22</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>LSrelease <tt class=\"file-path\">failed</tt> to return the\n" +
"issued license key.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_MORE_CLIENTS</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>23</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>LSgetClientInfo has no more clients to report.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_MORE_FEATURES</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>24</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>LSgetFeatureInfo has no more features to report.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_CALLING_ERROR</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>25</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Error in calling a LicenseServ function.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_INTERNAL_ERROR</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>26</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>LicenseServ internal error.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_SEVERE_INTERNAL_ERROR</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>27</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>LicenseServ severe internal error.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_SERVER_RESPONSE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>28</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>License server not responding because of unknown condition.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_USER_EXCLUDED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>29</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>User/machine is excluded by group reservations.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_UNKNOWN_SHARED_ID</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>30</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Supplied sharing criteria is unknown.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_RESPONSE_TO_BROADCAST</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>31</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>No license servers responded to VLSwhere.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_SUCH_FEATURE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>32</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>License server does not recognize the given feature.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_ADD_LIC_FAILED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>33</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Dynamic license addition <tt class=\"file-path\">failed</tt>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_DELETE_LIC_FAILED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>34</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Dynamic license deletion <tt class=\"file-path\">failed</tt>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_LOCAL_UPDATE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>35</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Last update was done locally.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_REMOTE_UPDATE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>36</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Last update was done by the LicenseServ license server.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_VENDORIDMISMATCH</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>37</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The license system has resources that could satisfy the\n" +
"request, but the vendor code of the requesting application does not\n" +
"match with that of the application licensed by lserv.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_MULTIPLE_VENDORID_FOUND</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>38</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The license system has multiple licenses for the same feature/version\n" +
"and it is not clear from the operation which licenses the requestor\n" +
"is interested in.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_BAD_SERVER_MESSAGE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>39</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>An error has occurred in decrypting (or decoding) a network\n" +
"message at the client end. Probably an incompatible or unknown server\n" +
"or a version mismatch.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_CLK_TAMP_FOUND</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>40</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The license server found evidence of tampering of the system\n" +
"clock and it cannot service the request since the license for this\n" +
"feature is set as time tamper proof.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_LEADER_NOT_PRESENT</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>41</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The leader of the redundant license server pool is not\n" +
"known.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NON_REDUNDANT_SRVR</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>42</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The contacted license server is not a redundant license\n" +
"server.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_SERVER_SYNC_IN_PROGRESS</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>43</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>When contacted, redundant license servers are busy synchronizing\n" +
"information.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NON_REDUNDANT_FEATURE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>44</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>This feature does not support license server redundancy.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_DIFF_LIB_VER</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>45</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The client and license server libraries do not match.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_SERVER_ALREADY_PRESENT</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>46</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The license server is already in the redundant license\n" +
"server pool.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_SERVER_NOT_PRESENT</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>47</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The license server contacted is not in the redundant license\n" +
"server pool.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_BAD_HOSTNAME</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>48</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Could not resolve the license server name.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NOT_AUTHORIZED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>49</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The user is not authorized to do this operation.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_SERVER_FILE_SYNC</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>50</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Redundant license server synchronization of information\n" +
"is in progress.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_CONF_FILE_ERROR</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>51</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>There is an error in the configuration file.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_POOL_FULL</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>52</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The redundant server pool already has the maximum number\n" +
"of license servers it can handle.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_ONLY_SERVER</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>53</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The license server removed is the only one in the redundant\n" +
"license server pool.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_MAJORITY_RULE_FAILURE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>54</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Most of the license servers in the redundant license server\n" +
"pool are not running.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_PLACED_IN_QUEUE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>55</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The user was placed into the license queue.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_CLIENT_NOT_AUTHORIZED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>56</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The client is not authorized to perform this operation.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_SUCH_CLIENT</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>57</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The requested client is not present in the license queue.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_MSG_TO_LEADER</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>58</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The message has been forwarded to the leader; this is not\n" +
"an error.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NOT_SUPPORTED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>59</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The license server does not support this API. The license\n" +
"server is probably an old version.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_BAD_DISTRIBUTION_CRIT</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>60</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The specified distribution criteria is not valid</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_TRIAL_LIC_EXHAUSTED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>61</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>The trial license period has expired.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NO_TRIAL_INFO</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>62</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>No trial use info exists on the server.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_TRIAL_INFO_FAILED</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>63</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Trial use query <tt class=\"file-path\">failed</tt>.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_NOMORE_QUEUE_RESOURCES</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>64</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Could not queue the client because the queue is full.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_INVALID_LICENSE</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>65</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Invalid license string.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"36%\">\n" +
"<p>VLS_DUPLICATE_LICENSE 66</p>\n" +
"</td>\n" +
"<td align=\"center\" width=\"11%\">\n" +
"<p>66</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"53%\">\n" +
"<p>Cannot add license as it is already added.</p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C37_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"troublepartition\"></a><span class=\"CHAPNUMBER\">37.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_dhed\"></a><a name=\"CHAPTER37.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting\n" +
"Partition Issues</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Problematic partitions are labeled INSANE. There is no automatic\n" +
"notification of INSANE partitions. Check the logs, AdminUI, or the\n" +
"database manually. </p>\n" +
"\n" +
"<p>\n" +
"INSANE data is not part of Measurement Type database view, therefore\n" +
"data in an INSANE partition is not displayed in the AdminUI.</p>\n" +
"\n" +
"<p>\n" +
"The user can suspect INSANE data, if:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Data is loading and aggregating for all other measurement\n" +
"types for the node.</li>\n" +
"<li class=\"UNORD\">Data is loaded into the table but is not displayed in\n" +
"AdminUI, for example, when the user selects <b>Show Aggregations</b>.</li>\n" +
"<li class=\"UNORD\">The data in the partition is not displayed in the Measurement\n" +
"Type database view.</li></ul>\n" +
"<p>\n" +
"There are various causes for insane data, such as:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">The partition contains data that does not meet the time\n" +
"constraints set for that partition in the DWHPartition table.</li>\n" +
"<li class=\"UNORD\">The column structure in the existing partition does\n" +
"not equal the partition definition in the DWH Repository &ndash; DWHPartition,\n" +
"DWHColumn, tables. There are various reasons for this:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Invalid data type</li>\n" +
"<li class=\"UNORD\">Invalid column name</li>\n" +
"<li class=\"UNORD\">Data size does not match</li>\n" +
"<li class=\"UNORD\">Missing column</li></ul></li>\n" +
"<li class=\"UNORD\">The partition does not have any limits (start and end\n" +
"time) defined in the DWHPartition table.</li>\n" +
"<li class=\"UNORD\">A new partition already contains data.</li>\n" +
"<li class=\"UNORD\">SIMPLE partition type has an end date defined. The value\n" +
"is null.</li></ul>\n" +
"\n"+
"</div>\n";

var C37_5_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">37.5.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_d3qb\"></a><a name=\"CHAPTER37.5.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Solving Insane Partition Issues</a></span></h3>\n" +
"\n" +
"<p>\n" +
"There is no automatic recovery from an INSANE partition. The fix\n" +
"for an INSANE partition depends on the cause of it.</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">If the partition has data in it that is older than the\n" +
"start time or newer than the end time, move the data that is outside\n" +
"the limits to the correct partition, if it is available.</li>\n" +
"<li class=\"UNORD\">If the column structure does not match the partition\n" +
"definition, that is, there is a column name mismatch between SYSCOLUMNS\n" +
"and DWHCOLUMN.<p>\n" +
"Following steps are executed as part of workaround:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Login as <tt class=\"file-path\">dcuser</tt>.</li>\n" +
"<li class=\"UNORD\">Login to repdb as dwhrep (Coordinator in Multi-Blade).<p>\n" +
"<tt class=\"input\"><b>#iqisql -P<i class=\"var\">&lt;dwhrep_password&gt;</i> -Udwhrep -Srepdb\n" +
"-w200000</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>1&gt;select * from DWHPARTITION where status='INSANE_AC'</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>2&gt;go</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Capture the output in a file for future reference.</li>\n" +
"<li class=\"UNORD\">Follow the steps to run the script:<p>\n" +
"<tt class=\"input\"><b># cd /eniq/sw/installer</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># ./insane_WA.bsh</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Run DWHM_INSTALL set from Adminui for the corresponding\n" +
"TP.</li>\n" +
"<li class=\"UNORD\">Login to repdb as dwhrep.<p>\n" +
"<tt class=\"input\"><b>#iqisql -P<i class=\"var\">&lt;dwhrep_password&gt;</i> -Udwhrep -Srepdb\n" +
"-w200000</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>1&gt; select * from DWHPARTITION where status='INSANE_AC'</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>2&gt;go</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Compare the result with previous one and there should\n" +
"not be any INSANE partition.</li></ul></li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If the INSANE Partition table belongs to DC_E_ERBS, DC_E_ERBSG2,\n" +
"and DC_E_RBS, DC_E_RBSG2 Tech Packs, then it is mandatory to execute\n" +
"the combined view creation steps. Follow the steps:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Make sure that no users are using DC_E_ERBS and DC_E_ERBSG2\n" +
"TP (in ERBS combined view) or DC_E_RBS and DC_E_RBSG2 TP (in WCDMA\n" +
"combined view) table as per BO reports or SQL query.</li>\n" +
"<li class=\"UNORD\">Make sure that nothing from ENIQ is accessing these\n" +
"views. It is better to set the engine to NoLoads with the following\n" +
"command as dcuser:<br /><tt class=\"input\"><b>{dcuser}# /eniq/sw/bin/engine -e changeProfile\n" +
"NoLoads</b></tt></li>\n" +
"<li class=\"UNORD\">To create the combined views, execute as dcuser on Coordinator\n" +
"Blade in Multi-Blade deployment:<p>\n" +
"<tt class=\"input\"><b>{dcuser}# cd /eniq/sw/installer</b></tt></p>\n" +
"<p>\n" +
"In ERBS combined view: <tt class=\"input\"><b>{dcuser}# ./erbscombinedview.bsh</b></tt></p>\n" +
"<p>\n" +
"In WCDMA combined view: <tt class=\"input\"><b>{dcuser}# ./WCDMACombinedViewCr\n" +
"eation.bsh</b></tt></p>\n" +
"<p>\n" +
"The script takes 15 to 20 minutes to complete the execution.</p>\n" +
"</li>\n" +
"<li class=\"UNORD\">After the script execution is complete, change the engine\n" +
"profile to Normal.<br /><tt class=\"input\"><b>{dcuser}# /eniq/sw/bin/engine -e changeProfile\n" +
"Normal</b></tt></li></ul></dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

var C37_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_rnc0\"></a><a name=\"CHAPTER37.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">General Single Blade Information</a></span></h2>\n" +
"\n" +
"<p>\n" +
"To list ENIQ services that are running on a Single-Blade, execute\n" +
"the following command as <tt class=\"file-path\">root</tt> user:</p>\n" +
"\n" +
"\n" +
"<p>\n" +
"For the single blade:</p><ul class=\"unoL\">\n" +
"\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b># grep eniq_stats /eniq/admin/etc/smf_contract_config\n" +
"|grep ENIQ |grep Y</b></tt></li></ul>\n" +
"<p>\n" +
" The following is the expected output of the command executed as <tt class=\"file-path\">root</tt> user:</p>\n" +
"\n" +
"<p>\n" +
" <tt class=\"input\"><b># services -s eniq</b></tt></p>\n" +
"\n" +
"\n" +
"<table frame=\"void\" class=\"tblcnt\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-connectd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-dwhdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-dwh_reader.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-engine.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-esm.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-fls.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-licmgr.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-lwphelper.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-repdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-rmiregistry.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-roll-snap.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-scheduler.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-webserver.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C37_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_24am\"></a><a name=\"CHAPTER37.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">General Multi-Blade Information</a></span></h2>\n" +
"\n" +
"<p>\n" +
"To list ENIQ services running on any particular Blade, execute\n" +
"the following command as <tt class=\"file-path\">root</tt> user:</p>\n" +
"\n" +
"\n" +
"<p>\n" +
"For the Coordinator Blade:</p><ul class=\"unoL\">\n" +
"\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b># grep stats_coordinator /eniq/admin/etc/smf_contract_config\n" +
"|grep ENIQ |grep Y</b></tt></li></ul>\n" +
"\n" +
"<p>\n" +
"For the Engine Blade:</p><ul class=\"unoL\">\n" +
"\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b># grep stats_engine /eniq/admin/etc/smf_contract_config\n" +
"|grep ENIQ |grep Y</b></tt></li></ul>\n" +
"\n" +
"<p>\n" +
"For the Reader Blade:</p><ul class=\"unoL\">\n" +
"\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b># grep stats_iqr /eniq/admin/etc/smf_contract_config\n" +
"|grep ENIQ |grep Y</b></tt></li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><tt class=\"file-path\">dwh_reader_1</tt> is used by the engine\n" +
"as a writer. Thus, ENIQ Statistics Multi-Blade server has two reader\n" +
"nodes (<tt class=\"file-path\">stats_iqr</tt>), the first of which is\n" +
"referred to as the writer.</dd></dl><br />\n" +
"<p>\n" +
"While on the various Blades, the user sees varying output of the\n" +
"command because of different services executing on a particular Blade.\n" +
"The following is the expected output of the command executed as <tt class=\"file-path\">root</tt> user:</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># services -s eniq</b></tt></p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">On the Coordinator Blade:\n" +
"<table frame=\"void\" style=\"margin-top:4pt\" class=\"grd\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-connectd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-dwhdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-dwh_reader.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-engine.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-esm.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-fls.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-licmgr.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-lwphelper.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-repdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-rmiregistry.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-roll-snap.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-scheduler.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"61%\">\n" +
"<p><tt class=\"output\">eniq-webserver.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"39%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr></table></li>\n" +
"<li class=\"UNORD\">On the Engine Blade:\n" +
"<table frame=\"void\" style=\"margin-top:4pt\" class=\"grd\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-connectd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-dwhdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-dwh_reader.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-engine.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-esm.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-fls.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-licmgr.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-lwphelper.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-repdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-rmiregistry.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-roll-snap.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-scheduler.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-webserver.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr></table></li>\n" +
"<li class=\"UNORD\">On the Reader Blade:\n" +
"<table frame=\"void\" style=\"margin-top:4pt\" class=\"grd\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-connectd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-dwh_reader.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-dwhdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-engine.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-esm.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-fls.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-licmgr.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-lwphelper.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-repdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-rmiregistry.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-roll-snap.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-scheduler.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">eniq-webserver.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">inactive</tt></p>\n" +
"</td></tr></table></li></ul>\n" +
"\n"+
"</div>\n";

var C37_7_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"Stopall\"></a><span class=\"CHAPNUMBER\">37.7.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"stopall\"></a><a name=\"CHAPTER37.7.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Stopping All Services\n" +
"on All Blades</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To stop all services on all the four Blades, run the commands in\n" +
"the following order: <br />Login as <tt class=\"file-path\">root</tt>.</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Reader_2</li>\n" +
"<li class=\"UNORD\">ENIQ Reader_1</li>\n" +
"<li class=\"UNORD\">ENIQ Engine Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># cd /eniq/admin/bin </b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/bash ./manage_eniq_services.bsh -a stop\n" +
"-s ALL</b></tt></li></ol>\n" +
"\n"+
"</div>\n";

var C37_7_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"startall\"></a><span class=\"CHAPNUMBER\">37.7.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_hzlo\"></a><a name=\"CHAPTER37.7.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Starting All\n" +
"Services on All Blades</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To start all services on all the four Blades, run the commands\n" +
"in the following order. <br />Login as <tt class=\"file-path\">root</tt>.</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li>\n" +
"<li class=\"UNORD\">ENIQ Engine Server</li>\n" +
"<li class=\"UNORD\">ENIQ Reader_1</li>\n" +
"<li class=\"UNORD\">ENIQ Reader_2</li></ul>\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># cd /eniq/admin/bin</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/bash ./manage_eniq_services.bsh -a start\n" +
"-s ALL</b></tt></li></ol>\n" +
"\n"+
"</div>\n";

var C37_7_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"restartall\"></a><span class=\"CHAPNUMBER\">37.7.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_j3el\"></a><a name=\"CHAPTER37.7.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Restarting\n" +
"All Services on All Blades</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To restart all services on all the four Blades, run the commands\n" +
"in the following order. <br />Login as <tt class=\"file-path\">root</tt>.</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Reader_2 Server</li>\n" +
"<li class=\"UNORD\">ENIQ Reader_1 Server</li>\n" +
"<li class=\"UNORD\">ENIQ Engine Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># cd /eniq/admin/bin </b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/bash ./manage_eniq_services.bsh -a stop\n" +
"-s ALL</b></tt><p>\n" +
"After all the services are stopped on all four Blades, the user\n" +
"can start it as follows:</p>\n" +
"<p>\n" +
"Steps mentioned must be followed on all the four Blades in a sequence\n" +
"to start services. <br />Login as <tt class=\"file-path\">root</tt>.</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li>\n" +
"<li class=\"UNORD\">ENIQ Engine Server</li>\n" +
"<li class=\"UNORD\">ENIQ Reader_1 Server</li>\n" +
"<li class=\"UNORD\">ENIQ Reader_2 Server</li></ul></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># cd /eniq/admin/bin</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/bash ./manage_eniq_services.bsh -a start\n" +
"-s ALL</b></tt></li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_8=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"dwhdbclear\"></a><span class=\"CHAPNUMBER\">37.8 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_gnm0\"></a><a name=\"CHAPTER37.8\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Clearing Reader\n" +
"Service in Failed state</a></span></h2>\n" +
"\n" +
"<p>\n" +
"In a Multi-Blade deployment, if the dwh_reader service is not shutdown\n" +
"correctly and remains <tt class=\"file-path\">inactive</tt> for an extended\n" +
"period, SAP IQ excludes the node from the multiplex, which results\n" +
"in the corresponding services having state <tt class=\"file-path\">failed</tt>.</p>\n" +
"\n" +
"<p>\n" +
"Log on to the <tt class=\"file-path\">dwhdb</tt> database and check\n" +
"for nodes in the multiplex with status <tt class=\"file-path\">excluded</tt>: <br /><tt class=\"input\"><b>eniq_srv{dcuser} # <br />iqisql -U<i class=\"var\">&lt;database_username&gt;</i><br /> -P <i class=\"var\">&lt;database_password&gt;</i>-Sdwhdb  <br />1&gt; sp_iqmpxinfo <br />2&gt; go  </b></tt></p>\n" +
"\n" +
"<p>\n" +
"Then change their status to <tt class=\"LITERALMONO\">included</tt> :<br /><tt class=\"input\"><b>1&gt; ALTER MULTIPLEX SERVER  <i class=\"var\">&lt;server name&gt;</i>STATUS INCLUDED <br />2&gt; go <br />Example: <br />1&gt; ALTER MULTIPLEX SERVER  dwh_reader_1\n" +
"STATUS INCLUDED <br />2&gt; go </b></tt></p>\n" +
"\n" +
"<p>\n" +
"Then verify that all nodes in the multiplex have a status <tt class=\"file-path\">included</tt>:<br /><tt class=\"input\"><b>eniq_srv{dcuser} #<br /> iqisql\n" +
"-U <i class=\"var\">&lt;database_username&gt;</i> <br />-P <i class=\"var\">&lt;database_password&gt;</i>-Sdwhdb  <br />1&gt; sp_iqmpxinfo <br />2&gt; go  </b></tt> </p>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_9=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.9 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_25rx\"></a><a name=\"CHAPTER37.9\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitoring ENIQ Statistics Services\n" +
"using Systemd</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Log on as <tt class=\"file-path\">root</tt> user and run the following\n" +
"command: <br /><tt class=\"input\"><b># services -s eniq</b></tt></p>\n" +
"\n" +
"<p>\n" +
"If any of the services are not <tt class=\"file-path\">active</tt> and must be restarted, proceed with these steps:</p>\n" +
"\n" +
"<p>\n" +
"To <tt class=\"file-path\">enable</tt> any ENIQ service, use the\n" +
"following command: <br /><tt class=\"input\"><b># /usr/bin/systemctl enable <i class=\"var\">&lt;service_name&gt;</i></b></tt></p>\n" +
"\n" +
"<p>\n" +
"To <tt class=\"file-path\">disable</tt> any ENIQ service, use the\n" +
"following command: <br /><tt class=\"input\"><b># /usr/bin/systemctl disable <i class=\"var\">&lt;service_name&gt;</i></b></tt></p>\n" +
"\n" +
"<p>\n" +
"If a service is in a <tt class=\"file-path\">failed</tt> state, it\n" +
"is necessary to clear the service:<br /> <tt class=\"input\"><b># /usr/bin/systemctl\n" +
"reset-failed <i class=\"var\">&lt;service_name&gt;</i></b></tt></p>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_10=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.10 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_taow\"></a><a name=\"CHAPTER37.10\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Engine Startup Hanging</a></span></h2>\n" +
"\n" +
"<p>\n" +
"In a Multi-Blade deployment, if the <tt class=\"file-path\">engine</tt> startup is hanging and services are running properly on other nodes,\n" +
"run the following command on the <tt class=\"file-path\">engine</tt> blade as <tt class=\"file-path\">root</tt> user: <br /><tt class=\"input\"><b># cd\n" +
"/eniq/admin/bin</b></tt><br /><tt class=\"input\"><b># /usr/bin/bash ./manage_eniq_services.bsh\n" +
"-a restart -s ALL</b></tt></p>\n" +
"\n" +
"<p>\n" +
"If the command hangs, then manually <tt class=\"file-path\">disable</tt> the RMI registry service and try again by executing these steps: <br /><tt class=\"input\"><b># systemctl disable eniq-rmiregistry.service<br /># /usr/bin/bash\n" +
"./manage_eniq_services.bsh -a restart -s ALL</b></tt></p>\n" +
"\n" +
"<p>\n" +
"If the services on the other blades have problems, then restart\n" +
"all services on the Multi-Blade servers.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This is an option for troubleshooting the case of Engine\n" +
"hanging (with no logging) when it is restarted.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C37_11=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.11 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_wv90\"></a><a name=\"CHAPTER37.11\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rolling Snapshot Logs</a></span></h2>\n" +
"\n" +
"<p>\n" +
"There is an option to receive additional information on the Rolling\n" +
"Snapshot log file. This option records if the Rolling Snapshot file\n" +
"indicator is <strong class=\"MEDEMPH\">not</strong> present on the system. To view this\n" +
"information, enter the following command:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b># touch /eniq/sw/conf/.debug_rollsnap</b></tt></p>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_12=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.12 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_tgof\"></a><a name=\"CHAPTER37.12\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting Snapshot Failures</a></span></h2>\n" +
"\n" +
"<p>\n" +
"If the snapshot fails and if any of the errors is displayed, then\n" +
"follow steps 1 to 3 before retrying the snapshot again.</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><tt class=\"output\">ERROR : Could not backup repdb database</tt>.</li></ul>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><tt class=\"output\">ERROR : Could not copy backup file /eniq/database/rep_main/repdb.log\n" +
"to /eniq/backup/repdb_bkup/repdb1.log </tt></li></ul>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><tt class=\"output\">ERROR : Could not copy backup file /eniq/database/rep_main/repdb.db\n" +
"to /eniq/backup/repdb_bkup/repdb1.db</tt></li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>In a Multi-Blade deployment, run all commands on the <tt class=\"file-path\">coordinator</tt> Blade.</dd></dl><br />\n" +
"<p>\n" +
" Log on as <tt class=\"file-path\">root</tt> user and run the following\n" +
"commands:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check the available diskspace on the backup partition.<p>\n" +
"<tt class=\"input\"><b>{root} #: df -k /eniq/backup/</b></tt></p>\n" +
"<p>\n" +
"Example output:</p>\n" +
"<p>\n" +
"<tt class=\"output\">Filesystem 									kbytes   	used   	avail   	 capacity\n" +
"  Mounted on</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">nas1:/vx/lte2979-backup  157286400  10832456 145310288\n" +
" 7%  		/eniq/backup</tt></p>\n" +
"<p>\n" +
"Note the available diskspace (avail) of backup partition = _____\n" +
"KB</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Calculate the size of <tt class=\"file-path\">repdb</tt> database.<p>\n" +
"<tt class=\"input\"><b>(root) #: cd /eniq/database/rep_main</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>{root} #: echo `ls -l repdb.db repdb.log| awk '{sum = sum\n" +
"+ $5} END {print sum}' ` / 1024 | bc</b></tt></p>\n" +
"<p>\n" +
"Example output:</p>\n" +
"<p>\n" +
"<tt class=\"file-path\">1669764</tt></p>\n" +
"<p>\n" +
"Note the size of the <tt class=\"file-path\">repdb</tt> database\n" +
"size = ______ KB</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Compare the size of <tt class=\"file-path\">repdb</tt> database\n" +
"and amount of available diskspace on the backup partition.<p>\n" +
"  If the size of <tt class=\"file-path\">repdb</tt> database is greater\n" +
"than the available diskspace on the backup partition, then perform\n" +
"'step a' or there might be some other issue and need to contact the\n" +
"next level of support.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><strong class=\"MEDEMPH\">Perform the following during a Maintenance Window.\n" +
"This procedure involves database downtime.</strong></dd></dl><br />\n" +
"<ol type=\"a\">\n" +
"\n" +
"<li class=\"substep\">Truncate the database transaction log.\n" +
"<p>\n" +
"<tt class=\"input\"><b>{root} #: bash /eniq/admin/bin/transaction_log_admin.bsh\n" +
"-t repdb -R -l /eniq/local_logs/transaction_log_admin.txt -N</b></tt></p>\n" +
"\n" +
"</li>\n" +
"</ol></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Verify the logs to ensure successful completion of step\n" +
"3.1.<p>\n" +
"Example output:</p>\n" +
"<p>\n" +
"<tt class=\"file-path\"> Checking for correct user and server type to exectue\n" +
"script.<br />   =======&lt; 2014-02-18_08.39.29 - Starting ./transaction_log_admin.bsh\n" +
"&gt;=====<br />  Getting an ordered list of server(s).<br /> Setting engine\n" +
"to noloads and wating for execution slots to empty <br />Running engine\n" +
"command for NoLoads locally<br /> 			 . <br /> 			 . 		<br />	 .  <br />		=======&lt; 2014-02-18_08.39.53 - Starting ENIQ services on atrcxb2332\n" +
"&gt;=====<br />  2014-02-18_08.39.53 - Starting ENIQ service eniq-repdb <br />  ENIQ services started correctly on atrcxb2332<br />  Setting engine\n" +
"to original profile.<br /> Running engine command for Normal locally <br />Oracle Corporation      SunOS 5.10      Generic Patch   January\n" +
"2005 <br />Changing profile to: Normal <br />Change profile requested\n" +
"successfully<br /> Tidying up old logs.<br /><br />   ======&lt; 2014-02-18_08.40.00\n" +
"- Finishing ./transaction_log_admin.bsh &gt;=====</tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>After successful completion of the steps, there is free space\n" +
"available for the snapshot to proceed.</dd></dl><br /></li></ol>\n" +
"\n"+
"</div>\n";

var C37_13=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.13 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_2lkh\"></a><a name=\"CHAPTER37.13\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Deletion of Tech Pack</a></span></h2>\n" +
"\n" +
"<p>\n" +
"For a Tech Pack installed in ENIQ that does not have an <tt class=\"file-path\">active</tt> node configured in the server, the following\n" +
"feature is provided to remove it, so that upgrade is not affected.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">It is assumed that the deleted Tech Pack is not selected\n" +
"during subsequent upgrades (if the node remains unconfigured in the\n" +
"network).</li>\n" +
"<li class=\"UNORD\">Solutions for ERBS nodes (DC_E_ERBS and DC_E_ERBSG2)\n" +
"and RBS nodes (DC_E_RBS and DC_E_RBSG2) are based on a combined view/universe\n" +
"solution. If a user deletes either ERBS or RBS node, then the other\n" +
"node should also be deleted.<p>\n" +
"<strong class=\"MEDEMPH\">Example -</strong> if a user deletes DC_E_ERBS then DC_E_ERBSG2\n" +
"should also be deleted.</p>\n" +
"</li></ul></dd></dl><br />\n" +
"<p>\n" +
"To perform Tech Pack deletion, run these commands as <tt class=\"file-path\">dcuser</tt> on the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (standalone)</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator</li></ul>\n" +
"<p>\n" +
"To delete a Tech Pack from ENIQ, follow these steps:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Login to server as <tt class=\"file-path\">dcuser</tt> with SSH</li>\n" +
"<li class=\"UNORD\">Go to the following path:<p>\n" +
"<tt class=\"input\"><b># cd /eniq/sw/installer/</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Run the following script:<p>\n" +
"<tt class=\"input\"><b># ./remove_techpack.bsh <i class=\"var\">&lt;Techpack_Name&gt;</i></b></tt></p>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Example -</strong></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># ./remove_techpack.bsh DC_E_ERBS</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">If the Tech Pack has some dependent Tech Packs, then\n" +
"a confirmation message is shown to the user:<p>\n" +
"<strong class=\"MEDEMPH\">Example -</strong></p>\n" +
"<p>\n" +
"<tt class=\"output\">Below Techpacks are dependent on DC_E_ERBS -</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">'DC_E_FFAX:((27))'</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">'DC_E_ERBSG2:((43))'</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Are you sure you want to continue? (Y/N)</tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">According to the user response, the script continues\n" +
"further or exits.</li>\n" +
"<li class=\"UNORD\">Before deleting any data, user is asked for a final\n" +
"confirmation and the information that will be deleted is displayed:<p>\n" +
"<strong class=\"MEDEMPH\">Example -</strong></p>\n" +
"<p>\n" +
"The following data is deleted:</p>\n" +
"<p>\n" +
"<tt class=\"output\">1.	All DC/DIM/VECTOR tables and views created as part of\n" +
"Techpack</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">2.	All the metadata from REPDB related to Techpack</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">3.	Universe folder from the server</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">For more details about which all tables will be dropped\n" +
"see the below files-</tt></p>\n" +
"<p>\n" +
"<tt class=\"file-path\">/eniq/sw/installer/DIM_E_ERBS.csv</tt></p>\n" +
"<p>\n" +
"<tt class=\"file-path\">/eniq/sw/installer/DC_E_ERBS_VIEW.csv</tt></p>\n" +
"<p>\n" +
"<tt class=\"file-path\">/eniq/sw/installer/DC_E_ERBS.csv</tt></p>\n" +
"<p>\n" +
"<tt class=\"file-path\">/eniq/sw/installer/DIM_E_ERBS_V.csv</tt></p>\n" +
"<p>\n" +
"<tt class=\"file-path\">/eniq/sw/installer/DC_E_ERBS_VIEW_EXT.csv</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Changes are permanent and cannot be undone.</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Please confirm removal of Techpack DC_E_ERBS from ENIQ</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Are you sure you want to continue? (Y/N)</tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Based on the user response, the script continues further\n" +
"or exits.</li>\n" +
"<li class=\"UNORD\">Log file path: <tt class=\"file-path\">/eniq/log/sw_log/tp_installer/remove_techpack_&lt;Techpach_Name&gt;.log</tt><p>\n" +
"<strong class=\"MEDEMPH\">Example -</strong> <tt class=\"file-path\">/eniq/log/sw_log/tp_installer/remove_techpack_DC_E_ERBS.log</tt></p>\n" +
"</li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">This script is only for deleting PM Tech Packs that\n" +
"are installed unintentionally on the server.</li>\n" +
"<li class=\"UNORD\">The Tech Pack is not deleted if it has any data in <tt class=\"file-path\">dwhdb</tt> tables.</li>\n" +
"<li class=\"UNORD\">If a user has deleted any Tech Pack, then the report\n" +
"and universe, if present in the BO server for that particular Tech\n" +
"Pack, will not work.</li>\n" +
"<li class=\"UNORD\">After successful deletion of Tech Pack, restart all\n" +
"the ENIQ services to update the Cache. See <a href='javascript:parent.parent.parent.showAnchor(\"restartEniqServices\")' class=\"xref\">Section  12.7</a>.</li></ul></dd></dl><br />\n" +
"\n"+
"</div>\n";

var C37_14=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.14 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_5mh1\"></a><a name=\"CHAPTER37.14\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting Maximum Session\n" +
"Exceeded Warning</a></span></h2>\n" +
"\n" +
"<p>\n" +
"If the maximum session limit for any user is exceeded, then the\n" +
"user will not be able to login.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE65\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-session.PNG.png\" border=\"0\" width=\"711\" height=\"169\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 65 &nbsp; Maximum Session Limit</i></p></div>\n" +
"<p>\n" +
"Create a new user. To create a new user, see <em class=\"LOWEMPH\">Adding\n" +
"New AdminUI Users</em>, <a href='javascript:parent.parent.parent.showAnchor(\"AddingNewAdminUIUsers\")' class=\"xref\">Section  5.15</a>.</p>\n" +
"\n" +
"<p>\n" +
"However, the number of sessions for the same user can be increased.\n" +
"See <em class=\"LOWEMPH\">Configure Number of Sessions Per User</em>, <a href='javascript:parent.parent.parent.showAnchor(\"ConfigureNumberofSessionsPerUser\")' class=\"xref\">Section  5.17</a>, to increase the number\n" +
"of sessions.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_15=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.15 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_yz1v\"></a><a name=\"CHAPTER37.15\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Deletion of Corrupted Snapshot</a></span></h2>\n" +
"\n" +
"<p>\n" +
"If the cleanup log (/eniq/local_logs/rolling_snapshot_logs/clean_roll_snap.log)\n" +
"shows the following error:</p>\n" +
"\n" +
"<p><tt class=\"output\">Rolling snapshot cleanup started at 2019-03-10_11.03.56<br />Deleting NAS snapshots with tag \"snss1\"<br />Checking for NAS snapshots\n" +
"with label \"snss1\"<br />Deleting NAS snapshots with label \"snss1\"<br />Failed to delete NAS snapshots with label \"snss1\"<br /></tt></p>\n" +
"<p>\n" +
"Then run the NAS audit report and check the report.</p>\n" +
"\n" +
"<p>\n" +
"If an error is reported for the NAS filesystem snapshot, then run\n" +
"the following commands as <tt class=\"file-path\">root</tt> user on\n" +
"the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator Server</li></ul>\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Login to NAS from ENIQ using the following command:<pre class=\"prencd\"># ssh master@nasconsole</pre><p></p><dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Enter the password when prompted.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">List the snapshots:<pre class=\"prencd\">storage rollback list</pre><p></p></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Delete the corrupted snapshot:<pre class=\"prencd\">storage rollback destroy &lt;snapshot name&gt; &lt;filesystem name&gt;</pre><p></p><p>\n" +
"Where <tt class=\"file-path\">&lt;snapshot name&gt;</tt> refers to the\n" +
"name of the corrupted NAS snapshot and <tt class=\"file-path\">&lt;filesystem\n" +
"name&gt;</tt> refers to the file system for which the snapshot\n" +
"is corrupted.</p>\n" +
"</li></ol>\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 14 &nbsp; </i></p><pre class=\"prencd\">storage rollback destroy  ev2961-etldata_-03-test ev2961-etldata_-03 </pre></div>\n" +
"\n"+
"</div>\n";

var C37_16=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.16 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_xnpy\"></a><a name=\"CHAPTER37.16\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Server Hang Issue at GRUB Level</a></span></h2>\n" +
"\n" +
"<p>\n" +
"When the server hangs at GRUB level during reboot, while performing\n" +
"ENIQ II or migration or upgrade or restore or reboot (for OS pickup),\n" +
"the following screen is displayed.</p>\n" +
"\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE66\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Server_Hang_Issue.png.png\" border=\"0\" width=\"502\" height=\"226\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 66 &nbsp; Server Hang Issue</i></p></div>\n" +
"<p>\n" +
"In this scenario, press ENTER to pick up the OS and move to the\n" +
"next step.</p>\n" +
"\n" +
"<p>\n" +
"To handle the server hanging issue for future occurrences, execute\n" +
"the following command after the server is up. This prevents the server\n" +
"from hanging at GRUB level.</p>\n" +
"\n" +
"<p><tt class=\"input\"><b>(root)# grub2-set-default 0</b></tt></p>\n" +
"<p><tt class=\"input\"><b>(root)# grub2-mkconfig -o /boot/grub2/grub.cfg </b></tt></p>\n" +
"\n"+
"</div>\n";

var C37_17=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.17 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_c5n8\"></a><a name=\"CHAPTER37.17\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting LVM Filesystem\n" +
"on Rack deployment</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Filesystems in ENIQ Statistics Rack deployment on RHEL are thickly\n" +
"provisioned, as compared to single large zpool shared by all Filesystems\n" +
"in Solaris.</p>\n" +
"\n" +
"<p>\n" +
"If any of ENIQ LVM filesystems face <tt class=\"file-path\">out of space</tt> issue and an error is displayed, execute the following steps to\n" +
"troubleshoot.</p>\n" +
"\n" +
"<p><tt class=\"input\"><b>- ERROR : No space left on device</b></tt></p>\n" +
"<p>\n" +
"Log on as <tt class=\"file-path\">root</tt> user and run the following\n" +
"commands:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Check the available diskspace on respective LVM filesystem.<p>\n" +
"<tt class=\"input\"><b>{root} #: df -h</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">If the available diskspace shown is very less or zero,\n" +
"check for any unwanted custom data stored on the filesystem.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Remove the unwanted custom data present in the filesystem.\n" +
"This will increase the available diskspace.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">To gradually increase LVM filesystem size, follow <a href='javascript:parent.parent.parent.showAnchor(\"RackLVMFilesystemExpansionProcedure\")' class=\"xref\">Section  37.17.1 Rack LVM Filesystem Expansion Procedure</a> .<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Perform these steps during a Maintenance Window. This procedure\n" +
"involves ENIQ services downtime of 15 minutes.</dd></dl><br /></li></ol>\n" +
"\n"+
"</div>\n";

var C37_17_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">37.17.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"RackLVMFilesystemExpansionProcedure\"></a><a name=\"CHAPTER37.17.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rack LVM\n" +
"Filesystem Expansion Procedure</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To perform Rack LVM filesystem expansion procedure: </p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on as <tt class=\"file-path\">root</tt> user.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to following path<p>\n" +
"<tt class=\"input\"><b>(root) #: cd /eniq/installation/core_install/bin</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following script<p>\n" +
"<tt class=\"input\"><b>(root) #: ./eniq_fs_expansion.bsh -A partial_expansion</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">User is shown a filesystem list and prompted to enter\n" +
"filesystem name and size to be expanded.<p>\n" +
"Example Output:</p>\n" +
"\n" +
"<div class=\"stepxmp\" style=\"margin-top: 12pt\">\n" +
"<pre class=\"prencd\">(root) #: ./eniq_fs_expansion.bsh -A partial_expansion\n" +
"   \n" +
"   Current free size available in volume group   994.27g\n" +
"   \n" +
"   eniq_stats_pool-backup\n" +
"   eniq_stats_pool-data\n" +
"   eniq_stats_pool-dwh_main\n" +
"   eniq_stats_pool-dwh_main_dbspace\n" +
"   eniq_stats_pool-dwh_temp_dbspace\n" +
"   eniq_stats_pool-rep_main\n" +
"   eniq_stats_pool-rep_temp\n" +
"   eniq_stats_pool-sybase_iq\n" +
"   eniq_stats_pool-sw\n" +
"   eniq_stats_pool-fmdata\n" +
"   eniq_stats_pool-archive\n" +
"   eniq_stats_pool-upgrade\n" +
"   eniq_stats_pool-admin\n" +
"   eniq_stats_pool-home\n" +
"   eniq_stats_pool-sql_anywhere\n" +
"   eniq_stats_pool-misc\n" +
"   eniq_stats_pool-dwh_reader\n" +
"   eniq_stats_pool-bkup_sw\n" +
"   eniq_stats_pool-connectd\n" +
"   eniq_stats_pool-installation\n" +
"   eniq_stats_pool-local_logs\n" +
"   eniq_stats_pool-smf\n" +
"   eniq_stats_pool-log\n" +
"   eniq_stats_pool-sentinel\n" +
"\n" +
"   Enter the Filesystems to be expanded separated by comma\n" +
"\n" +
"   eniq_stats_pool-misc,eniq_stats_pool-local_logs\n" +
"\n" +
"   Enter the size to be expanded for eniq_stats_pool-misc.\n" +
"   Enter size unit in [m,M,g,G,t,T]\n" +
"   10g\n" +
"   \n" +
"   Enter the size to be expanded for eniq_stats_pool-local_logs.\n" +
"   Enter size unit in [m,M,g,G,t,T]\n" +
"   10g\n" +
"   \n" +
"   ==============&lt; Stopping ENIQ services &gt;============\n" +
"\n" +
"   Stopping ENIQ service ddc\n" +
"   Stopping ENIQ service eniq-scheduler\n" +
"   Stopping ENIQ service eniq-engine\n" +
"   Stopping ENIQ service eniq-lwphelper\n" +
"   Stopping ENIQ service eniq-webserver\n" +
"   Stopping ENIQ service eniq-dwhdb\n" +
"   Stopping ENIQ service eniq-repdb\n" +
"   Stopping ENIQ service eniq-connectd\n" +
"   Stopping ENIQ service eniq-licmgr\n" +
"   Stopping ENIQ service eniq-rmiregistry\n" +
"   Stopping ENIQ service eniq-esm\n" +
"\n" +
"\n" +
"   ENIQ services stopped correctly \n" +
"	\n" +
"   Extended fileSystem eniq_stats_pool-misc by 10g\n" +
"   Extended fileSystem eniq_stats_pool-local_logs by 10g\n" +
"\n" +
" \n" +
"   ==============&lt; Starting ENIQ services &gt;============\n" +
"\n" +
"   Starting ENIQ service eniq-esm\n" +
"   Starting ENIQ service eniq-rmiregistry\n" +
"   Starting ENIQ service eniq-licmgr\n" +
"   Starting ENIQ service eniq-connectd\n" +
"   Starting ENIQ service eniq-repdb\n" +
"   Starting ENIQ service eniq-dwhdb\n" +
"   Starting ENIQ service eniq-webserver\n" +
"   Starting ENIQ service eniq-lwphelper\n" +
"   Starting ENIQ service eniq-engine\n" +
"   Starting ENIQ service eniq-scheduler\n" +
"   Starting ENIQ service ddc\n" +
"\n" +
"   ENIQ services started correctly</pre>\n" +
"</div></li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_18=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.18 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_iykm\"></a><a name=\"CHAPTER37.18\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Loaders failed due to Delimiter\n" +
"Issue</a></span></h2>\n" +
"\n" +
"<p>\n" +
"During parsing of PM files, it is observed that parsed data written\n" +
"to Loader files get corrupted due to an unstable filesystem. It results\n" +
"in loader failure with column or row delimiter. This is an intermittent\n" +
"issue. Hence, as a corrective measure, a script is introduced with\n" +
"possible automated handling.  </p>\n" +
"\n" +
"<p>\n" +
"A script (/eniq/sw/bin/loader_delimiter.bsh) is used to minimize\n" +
"the impact by correcting the loader files <tt class=\"file-path\">failed</tt> due to row or column delimiter and loads back the files to the database.\n" +
"The script runs every one hour as <tt class=\"file-path\">dcuser</tt> on Co-ordinator blade (in case Multi-blade) as a <tt class=\"file-path\">cron</tt> entry.</p>\n" +
"\n" +
"<p>\n" +
"Execution of the script is logged in <tt class=\"file-path\">/eniq/log/sw_log/engine/loader_delimiter_&lt;date&gt;.log</tt> file.</p>\n" +
"\n" +
"<p>\n" +
"After correcting the loader files through the script, if the same\n" +
"loader file fails more than three times due to delimiter issue, then\n" +
"the corresponding loader file is backed-up to <tt class=\"file-path\">/eniq/backup/delimiterloaderfile/failed/</tt> directory.  </p>\n" +
"\n" +
"<p>\n" +
"As part of housekeeping, the backup files older than seven days\n" +
"are archived and removed automatically after fourteen days.  </p>\n" +
"\n" +
"<p>\n" +
"The files present in the <tt class=\"file-path\">/eniq/backup/delimiterloaderfile/failed</tt> directory requires manual intervention for correction by administrator.\n" +
"After correction, the corrected files must be moved to their respective\n" +
"Managed Object raw directory to get loaded in the next ROP.</p>\n" +
"\n" +
"<p>\n" +
"Example: <tt class=\"file-path\">/eniq/data/etldata_/0[0-3]/&lt;Managed Object\n" +
"Name&gt;/raw/</tt> </p>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_19=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"MpathValuesarenotVisibleinblkcliCommand\"></a><span class=\"CHAPNUMBER\">37.19 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_udsk\"></a><a name=\"CHAPTER37.19\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting if mpath Values are not Visible in\n" +
"blkcli Command</a></span></h2>\n" +
"\n" +
"<p>\n" +
"For any of the disk, if mpath value is not visible, execute the\n" +
"following procedure:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Add the multipath module to initramfs before reboot\n" +
"of server<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This is applicable only for ENIQ Statistics Blade or Multi-Blade\n" +
"servers.</dd></dl><br /><p>\n" +
"<tt class=\"input\"><b># /usr/sbin/dracut --force --add multipath --include /etc/multipath</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Reboot the server<p>\n" +
"<tt class=\"input\"><b># reboot</b></tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>When server is operational, verify if multipath disks are\n" +
"visible.</dd></dl><br /></li></ul>\n" +
"\n"+
"</div>\n";

var C37_20=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.20 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_vo05\"></a><a name=\"CHAPTER37.20\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Remote Access to Virtual Connect\n" +
"Manager using Command Line Interface</a></span></h2>\n" +
"\n" +
"<p>\n" +
"This section describes the procedure to access the Virtual Connect\n" +
"Manager (VCM) using Command Line Interface in the Interactive Shell\n" +
"Mode.</p>\n" +
"\n" +
"<p>\n" +
"The following are the two ways to access the Virtual Connect Manager\n" +
"(VCM):</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Remotely through any SSH session</li>\n" +
"<li class=\"UNORD\">Remotely through the Onboard Administrator (OA) CLI</li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Contact local HPE support for <em class=\"LOWEMPH\">HPE Virtual\n" +
"Connect Manager Command Line Interface for c-class Blade System User\n" +
"Guide</em>. This guide provides detailed information about the CLI\n" +
"commands used on OA CLI and VCM terminals. CLI commands explained\n" +
"in this guide must be used based on the requirement. </dd></dl><br />\n" +
"\n"+
"</div>\n";

var C37_20_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">37.20.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_lrcd\"></a><a name=\"CHAPTER37.20.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Accessing the VCM CLI remotely through\n" +
"any SSH session</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To access the VCM CLI remotely through any SSH session:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Open an SSH session towards Virtual Connect Manager and\n" +
"log on as root user. The VCM CLI command prompt appears.<p>\n" +
"For example:</p>\n" +
"\n" +
"<div class=\"stepxmp\" style=\"margin-top: 12pt\">\n" +
"<pre class=\"prencd\"># ssh <a href=\"mailto:root@10.151.33.201\">root@10.151.33.201</a>\n" +
"<a href=\"mailto:root@10.151.33.201\">root@10.151.33.201</a>'s password:\n" +
"Last login: Tue Jan 19 10:20:29 2021 from 10.210.239.224\n" +
"------------------------------------------------------------------\n" +
"HPE Virtual Connect Management CLI v4.80\n" +
"Build: 4.80-42 (r329314) Sep 28 2019 17:31:00</pre>\n" +
"</div></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Enter commands for the Virtual Connect Manager. The following\n" +
"is an example for backing up the Virtual Connect Configuration to\n" +
"a remote server.\n" +
"<div class=\"stepxmp\" style=\"margin-top: 12pt\">\n" +
"<pre class=\"prencd\">-&gt; save configbackup address=<a href=\"sftp://user:password@141.137.250.131/\" target=\"ALEX_EXTERNAL\">sftp://user:password@141.137.250.131/</a>\n" +
"../hwconf/vc/vc-config-backup\n" +
"SUCCESS: Config backup transfer completed</pre>\n" +
"</div></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">To terminate the remote access SSH session, close the\n" +
"communication software or enter exit at the CLI command prompt.\n" +
"<div class=\"stepxmp\" style=\"margin-top: 12pt\">\n" +
"<pre class=\"prencd\">-&gt;exit\n" +
"Connection to 10.151.33.201 closed.\n" +
"[root@ieatlms4911-1 ~]#</pre>\n" +
"</div></li></ol>\n" +
"\n"+
"</div>\n";

var C37_20_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">37.20.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_7vvq\"></a><a name=\"CHAPTER37.20.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Accessing the VCM CLI remotely\n" +
"through the Onboard Administrator CLI</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To access the VCM CLI remotely:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the connect interconnect command from the Onboard\n" +
"Administrator CLI, providing the Bay number of the Virtual Connect.\n" +
"It can either be 1 or 2.\n" +
"<div class=\"stepxmp\" style=\"margin-top: 12pt\">\n" +
"<pre class=\"prencd\">&gt; connect interconnect &lt;Bay number&gt;\n" +
"NOTICE: This pass-thru connection to the integrated I/O console is \n" +
"provided for convenience and does not supply additional access \n" +
"control. For security reasons, use the password features of the \n" +
"integrated switch.\n" +
"Connecting to integrated switch 1 at 115200,N81...\n" +
"\n" +
"Escape character is '&lt;Ctrl&gt;_' (Control + Shift + Underscore)\n" +
"\n" +
"Press [Enter] to display the switch console: </pre>\n" +
"</div></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">When prompted, enter the root user name and a valid password.\n" +
"The VC CLI command prompt appears as in the following example:\n" +
"<div class=\"stepxmp\" style=\"margin-top: 12pt\">\n" +
"<pre class=\"prencd\">VCEX27C94460189 login: root\n" +
"Password:\n" +
"-------------------------------------------------------------\n" +
"HPE Virtual Connect Management CLI v4.80\n" +
"Build: 4.80-42 (r329314) Sep 28 2019 17:31:00\n" +
"(C) Copyright 2006-2019 Hewlett Packard Enterprise Development LP\n" +
"All Rights Reserved</pre>\n" +
"</div></li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_21=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.21 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_trll\"></a><a name=\"CHAPTER37.21\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting DBCC errors</a></span></h2>\n" +
"\n" +
"<p>\n" +
"If DBCC check fails with \"Not Completed Indexes\" error message\n" +
"as shown in the following error, then see the iqmsg logs:</p>\n" +
"\n" +
"<p><tt class=\"output\">2021-01-10_02.00.30 - Error validating dc.DC_E_CNAXE_SCTP_DAYBH_08\n" +
"...Not completed indexes are present. 2021-01-10_02.09.42 - Error\n" +
"validating dc.DC_E_CNAXE_SAE_DAYBH_07 ...Not completed indexes are\n" +
"present.</tt></p>\n" +
"<p>\n" +
"See section Database Consistency Check Step 3 to check iqmsg logs.</p>\n" +
"\n" +
"<p>\n" +
"If cache related error messages are seen in the iqmsg logs, the\n" +
"DBCC check fails because of memory crunch, not due to table corruption:</p>\n" +
"\n" +
"<p><tt class=\"output\">I.12/25 12:19:52. 0000205118 [20052]: main Bufman: All buffer\n" +
"cache pages are in use, ask your DBA to increase the size of the buffer\n" +
"cache. Current buffer cache is 27053MB. I. 12/25 12:19:52. 0000205118\n" +
"I. 12/25 12:19:52. Exception Thrown from slib/s_blockmap.cxx:6608,\n" +
"Err# 0, tid 130 origtid 742</tt></p>\n" +
"\n"+
"</div>\n";

var C37_21_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">37.21.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_fuiz\"></a><a name=\"CHAPTER37.21.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Verify Table corruption</a></span></h3>\n" +
"\n" +
"<p>\n" +
"During DBCC run, inconsistent indexes might be reported with the\n" +
"following error:</p>\n" +
"\n" +
"<p><tt class=\"output\">I. 11/04 13:21:24. 0000150440 [20060]: main Bufman: An error\n" +
"was detected on a database page. You may have a damaged index. For\n" +
"additional information, please check your IQ message file or run sp_iqcheckdb</tt></p>\n" +
"<p>\n" +
"Execute the following commands to verify the corruption for each\n" +
"table reporting inconsistent index:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following command<br /><tt class=\"input\"><b>dbisql -nogui -c\n" +
"\"eng=dwhdb;links=tcpip{host=localhost;port=2640};uid=dba;pwd=&lt;DBA_pwd&gt;\"\n" +
"\"sp_iqcheckdb 'verify table dc.&lt;Table_Name&gt;'; output to &lt;logpath&gt;\"</b></tt><p>\n" +
"where <tt class=\"file-path\">DBA_pwd</tt> is DBA password and <tt class=\"file-path\">Table_name</tt> is the table which reported the damaged\n" +
"index.</p>\n" +
"</li></ol>\n" +
"<p>\n" +
"Contact Ericsson support if any errors are reported.</p>\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

var C37_22=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">37.22 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_x39i\"></a><a name=\"CHAPTER37.22\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Troubleshooting and Problem-Solving\n" +
"Procedure for Rollback</a></span></h2>\n" +
"\n" +
"<p>\n" +
"This section provides a list of known issues for Rollback and procedure\n" +
"to resolve them.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_22_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">37.22.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_tfms\"></a><a name=\"CHAPTER37.22.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rollback Fails as the sufficient size\n" +
"is not available </a></span></h3>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Trouble Description:</strong> If rolling snapshot\n" +
"fails and following error is displayed, then create new rolling snapshot.</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"output\">ERROR: Sufficient size is not available in volume group\n" +
"to create the snapshot</tt></p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Problem Reason:</strong> Sufficient size is not\n" +
"available in volume group to create the snapshot.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Problem Solution:</strong> Before creating new\n" +
"snapshot, cleanup of existing rolling snapshot is required. However,\n" +
"with cleanup of existing rolling snapshot, rollback to previous working\n" +
"state is not possible. Ensure that ENIQ is healthy and there is no\n" +
"need to rollback before cleanup of snapshots.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Before cleanup of existing rolling snapshot, ensure DBCC\n" +
"execution step is successful in last run. If there are any corrupted\n" +
"tables reported in DBCC check, then it must be solved before cleanup\n" +
"of existing snapshot.</dd></dl><br />\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to Rack server as <tt class=\"file-path\">root</tt> user.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute following commands to cleanup existing rolling\n" +
"snapshots:<p>\n" +
"<tt class=\"input\"><b>{root} #: cd /eniq/bkup_sw/bin</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>{root} #: /usr/bin/bash ./cleanup_eniq_backup.bsh &ndash;R</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\"> Execute the following commands to create new rolling\n" +
"snapshot:<p>\n" +
"<tt class=\"input\"><b>{root} #: cd /eniq/bkup_sw/bin</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>{root} #: /usr/bin/bash ./prep_eniq_snapshots.bsh</b></tt></p>\n" +
"</li></ol>\n" +
"<p>\n" +
"To prevent the overwrite of manually created snapshot, execute <tt class=\"file-path\">prep_eniq_snapshots.bsh</tt> script. The execution of this\n" +
"script disables the <tt class=\"file-path\">eniq-roll-snap</tt> service.</p>\n" +
"\n" +
"<p>\n" +
"To <tt class=\"file-path\">enable</tt> the <tt class=\"file-path\">eniq-roll-snap</tt> service on the server, see <em class=\"LOWEMPH\">Enabling and Disabling\n" +
"Rolling Snapshots</em>, <a href='javascript:parent.parent.parent.showAnchor(\"Enable_Disable_Rolling_Snapshot\")' class=\"xref\">Section  16.1.5</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C37_22_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"Rollback_fail\"></a><span class=\"CHAPNUMBER\">37.22.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_0ihx\"></a><a name=\"CHAPTER37.22.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rollback\n" +
"Fails as the File System is open</a></span></h3>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Trouble Description:</strong> Rollback of a filesystem\n" +
"fail due to the merge of the snapshot. The following error message\n" +
"is displayed:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"output\">Delaying merge since origin is open.</tt></p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"output\">Merging of snapshot stats_coordinator_pool/bkup_sw-snss1\n" +
"will occur on next activation of stats_coordinator_pool/bkup_sw.</tt></p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"output\">Reactivating bkup_sw</tt></p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Problem Reason:</strong> The filesystem is used\n" +
"by multiple users leading to an unsuccessful merge of the snapshot.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Problem Solution:</strong> Reboot the server\n" +
"and rerun the rollback command.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to <tt class=\"file-path\">/eniq/local_logs/snapshot_logs</tt> and open the file <tt class=\"file-path\">manage_fs_snapshot.log</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Identify the filesystem in which the error is encountered\n" +
"and execute the following command to check if that filesystem is open:<p>\n" +
"<tt class=\"input\"><b>{root} #: lvs</b></tt></p>\n" +
"<p>\n" +
"Example 1:</p>\n" +
"<p>\n" +
"<a title=\"Click to zoom and pan\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-image2.png.png\" border=\"0\" width=\"562\" height=\"87\" class=\"tab0\" /></a></p>\n" +
"<p>\n" +
"In example 1, the filesystem <tt class=\"file-path\">bkup_sw</tt> is open leading to merging of snapshot. This can be verified in\n" +
"\"Attr\" attribute. The Attr value for <tt class=\"file-path\">bkup_sw</tt> file system is <tt class=\"output\">Owi-aos---</tt>. The initial attribute\n" +
"'O' indicates that the file system is open leading to the merge of\n" +
"snapshot.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>When rollback is in progress and one filesystem is used simultaneously,\n" +
"the rollback gets aborted.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">To resolve this issue, clean the file system and then\n" +
"rerun the rollback. Execute the following command to reboot the server\n" +
"in order to clean the filesystem:<p>\n" +
"<tt class=\"input\"><b>{root} #: reboot</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the rollback after the reboot.</li></ol>\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

