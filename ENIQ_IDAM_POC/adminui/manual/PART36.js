var C36=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">36 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_5w0w\"></a><a name=\"CHAPTER36\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Replacement of Failed Internal Disk in\n" +
"HP Blade and Rack Servers G9 or G10</a></span></h1>\n" +
"\n"+
"</div>\n";

var C36_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">36.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_1cxl\"></a><a name=\"CHAPTER36.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Overview</a></span></h2>\n" +
"\n" +
"<p>\n" +
"This section describes how to replace an internal disk in HP ProLiant\n" +
"ENIQ Blade and Rack servers or G9 or G10, installed with RHEL 7 operating\n" +
"system.</p>\n" +
"\n" +
"<p>\n" +
"If there is disk failure, contact HPE support to replace <tt class=\"file-path\">failed</tt> drive. Post replacement of disk, verify the\n" +
"RAID rebuild status.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Pre-requisite:</strong></p>\n" +
"\n" +
"<p>\n" +
"The disks on the ENIQ server must be on the Hardware mirror (RAID\n" +
"1 or RAID 5) configuration. </p>\n" +
"\n" +
"<p>\n" +
"This procedure is not applicable for the disks configured with\n" +
"Hardware RAID 0 on the ENIQ server.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C36_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">36.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_y2st\"></a><a name=\"CHAPTER36.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Identify Failed Drive and Initiate\n" +
"Disk Replacement</a></span></h2>\n" +
"\n" +
"<p>\n" +
"To identify <tt class=\"file-path\">failed</tt> drive and initiate\n" +
"disk replacement:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to ILO &gt; information &gt; system information &gt; storage\n" +
"&gt; controller on system board &gt; logical view</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE62\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Identify_Failed_Disk.png.png\" border=\"0\" width=\"322\" height=\"337\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 62 &nbsp; Identify Failed Disk</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"2\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Contact HP vendor for the <tt class=\"file-path\">failed</tt> drive replacement.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Make sure that HP Engineer replaces the disk with hot\n" +
"swap method and enables disk rebuild process. </li></ol>\n" +
"\n"+
"</div>\n";

var C36_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">36.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_2cbt\"></a><a name=\"CHAPTER36.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Post Disk Replacement Verification</a></span></h2>\n" +
"\n" +
"<p>\n" +
"The following steps are used to verify RAID rebuild status of a\n" +
"new disk:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Make sure that the HP engineer completed the <tt class=\"file-path\">failed</tt> disk replacement with hot swap method and initiated\n" +
"disk rebuild process.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Verify the RAID build status from the ILO.<p>\n" +
"To check the status using ILO:</p>\n" +
"<p>\n" +
"Login to ILO &gt; information &gt; system information &gt; storage &gt; controller\n" +
"on system board &gt; logical view</p>\n" +
"</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE63\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-RAID_build_status.png.png\" border=\"0\" width=\"317\" height=\"345\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 63 &nbsp; RAID Build Status</i></p></div>\n" +
"<p>\n" +
"Rebuild process takes a long time based on disk size. In the internal\n" +
"test, the rebuild of 1 TB disk takes around 9 hours.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"3\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Verify that the replaced physical disk status is changed\n" +
"from <tt class=\"file-path\">Degraded</tt> (Rebuilding) to <tt class=\"file-path\">OK</tt>. </li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE64\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-Replaced_Physical_Disk.png.png\" border=\"0\" width=\"277\" height=\"211\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 64 &nbsp; Replaced Physical Drive</i></p></div>\n" +
"\n" +
"\n"+
"</div>\n";

