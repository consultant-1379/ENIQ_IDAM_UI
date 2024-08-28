var C8=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><a name=\"EniqServiceCommands\"></a><span class=\"CHAPNUMBER\">8 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_vzh9\"></a><a name=\"CHAPTER8\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ENIQ Service\n" +
"Commands</a></span></h1>\n" +
"\n"+
"</div>\n";

var C8_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_4p7l\"></a><a name=\"CHAPTER8.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing dcuser RHEL\n" +
"Password</a></span></h2>\n" +
"\n" +
"<p>\n" +
"It is recommended to change the default password.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Password Policy:</strong></p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">All alphanumeric characters are allowed.</li>\n" +
"<li class=\"UNORD\">The following special character is not allowed:<p>\n" +
"\\</p>\n" +
"</li>\n" +
"<li class=\"UNORD\">No spaces are allowed.</li>\n" +
"<li class=\"UNORD\">Permissible length of the password is between 8 to 30\n" +
"characters.</li></ul>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To change dcuser password:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the server as <tt class=\"file-path\">dcuser</tt> by using SSH.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the <tt class=\"input\"><b>passwd</b></tt> command.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Follow the instruction prompted on the screen.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">On successful password change, the following message is\n" +
"displayed: <p>\n" +
"<strong class=\"MEDEMPH\">passwd: all authentication tokens updated successfully</strong>.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>In a Multi-Blade server, Step 1 to Step 4 must be executed\n" +
"on each blade and the same password must be set on each blade.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following steps to update the new <tt class=\"file-path\">dcuser</tt> password in repdb:<p>\n" +
"<tt class=\"input\"><b>cd /eniq/sw/platform/repository-<i class=\"var\">&lt;Rstate&gt;</i>/bin</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>chmod +x ChangeUserPasswordsInRepdb</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Run the following script:<br /><tt class=\"input\"><b>./ChangeUserPasswordsInRepdb\n" +
"-u dcuser</b></tt><br />Provide old <tt class=\"file-path\">dcuser</tt> RHEL password when prompted and then follow the instructions on\n" +
"screen. <br /><tt class=\"input\"><b>Enter Old Password:</b></tt><br /><tt class=\"input\"><b>Enter New\n" +
"Password:</b></tt><br /><tt class=\"input\"><b>Re-enter New Password:</b></tt><br /><p>\n" +
"It shows the following result:</p>\n" +
"<p>\n" +
"<tt class=\"output\">Password updated successfully for: userName</tt></p>\n" +
"<p>\n" +
"Where 'userName' is the user name for which password is changed. </p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>In a Multi-Blade server, execute Step 5 and Step 6 on the\n" +
"Coordinator Blade.</dd></dl><br /></li></ol>\n" +
"<p>\n" +
"After the password is changed from the original <tt class=\"file-path\">dcuser</tt> password, it is not possible to reuse this password or to use a\n" +
"password containing any combination of the characters used earlier.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C8_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_02nx\"></a><a name=\"CHAPTER8.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing Root RHEL Password</a></span></h2>\n" +
"\n" +
"<p>\n" +
"For security reasons, it is recommended to change the <tt class=\"file-path\">root</tt> credentials of the ENIQ server.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Run the <tt class=\"input\"><b>man passwd</b></tt> command to view the RHEL\n" +
"security guidelines.</dd></dl><br />\n" +
"<p>\n" +
"To change the ENIQ, <tt class=\"file-path\">root</tt> user password\n" +
"for each Blade in the deployment, follow these steps:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server as <tt class=\"file-path\">root</tt> user.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the <tt class=\"input\"><b>passwd</b></tt> command:<p>\n" +
"A prompt is displayed requesting for the new password.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Enter new password and re-enter the new password to confirm.<p>\n" +
"<tt class=\"input\"><b>[eniq_stats]{root}#: passwd<br /> passwd: Changing password\n" +
"for root<br /> New Password:<br /> Re-enter new Password:<br /> passwd:\n" +
"password successfully changed for root<br />[eniq_stats]{root}#: </b></tt></p>\n" +
"</li></ol>\n" +
"<p>\n" +
"<tt class=\"output\">Password successfully changed for root</tt> message\n" +
"is displayed.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C8_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_61ta\"></a><a name=\"CHAPTER8.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing the Unity Storage Array\n" +
"Password</a></span></h2>\n" +
"\n" +
"<div class=\"ADMON\"><span class=\"ADMONMSG2\">Warning!</span><p class=\"ADMONDESC\">\n" +
"This procedure is applicable only if Unity storage array is not\n" +
"shared. If it is shared, then it impacts the other shared deployments.</p>\n" +
"</div>\n" +
"<p>\n" +
"Do not change the password during maintenance activities like upgrade\n" +
"or during day to day activities like rolling snapshot or OMBS backup\n" +
"and restore.</p>\n" +
"\n" +
"<p>\n" +
"Execute the following procedure to change the admin password for\n" +
"Unity Storage array:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server (Standalone or Multi-Blade(Coordinator))\n" +
"as <tt class=\"file-path\">root</tt> user. </li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Change the directory:<p>\n" +
"<tt class=\"input\"><b>{root} #: cd /ericsson/storage/san/bin/</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following script:<p>\n" +
"<tt class=\"input\"><b>{root} #: ./resetPasswordForVnxUnity.py</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">1: VNX  </tt><br /><tt class=\"output\">2: Unity  </tt><br /><tt class=\"output\">3: EXIT  </tt><br /><tt class=\"output\">Enter your choice(EX: 1 or 2 or 3):</tt><tt class=\"input\"><b>2</b></tt><br /><tt class=\"output\">[INFO]: Changing password for Unity\n" +
" </tt><br /><tt class=\"output\">NOTE : Password policy as below  </tt><br /><tt class=\"output\">*  Length should be 8 to 40 characters </tt><br /><tt class=\"output\">*  Should contain at least \"one upper and lower case\" </tt><br /><tt class=\"output\">*  Should start with \"Alphabet or number\"  </tt><br /><tt class=\"output\">*  Should contain at least \"one number and one special character\"\n" +
"from @#%^*?_~ </tt><br /><tt class=\"output\">*  Should not contain any special\n" +
"character from '!$;\\\"|)&lt;&gt;(&amp;`space</tt><br /><tt class=\"output\">Enter\n" +
"admin User name :</tt><tt class=\"input\"><b>admin</b></tt><br /><tt class=\"output\">Enter Current\n" +
"Password :  </tt><br /><tt class=\"output\">Enter new password:  </tt><br /><tt class=\"output\">Retype new password:  </tt><br /><tt class=\"output\">Enter the MWS\n" +
"password of &lt;MWS IP&gt;:</tt><br /><tt class=\"output\">[INFO]: Successfully\n" +
"changed the password for unity(Unity SP IP)</tt><br /><tt class=\"output\">[INFO]:\n" +
"Please wait, Updating password all over ENIQ servers and MWS for &lt;Unity\n" +
"SP IP&gt;</tt><br /><tt class=\"output\">[INFO]: Storage Password updated Successfully\n" +
"on ENIQ server and MWS</tt><br /><tt class=\"output\">{root} #</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the OMBS server and execute the following command\n" +
"to establish the password-less connection if applicable:<br /><tt class=\"output\">#uemcli -d &lt;Unity_spIP&gt; -u admin -p &lt;new password&gt; -saveUser</tt><p>\n" +
"Where &lt;Unity_spIP&gt; is Unity SP IP<br /> &lt;new password&gt; is\n" +
"new password for admin user</p>\n" +
"</li></ol>\n" +
"\n"+
"</div>\n";

var C8_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_2ohg\"></a><a name=\"CHAPTER8.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing the VNX Storage Array\n" +
"Password</a></span></h2>\n" +
"\n" +
"<div class=\"ADMON\"><span class=\"ADMONMSG2\">Warning!</span><p class=\"ADMONDESC\">\n" +
"This procedure is applicable only if VNX storage array is not shared.\n" +
"If it is shared, then it impacts the other shared deployments.</p>\n" +
"</div>\n" +
"<p>\n" +
"Do not change the password during maintenance activities like upgrade\n" +
"or during day to day activities like rolling snapshot or OMBS backup\n" +
"and restore.</p>\n" +
"\n" +
"<p>\n" +
"Execute the following procedure to change the admin user password\n" +
"for VNX Storage array:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server (Standalone or Multi-Blade(Coordinator))\n" +
"as <tt class=\"file-path\">root</tt> user.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Change the directory:<p>\n" +
"<tt class=\"input\"><b>{root} #: cd /ericsson/storage/san/bin/</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following script:<p>\n" +
"<tt class=\"input\"><b>{root} #: ./resetPasswordForVnxUnity.py</b></tt> <br /><tt class=\"output\">1: VNX  </tt><br /><tt class=\"output\">2: Unity  </tt><br /><tt class=\"output\">3:\n" +
"EXIT  </tt><br /><tt class=\"output\">Enter your choice(EX: 1 or 2 or 3):</tt><tt class=\"input\"><b>1</b></tt><br /><tt class=\"output\">[INFO]: Changing password for VNX  </tt><br /><tt class=\"output\">NOTE : Password policy as below   </tt><br /><tt class=\"output\">*  Length should be 8 to 40 characters </tt><br /><tt class=\"output\">*  Should\n" +
"not contain any special character from '!$;\\&gt;&lt;\"|)(&amp;`space</tt><br /><tt class=\"output\">Enter admin User name :</tt><tt class=\"input\"><b>admin</b></tt><br /><tt class=\"output\">Enter Current Password :  </tt><br /><tt class=\"output\">Enter\n" +
"new password:  </tt><br /><tt class=\"output\">Retype new password:  </tt><br /><tt class=\"output\">Enter the MWS password of &lt;MWS IP&gt;:</tt><br /><tt class=\"output\">[INFO]: Successfully changed the password for vnx(VNX SPA/SPB)</tt><br /><tt class=\"output\">[INFO]: Please wait, Updating password all over ENIQ\n" +
"servers and MWS for VNX SPA/SPB</tt><br /><tt class=\"output\">[INFO]: Storage\n" +
"Password updated Successfully on ENIQ server and MWS</tt><br /><tt class=\"output\">[INFO]: Please wait, Updating password all over ENIQ servers and\n" +
"MWS for VNX SPA/SPB</tt><br /><tt class=\"output\">[INFO]: Storage Password\n" +
"updated Successfully on ENIQ server and MWS</tt><br /><tt class=\"output\">{root}\n" +
"#</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the OMBS server and execute the following commands\n" +
"to save the security keys for password-less connection if applicable:<br /><tt class=\"output\">#/opt/Navisphere/bin/naviseccli -h &lt;SPA_IP&gt; -user admin\n" +
"-password &lt;new password&gt; -scope 0 -addusersecurity</tt><br /><tt class=\"output\">#/opt/Navisphere/bin/naviseccli -h &lt;SPB_IP&gt; -user admin\n" +
"-password &lt;new password&gt; -scope 0 -addusersecurity</tt><p>\n" +
"Where, &lt;SPA_IP&gt; is VNX SPA IP<br />&lt;SPB_IP&gt; is VNX SPB IP<br />&lt;new password&gt; is new password for admin user</p>\n" +
"</li></ol>\n" +
"\n"+
"</div>\n";

var C8_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_b45g\"></a><a name=\"CHAPTER8.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing the NAS Password</a></span></h2>\n" +
"\n" +
"<div class=\"ADMON\"><span class=\"ADMONMSG2\">Warning!</span><p class=\"ADMONDESC\">\n" +
"This procedure is applicable only if NAS is connected to ENIQ and\n" +
"is not shared.</p>\n" +
"</div>\n" +
"<p>\n" +
"Do not change the password during maintenance activities like upgrade\n" +
"or during day to day activities like rolling snapshot or OMBS backup\n" +
"and restore.</p>\n" +
"\n" +
"<p>\n" +
"The following steps must be performed to change the NAS user password:</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C8_5_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">8.5.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_2evo\"></a><a name=\"CHAPTER8.5.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing the NAS User Password</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To change the password for NAS users:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the NAS management console as <tt class=\"file-path\">master</tt> user.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following commands:<p>\n" +
"<strong class=\"MEDEMPH\">For master user:</strong></p>\n" +
"<p>\n" +
"NAS&gt; admin passwd</p>\n" +
"<p>\n" +
"<tt class=\"output\">Changing password for master </tt><br /><tt class=\"output\">Old\n" +
"password:  </tt><br /><tt class=\"output\">Note: Enter the old password in single\n" +
"quotes (Example : 'password'). </tt><br /><tt class=\"output\">New password: </tt><br /><tt class=\"output\">Re-enter new password:</tt><br /><tt class=\"output\">Password\n" +
"changed</tt><br /><tt class=\"output\">NAS&gt;</tt></p>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">For support user:</strong> </p>\n" +
"<p>\n" +
"NAS&gt; admin supportuser password</p>\n" +
"<p>\n" +
"<tt class=\"output\">Changing password for support </tt><br /><tt class=\"output\">Old\n" +
"password:  </tt><br /><tt class=\"output\">Note: Enter the old password in single\n" +
"quotes (Example : 'password'). </tt><br /><tt class=\"output\">New password: </tt><br /><tt class=\"output\">Re-enter new password:</tt><br /><tt class=\"output\">Password\n" +
"changed</tt><br /><tt class=\"output\">NAS&gt;</tt></p>\n" +
"</li></ol>\n" +
"\n"+
"</div>\n";

var C8_5_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"Updating_Configuration_files\"></a><span class=\"CHAPNUMBER\">8.5.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_y9bb\"></a><a name=\"CHAPTER8.5.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Updating the Configuration files</a></span></h3>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server as <tt class=\"file-path\">root</tt> user.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Perform the following steps to decrypt the source file\n" +
"and edit the file with updated passwords:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Go to the path:<p>\n" +
"<tt class=\"input\"><b>{root} #: cd /ericsson/storage/etc/</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Execute the decrypt scipt:<p>\n" +
"<tt class=\"input\"><b>{root} #: ./decrypt.sh</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Edit the MPASSWD (updated <tt class=\"file-path\">master</tt> password) and SPASSWD (updated support password) in sourcefile using\n" +
"vi editor<p>\n" +
"<tt class=\"input\"><b>{root} #: vi sourcefile</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Remove the sourcefile.gpg:<p>\n" +
"<tt class=\"input\"><b>{root} #: rm -rf sourcefile.gpg</b></tt></p>\n" +
"</li></ul></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Perform the following steps to encrypt the source file:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Go to the path:<p>\n" +
"<tt class=\"input\"><b>{root} #: cd /ericsson/security/bin/</b></tt></p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Encrypt the source file:<p>\n" +
"<tt class=\"input\"><b>{root} #: ./encrypt.sh</b></tt></p>\n" +
"</li></ul></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following command to establish the password less\n" +
"connection:<p>\n" +
"Go to the path:</p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>{root} #: /ericsson/storage/bin/</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>{root} #: ./setup_ssh_FileStore.sh /eniq/installation/config/ssh_input_file</b></tt></p>\n" +
"<p>\n" +
"Where setup_ssh_FileStore.sh is the script and ssh_input_file is\n" +
"the argument.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>In multi-blade setup, ensure that the procedure for updating\n" +
"the configuration files (see <a href='javascript:parent.parent.parent.showAnchor(\"Updating_Configuration_files\")' class=\"xref\">Section  8.5.2</a>) is performed on each individual blade server.</dd></dl><br /></li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

var C8_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_2ue8\"></a><a name=\"CHAPTER8.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ILO and OA Password Management</a></span></h2>\n" +
"\n" +
"<p>\n" +
"This section describes the procedure to change the iLO and OA user\n" +
"credentials.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>iLO and OA user accounts must enforce strong passwords.\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">The default Minimum Password Length is 8 characters\n" +
"and maximum is 39 characters for iLO and OA.</li>\n" +
"<li class=\"UNORD\">It is Recommended to change iLO and OA user account\n" +
"password once in every 90 days.</li></ul></dd></dl><br />\n" +
"<p>\n" +
"For iLO4 and iLO5 password rules, see password guidelines in <em class=\"LOWEMPH\">HPE iLO 5 User Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"HPE_iLO5_User_Guide\")' class=\"xref\">Reference [38]</a>.</p>\n" +
"\n" +
"<p>\n" +
"For OA password rules, see password settings in <em class=\"LOWEMPH\">HPE BladeSystem Onboard Administrator User Guide</em>, <a href='javascript:parent.parent.parent.showAnchor(\"HPE_BladeSystem_OA_User_Guide\")' class=\"xref\">Reference [39]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C8_6_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">8.6.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_9jo3\"></a><a name=\"CHAPTER8.6.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">iLO4 User Account Password Management</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Following are the steps to change iLO4 user account password:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the iLO web interface.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to <strong class=\"MEDEMPH\">Administration &gt; User Administration</strong> tab.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In the <strong class=\"MEDEMPH\">Local Users</strong> section,\n" +
"click the check box to select the user and then click <strong class=\"MEDEMPH\">Edit</strong>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE49\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-iLO4.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 49 &nbsp; iLO4 User Administration</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"4\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the <strong class=\"MEDEMPH\">Change password</strong> check\n" +
"box.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Update the <strong class=\"MEDEMPH\">New Password</strong> and <strong class=\"MEDEMPH\">Password Confirm</strong>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE50\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-iLO4_2.png.png\" border=\"0\" width=\"762\" height=\"437\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 50 &nbsp; iLO4 User Information </i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"6\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">To save the user account changes, click <strong class=\"MEDEMPH\">Update User</strong>.</li></ol>\n" +
"\n"+
"</div>\n";

var C8_6_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">8.6.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_0mh1\"></a><a name=\"CHAPTER8.6.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\"> iLO5 User Account Password Management</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Following are the steps to enable Password complexity on ILO5:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the iLO web interface.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Navigate to <strong class=\"MEDEMPH\">Security</strong> and select <strong class=\"MEDEMPH\">Access Settings</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In the Account service section, if the Password Complexity\n" +
"is disabled, then click Edit and select the check box to enable it.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE51\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-iLO5.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 51 &nbsp; iLO5 Access Settings</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"4\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <strong class=\"MEDEMPH\">OK</strong> to save the changes.</li></ol>\n" +
"<p>\n" +
"Following are the steps to change the iLO5 user credentials: </p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the iLO web interface.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Navigate to <strong class=\"MEDEMPH\">Administration &gt; User\n" +
"Administration</strong> tab.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In the Local users section, click the check box to select\n" +
"a user account, and click <strong class=\"MEDEMPH\">Edit</strong>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE52\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-iLO5_2.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 52 &nbsp;  iLO5 User Administration</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"4\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the <strong class=\"MEDEMPH\">Change password</strong> check\n" +
"box.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Update the <strong class=\"MEDEMPH\">New Password</strong> and <strong class=\"MEDEMPH\">Password Confirm</strong>.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE53\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-iLO5_3.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 53 &nbsp; iLO5 User Administration</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"6\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">To save the user account changes, click <strong class=\"MEDEMPH\">Update User</strong>.</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If password complexity is enabled on iLO5, it enforces password\n" +
"characteristics when a new user is created or an existing user credentials\n" +
"are updated.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C8_6_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">8.6.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_jyjq\"></a><a name=\"CHAPTER8.6.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">OA User Account Management</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Following are the steps to enable Password complexity on OA:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the OA web interface.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to <strong class=\"MEDEMPH\">Users/Authentication &gt; Password\n" +
"settings</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the check box to enable strong password option.\n" +
"Click on <strong class=\"MEDEMPH\">Apply</strong> to save.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE54\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-OA.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 54 &nbsp; OA User Password Settings</i></p></div>\n" +
"<p>\n" +
"Following are the steps to change the OA user credentials:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the OA web interface.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Go to <strong class=\"MEDEMPH\">Users/Authentication &gt; local\n" +
"users</strong>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In the <strong class=\"MEDEMPH\">Local users</strong> section,\n" +
"click on check box to select a user name.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE55\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-OA_2.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 55 &nbsp; OA Local Users</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"4\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Click <strong class=\"MEDEMPH\">Edit</strong> and update the New\n" +
"Password and Confirm Password values.</li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE56\" class=\"UNSCALEDREFERENCE ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-OA_3.png.png\" border=\"0\" width=\"640\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 56 &nbsp; OA Edit Local Users</i></p></div>\n" +
"\n" +
"<ol class=\"STEPLIST\" start=\"5\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">To save the user account changes, click <strong class=\"MEDEMPH\">Update User</strong>.</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If password complexity is enabled on OA, it enforces password\n" +
"characteristics when a new user is created or an existing user credentials\n" +
"are updated.</dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

var C8_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"ShutdownDWH\"></a><span class=\"CHAPNUMBER\">8.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_snjp\"></a><a name=\"CHAPTER8.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Shutting Down\n" +
"DWH Database</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To shut down DWH database:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following:<br /><tt class=\"input\"><b>/eniq/sw/bin/dwhdb stop</b></tt><br />If successful, the message <tt class=\"output\">Service stopping eniq-dwhdb</tt> is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify shut down:<br /><tt class=\"input\"><b>/eniq/sw/bin/dwhdb\n" +
"status</b></tt></li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>When shutting down DWH database, Systemd shuts down the following\n" +
"ENIQ components:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ engine</li>\n" +
"<li class=\"UNORD\">ENIQ scheduler</li>\n" +
"<li class=\"UNORD\">On a Multi-Blade deployment, dwh_reader service on dwh_reader_1\n" +
"and dwh_reader_2 blades</li></ul></dd></dl><br />\n" +
"\n"+
"</div>\n";

var C8_8=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.8 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_i5p8\"></a><a name=\"CHAPTER8.8\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Starting DWH Database</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To start up DWH database:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following command:<br /> <tt class=\"input\"><b># /eniq/sw/bin/dwhdb\n" +
"start</b></tt><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify startup:<br /><tt class=\"input\"><b># /eniq/sw/bin/dwhdb\n" +
"status</b></tt></li></ol>\n" +
"\n"+
"</div>\n";

var C8_9=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.9 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_96vv\"></a><a name=\"CHAPTER8.9\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Shutting Down REP Database</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To shut down REP database:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following:<br /><tt class=\"input\"><b>/eniq/sw/bin/repdb stop</b></tt><br />If successful, the message <tt class=\"output\">Service stopping eniq-repdb</tt> is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify shutdown:<br /><tt class=\"input\"><b>/eniq/sw/bin/repdb\n" +
"status</b></tt></li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>When shutting down the REP database, Systemd shuts down the\n" +
"following ENIQ components:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ engine</li>\n" +
"<li class=\"UNORD\">ENIQ scheduler</li>\n" +
"<li class=\"UNORD\">AdminUI</li></ul></dd></dl><br />\n" +
"\n"+
"</div>\n";

var C8_10=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.10 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_zl8y\"></a><a name=\"CHAPTER8.10\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Starting REP Database</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To start up REP database:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following command: <br /><tt class=\"input\"><b># /eniq/sw/bin/repdb\n" +
"start</b></tt> <br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify startup: <br /><tt class=\"input\"><b># /eniq/sw/bin/repdb\n" +
"status</b></tt></li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>When starting up REP database, Systemd starts the following\n" +
"ENIQ components:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ engine</li>\n" +
"<li class=\"UNORD\">ENIQ scheduler</li>\n" +
"<li class=\"UNORD\">AdminUI</li></ul></dd></dl><br />\n" +
"\n"+
"</div>\n";

var C8_11=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"shutdown\"></a><span class=\"CHAPNUMBER\">8.11 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_nci4\"></a><a name=\"CHAPTER8.11\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Shutting Down\n" +
"AdminUI</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To shut down AdminUI:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following:<br /><tt class=\"input\"><b>/eniq/sw/bin/webserver\n" +
"stop</b></tt><br /> If successful, the message <tt class=\"output\">Service stopping\n" +
"eniq-webserver</tt> is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify shutdown:<br /><tt class=\"input\"><b>/eniq/sw/bin/webserver\n" +
"status</b></tt></li></ol>\n" +
"\n"+
"</div>\n";

var C8_12=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"startup\"></a><span class=\"CHAPNUMBER\">8.12 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_drcr\"></a><a name=\"CHAPTER8.12\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Starting AdminUI</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To start up AdminUI:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following:<br /><tt class=\"input\"><b>/eniq/sw/bin/webserver\n" +
"start</b></tt><br /> If successful, the message <tt class=\"output\">Systemd enabling\n" +
"eniq-webserver</tt> is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify startup:<br /><tt class=\"input\"><b>/eniq/sw/bin/webserver\n" +
"status</b></tt></li></ol>\n" +
"\n"+
"</div>\n";

var C8_13=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.13 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_4s2e\"></a><a name=\"CHAPTER8.13\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Shutting Down ENIQ Engine</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To shut down ENIQ engine:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In a Multi-Blade deployment, execute the command on the\n" +
"Engine Blade:<br /><tt class=\"input\"><b>/eniq/sw/bin/engine stop</b></tt><br /> If\n" +
"successful, the message <tt class=\"output\">Service stopping eniq-engine</tt> is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify shutdown:<br /><tt class=\"input\"><b>/eniq/sw/bin/engine\n" +
"status</b></tt></li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>When shutting down ENIQ engine, Systemd shuts down the following\n" +
"ENIQ component:<p>\n" +
"ENIQ Fls</p>\n" +
"</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C8_14=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.14 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_rq0h\"></a><a name=\"CHAPTER8.14\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Starting ENIQ Engine</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To start up ENIQ engine:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\"> In a Multi-Blade deployment, execute the command on the\n" +
"Engine Blade:<br /><tt class=\"input\"><b>/eniq/sw/bin/engine start</b></tt><br /> If\n" +
"successful, the message <tt class=\"output\">Systemd enabling eniq-engine</tt> is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify startup:<br /><tt class=\"input\"><b>/eniq/sw/bin/engine\n" +
"status</b></tt></li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>When starting the ENIQ engine, Systemd starts the following\n" +
"ENIQ components if it is offline:<p>\n" +
"ENIQ Fls</p>\n" +
"</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C8_15=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.15 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_irq4\"></a><a name=\"CHAPTER8.15\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Shutting Down ENIQ Scheduler</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To shut down ENIQ scheduler:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following command:<br /><tt class=\"input\"><b>/eniq/sw/bin/scheduler\n" +
"stop</b></tt><br /> If successful, the message <tt class=\"output\">Service stopping\n" +
"eniq-scheduler</tt> is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify shutdown:<br /><tt class=\"input\"><b>/eniq/sw/bin/scheduler\n" +
"status</b></tt></li></ol>\n" +
"\n"+
"</div>\n";

var C8_16=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.16 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_863r\"></a><a name=\"CHAPTER8.16\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Starting ENIQ Scheduler</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To start ENIQ scheduler:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following command:<br /><tt class=\"input\"><b>/eniq/sw/bin/scheduler\n" +
"start</b></tt><br /> If successful, the message <tt class=\"output\">Systemd enabling\n" +
"eniq-scheduler</tt> is displayed.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify startup:<br /><tt class=\"input\"><b>/eniq/sw/bin/scheduler\n" +
"status</b></tt></li></ol>\n" +
"\n"+
"</div>\n";

var C8_17=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"maintenance\"></a><span class=\"CHAPNUMBER\">8.17 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_sut8\"></a><a name=\"CHAPTER8.17\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Setting ENIQ\n" +
"to Maintenance Mode</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To set maintenance mode:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In a Multi-Blade deployment, execute the command on the\n" +
"Engine Blade:<br /><tt class=\"input\"><b>/eniq/sw/bin/engine -e changeProfile NoLoads</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify maintenance mode:<br /><tt class=\"input\"><b>/eniq/sw/bin/engine status</b></tt><dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><b>Current Profile:</b> indicates the current state.</dd></dl><br /></li></ol>\n" +
"\n"+
"</div>\n";

var C8_18=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"normal\"></a><span class=\"CHAPNUMBER\">8.18 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_j97v\"></a><a name=\"CHAPTER8.18\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Setting ENIQ to\n" +
"Normal Mode</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To set normal mode:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use SSH to log on to the server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\"> In a Multi-Blade deployment, execute the command on the\n" +
"Engine Blade on the command line:<br /><tt class=\"input\"><b>/eniq/sw/bin/engine -e\n" +
"changeProfile Normal</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Use the following to verify normal mode:<br /><tt class=\"input\"><b>/eniq/sw/bin/engine\n" +
"status</b></tt><dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><b>Current Profile:</b> indicates the current state.</dd></dl><br /></li></ol>\n" +
"\n"+
"</div>\n";

var C8_19=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"lock\"></a><span class=\"CHAPNUMBER\">8.19 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_0dqc\"></a><a name=\"CHAPTER8.19\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Locking IQ Users</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To lock IQ users:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Database administration rights are required to lock user.\n" +
"Log on to ENIQ-S server as <tt class=\"file-path\">dcuser</tt>. <p>\n" +
"Login to ENIQ Database using the following command:</p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>dbisql -nogui -c \"eng=dwhdb;links=tcpip{host=localhost;port=2640};uid=dba;pwd=&lt;DBA_pwd&gt;\"</b></tt></p>\n" +
"<p>\n" +
"Where <tt class=\"file-path\">&lt;DBA_pwd&gt;</tt> is DBA password.</p>\n" +
"<p>\n" +
"For Multi-Blade deployment log on to <tt class=\"file-path\">dwh_reader_2</tt> as dcuser using SQL client software.</p>\n" +
"<p>\n" +
"Login to ENIQ Database using the following command:</p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>dbisql -nogui -c \"eng=dwh_reader_2;links=tcpip{host=localhost;port=2642};uid=dba;pwd=&lt;DBA_pwd&gt;\"</b></tt></p>\n" +
"<p>\n" +
"Where <tt class=\"file-path\">&lt;DBA_pwd&gt;</tt> is DBA password.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Create a login policy with the option locked = ON, with\n" +
"the command:<br /><tt class=\"input\"><b>CREATE LOGIN POLICY locked_users locked=ON</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Assign the user <tt class=\"file-path\">dcbo</tt> to the <tt class=\"file-path\">locked_users</tt> login policy:<br /><tt class=\"input\"><b>ALTER USER dcbo\n" +
"LOGIN POLICY locked_users</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Assign the user <tt class=\"file-path\">dcpublic</tt> to\n" +
"the <tt class=\"file-path\">locked_users</tt> login policy:<br /><tt class=\"input\"><b>ALTER USER dcpublic LOGIN POLICY locked_users</b></tt></li></ol>\n" +
"\n"+
"</div>\n";

var C8_20=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"unlock\"></a><span class=\"CHAPNUMBER\">8.20 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_rs4z\"></a><a name=\"CHAPTER8.20\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Unlocking IQ Users</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To unlock IQ users:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Database administration rights are required to unlock\n" +
"user. Log on to ENIQ-S server as <tt class=\"file-path\">dcuser</tt>. <p>\n" +
"Login to ENIQ Database using the following command:</p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>dbisql -nogui -c \"eng=dwhdb;links=tcpip{host=localhost;port=2640};uid=dba;pwd=&lt;DBA_pwd&gt;\"</b></tt></p>\n" +
"<p>\n" +
"Where <tt class=\"file-path\">&lt;DBA_pwd&gt;</tt> is DBA password.</p>\n" +
"<p>\n" +
"For Multi-Blade deployment log on to <tt class=\"file-path\">dwh_reader_2</tt> as dcuser using SQL client software.</p>\n" +
"<p>\n" +
"Login to ENIQ Database using the following command:</p>\n" +
"<p>\n" +
"<tt class=\"input\"><b>dbisql -nogui -c \"eng=dwh_reader_2;links=tcpip{host=localhost;port=2642};uid=dba;pwd=&lt;DBA_pwd&gt;\"</b></tt></p>\n" +
"<p>\n" +
"Where <tt class=\"file-path\">&lt;DBA_pwd&gt;</tt> is DBA password.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Create a login policy with the option locked = OFF, with\n" +
"the command:<br /><tt class=\"input\"><b>CREATE LOGIN POLICY unlocked_users locked=OFF</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Assign the user <tt class=\"file-path\">dcbo</tt> to the <tt class=\"file-path\">unlocked_users</tt> login policy:<br /> <tt class=\"input\"><b>ALTER USER\n" +
"dcbo LOGIN POLICY unlocked_users</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Assign the user <tt class=\"file-path\">dcpublic</tt> to\n" +
"the <tt class=\"file-path\">unlocked_users</tt> login policy:<br /><tt class=\"input\"><b>ALTER USER dcpublic LOGIN POLICY unlocked_users</b></tt></li></ol>\n" +
"\n"+
"</div>\n";

var C8_21=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.21 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_54ps\"></a><a name=\"CHAPTER8.21\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Changing Alarm Properties</a></span></h2>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">To change alarm properties:</strong></p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the server as <tt class=\"file-path\">dcuser</tt> using SSH.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In the directory <tt class=\"input\"><b>/eniq/sw/bin/</b></tt>, execute\n" +
"the following command to list all properties that can be edited:<p>\n" +
"<br /><tt class=\"input\"><b>./change_alarm_property.bsh showAlarmConnProperties</b></tt>.</p>\n" +
"<p>\n" +
"The following is an example of list of properties with sample values:</p><pre class=\"prencd\">authmethod=secEnterprise\n" +
"outputPath=${PMDATA_DIR}/AlarmInterface_15min/in\n" +
"username=eniq_alarm\n" +
"cms=webportal\\:6400\n" +
"interfaceId=AlarmInterface_15min\n" +
"hostname=localhost\\:8443\n" +
"password=&lt;encrypted password&gt;\n" +
"protocol=https\n" +
"outputFilePrefix=alarm_</pre><p></p>\n" +
"<p>\n" +
"Use the following command to change the parameters which are used\n" +
"to make connection to the web portal from ENIQ server:<br /><tt class=\"input\"><b>./change_alarm_property.bsh -alarmconn &lt;PROPERTY_NAME&gt;&lt;PROPERTY_VALUE&gt;</b></tt></p>\n" +
"<p>\n" +
"where &lt;PROPERTY_NAME&gt; is the name of the parameter and &lt;PROPERTY_VALUE&gt;\n" +
"is the value of the parameter.</p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">In the directory <tt class=\"input\"><b>/eniq/sw/bin/</b></tt>, execute\n" +
"the following command:<br /><tt class=\"input\"><b>./change_alarm_property.bsh showAlarmParserProperties</b></tt><p>\n" +
"This command lists all properties that are edited. Use the command\n" +
"mentioned later in this section.</p>\n" +
"<p>\n" +
"The following is an example of the list of properties with sample\n" +
"values: </p><pre class=\"prencd\">outDir=${ETLDATA_DIR}/adapter_tmp/alarm\n" +
"maxFilesPerRun=0\n" +
"dublicateCheck=false\n" +
"thresholdMethod=more\n" +
"inDir=${PMDATA_DIR}/AlarmInterface_5min/in\n" +
"ProcessedFiles.fileNameFormat=\n" +
"AlarmTemplate=ericsson_template.vm\n" +
"minFileAge=0\n" +
"periodDuration=5\n" +
"baseDir=${PMDATA_DIR}\n" +
"useZip=false\n" +
"archivePeriod=\n" +
"loaderDir=${ETLDATA_DIR}\n" +
"tag_id=alarm\n" +
"doubleCheckAction=move\n" +
"dateformat=yyyy-MM-dd HH\\:mm\\:ss\n" +
"ProcessedFiles.processedDir=\n" +
"failedAction=move\n" +
"dirThreshold=0\n" +
"workers=1\n" +
"afterParseAction=delete\n" +
"</pre><p></p>\n" +
"<p>\n" +
"Use the following command:<br /><tt class=\"input\"><b>./change_alarm_property.bsh\n" +
"-alarmparser &lt;INTERFACE_NAME&gt; &lt;PROPERTY_NAME&gt; &lt;PROPERTY_VALUE&gt;</b></tt> to change parameters which are used to run Alarm Interfaces with\n" +
"certain parameter values where <tt class=\"file-path\">&lt;INTERFACE_NAME&gt;</tt> is name of interface, <tt class=\"file-path\">&lt;PROPERTY_NAME&gt;</tt> is the name of the parameter, and <tt class=\"file-path\">&lt;PROPERTY_VALUE&gt;</tt> is the value of the parameter.</p>\n" +
"</li></ol>\n" +
"\n"+
"</div>\n";

var C8_22=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.22 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ov7v\"></a><a name=\"CHAPTER8.22\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Deactivating SAEGW Interface</a></span></h2>\n" +
"\n" +
"<p>\n" +
"The network element name SAEGW is changed to CPG. As a result,\n" +
"the <tt class=\"file-path\">INTF_DC_E_REDB_SAEGW</tt> interface is removed\n" +
"and a new interface <tt class=\"file-path\">INTF_DC_E_REDB_CPG</tt> is\n" +
"created. Removing the interface is not supported, so the following\n" +
"steps are executed to deactivate the SAEGW interface.</p>\n" +
"\n" +
"<p>\n" +
"To deactivate the SAEGW interface:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ server as <tt class=\"file-path\">dcuser</tt>.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\"><tt class=\"input\"><b>cd /eniq/sw/installer</b></tt></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following command:<p>\n" +
"<tt class=\"input\"><b>./deactivate_interface &ndash;o <i class=\"var\">&lt;OSS&gt;</i> -i INTF_DC_E_REDB_SAEGW</b></tt>.</p>\n" +
"</li></ol>\n" +
"<p>\n" +
"This deactivates the SAEGW interface from the particular OSS.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C8_23=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">8.23 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_k1z3\"></a><a name=\"CHAPTER8.23\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Reset Password for RepDB Users</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Perform the following steps to reset RepDB users password (etlrep\n" +
"and dwhrep) to default.</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Log on to the ENIQ-S Standalone or Coordinator Server\n" +
"as <tt class=\"file-path\">root</tt> user.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute the following commands:<p>\n" +
"<tt class=\"input\"><b># cd /eniq/installation/core_install/bin/</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># bash update_passwords.bsh -u &lt;user&gt;</b></tt></p>\n" +
"<p>\n" +
"Where <strong class=\"MEDEMPH\">&lt;user&gt;</strong> is RepDB username for which password\n" +
"need to be updated that is etlrep or dwhrep.</p>\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Example:</strong> <tt class=\"input\"><b># bash update_passwords.bsh\n" +
"-u etlrep</b></tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Resetting the passwords to default is a security risk to\n" +
"the system. User can follow this procedure at their own risk.</dd></dl><br /></li></ol>\n" +
"\n" +
"\n"+
"</div>\n";

