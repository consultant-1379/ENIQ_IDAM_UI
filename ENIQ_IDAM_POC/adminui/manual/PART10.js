var C10=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">10 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_4fxr\"></a><a name=\"CHAPTER10\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Managing ENIQ Mounts</a></span></h1>\n" +
"\n"+
"</div>\n";

var C10_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">10.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_og34\"></a><a name=\"CHAPTER10.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Updating Current Mounted Filesystems</a></span></h2>\n" +
"\n" +
"<p>\n" +
"It is possible to update ENIQ so that it mounts different filesystems\n" +
"on the OSS. This enables administrators to mount different network\n" +
"types and parse the data, without stopping the normal ENIQ operation.</p>\n" +
"\n" +
"<p>\n" +
"To update the filesystems, execute the following steps as <tt class=\"file-path\">root</tt> user:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># cd /eniq/connectd/bin</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># bash ./manage_mountpoints.bsh -a update -o <i class=\"var\">&lt;eniq_oss_alias&gt;</i> [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt><p>\n" +
"<tt class=\"output\">Example: # bash ./manage_mountpoints.bsh -a update -o eniq_oss_1\n" +
"-t OSS</tt></p>\n" +
"<p>\n" +
"where &lt;connection type&gt; = SOEM, NAS, OSS, or ENM</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the range of filesystems to mount from the displayed\n" +
"options:<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The list is an example and depends on the connection type.</dd></dl><br /><p>\n" +
"<tt class=\"LITERALMONO\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Description &nbsp; &nbsp; &nbsp;Filesystem</tt><br />\n" +
"<tt class=\"LITERALMONO\">[1] &nbsp; &nbsp; &nbsp;NWS_SGw &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/ossrc/data/sgw/sgwcg &nbsp; &nbsp; &nbsp; (*)</tt><br />\n" +
"<tt class=\"LITERALMONO\">[2] &nbsp; &nbsp; &nbsp;NWS_PDM &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/ossrc/data/ccpdm/pm_storage (*)</tt><br />\n" +
"<tt class=\"LITERALMONO\">[3] &nbsp; &nbsp; &nbsp;NWS_PMS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/ossrc/data/pms/segment1</tt><br />\n" +
"<tt class=\"LITERALMONO\">[4] &nbsp; &nbsp; &nbsp;EBA_EBSS &nbsp; &nbsp; &nbsp; &nbsp; /ossrc/data/eba/eba_ebss</tt><br />\n" +
"<tt class=\"LITERALMONO\">[5] &nbsp; &nbsp; &nbsp;EBA_EBSW &nbsp; &nbsp; &nbsp; &nbsp; /ossrc/data/eba/eba_ebsw</tt><br />\n" +
"<tt class=\"LITERALMONO\">[6] &nbsp; &nbsp; &nbsp;EBA_EBSG &nbsp; &nbsp; &nbsp; &nbsp; /ossrc/data/eba/eba_rsdm</tt><br />\n" +
"<tt class=\"LITERALMONO\"></tt><br />\n" +
"<tt class=\"LITERALMONO\">(*) indicates the filesystem is already mounted</tt><br />\n" +
"<tt class=\"LITERALMONO\">Already mounted filesystems will be unmounted if not re-selected</tt><br />\n" +
"<tt class=\"LITERALMONO\"></tt><br />\n" +
"<tt class=\"LITERALMONO\">Select range of filesystems you wish to mount [n,n-n,n...n]</tt><br />\n" +
"<tt class=\"LITERALMONO\">&nbsp; &nbsp; &nbsp; &nbsp; E.G. 1,3-5,6</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Provide the IP address where the selected file system\n" +
"is mounted from:<p>\n" +
"<tt class=\"output\">Enter the IP to which /ossrc/data/sgw/sgwcg will be mounted\n" +
"from</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">&lt;IP address&gt;</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Enter the IP to which /ossrc/data/ccpdm/pm_storage will\n" +
"be mounted from</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">&lt;IP address&gt;</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Enter the IP to which /ossrc/data/pms/segment1 will be\n" +
"mounted from</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">&lt;IP address&gt;</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Enter the IP to which /ossrc/data/pmMediation/pmData will\n" +
"be mounted from</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">&lt;IP address&gt;</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Confirm the mount information of the server.<p>\n" +
"<tt class=\"output\">Are you sure you wish to continue mounting the above filesystems?\n" +
"(Yy/Nn)</tt></p>\n" +
"<p>\n" +
"Enter 'Y' or 'y' to proceed or enter 'N' or 'n' to exit.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">To check if the new filesystems are mounted, monitor the\n" +
"logs stored in <tt class=\"file-path\">/eniq/local_logs/connectd/</tt>.</li></ol>\n" +
"\n"+
"</div>\n";

var C10_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">10.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_foq0\"></a><a name=\"CHAPTER10.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Managing Mount System</a></span></h2>\n" +
"\n" +
"<p>\n" +
"The default mount system of ENIQ mounts the OSS filesystems directly\n" +
"through NFS. However, it is possible to change this setup and mount\n" +
"through <em class=\"LOWEMPH\">ssh</em> tunnel. This scenario gives increased\n" +
"security to the data as it is encrypted, but the amount of WRAN data\n" +
"collected is limited. </p>\n" +
"\n" +
"<p>\n" +
"To <tt class=\"file-path\">enable</tt> the <em class=\"LOWEMPH\">ssh</em> tunnel for a particular OSS, complete these steps as <tt class=\"file-path\">root</tt> user:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># cd /eniq/connectd/mount_info/</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/touch &lt;eniq_oss_alias&gt;/disable_OSS</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Wait for the system to unmount the filesystems before\n" +
"continuing.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/touch &lt;eniq_oss_alias&gt;/use_tunnel</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/rm &lt;eniq_oss_alias&gt;/disable_OSS</b></tt></li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>For Blade and Multi-Blade deployments, see <a href='javascript:parent.parent.parent.showAnchor(\"ConnectdMonitor\")' class=\"xref\">Section  29</a> for information on how the OSS is mounted.</dd></dl><br />\n" +
"<p>\n" +
"To <tt class=\"file-path\">disable</tt> <em class=\"LOWEMPH\">ssh</em> tunnel for a particular OSS, complete these steps as <tt class=\"file-path\">root</tt> user:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># cd /eniq/connectd/mount_info/</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/touch &lt;eniq_oss_alias&gt;/disable_OSS</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Wait for the system to unmount the filesystems before\n" +
"continuing.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/rm &lt;eniq_oss_alias&gt;/use_tunnel</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b># /usr/bin/rm &lt;eniq_oss_alias&gt;/disable_OSS</b></tt></li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

