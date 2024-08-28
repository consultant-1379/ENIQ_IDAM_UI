var C23=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">23 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_mgug\"></a><a name=\"CHAPTER23\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Counting Number of Loader Sets</a></span></h1>\n" +
"\n" +
"<p>\n" +
"Number of Loader sets can be calculated, using the below query. </p>\n" +
"\n" +
"<p>\n" +
"Log on to the CO blade (in case of Multi Blade) as <tt class=\"file-path\">dcuser</tt>.</p>\n" +
"\n" +
"<p>\n" +
"<strong class=\"MEDEMPH\">Query 1:</strong></p>\n" +
"\n" +
"<p>\n" +
"Execute the following query to get the number of Loader sets executed\n" +
"per date:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">All Loader sets:<p>\n" +
"<tt class=\"input\"><b># dbisql -c \"uid=dc;eng=dwhdb\" -host dwhdb -port 2640 -nogui\n" +
"-onerror exit \"select date_id,count(distinct typename) as Loader_count\n" +
"from dc.LOG_SESSION_LOADER group by date_id order by date_id\"</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Excluding the BULK_CM  to check Loader sets dimensioning:<p>\n" +
"<tt class=\"input\"><b># dbisql -c \"uid=dc;eng=dwhdb\" -host dwhdb -port 2640 -nogui\n" +
"-onerror exit \"select date_id,count(distinct typename) as Loader_count\n" +
"from dc.LOG_SESSION_LOADER where typename not like 'DC_E_BULK_CM%'\n" +
"group by date_id order by date_id\"</b></tt></p>\n" +
"</li></ol>\n" +
"<p>\n" +
" <strong class=\"MEDEMPH\">Query 2:</strong></p>\n" +
"\n" +
"<p>\n" +
"Execute the following query to get the number of Loader sets successfully\n" +
"executed in last 24Hrs from the max date loaded in Log_session_loader\n" +
"table:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">All Loader sets:<p>\n" +
"<tt class=\"input\"><b>#dbisql -c \"uid=dc;eng=dwhdb\" -host dwhdb -port 2640 -nogui\n" +
"-onerror exit \"BEGIN DECLARE @Maxdt datetime; SET @Maxdt=(select MAX(datatime)\n" +
"FROM dc.LOG_SESSION_LOADER); SELECT MIN(datatime) AS start_time, @Maxdt\n" +
"AS end_time, COUNT(DISTINCT typename) AS Loader_count FROM dc.LOG_SESSION_LOADER\n" +
"WHERE datatime &gt;= DATEADD(hh,-24,@Maxdt);END\"</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Excluding the BULK_CM to check Loader sets dimensioning:<p>\n" +
"<tt class=\"input\"><b>#dbisql -c \"uid=dc;eng=dwhdb\" -host dwhdb -port 2640 -nogui\n" +
"-onerror exit \"BEGIN DECLARE @Maxdt datetime; SET @Maxdt= (select\n" +
"MAX(datatime) FROM dc.LOG_SESSION_LOADER); SELECT MIN(datatime) AS\n" +
"start_time, @Maxdt AS end_time, COUNT(DISTINCT typename) AS Loader_count\n" +
"FROM dc.LOG_SESSION_LOADER WHERE typename not like 'DC_E_BULK_CM%'\n" +
" and datatime &gt;= DATEADD(hh,-24,@Maxdt);END\"</b></tt></p>\n" +
"</li></ol>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Query execution time varies based on load on the server.</dd></dl><br />\n" +
"\n"+
"</div>\n";

