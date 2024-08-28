var C27=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">27 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_i4zc\"></a><a name=\"CHAPTER27\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Customized Database Users</a></span></h1>\n" +
"\n" +
"<p>\n" +
"Database user hardening is required to provide enhanced security\n" +
"to the ENIQ-S database. The default <strong class=\"MEDEMPH\">ENIQ-S</strong> user IDs like\n" +
"dcpublic were used among multiple database logins, therefore tracking\n" +
"any individual user activity is difficult. With the database user\n" +
"hardening, <strong class=\"MEDEMPH\">ENIQ-S</strong> allows creation of customized database\n" +
"users for querying the database instead of using default <strong class=\"MEDEMPH\">ENIQ-S</strong> user IDs.</p>\n" +
"\n" +
"<p>\n" +
"ENIQ-S 19.4 enhances database security through features (for example:\n" +
"Password Expiry, Account lockout) that can be applied on customized\n" +
"database users. With this new enhancement, each customized database\n" +
"user can be provided individual login user ID.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The newly introduced security features are not applicable\n" +
"to the customized database users created before 19.4 upgrade. If these\n" +
"features are explicitly applied, then existing customized database\n" +
"users needs to be dropped and recreated on RHEL 19.4.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C27_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">27.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_n0ts\"></a><a name=\"CHAPTER27.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Create Customized Database User</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Customized database users are created with secure login policies.\n" +
"A customized database user is created with a new policy or is attached\n" +
"to an existing policy.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The maximum number of concurrent connections allowed for\n" +
"IQ is 200 and approximately 70-80 connections are required by ENIQ-S\n" +
"default users (dc, dba, dcbo, and dcpublic) for normal functioning\n" +
"(loading, aggregation, db queries etc). It is recommended that the\n" +
"number of concurrent customized database user connections must not\n" +
"exceed 120. If the user connections exceed 120, it impacts ENIQ-S\n" +
"functioning.</dd></dl><br />\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Password Strengthening:</strong> To enforce password strengthening,\n" +
"for customized database users, certain password rules must be followed\n" +
"while setting passwords for the first-time or modifying passwords.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>To enforce password strengthening, certain rules need to\n" +
"be followed at the time of password set or change. One rule is to\n" +
"include a special character. Only mentioned 15 special characters\n" +
"(# % ~ _ +@: ! * = { } , . /) are allowed from 3PP IQ and this restriction\n" +
"is not from ENIQ product.</dd></dl><br />\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Username:</strong> Every user is uniquely identified on the\n" +
"network by an username. The username must be a combination of Uppercase\n" +
"letter (A-Z), Lowercase letter (a-z), Digit (0-9), and certain special\n" +
"characters (@ # _). Any other characters apart from these are not\n" +
"allowed.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Password History:</strong> The password history feature avoids\n" +
"the reuse of the last five passwords set for the database users. The\n" +
"details of previously used passwords for the database users are present\n" +
"in the repository database. If the user tries to use any of the last\n" +
"used 5 passwords, it displays a warning message as it matches the\n" +
"entered password with the previous set of passwords stored in the\n" +
"repository database.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Login Policy:</strong></p>\n" +
"\n" +
"<p>\n" +
"A login policy defines the rules that IQ follows to establish user\n" +
"connections.</p>\n" +
"\n" +
"<p class=\"titled-block\">28.1.1 Login Policy Option\n" +
"</p><p>\n" +
"Each login policy is associated with a set of options called login\n" +
"policy options.</p>\n" +
"\n" +
"<p>\n" +
"The following policy options are applied while creating a login\n" +
"policy for customized database user:</p>\n" +
"\n" +
"<p class=\"titled-block\">28.1.1.1 Maximum Connections</p><p>\n" +
"Allows maximum number of concurrent connections for the customized\n" +
"database user. As a part of this login policy, the range of value\n" +
"set for maximum connections for each customized database user is 1\n" +
"to 10. This is done to control the maximum concurrent logins into\n" +
"the database and minimize the impact on ENIQ-S functionality.</p>\n" +
"\n" +
"<p class=\"titled-block\">28.1.1.2 Password Life Time</p><p>\n" +
"Specifies the number of days the password is valid. The user must\n" +
"reset their password before the expiry of the password. As part of\n" +
"login policy, the user has the flexibility to set the password for\n" +
"an unlimited period or from 15 to 3650 days.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Although the user has the flexibility to set the password\n" +
"life time to unlimited, it is recommended to set the password life\n" +
"time to a finite value.</dd></dl><br />\n" +
"<p class=\"titled-block\">28.1.1.3 Password Grace Time</p><p>\n" +
"Specifies the number of days before password expiration during\n" +
"which login is allowed. The users receive warnings during the password\n" +
"grace time period that the password is about to expire. As a part\n" +
"of login policy, the password grace time is set to 7 days for customized\n" +
"database users.</p>\n" +
"<p>\n" +
"The above two options help us achieve <strong class=\"MEDEMPH\">Password Aging</strong> functionality.</p>\n" +
"\n" +
"<p class=\"titled-block\">28.1.1.4 Maximum Failed Attempts</p><p>\n" +
"Specifies the maximum number of <tt class=\"file-path\">failed</tt> attempts since the last successful attempt to log into the user\n" +
"account before the account is locked. As part of login policy, the\n" +
"maximum <tt class=\"file-path\">failed</tt> attempts for a customized\n" +
"database user is set from 3 to 5 attempts.</p>\n" +
"\n" +
"<p class=\"titled-block\">28.1.1.5 Feature Selection</p><p>\n" +
"During creation, the user can limit/restrict the customized database\n" +
"user access to installed features on the ENIQ-S server.</p>\n" +
"<p>\n" +
"Feature selection is a mandatory step and the user must select\n" +
"at least one feature during creation.</p>\n" +
"\n" +
"<p>\n" +
"This section provides the steps to create customized query users\n" +
"for SAP IQ database.</p>\n" +
"\n" +
"<p>\n" +
"To create customized database user, run the following command as\n" +
"a <tt class=\"file-path\">root</tt> user on the following mentioned\n" +
"server types: </p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (standalone)</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator</li></ul>\n" +
"<p>\n" +
"# bash /eniq/admin/bin/create_query_user.bsh -n &lt;user name&gt;\n" +
"[-f ALL] [-l&lt;path_to_logfile&gt;].</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">-f gives access to the customized database user for\n" +
"all installed features.</li>\n" +
"<li class=\"UNORD\">If a customized database user is granted access to all\n" +
"ENIQ features, then the time taken for the execution of the script\n" +
"would be approximately 7 minutes.</li></ul></dd></dl><br />\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 4 &nbsp; Assigning Login Policy for the First Time (Password Life\n" +
"Time as unlimited)</i></p><pre class=\"prencd\"> {root} #: bash /eniq/admin/bin/create_query_user.bsh -n user1\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"2019-Nov-07_10.41.45: Checking for user: user1\n" +
"2019-Nov-07_10.41.46:User user1 does not exist.\n" +
"\n" +
"\n" +
"======================&lt; Password Change &gt;========================\n" +
"\n" +
"Password Policies:\n" +
"\n" +
"** Minimum password length 5 characters.\n" +
"** Maximum password length 30 characters.\n" +
"** All alphanumeric characters allowed.\n" +
"** The following special characters are allowed \n" +
"   # % ~ _ + @ : ! * = { } , . /\n" +
"** Must contain a uppercase letter, lowercase letter, number and \n" +
"special character\n" +
"** No spaces allowed.\n" +
"\n" +
"\n" +
"Enter the new password for user1 user:\n" +
"Please re-enter the new password to confirm the change:\n" +
"There is no query login policy for query users, Please answer \n" +
"the following questions to setup a default query login policy.\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"\n" +
"Enter the maximum number of connections to allow for \n" +
"query_user_login_policy_1 login policy : [Values: Integer from 1-10]\n" +
"1\n" +
"Do you want to set the Password Life Time as unlimited [Yy/Nn]?y\n" +
"\n" +
"Enter the maximum number of failed attempts to log into the \n" +
"database before the user account is locked for \n" +
"query_user_login_policy_1 login policy : \n" +
"[Values: Integer from 3-5]\n" +
"3\n" +
"2019-Nov-07_10.42.38: Setting the PASSWORD_LIFE_TIME to '0'\n" +
"2019-Nov-07_10.42.39: Setting the PASSWORD_GRACE_TIME to '0'\n" +
"\n" +
"Installed ENIQ features\n" +
"-----------------------\n" +
"Feature Number: 1 Feature Name: Ericsson SGSN PM Tech Pack\n" +
"\n" +
"Select the ENIQ Features to give User: user1 access to using the \n" +
"format [n,n,n-n,n...n]\n" +
"E.G. 1,2,3-8,....,N\n" +
"\n" +
"\n" +
"Select ENIQ Features to give User: user1 access to\n" +
"1\n" +
"2019-Nov-07_10.42.47: Generating the sql to create user1 query user\n" +
"2019-Nov-07_10.42.55: Executing the sql to create user1 query user.\n" +
"2019-Nov-07_10.43.16: Successfully created user user1 with \n" +
"login policy query_user_login_policy_1.\n" +
"2019-Nov-07_10.43.16: Successfully updated \n" +
"/eniq/sw/conf/queryUserConf.cfg with user1 details.\n" +
"\n" +
"2019-Nov-07_10.43.17: Successfully updated IQ_UserPwd_History_table\n" +
"\n" +
"</pre></div>\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 5 &nbsp; Assigning Login Policy (Password Life Time between 15 to\n" +
"3560)</i></p><pre class=\"prencd\">{root} #:bash /eniq/admin/bin/create_query_user.bsh -n user2\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"2019-Nov-07_10.43.53: Checking for user: user2\n" +
"2019-Nov-07_10.43.54:User user2 does not exist.\n" +
"\n" +
"\n" +
"======================&lt; Password Change &gt;======================\n" +
"\n" +
"Password Policies:\n" +
"\n" +
"** Minimum password length 5 characters.\n" +
"** Maximum password length 30 characters.\n" +
"** All alphanumeric characters allowed.\n" +
"** The following special characters are allowed \n" +
"   # % ~ _ + @ : ! * = { } , . /\n" +
"** Must contain a uppercase letter, lowercase letter, number \n" +
"and special character\n" +
"** No spaces allowed.\n" +
"\n" +
"\n" +
"Enter the new password for user2 user:\n" +
"The new password entered is not compliant with the Password Policies \n" +
"must contain a uppercase letter.\n" +
"\n" +
"Enter the new password for user2 user:\n" +
"Please re-enter the new password to confirm the change:\n" +
"\n" +
"Login policies for query users exist\n" +
"\n" +
"\n" +
"\n" +
"Login Policy Number: 1 Login Policy Name: query_user_login_policy_1\n" +
"The Max Number of Connection allow by query_user_login_policy_1 is \n" +
"'1'\n" +
"The Max Number of failed logins allow by query_user_login_policy_1 \n" +
"is '3'\n" +
"The password lifetime allow by query_user_login_policy_1 is \n" +
"'unlimited'\n" +
"\n" +
"\n" +
"Please enter the integer number of one of the existing login policies \n" +
"below to apply it or enter 'New' to create a new login policy.\n" +
"New\n" +
"Creating a new query login policy.\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"\n" +
"Enter the maximum number of connections to allow for \n" +
"query_user_login_policy_2 login policy : [Values: Integer from 1-10]\n" +
"1\n" +
"Do you want to set the Password Life Time as unlimited [Yy/Nn]?n\n" +
"\n" +
"Enter the maximum number of days before a password must be changed \n" +
"for query_user_login_policy_2 login policy : \n" +
"[Values: Integer from 15-3650]\n" +
"3650\n" +
"\n" +
"Enter the maximum number of failed attempts to log into the database \n" +
"before the user account is locked for \n" +
"query_user_login_policy_2 login policy : [Values: Integer from 3-5]\n" +
"5\n" +
"\n" +
"Installed ENIQ features\n" +
"-----------------------\n" +
"Feature Number: 1 Feature Name: Ericsson SGSN PM Tech Pack\n" +
"\n" +
"Select the ENIQ Features to give User: user2 access to using the \n" +
"format [n,n,n-n,n...n]\n" +
"E.G. 1,2,3-8,....,N\n" +
"\n" +
"\n" +
"Select ENIQ Features to give User: user2 access to\n" +
"1\n" +
"2019-Nov-07_10.44.57: Generating the sql to create user2 query user\n" +
"2019-Nov-07_10.45.04: Executing the sql to create user2 query user.\n" +
"2019-Nov-07_10.45.23: Successfully created user user2 with \n" +
"login policy query_user_login_policy_2.\n" +
"2019-Nov-07_10.45.23: Successfully updated \n" +
"/eniq/sw/conf/queryUserConf.cfg with user2 details.\n" +
"\n" +
"2019-Nov-07_10.45.24: Successfully updated IQ_UserPwd_History_table\n" +
"</pre></div>\n" +
"<p>\n" +
"For a customized database user having access to one or more features,\n" +
"views for the same can be accessed by preceding the respective view\n" +
"name with dcpublic. </p>\n" +
"\n" +
"<p>\n" +
"For example,</p>\n" +
"\n" +
"<p><tt class=\"input\"><b>{dcuser}#:dbisql -nogui -c \"eng=dwhdb;links=tcpip{host=dwhdb;port=2640;uid=&lt;USER_NAME&gt;;pwd=&lt;PASSWORD&gt;\"\n" +
"\"select * from dcpublic.&lt;TABLE_NAME&gt;</b></tt></p>\n" +
"<p>\n" +
"Where,</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>&lt;USER_NAME&gt;</b></tt> is user name of customized database\n" +
"user.</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>&lt;PASSWORD&gt;</b></tt> is password of customized database\n" +
"user.</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>&lt;TABLE_NAME&gt;</b></tt> is Table name to be accessed.</p>\n" +
"\n" +
"<p>\n" +
"All customized database users have access only to <tt class=\"file-path\">dcpublic</tt> views. If there is any attempt to access a\n" +
"view by a dc user, an error occurs. </p>\n" +
"\n" +
"<p>\n" +
"For example,</p>\n" +
"\n" +
"<p><tt class=\"input\"><b>#: dbisql -nogui -onerror exit \"eng=dwhdb;links=tcpip{host=dwhdb;port=2640};uid=eniq_custom_1;pwd=Eniq@Custom123\"\n" +
"\"select * from DC.DC_E_MGW_SCTP_RAW where 1=2\"</b></tt></p>\n" +
"<p><tt class=\"output\">Could not execute statement. Permission denied: you do not\n" +
"have permission to select from \"DC_E_MGW_SCTP_RAW\" SQLCODE=-121, ODBC\n" +
"3 State=\"42000\"</tt></p>\n" +
"\n"+
"</div>\n";

var C27_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">27.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_nwky\"></a><a name=\"CHAPTER27.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Internal Configuration File for\n" +
"Customized Database User</a></span></h2>\n" +
"\n" +
"<p>\n" +
"queryUserConf.cfg is created after running create_query_user.bsh.This\n" +
"is an internal file and used for displaying the customer related info\n" +
"on Admin GUI.  </p>\n" +
"\n" +
"<p>\n" +
"It contains user information like User_Name::Feature_Name::Login_Policy_Name::Max_Connections::Password_Creation_Date::Password_Life_Time::Password_Expiration_Date::Password_Grace_Time::Max_Login_Attempts.</p>\n" +
"\n" +
"<p>\n" +
"A <tt class=\"file-path\">cron</tt> has been introduced to autosync\n" +
"the user information from database to queryUserConf.cfg every 4 hrs.\n" +
" </p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If an entry is manually deleted from the queryUserConf.cfg,\n" +
"the <tt class=\"file-path\">cron</tt> autosyncs the file with the users\n" +
"in the database. The feature column is kept NULL in the latter case\n" +
"which will be later updated whenever feature access is granted to\n" +
"or revoked from the user.</dd></dl><br />\n" +
"<p>\n" +
"To display the information of queryUserConf.cfg, run the following\n" +
"command: </p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>{root} #: cd /eniq/sw/conf/ </b></tt> </p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>{root} #: cat queryUserConf.cfg</b></tt>  </p>\n" +
"\n" +
"<p>\n" +
"The logfile location for the cronfile execution is /eniq/log/sw_log/iq/queryUserConf_db_sync/queryUserConf_db_sync_$($DATE\n" +
"'+%Y-%b-%d_%H.%M.%S').log</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C27_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">27.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_4tcz\"></a><a name=\"CHAPTER27.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Modify Customized Database User</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Customized database users created can be modified depending upon\n" +
"the requirement. This section provides a utility to manually lock\n" +
"or unlock account, update policies, change password, drop, and grant\n" +
"or revoke access to the features for customized database users.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Apart from customized database user, dcbo and dcpublic has\n" +
"the permission to security features Status, Unlock, and Change Login\n" +
"Policy.</dd></dl><br />\n" +
"<p>\n" +
"To modify customized database user, run the following command as\n" +
"a <tt class=\"file-path\">root</tt> user on the mentioned server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (standalone)</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator</li></ul>\n" +
"<p>\n" +
"# bash /eniq/admin/bin/admin_query_user.bsh -n &lt;user name|All&gt;\n" +
"-a &lt;Status|ChangePWD|Lock|Unlock|Grant|CLP|Drop&gt; [-l&lt;path_to_logfile&gt;].</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>All is applicable to Status, Lock and Unlock action types.</dd></dl><br />\n" +
"\n" +
"<a name=\"TABLE23\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 23 &nbsp;&nbsp; Description of Options for Customized Database Users</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Options</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Description</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Status</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Displays the user account details.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>ChangePWD(Change Password)</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>User can change existing password using this option. If\n" +
"the password expires, the user must change the password using this\n" +
"option.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Lock</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>This option is used to lock the customized database user\n" +
"from accessing the database.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Unlock</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>This option is used to unlock the customized database user\n" +
"account.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Grant</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>It grants user access to features installed on the server.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Revoke</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>It revokes user access to features assigned to the user.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>CLP(Change Login Policy) </p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>It is used to change the login policy of the existing user.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>Drop</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>It is used to drop or remove the user from the database.</p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C27_3_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">27.3.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_wncg\"></a><a name=\"CHAPTER27.3.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Change Login Policy</a></span></h3>\n" +
"\n" +
"<p>\n" +
"This feature changes the login policies applied to the customized\n" +
"database user and standard users (dcbo and dcpublic). The user selects\n" +
"one of the existing login policy or creates a new login policy.</p>\n" +
"\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 6 &nbsp; Changing Login Policy to Customized Database User</i></p><pre class=\"prencd\">{root} #: bash /eniq/admin/bin/admin_query_user.bsh -n user101 -a CLP \n" +
"Sourcing SYBASE.sh\n" +
"Sourcing SYBASE.sh\n" +
"Enter the current password for DBA user :\n" +
"2019-Aug-02_10.24.43: Checking for user: user101\n" +
"2019-Aug-02_10.24.44: User user101 does exist.\n" +
"\n" +
"Login policies for query users exist\n" +
"\n" +
"\n" +
"\n" +
"Login Policy Number:1  Login Policy Name: query_user_login_policy_1\n" +
" The Max Number of Connection allow by query_user_login_policy_1 is '2'\n" +
" The Max Number of failed logins allow by query_user_login_policy_1 is '1'\n" +
" The password lifetime  allow by query_user_login_policy_1 is '9'\n" +
"\n" +
"\n" +
"Login Policy Number:2 Login Policy Name: query_user_login_policy_2\n" +
" The Max Number of Connection allow by query_user_login_policy_2 is '5'\n" +
" The Max Number of failed logins  allow by query_user_login_policy_2 is '5'\n" +
" The password lifetime  allow by query_user_login_policy_2 is '8'\n" +
"\n" +
"\n" +
" Please enter the integer number of one of the existing login policies below \n" +
"to apply it or enter 'New' to create a new login policy.\n" +
"2\n" +
"2019-Aug-02_10.25.24: Generating the sql to create user101 query user\n" +
"2019-Aug-02_10.25.28: Successfully update the \n" +
"/eniq/sw/conf/queryUserConf.cfg file.\n" +
"2019-Aug-02_10.25.28: Successfully changed user user101 to  \n" +
"query_user_login_policy_2 login policy.\n" +
"\n" +
"</pre></div>\n" +
"\n"+
"</div>\n";

var C27_3_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">27.3.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_e32i\"></a><a name=\"CHAPTER27.3.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Status</a></span></h3>\n" +
"\n" +
"<p>\n" +
"This feature displays details of a customized database user and\n" +
"standard users (dcbo and dcpublic) present in the database. The following\n" +
"information is displayed to the customized database user:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">User name</li>\n" +
"<li class=\"UNORD\">Login Policy assigned</li>\n" +
"<li class=\"UNORD\">Lock/ Unlock Status</li>\n" +
"<li class=\"UNORD\">Login Policy options</li>\n" +
"<li class=\"UNORD\">List of features accessible to the Customized database\n" +
"user</li></ul>\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 7 &nbsp; Displaying Status for Customized Database User</i></p><pre class=\"prencd\">{root} #: bash /eniq/admin/bin/admin_query_user.bsh -n user100 -a Status\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"2019-Aug-01_15.16.05: Checking for user: user100\n" +
"2019-Aug-01_15.16.06: User user100 does exist.\n" +
"User name is user100\n" +
"Login policy name is query_user_login_policy_1\n" +
"The lock status for the user is Unlocked.\n" +
"Login Policy options for user100\n" +
"||=================||===========================||=================\n" +
"||locked           ||max_failed_login_attempts  ||password_life_time \n" +
"||0                ||1                          ||9\n" +
"||===============================||=============================||\n" +
"||password_grace_time            ||max_connections\n" +
"||7                              ||2\n" +
"\n" +
"Features that the user user100 have access to\n" +
"||==================================================================||\n" +
"user100::Ericsson SGSN PM Tech Pack::query_user_login_policy_1::2::\n" +
"2019-08-01::9::2019-08-10::7::1\n" +
"||==================================================================||\n" +
"</pre></div>\n" +
"\n"+
"</div>\n";

var C27_3_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">27.3.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_j802\"></a><a name=\"CHAPTER27.3.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Change Customized Database User\n" +
"Password</a></span></h3>\n" +
"\n" +
"<p>\n" +
"This feature allows customized database users to change the existing\n" +
"password. Customized database user must change the password when the\n" +
"existing password expires.</p>\n" +
"\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 8 &nbsp; Changing Password for Customized Database User</i></p><pre class=\"prencd\">{root} #: bash /eniq/admin/bin/admin_query_user.bsh -n user1 -a ChangePWD\n" +
"Sourcing SYBASE.sh\n" +
"2019-Nov-07_14.12.16: Checking for user: user1\n" +
"2019-Nov-07_14.12.17: User user1 exists\n" +
"\n" +
"Enter the current password for user user1 to confirm password change: \n" +
"Password Policies:\n" +
"\n" +
"** Minimum password length 5 characters.\n" +
"** Maximum password length 30 characters.\n" +
"** All alphanumeric characters allowed.\n" +
"** The following special characters are allowed # % ~ _ + @ : ! * = { } , . /\n" +
"** Must contain a uppercase letter, lowercase letter, number \n" +
"and special character\n" +
"** No spaces allowed.\n" +
"\n" +
"\n" +
"Enter the new password for user1 user:\n" +
"Please re-enter the new password to confirm the change:\n" +
"2019-Nov-07_14.12.32: The password for user user1 was \n" +
"successfully changed.\n" +
"2019-Nov-07_14.12.34: Successfully updated the \n" +
"/eniq/sw/conf/queryUserConf.cfg file.\n" +
"1 row(s) affected\n" +
"\n" +
"2019-Nov-07_14.12.35: Successfully deleted oldest password entry \n" +
"from IQ_UserPwd_History_table\n" +
"2019-Nov-07_14.12.36: Successfully updated IQ_UserPwd_History_table\n" +
"</pre></div>\n" +
"\n"+
"</div>\n";

var C27_3_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">27.3.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_1f4z\"></a><a name=\"CHAPTER27.3.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Account Lock</a></span></h3>\n" +
"\n" +
"<p>\n" +
"If the password is not changed during expiry period or the customized\n" +
"database user exceeds maximum number of incorrect attempts (range\n" +
"of maximum value is 3 to 5), the user account gets locked. This feature\n" +
"allows the user to lock the customized database user account manually\n" +
"in the database. </p>\n" +
"\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 9 &nbsp; Locking Customized Database User</i></p><pre class=\"prencd\">{root} #: bash /eniq/admin/bin/admin_query_user.bsh -n user101 -a Lock\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"2019-Aug-02_09.21.04: Checking for user: user101\n" +
"2019-Aug-02_09.21.05: User user101 does exist.\n" +
"2019-Aug-02_09.21.06: The user user101 was successfully Locked.\n" +
"</pre></div>\n" +
"\n"+
"</div>\n";

var C27_3_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">27.3.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_faz8\"></a><a name=\"CHAPTER27.3.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Account Unlock</a></span></h3>\n" +
"\n" +
"<p>\n" +
"This feature allows the user to unlock the customized database\n" +
"user and standard users (dcbo and dcpublic) manually from the database.\n" +
"The account can be unlocked only after customized database user exceeds\n" +
"the maximum number of <tt class=\"file-path\">failed</tt> login attempts\n" +
"(range of maximum value is 3 to 5).</p>\n" +
"\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 10 &nbsp; Unlocking Customized Database User</i></p><pre class=\"prencd\">{root} #: bash /eniq/admin/bin/admin_query_user.bsh -n user101 -a Unlock\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"2019-Aug-02_09.21.32: Checking for user: user101\n" +
"2019-Aug-02_09.21.33: User user101 does exist.\n" +
"2019-Aug-02_09.21.34: The user user101 was successfully Unlocked.\n" +
"\n" +
"</pre></div>\n" +
"\n"+
"</div>\n";

var C27_3_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">27.3.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ru0s\"></a><a name=\"CHAPTER27.3.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Feature Selectivity</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The customized database users are given full or limited access\n" +
"to features that are installed. Feature selectivity is one of the\n" +
"options to be selected while creating customized database users.</p>\n" +
"\n" +
"<p>\n" +
"If a feature is not selected during user creation, then there is\n" +
"a provision to modify it later through the following options by granting\n" +
"or revoking the feature access.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C27_3_6_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">27.3.6.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_9u1p\"></a><a name=\"CHAPTER27.3.6.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Grant</a></span></h4>\n" +
"\n" +
"<p>\n" +
"This feature allows the customized database user access to grant\n" +
"features that are installed on the ENIQ-S server.</p>\n" +
"\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 11 &nbsp; Granting Feature of Customized Database User </i></p><pre class=\"prencd\">{root} #: bash /eniq/admin/bin/admin_query_user.bsh -n user101 -a Grant\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"2019-Aug-02_09.22.20: Checking for user: user101\n" +
"2019-Aug-02_09.22.21: User user101 does exist.\n" +
"\n" +
"Installed ENIQ features the user does not already have access to:\n" +
"-----------------------\n" +
"Feature Number: 2             Feature Name: Ericsson GGSN PM Tech Pack\n" +
"Feature Number: 3             Feature Name: Ericsson GSN PM Tech Pack\n" +
"\n" +
"Select the ENIQ Features to give User: user101 access to using the format \n" +
"[n,n,n-n,n...n]\n" +
"        E.G. 1,2,3-8,....,N\n" +
"\n" +
"Select ENIQ Features to give User: user101 access to\n" +
"2\n" +
"2019-Aug-02_09.22.45: Generating the sql to add features selectivity to \n" +
"user101 query user\n" +
"2019-Aug-02_09.22.47: Executing the sql to add features selectivity to \n" +
"user101 query user.\n" +
"2019-Aug-02_09.22.50: Successfully add features selectivity to user user101.\n" +
"</pre></div>\n" +
"\n"+
"</div>\n";

var C27_3_6_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">27.3.6.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_rgst\"></a><a name=\"CHAPTER27.3.6.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Revoke</a></span></h4>\n" +
"\n" +
"<p>\n" +
"This feature allows the user to revoke access to features that\n" +
"are assigned to the customized database user.</p>\n" +
"\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 12 &nbsp; Revoking Feature to Customized Database User </i></p><pre class=\"prencd\">{root} #: bash /eniq/admin/bin/admin_query_user.bsh -n user101 -a Revoke\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"2019-Aug-02_10.10.36: Checking for user: user101\n" +
"2019-Aug-02_10.10.36: User user101 does exist.\n" +
"\n" +
"Installed ENIQ features the user has access to:\n" +
"-----------------------\n" +
"Feature Number: 1             Feature Name: Ericsson SGSN PM Tech Pack\n" +
"Feature Number: 2             Feature Name: Ericsson GGSN PM Tech Pack\n" +
"\n" +
"Select the ENIQ Features to revoke feature access of User:user101 using the formats \n" +
"[n,n,n,n...n] OR [n,n-n,n]\n" +
"        E.G. 1,2,3-8,....,N\n" +
"\n" +
"Select ENIQ Features to revoke the feature access of User: user101\n" +
"2\n" +
"2019-Aug-02_10.11.07: Generating the sql to remove features selectivity \n" +
"from user101 query user\n" +
"2019-Aug-02_10.11.08: Executing the sql to revoke features selectivity \n" +
"to user101 query user.\n" +
"2019-Aug-02_10.11.11: Successfully revoked features selectivity to user \n" +
"user101.\n" +
"2019-Aug-02_10.11.11: The user user101 entries  was successfully update \n" +
"in /eniq/sw/conf/queryUserConf.cfg.\n" +
"</pre></div>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The admin_query_user.bsh script execution time depends on\n" +
"the number of users and feature access assigned to each user.</dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

var C27_3_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">27.3.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_qpvf\"></a><a name=\"CHAPTER27.3.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Drop</a></span></h3>\n" +
"\n" +
"<p>\n" +
"This feature allows the customized database users to drop from\n" +
"the database.</p>\n" +
"\n" +
"<div class=\"example\" style=\"margin-top: 12pt\"><p><i>Example 13 &nbsp; Dropping Customized Database User</i></p><pre class=\"prencd\">{root} #: bash /eniq/admin/bin/admin_query_user.bsh -n user101 -a Drop\n" +
"Sourcing SYBASE.sh\n" +
"\n" +
"Enter the current password for DBA user :\n" +
"2019-Aug-02_10.27.10: Checking for user: user101\n" +
"2019-Aug-02_10.27.11: User user101 does exist.\n" +
"2019-Aug-02_10.27.12: The user user101 was successfully Dropped \n" +
"from the database.\n" +
"1 row(s) deleted\n" +
"\n" +
"2019-Aug-02_10.27.12: Successfully removed 'user101' details from \n" +
"IQ_UserPwd_History table.\n" +
"2019-Aug-02_10.27.12: The user user101 entries was successfully removed \n" +
"from /eniq/sw/conf/queryUserConf.cfg.\n" +
"</pre></div>\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

