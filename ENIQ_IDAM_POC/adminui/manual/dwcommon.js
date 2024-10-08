// -----------------------------------------------------------------------------
// * * *  DWcommon - all DWAXE common JavaScript functions  * * *
//
// Copyright Ericsson AB 2011-2013. All rights reserved.
//
// This file is included in and used in ALEX, DHS and X2HTML output formats.
// Function ht() contains free software from sixrevisions.com
//
//
// HISTORY
// -------
// 2011-10-12  xantsib   Review support added, show next/prev changes (R32).
// 2012-02-09  xantsib   Fix for both navigation buttons sometimes inactive.
// 2013-03-14  Saikumar  Functions for tooltip and collapsible (+/-) TOC added.
// 2013-11-27  XALOPEP Added new functions for Doclist filtering.
// 2015-01-07  Suresh    Changes for Document Content Filtering
// 2015-03-12  Suresh    Changes in getCookie to read the cookie value till ;
// 2015-10-13  XBIJPAN   Categorization support for Revamp MOM static Page
// 2015-01-21  xsugant   Support for table sorting XSEIF documents
// 2016-11-11  xshkabd   Support for tc.gif image for yang2html in tooltips
// 2016-02-23  xmamnir   Minor fix for col number calculation in Table sorting JS
// 2016-04-25  xmamnir   Support for Expandability/collapsibility for DITA topics based on the output class
// 2017-09-26  xmamnir   Added JS function for handling link to collapsed content within a DITA Document
// 2017-10-25  xkolnav   Added function to support tooltip for term in DITA docs
// 2017-12-20  xmamnir   Added JS for supporting lighbox for scaled bitmap images and SVG Diagrams
// 2018-03-10  xmamnir   Fixed max-width:100% regression in Lightbox Image
// 2018-05-25  xmamnir   Customized Lightbox JS for SVG images included using <object> tag
//                       Added JS to show/hide Legal information
// 2018-08-10  xmamnir   Support for SVG interactive features
//             zhshama
// 2018-08-10  xkolnav   Support for filtering in pm counters table and added tooltips 
//             
// -----------------------------------------------------------------------------

var footer1;
var ttO;
function fadein()
{
  footer1=document.getElementById('footer');
  if(footer1){
  footer1.style.opacity=1;
  footer1.style.filter = 'alpha(opacity=100)';}
}
function fadeout()
{
  footer1=document.getElementById('footer');
  if(footer1){
  footer1.style.opacity=0.1;
  footer1.style.filter = 'alpha(opacity=10)';}
}
function footerfun(){
  var hasVScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight;
  if(!hasVScroll)
  {
    footer1=document.getElementById('footer');
    if(footer1)
      footer1.style.display='none';
  }else{
    setTimeout('fadeout()', 4900);
  }
}

setTimeout('footerfun()', 100);

function getCount(countVal)
{
  c_hits = countVal;
}
var c_count = 0;
var c_curr = "";
var c_id = "c_1";

function showNextChange() {
  if(c_count != c_hits)
  document.getElementById(c_id).style["backgroundColor"] = "";
  if(c_count < (c_hits - 1)) {
    c_id = "c_" + ++c_count;
    document.getElementById(c_id).style["backgroundColor"] = "#ffffbf";
    document.getElementById(c_id).scrollIntoView(true);
    document.getElementById("c_prev_but").style.visibility = "visible";
    document.getElementById("c_prev_but").style.opacity = 1;
    document.getElementById("c_prev_but").style.filter = 'alpha(opacity=100)';
    document.getElementById('c_prev_but').disabled = false;
  }
  else if(c_count == (c_hits - 1)) {
      c_id = "c_" + ++c_count;
    document.getElementById(c_id).style["backgroundColor"] = "#ffffbf";
    document.getElementById(c_id).scrollIntoView(true);
    document.getElementById("c_next_but").style.visibility = "visible";
    document.getElementById("c_next_but").style.opacity = 0.2;
    document.getElementById("c_next_but").style.filter = 'alpha(opacity=20)';
    document.getElementById('c_next_but').disabled = true;
    document.getElementById("c_prev_but").style.visibility = "visible";
    document.getElementById("c_prev_but").style.opacity = 1;
    document.getElementById("c_prev_but").style.filter = 'alpha(opacity=100)';
    document.getElementById('c_prev_but').disabled = false;
  }
  else {
    c_count = c_hits;
    document.getElementById("c_next_but").style.visibility = "visible";
    document.getElementById("c_next_but").style.opacity = 0.2;
    document.getElementById("c_next_but").style.filter = 'alpha(opacity=20)';
    document.getElementById('c_next_but').disabled = true;
    document.getElementById("c_prev_but").style.visibility = "visible";
    document.getElementById("c_prev_but").style.opacity = 1;
    document.getElementById("c_prev_but").style.filter = 'alpha(opacity=100)';
    document.getElementById('c_prev_but').disabled = false;
  }
  if(c_count > c_hits)
    c_curr = c_hits;
  else
    c_curr = c_count + "/" + c_hits;
  document.getElementById("c_prev_but").title = "Show previous change  |  " + c_curr;
  document.getElementById("c_next_but").title = "Show next change  |  " + c_curr;
}

function showPrevChange() {
  document.getElementById(c_id).style["backgroundColor"] = "";
  if(c_count > 2) {
    c_id = "c_" + --c_count;
    document.getElementById(c_id).style["backgroundColor"] = "#ffffbf";
    document.getElementById(c_id).scrollIntoView(true);
    document.getElementById("c_next_but").style.visibility = "visible";
    document.getElementById("c_next_but").style.opacity = 1;
    document.getElementById("c_next_but").style.filter = 'alpha(opacity=100)';
    document.getElementById('c_next_but').disabled = false;
  } else if(c_count == 2) {
    c_id = "c_" + --c_count;
    document.getElementById(c_id).style["backgroundColor"] = "#ffffbf";
    document.getElementById(c_id).scrollIntoView(true);
    document.getElementById("c_prev_but").style.visibility = "visible";
    document.getElementById("c_prev_but").style.opacity = 0.2;
    document.getElementById("c_prev_but").style.filter = 'alpha(opacity=20)';
    document.getElementById('c_prev_but').disabled = true;
    document.getElementById("c_next_but").style.visibility = "visible";
    document.getElementById("c_next_but").style.opacity = 1;
    document.getElementById("c_next_but").style.filter = 'alpha(opacity=100)';
    document.getElementById('c_next_but').disabled = false;
  } else {
    c_count = 0;
    document.getElementById("c_prev_but").style.visibility = "visible";
    document.getElementById("c_prev_but").style.opacity = 0.2;
    document.getElementById("c_prev_but").style.filter = 'alpha(opacity=20)';
    document.getElementById('c_prev_but').disabled = true;
    document.getElementById("c_next_but").style.visibility = "visible";
    document.getElementById("c_next_but").style.opacity = 1;
    document.getElementById("c_next_but").style.filter = 'alpha(opacity=100)';
    document.getElementById('c_next_but').disabled = false;
  }
  if(c_count < 1)
    c_curr = c_hits;
  else
    c_curr = c_count + "/" + c_hits;
  document.getElementById("c_prev_but").title = "Show previous change  |  " + c_curr;
  document.getElementById("c_next_but").title = "Show next change  |  " + c_curr;
}

function hideChange(prlcpy) {
  location.href = prlcpy;
}
function showChange(prlcpy) {
  location.href = prlcpy;
}

//Track Change implementation for DITA documents
var d_curr = "";
var change_no = 0;
var prev = -1;
var next = 0;
function showNext_Change() {    
var class_name= document.querySelectorAll('.atictadd, .atictdel');
var count = class_name.length;
var total_hits=count;
class_name[change_no].className += " hcolor";
class_name[change_no].style["backgroundColor"] = "#FF8C00";
document.getElementById('c_prev_but').disabled = false;

 if(prev !== -1){
     prev = change_no - 1;
     class_name[prev].style["backgroundColor"] = "";
     class_name[prev].className = class_name[prev].className.replace("hcolor",""); 
 }
 else {
     prev = 0;
 }
   class_name[change_no].scrollIntoView();
   change_no++;
  
if(change_no == count) {
    document.getElementById("c_next_but").style.opacity = 0.2;    
    document.getElementById('c_next_but').disabled = true;
    document.getElementById('c_prev_but').disabled = false;
}

if(change_no == 0 ) {
    document.getElementById("c_prev_but").style.opacity = 0.2;
}
else {
document.getElementById("c_prev_but").style.opacity = 1;
}
  if(change_no > (total_hits-1))
    d_curr = total_hits;

  else
    
  d_curr = change_no + "/" + total_hits;
  document.getElementById("c_prev_but").title = "Show previous change  |  " + d_curr;
  document.getElementById("c_next_but").title = "Show next change  |  " + d_curr;
}

function showPrev_Change() {    

var class_name= document.querySelectorAll('.atictadd, .atictdel');
var count = class_name.length;
var total_hits=count;

if(change_no == 1) {
    document.getElementById("c_prev_but").style.opacity = 0.2;    
    document.getElementById('c_prev_but').disabled = true;
    document.getElementById('c_next_but').disabled = false;
}
else{

class_name[change_no-2].className += " hcolor";
class_name[change_no-2].style["backgroundColor"] = "#FF8C00";
document.getElementById("c_next_but").style.opacity = 1;
document.getElementById('c_next_but').disabled = false;
}
 if(next !== count){
     next = change_no-1;
     class_name[next].style["backgroundColor"] = "";
    class_name[next].className = class_name[next].className.replace("hcolor","");
     }
 else {
     next = count;
 }
   class_name[change_no-2].scrollIntoView();
   change_no--;
  
if(change_no == 1 ) {
    document.getElementById("c_prev_but").style.opacity = 0.2;
    document.getElementById("c_prev_but").disabled = true;
}
else {
document.getElementById("c_prev_but").style.opacity = 1;
}

  if(change_no < 1){
    d_curr = 0;
  }
  else{    
   d_curr = change_no + "/" + total_hits;
  
  document.getElementById("c_prev_but").title = "Show previous change  |  " + d_curr;
  document.getElementById("c_next_but").title = "Show next change  |  " + d_curr;
  }

} 
 
function markHighlight() {
var j=0;
var hname = document.getElementsByClassName("highlight");
var hcount = hname.length;
var identity= document.getElementById("click_b").value;
    
    while (j<hcount){
        
      if (identity=="Hide"){
         document.getElementsByClassName('highlight')[j].style.backgroundColor="#FFFF66";
        j++;
        }
      else if (identity=="Show Changes"){
          document.getElementsByClassName('highlight')[j].style.backgroundColor    ="#ffffff";
        j++;
    }
  }
} 
 
function markChange() {
var j=0
var caname = document.getElementsByClassName("atictadd");
var acount = caname.length;
var identity= document.getElementById("click_b").value;
    
    while (j<acount){
        
      if (identity=="Hide"){
           var tes = document.getElementById("click_b");
           tes.style.width="48px";
           document.getElementById("prev_td").style.display='inline';
           document.getElementById("next_td").style.display='inline';
           document.getElementsByClassName('atictadd')[j].style.color="#008000";
           j++;
        }
      else if (identity=="Show Changes"){
           var tes = document.getElementById("click_b");
           tes.style.width="116px";
           document.getElementById("prev_td").style.display='none';
           document.getElementById("next_td").style.display='none';
           document.getElementsByClassName('atictadd')[j].style.color="#000000";
           document.getElementsByClassName('atictadd')[j].style.backgroundColor="#ffffff";
           j++;
  }
  }
}

function showDITAChange() {
  var identity= document.getElementById("click_b").value;
  var class_name= document.getElementsByClassName("atictdel");
  var count = class_name.length;
  var i=0
  if ( count == 0 ){
    class_name = document.getElementsByClassName("atictadd");
    count = class_name.length;
    if (identity=="Show Changes"){
        document.getElementById("c_prev_but").style.visibility="visible";
        document.getElementById("c_next_but").style.visibility="visible";    
        document.getElementById("click_b").title="Show document with all changes accepted"
        document.getElementById("click_b").value="Hide";
        // document.getElementById('c_next_but').disabled = true;
        // document.getElementById('c_prev_but').disabled = true;
        document.getElementsByClassName("atictadd")[0].style.color="#008000";
        }
    else if (identity=="Hide"){
        document.getElementById("c_prev_but").style.visibility="hidden";
        document.getElementById("c_next_but").style.visibility="hidden";    
        document.getElementById("click_b").title="Show document with changes highlighted"
        document.getElementById("click_b").value="Show Changes";
        document.getElementsByClassName("atictadd")[0].style.color="#000000";
    }
  }  
else{    
   while (i<count){
        if (identity=="Show Changes"){
        document.getElementById("c_prev_but").style.visibility="visible";
        document.getElementById("c_next_but").style.visibility="visible";    
        document.getElementById("click_b").title="Show document with all changes accepted"
        document.getElementById("click_b").value="Hide";
        
        class_name[i].style.visibility="visible";
        class_name[i].style.display="inline";
            
        i++;
        }
        else if (identity=="Hide"){
        document.getElementById("c_prev_but").style.visibility="hidden";
        document.getElementById("c_next_but").style.visibility="hidden";    
        document.getElementById("click_b").title="Show document with changes highlighted"
        document.getElementById("click_b").value="Show Changes";
        
        class_name[i].style.visibility="hidden";
        class_name[i].style.display="none";
        
        i++;
            }        
        }
}
}
var show_toc = true;
var FoundMatch = -1;
var isM = 0;
var ua = navigator.userAgent;
if((ua.indexOf(' Mobile') > 0) || (ua.indexOf(' IEMobile') > 0) || (ua.indexOf(' Opera Mobi') > 0) || (ua.indexOf(' Android') > 0))
{
   isM = 1;
}
function show_hide_TOC() {
var TOC=document.getElementById("TOC");
  if (show_toc) {
    TOC.style.display="none";
    document.getElementById("ce_img1").style.display = "none";
    document.getElementById("ce_img2").style.display = "inline";
    show_toc = false;
  } else {
    TOC.style.display="inline";
    document.getElementById("ce_img1").style.display = "inline";
    document.getElementById("ce_img2").style.display = "none";
    show_toc = true;
  }
}

function show_hide_cont(d_id, i_id1, i_id2, fl) {
var TOC=document.getElementById(d_id);
  if (fl) {

    TOC.style.display="none";
    document.getElementById(i_id1).style.display = "none";
    document.getElementById(i_id2).style.display = "inline";
    fl = false;
  } else {

    TOC.style.display="inline";
    document.getElementById(i_id1).style.display = "inline";
    document.getElementById(i_id2).style.display = "none";
    fl = true;
  }
  return fl;
}

function show_hide_section(a_node) {
    if(a_node != null)
    {
        var img_1 = a_node.firstElementChild;
        var img_2 = img_1.nextSibling;
        if(a_node.parentNode.parentNode.nextSibling.nodeName.toUpperCase() == "DIV")
        {
            var div = a_node.parentNode.parentNode.nextSibling;
        }
        if((img_1 != null) && (img_2 != null)&& (div != null))
        {
            if(img_1.style.display == "none")
            {
                img_1.style.display = "inline";
                img_2.style.display = "none";
                div.style.display = "inline";
                a_node.title = "Click to collapse";
            }
            else if(img_2.style.display == "none")
            {
                img_1.style.display = "none";
                img_2.style.display = "inline";
                div.style.display = "none";
                a_node.title = "Click to expand";
            }
        }
    }
}

function show_hide_topic(a_node, divElem) {
    if(a_node != null)
    {
       var img_1 = a_node.firstElementChild;
       var img_2 = img_1.nextSibling;
       if((divElem.nodeName.toUpperCase() == "DIV") && (img_1 != null) && (img_2 != null))
       {
          if(img_1.style.display == "none")
          {
             img_1.style.display = "inline";
             img_2.style.display = "none";
             divElem.style.display = "inline";
             a_node.title = "Click to collapse";
          }
          else if(img_2.style.display == "none")
          {
             img_1.style.display = "none";
             img_2.style.display = "inline";
             divElem.style.display = "none";
             a_node.title = "Click to expand";
          }
       }
    }
}

var edw = 0;
function edw_path(){
  var dwjs_path = document.getElementsByTagName("script");
  for(i=0;i<dwjs_path.length;i++){
    if(dwjs_path[i].src){
      var index = (dwjs_path[i].src).indexOf("dwcommon.js");
      if(index != -1)
      {
        edw = (dwjs_path[i].src).substring(0,index);
        break;
      }
    }
  }
}

function init(tbl_fol, tbl_doc)
{
  document.getElementById('head2').style.display = "none";
  document.getElementById('main').style.display = "none";
  document.getElementById('hr1').style.display = "none";
  if(isM)
  {
    ChangetoMobileview(tbl_doc, tbl_fol);
    if(!edw)
      edw_path();
    document.getElementById('stylesheet').href=edw+'mob_cvl1.css';
  }
  if(FoundMatch == 0)
  {
     document.write("<div id='nm'>This folder contains no documents matching the current filter selections.</div>");
  }
}

function ChangetoMobileview(tbl_doc, tbl_fol) {
  document.getElementById('head1').style.display = "none";
  document.getElementById('head2').style.display = "block";
  document.getElementById('main').style.display = "block";
  document.getElementById('hr1').style.display = "block";
  var t_id=document.getElementById(tbl_doc);
  if(t_id){
    t_id.cellSpacing="3";
    t_id.cellPadding="5";
    var no_rows=t_id.rows.length;
    var no_clmns;
    var rindex=0;
    while( rindex < no_rows ) {
      no_clmns =t_id.rows[rindex].cells.length;
      while( no_clmns>2 ) {
        no_clmns=no_clmns-1;
        t_id.rows[rindex].deleteCell(no_clmns);
      }
      rindex=rindex+1;
    }
  }
  t_id=document.getElementById(tbl_fol);
  if(t_id){
    t_id.cellSpacing="3";
    t_id.cellPadding="5";
    var no_rows=t_id.rows.length;
    var rw_no=0, rw_id='';
    if(!edw)
       edw_path();
    for(rw_no=1; rw_no<=no_rows; rw_no++){
      rw_id="fi"+rw_no;
      var obj=document.getElementById(rw_id);
      if(obj)
        obj.src=edw+"FC.png";
    }
  }
}

function get_term_definition(info){
var Str=String(info);
var ar = Str.split("::");
var i = ar[1];
return terms[i]+"::"+ar[0]+"::::";
}
function on_click(info){
    var Str = String(info);
    var array = Str.split("::");
  if(isM==1){
    ht.sh(array[0],array[1],array[2],array[3]);}
  else{
    if(array[2]) {location.href=array[2]; } }
}
function mc(info){
  var Str = String(info.rel);
  if(info.parentNode.tagName == "DFN"){
    var tagid = info.id;
    var Str1 = document.getElementById(tagid).innerHTML;
    Str = Str1+"::"+Str;
    Str=get_term_definition(Str);
  } 
  var array = Str.split("::");
  if(isM==1){
    ht.sh(array[0],array[1],array[2],array[3]);}
  else{
    if(array[2]) {location.href=array[2]; } }
}
function on_mouseover(info,eve,inf){
  var eeU = eve.clientY;
  var eeL = eve.clientX;
  var Str = String(info);
  var array = Str.split("::");
  if(isM==0){
      ttO = setTimeout(function(){ht.sh(array[0],array[1],array[2],array[3],eeU,eeL,inf);},500); 
    }
}
function mo(info,eve){
  var eeU = eve.clientY;
  var eeL = eve.clientX;
  var Str = String(info.rel);
  if(info.parentNode.tagName == "DFN"){
      var tagid = info.id;
      var Str1 = document.getElementById(tagid).innerHTML;
      Str = Str1+"::"+Str;
      Str=get_term_definition(Str);
  } 
  var array = Str.split("::");
  if(isM==0){
      ttO = setTimeout(function(){ht.sh(array[0],array[1],array[2],array[3],eeU,eeL,info);},500); 
    }
}
function mort(info,eve){

  var eeU = eve.clientY;
  var eeL = eve.clientX;
  var tagid = document.getElementById(info.text).innerHTML;
  if(isM==0){
      ttO = setTimeout(function(){ht.sh(tagid,info.text,"","",eeU,eeL,info);},500); 
    }
}
function mout(info,eve){

  var eeU = eve.clientY;
  var eeL = eve.clientX;
  
  var tagid = info.parentElement.id;
      var ele2 = document.getElementById(tagid).parentElement.children;
  if(isM==0){
      if(document.getElementById("filters5"))
		ttO = setTimeout(function(){ht.sh(ele2[6].children[0].innerHTML,info.parentElement.innerHTML,"","",eeU,eeL,info);},500);
	  else
		ttO = setTimeout(function(){ht.sh(ele2[5].children[0].innerHTML,info.parentElement.innerHTML,"","",eeU,eeL,info);},500);
    }
}
function on_mouseout(){
  if(ttO){clearTimeout(ttO);}
  if(isM==0){ht.hd(); }
}
function mt(){
  if(ttO){clearTimeout(ttO);}
  if(isM==0){ht.hd(); }
}

/*
 Function ht() contains the javascript from sixrevisions.com tutorial which is a free software.
 This javascript has been customized as per our requirements.
*/
var ht=function(){
var id = 'ht';
var speed = 100;
var timer = 100;
var endalpha = 100;
var alpha = 0;
var Delay = 500;
var count = 0;
var tt,t,c,h;
var div_width;
var maxW=0,minW=0;
var winH,winW;
var minL = 15;
var minT = 15;
var ie;
var browserName;
var iteration = 0;
var isOverlay = 0;

return{
sh:function(ht_v,head,link,w,peU,peL,info){
  ht_v.replace(/&lt;/g,"<").replace(/&gt;/g,">");
if(count == 0){
  browserName = navigator.appName;
  ie = document.all ? true : false;
}
count = count+1;
iteration = 0;
isOverlay = 0;
if(tt == null){
  tt = document.createElement('div');
  tt.setAttribute('id',id);
  if(head){
  t = document.createElement('div');
  t.setAttribute('id',id + 'top');
  }
  c = document.createElement('div');
  c.setAttribute('id',id + 'cont');
  if(head){
  tt.appendChild(t);
  }
  tt.appendChild(c);
  document.body.appendChild(tt);
  tt.style.opacity = 0;
}
winW = ie ? document.documentElement.offsetWidth : window.innerWidth;
maxW = parseInt(winW*(.9));
if(!edw)
  edw_path();
if(head){
t.innerHTML = head ?
               (link ?
                 (edw ?
                    "<a href=" + link + " class='hd' style='white-space:nowrap'>" + head + "&nbsp; <img src=\""+edw+"XL.gif\" id=\"link_img\"/></a>"
                    : "<a href=" + link + " class='hd'>" + head + "</a>")
                 : ((info.parentNode.tagName == "DFN") ? "<span class='dfnhead'>" + head + "</span>"
                    : head))
               : ""; 
}               
if(isM==1){
  //var top = document.getElementById("httop");
  //top.style.minHeight="30px";
  t.innerHTML = edw ? t.innerHTML + "<img src=\""+edw+"TC.gif\" id=\"htclose\" onclick=\"ht.hd();\"/>" : t.innerHTML+ "<img src=\"TC.gif\" id=\"htclose\"/>";
}
//ht.pause(650);
if(info.parentNode.tagName == "DFN"){
if(isM==1) { document.onclick = this.termpos; }
else { document.onmousemove = this.termpos; }
}else if(!head){
if(isM==1) { document.onclick = this.termpos; }
else { document.onmousemove = this.termpos; }
}else{
if(isM==1) { document.onclick = this.pos; }
else { document.onmousemove = this.pos; }
}
tt.style.display = 'block';tt.style.top = "-1000px";tt.style.left="-1000px";
c.innerHTML = (isM == 1) ? ht_v : "<span onclick=\"ht.hide();\" style=\"display:block;\">"+ht_v+"</span>";
tt.style.width = w ? w + 'px' : 'auto';
if(!w && ie){
  t.style.display = 'none';
  tt.style.width = tt.offsetWidth;
  t.style.display = 'block';
}
if(head){ minW = (head.length * ((isM==1)?30:15)) + 44; }
if(head &&(tt.offsetWidth < minW)) { tt.style.width = minW; }
if(tt.offsetWidth > maxW){ tt.style.width = maxW + 'px'; }
div_width = tt.offsetWidth;
h = parseInt(tt.offsetHeight) + 1;
if(info.parentNode.tagName == "DFN"){
if(peU && peL){
  ht.termposi(peU,peL);//fix for hover without mouse move
}    
}else{
if(peU && peL){
  ht.posi(peU,peL);//fix for hover without mouse move
}
}
clearInterval(tt.timer);
tt.timer = setInterval(function(){ht.fade(1)},timer);
},
pos:function(e){
if(iteration > 0 && isM ==1){ return; }
var u = ie ? event.clientY : e.pageY - window.pageYOffset;
var l = ie ? event.clientX : e.pageX - window.pageXOffset;
var orig_u = u;
var orig_l = l;
winH = ie ? document.documentElement.offsetHeight : window.innerHeight;
u = u+15;
if(winH < (u+h+5)) { u = (u-h-20);}
if(u<minT) { u=minT;document.onmousemove = null; }
l = l - (div_width);
if( ((orig_u >= u) && (orig_u <= u+h)) && ((orig_l >= l) && (orig_l<=(l+div_width))) && (isM !=1) )
{
  isOverlay = 1;
}
if(l<=minL) { l = minL; }
if(document.body.scrollLeft)
  l = l+document.body.scrollLeft;
else if(window.pageXOffset)
  l = l+window.pageXOffset;
else if(document.documentElement.scrollLeft)
  l = l+document.documentElement.scrollLeft;
if(document.body.scrollTop)
  u = u+document.body.scrollTop;
else if(window.pageYOffset)
  u = u+window.pageYOffset;
else if(document.documentElement.scrollTop)
  u = u+document.documentElement.scrollTop;
if(iteration === 0 || iteration % 5 === 0){ 
  if (tt){
tt.style.top = (u)+ 'px';
tt.style.left = (l - 1) + 'px';
  }
}
iteration = iteration+1;
return;
},
posi:function(u,l){
  var orig_u = u;
  var orig_l = l;
  winH = ie ? document.documentElement.offsetHeight : window.innerHeight;
  u = u+15;
  if(winH < (u+h+5)) { u = (u-h-20);}
  if(u<minT) { u=minT;document.onmousemove = null; }
  l = l - (div_width);
  if( ((orig_u >= u) && (orig_u <= u+h)) && ((orig_l >= l) && (orig_l<=(l+div_width))) && (isM !=1) ){
    isOverlay = 1;
  }
  if(l<=minL) { l = minL; }
  if(document.body.scrollLeft)
    l = l+document.body.scrollLeft;
  else if(window.pageXOffset)
    l = l+window.pageXOffset;
  else if(document.documentElement.scrollLeft)
    l = l+document.documentElement.scrollLeft;
  if(document.body.scrollTop)
    u = u+document.body.scrollTop;
  else if(window.pageYOffset)
    u = u+window.pageYOffset;
  else if(document.documentElement.scrollTop)
    u = u+document.documentElement.scrollTop;
  tt.style.top = (u)+ 'px';
  tt.style.left = (l - 1) + 'px';
  return;
},
termposi:function(u,l){
  var orig_u = u; //vertical
  var orig_l = l; //horizontal
 winH = ie ? document.documentElement.offsetHeight : window.innerHeight;
u = u-h-10;
if(u < minT)
{
    u = minT;
    document.onmousemove = null; 
}
else{

    if ((orig_u >= u) && (orig_u <= u+h))
    {
        u = orig_u + 10;
    }
    
    if(winH < (u+h+5)) { u = (u-h-20);}

}

l = l + (5);
if((l+div_width) > winW )
{
    l = winW - div_width;
    l -= 20;
}
if(l<=minL) { l = minL; }
if( ((orig_u >= u) && (orig_u <= u+h)) && ((orig_l >= l) && (orig_l<=(l+div_width))) && (isM !=1) )
{
  isOverlay = 1; //Case to be handled when cursor goes behind tooltip(for mouse over event)
}

if(document.body.scrollLeft)
  l = l+document.body.scrollLeft;
else if(window.pageXOffset)
  l = l+window.pageXOffset;
else if(document.documentElement.scrollLeft)
  l = l+document.documentElement.scrollLeft;
if(document.body.scrollTop)
  u = u+document.body.scrollTop;
else if(window.pageYOffset)
  u = u+window.pageYOffset;
else if(document.documentElement.scrollTop)
  u = u+document.documentElement.scrollTop;
tt.style.top = (u)+ 'px';
  tt.style.left = (l - 1) + 'px';
  return;
},
termpos:function(e){
if(iteration > 0 && isM ==1){ return; }
var u = ie ? event.clientY : e.pageY - window.pageYOffset;
var l = ie ? event.clientX : e.pageX - window.pageXOffset;
var orig_u = u;
var orig_l = l;
winH = ie ? document.documentElement.offsetHeight : window.innerHeight;
u = u+15;
if(winH < (u+h+5)) { u = (u-h-20);}
if(u<minT) { u=minT;document.onmousemove = null; }
l = l - (div_width);
if( ((orig_u >= u) && (orig_u <= u+h)) && ((orig_l >= l) && (orig_l<=(l+div_width))) && (isM !=1) )
{
  isOverlay = 1;
}
if(l<=minL) { l = minL; }
if(document.body.scrollLeft)
  l = l+document.body.scrollLeft;
else if(window.pageXOffset)
  l = l+window.pageXOffset;
else if(document.documentElement.scrollLeft)
  l = l+document.documentElement.scrollLeft;
if(document.body.scrollTop)
  u = u+document.body.scrollTop;
else if(window.pageYOffset)
  u = u+window.pageYOffset;
else if(document.documentElement.scrollTop)
  u = u+document.documentElement.scrollTop;
if(iteration === 0 || iteration % 5 === 0){ 
  if (tt){
tt.style.top = (u)+ 'px';
tt.style.left = (l - 1) + 'px';
  }
}
iteration = iteration+1;
return;
},
fade:function(d){
var a = alpha;
if((a != endalpha && d == 1) || (a != 0 && d == -1)){
  var i = speed;
  if(endalpha - a < speed && d == 1){ i = endalpha - a; }
  else if(alpha < speed && d == -1){  i = a; }
  alpha = a + (i * d);
  tt.style.opacity = alpha * .01;
}
else{
  clearInterval(tt.timer);
  if(d == -1){tt.style.display = 'none';tt=null;}
}
},
pause :function(millis){
var date = new Date();
var curDate = null;
do { curDate = new Date(); }
  while(curDate-date < millis);
},
hd:function(){
if( isM !=1 ){
if( (isOverlay != 1) ){
  if(tt && tt.timer){
    clearInterval(tt.timer);
    tt.timer = setInterval(function(){ht.fade(-1);isOverlay = 0;},1);
  }
}
}
else
{
  clearInterval(tt.timer);
  tt.timer = setInterval(function(){ht.fade(-1)},timer);
}
},
hide:function(){
  isOverlay = 0;
  ht.hd();
}
};
}();
/*
XALOPEP Filter logic for doclist for categorization 27 Nov 2013
Added filterDoclist, filterVisibility, and getCookie.
*/
function filterDoclist(tableID,defaultMap,cookieName) {
    var CookieArray;
    var CookieValue = getCookie(cookieName);
    tableID = document.getElementById(tableID);
    CookieValue = CookieValue ? CookieValue : defaultMap;
    if (tableID) {
        var rowIndex = 0, rowCount = tableID.rows.length;
        while( rowIndex < rowCount ) {
            rowClassName = tableID.rows[rowIndex].className.split(' ')[0];
            if (rowClassName.indexOf('-') === 0){
                rowClassName =  rowClassName.replace('-','');
                CookieArray = CookieValue.split('|');
                for(var i = 0; i < CookieArray.length; i = i + 1){
                    CookieArray[i] = parseInt(CookieArray[i], 16);
                }
                if (filterVisibility(rowClassName,CookieArray) === 0){
                    tableID.rows[rowIndex].style.display = 'none';
                }
            }
            rowIndex = rowIndex + 1;
        }
    }    
}

function filterVisibility(givenMap,selectedMap) {
    var eachGiven = givenMap.split('|');
    var mapFlag = 1;
    for (var i = 0; i < eachGiven.length; i = i + 1) {
        if ((selectedMap[i] > 0) && ((selectedMap[i] & parseInt(eachGiven[i], 16)) == 0)) {
            mapFlag = 0;
            break;
        }
    }
    if (mapFlag == 1){
        FoundMatch = 1;
        return 1;
    }else {
       if(FoundMatch!=1)
        FoundMatch = 0;
        return 0;
    }
}

function getCookie(CookieName) {
    var DocCookie = document.cookie, CookieValue = null, StartIndex = DocCookie.indexOf(' ' + CookieName + '=');
    if (StartIndex == -1){
        StartIndex = DocCookie.indexOf(CookieName + '=');
    }
    if (StartIndex == -1){
        DocCookie = null;
    }else{
      StartIndex=DocCookie.indexOf('=', StartIndex) + 1;
      var EndIndex=DocCookie.indexOf(';', StartIndex);
      var indexOfHiphen = DocCookie.indexOf('-', StartIndex);
      if((indexOfHiphen > -1) && (indexOfHiphen < EndIndex))
         EndIndex = indexOfHiphen;
      if (EndIndex == -1){
         EndIndex=DocCookie.length;}
      CookieValue=unescape(DocCookie.substring(StartIndex,EndIndex));
    }
    return CookieValue;
}

function filterTocContent(p_id,visibility){
   var trArray = document.getElementById(p_id).children;
   var index = 0;
   var parent = 0;
   if(trArray.length){
      while(index < trArray.length)
      {
         var trID = trArray[index].id;
         if((trID != null) && ((trID.indexOf("toc_") === 0)))
         {
            trArray[index].style.display = "";
            trID = trID.replace("toc_","");
            var divMatched = document.getElementById("-"+trID);
            //even if the topic display is not none we have check depend on the parent level topics visibility
            if((divMatched != null) && ((divMatched.style.display == "none") || (visibility == 1))){
               trArray[index].style.display = "none";
               parent = 1;
            }
            else parent = 0;            
          }
          if(parent != 1){
             var nestedli = document.getElementById(trArray[index].id).children;
             var index1 = 0;
             if(nestedli.length){
               while(index1 < nestedli.length)
               {
                  var divClassVal1 = nestedli[index1].id;
                  var divClassVal2 = nestedli[index1].nodeName;
                  if(divClassVal2.toLowerCase() === 'ul'){
                      //nested toc handling for DITA documents
                      //sending the parent id and parent topics visibility with current roles
                      filterTocContent(nestedli[index1].id,parent);
                  }
                  index1++;
               }
             }
          }
         index++;
      }
    }
}
function filterDocContent(defaultMap,cookieName){
    var divArray = document.getElementsByTagName("div");
    var divLen = divArray.length;
    var divIndex = 0;
    var CookieArray;
    var CookieValue = getCookie(cookieName);
    CookieValue = CookieValue ? CookieValue : defaultMap;
    CookieArray = CookieValue.split('|');
    for(var i = 0; i < CookieArray.length; i = i + 1){
        CookieArray[i] = parseInt(CookieArray[i], 16);
    }

    var catMsg = document.getElementById("cat_msg");
    if(catMsg != null)
     catMsg.style.visibility = 'hidden';
    while( divIndex < divLen ) {
        var divClassVal = divArray[divIndex].className;
        var divIdVal = divArray[divIndex].id;
        if((divClassVal != null) && (divClassVal.indexOf('-') === 0) && (divIdVal != null) && (divIdVal.indexOf('-') === 0)){
            divIdVal = divIdVal.replace('-','');
            var msgChapter = document.getElementById("msg_" + divIdVal);
            divClassVal = divClassVal.replace('-','');
            if (filterVisibility(divClassVal,CookieArray) === 0){
                divArray[divIndex].style.display = 'none';
                if(msgChapter != null)
                 msgChapter.style.display = '';
                if(catMsg != null)
                 catMsg.style.visibility = 'visible';
            }
            else
            {
                divArray[divIndex].style.display = '';
                if(msgChapter != null)
                 msgChapter.style.display = 'none';
            }
        }
        divIndex = divIndex + 1;
    }

    var trArray = document.getElementById("toc_1").parentNode.childNodes;
    var index = 0;
    var parent = 0;
    if(trArray.length){
      while(index < trArray.length)
      {
         var trID = trArray[index].id;
         if((trID != null) && ((trID.indexOf("toc_") === 0)))
         {
          trArray[index].style.display = "";
          trID = trID.replace("toc_","");
          var divMatched = document.getElementById("-"+trID);
          if((divMatched != null) && (divMatched.style.display == "none")){
             trArray[index].style.display = "none";
             parent = 1;
          }   
          else if(trID.indexOf(".") > 0){
             var parentCHL = trID.substring(0,trID.lastIndexOf("."));
             var pdivaMatched = document.getElementById("toc_"+parentCHL);
             if((pdivaMatched != null) && (pdivaMatched.style.display == "none"))
              trArray[index].style.display = "none";
          }
          else parent = 0;
          if(parent != 1){
             var nestedli =  document.getElementById(trArray[index].id).children;
             var index1 = 0;
             if(nestedli.length){
               while(index1 < nestedli.length)
               {
                  var divClassVal1 = nestedli[index1].id;
                  var divClassVal2 = nestedli[index1].nodeName;
                  if(divClassVal2.toLowerCase() === 'ul'){
                      //nested toc handling for DITA documents
                      //sending the parent id and parent topics visibility with current roles
                      filterTocContent(nestedli[index1].id,parent);
                  }
                  index1++;
               }
             }
          }
          }
         index++;
      }
    }
}
/* Start : Filtering of pm counters JS */
var pm = 'pm';
var moclass = 'class';
var mim = 'mim';
var sub = 'sub';
var var_up = 'up.gif';
var var_down = 'down.gif';
var var_upandown = 'upandown.gif';
var sortOrder = [];
sortOrder[pm] = 0;
sortOrder[moclass] = 0;
sortOrder[mim] = 0;
sortOrder[sub] = 0;
var pmArray = [], pmRow, pmColumn, cells, cellLength;
var first = 1;
var col = 0;
var sR = 0;
function sortAllpmTable(k) {
var tbody = document.getElementById('allpmtable');
var rows = tbody.rows, rowLengh = rows.length;
if( k == pm ){
    col = 0;
    if(sortOrder[k] != 0){
     sortOrder[k] *= -1;
    }
    else{
     sortOrder[k] = 1;
    }
    sortOrder[moclass] = 0;sortOrder[mim] = 0;sortOrder[sub] = 0;
    iconchange(k,sortOrder[k]);
    sR = sortOrder[k];
}else if ( k == moclass) {
    col = 1;
    if(sortOrder[k] != 0){
     sortOrder[k] *= -1;
    }
    else{
     sortOrder[k] = 1;
    }
    sortOrder[pm] = 0;sortOrder[mim] = 0;sortOrder[sub] = 0;
    iconchange(k,sortOrder[k]);
    sR = sortOrder[k];
}else if ( k == mim) {
    col = 2;
    if(sortOrder[k] != 0){
     sortOrder[k] *= -1;
    }
    else{
     sortOrder[k] = 1;
    }
    sortOrder[pm] = 0;sortOrder[moclass] = 0;sortOrder[sub] = 0;
    iconchange(k,sortOrder[k]);
    sR = sortOrder[k];
}else {
    if(document.getElementById("mimI"))
    {
      col = 3;
    }
    else{
      col = 2;
    }

    if(sortOrder[k] != 0){
     sortOrder[k] *= -1;
    }
    else{
     sortOrder[k] = 1;
    }
    sortOrder[pm] = 0;sortOrder[moclass] = 0;sortOrder[mim] = 0;
    iconchange(k,sortOrder[k]);
    sR = sortOrder[k];
}

// Fill the array with values from the table
   for (pmRow = 0; pmRow < rowLengh; pmRow++) {
        cells = rows[pmRow].cells;
        cellLength = cells.length;
        pmArray[pmRow] = [];
        for (pmColumn = 0; pmColumn < cellLength; pmColumn++) {
            pmArray[pmRow][pmColumn] = cells[pmColumn].innerHTML;
        }
   }


// Sort the array by the specified column number (col) and order (sR)
pmArray.sort(function (a, b) {
    var Xa = processTable(a[col]);
    var Xb = processTable(b[col]);

    if(Xa == Xb){
        return 0;
    }else{
        if(Xa > Xb){
            return sR;
        }else{
            return (sR * -1);
        }
    }
});
// Replace existing rows with new rows created from the sorted array
for (pmRow = 0; pmRow < rowLengh; pmRow++) {
    cellLength = pmArray[pmRow].length;
    for (pmColumn = 0; pmColumn < cellLength; pmColumn++) {
        rows[pmRow].cells[pmColumn].innerHTML = pmArray[pmRow][pmColumn];
        if(pmColumn == (pmColumn-1))
        {
           rows[pmRow].cells[pmColumn].setAttribute("class", "lasttd");
        }
    }
}
}

function processTable (input){
if(input.indexOf(">") > -1)
{
  input = input.substr(input.indexOf(">")+1)
}
if(input >= 97){
    input = input.toUpperCase();
    return input;
}else{
    return input;
}
}

function iconchange (x,order){
  if(first == 1){
      if(!edw)
        edw_path();
      var_up = edw + var_up;
      var_down = edw + var_down;
      var_upandown = edw + var_upandown;
      first = 0;
  }

  if(document.getElementById("pmI")){ document.getElementById("pmI").src = var_upandown;}
  if(document.getElementById("classI")){ document.getElementById("classI").src = var_upandown;}
  if(document.getElementById("mimI")){ document.getElementById("mimI").src = var_upandown;}
  if(document.getElementById("subI")){ document.getElementById("subI").src = var_upandown;}
  //if (toggleState[x] == 0 ) {
  if(order == 1){
    if(document.getElementById(x+'I')){document.getElementById(x+'I').src = var_up;}
  }else if(order == -1){
    if(document.getElementById(x+'I')){document.getElementById(x+'I').src = var_down;}
  }
}
/*End of JS for Sort of All PM Counter*/

/* Start : Filtering of pm counters JS */
var filterAray1 = [],filterAray = [],filterAray_2 = [],filterAray3 = [],filterAray2 = [], pmRow, pmColumn, cells, cellLength;

function myFunction2(val,m) {
    var c = 2;
    var tbody = document.getElementById('allpmtable');
    var rows = tbody.rows, rowLengh = rows.length;
    var otherval1 = document.getElementById("filters0").value;
    var otherval2 = document.getElementById("filters1").value;
    var otherval3 = document.getElementById("filters2").value;
    for (pmRow = 0; pmRow < rowLengh; pmRow++) {
        cells = rows[pmRow].cells;
        cellLength = cells.length;
        rows[pmRow].children[0].style.color = ""; 
        rows[pmRow].children[1].style.color = ""; 
        rows[pmRow].children[2].style.color = ""; 
           n=m;
        value = cells[n].innerHTML.trim();
        if( value == ""){
           value = "Undefined";
        }
          if(m > 0){
            if(m == 2){
               p = n-1;
               value3 = cells[p].innerHTML.trim();
               o = n-2;
               value2 = cells[o].innerHTML.trim();
            }
            else{
               o=n-1;
               value2 = cells[o].innerHTML.trim();
               value3 = cells[n+1].innerHTML.trim();
            }
            if( value2 == ""){
              value2 = "Undefined";
            }
            if( value3 == ""){
              value3 = "Undefined";
            }
            if( (otherval1 == "Show All") | (value2 == otherval1)){
              if( (otherval2 != "Show All") & (m == 2)){
                 if (value3 == otherval2){
                   if( value == val){
                          dis_style = "table-row"; 
                          rows[pmRow].style.display = "table-row"; 
                   }
                   else if( val == "Show All"){
                          dis_style = "table-row"; 
                          rows[pmRow].style.display = "table-row"; 
                   }
                   else{
                      dis_style = "none"; 
                      rows[pmRow].style.display = "none"; 
                   }
                 }
                 else{
                    dis_style = "none"; 
                    rows[pmRow].style.display = "none"; 
                 }                 
              }
              else{ 
                 if(value == val){
                     dis_style = "table-row"; 
                     rows[pmRow].style.display = "table-row"; 
                 }
                 else if( val == "Show All"){
                     dis_style = "table-row"; 
                     rows[pmRow].style.display = "table-row"; 
                 }
                 else{
                    dis_style = "none"; 
                    rows[pmRow].style.display = "none"; 
                 }    
              }              
            }
            else{
                dis_style = "none"; 
                rows[pmRow].style.display = "none"; 
            }
           }
           else{
                if(val == "Show All"){
                   rows[pmRow].style.display = "table-row"; 
                   dis_style = "table-row"; 
                }
                else if(value == val){
                   dis_style = "table-row"; 
                   rows[pmRow].style.display = "table-row"; 
                }
                else{
                  dis_style = "none"; 
                  rows[pmRow].style.display = "none"; 
                }
                
           }
          if( cellLength >= 6 ){
             parent_style = dis_style;//none
          }else{
             if( (dis_style != parent_style) & (dis_style == "table-row")){
                flag = true;
                c= 1;
                parent_style = dis_style;
                while (flag) 
                {                   
                  count = rows[pmRow-c].cells.length;
                  if( count >= 6 ){
                     rows[pmRow-c].style.display = "table-row"; 
                     rows[pmRow-c].children[0].style.color = "#dddddd"; 
                     rows[pmRow-c].children[1].style.color = "#dddddd"; 
                     rows[pmRow-c].children[2].style.color = "#dddddd"; 
                     flag = false;
                  }
                  else{
                     rows[pmRow-c].style.display = "table-row"; 
                     rows[pmRow-c].children[0].style.color = "#dddddd"; 
                     rows[pmRow-c].children[1].style.color = "#dddddd"; 
                     rows[pmRow-c].children[2].style.color = "#dddddd"; 
                     c = c + 1;
                  }
                }
             }
             else if(dis_style == "none"){ 
                 rows[pmRow].style.display = parent_style; 
                 rows[pmRow].children[0].style.color = "#dddddd"; 
                 rows[pmRow].children[1].style.color = "#dddddd"; 
                 rows[pmRow].children[2].style.color = "#dddddd"; 
             } 
             else if(dis_style == "table-row"){ 
                 rows[pmRow].style.display = parent_style; 
             }       
          }
  }

  filtercolumn1(m);
}


function filtercolumn1(n) {
    
for (i = n + 1; i < 3; i++) 
    {
        filters = "filters" + i;
        filter_ext = "filters" + (i - 1);
        if( i == 2){
          filter_ext1 = "filters" + (i - 2);
          preval1 = document.getElementById(filter_ext1).value;
        }
        var select = document.getElementById(filters);
        var length = select.options.length;
        for (j = 0; j < length; j++) {
          select.remove(select.options[j]);
        } 
        filterAray_2 = [];
        filterAray_1 = [];
        select = document.getElementById(filters);
        var tbody = document.getElementById('allpmtable');
        var rows = tbody.rows, rowLengh = rows.length;
        for (pmRow = 0; pmRow < rowLengh; pmRow++) {
            cells = rows[pmRow].cells;
            if( rows[pmRow].style.display == "table-row"){
               cellLength = cells.length;
               n = i;
               vlue = cells[n].innerHTML.trim();
               if( vlue == ""){
                  vlue = "Undefined";
               }
               preval = document.getElementById(filter_ext).value;
               if( ( cells[n-1].innerHTML == preval ) | ( preval == "Show All" ) ){
                  if (i == 2){
                      if( ( cells[n-2].innerHTML == preval1 ) | ( preval1 == "Show All" ) ){
                           filterAray_2[pmRow] = [];
                           filterAray_2[pmRow] = vlue;
                      }
                  } 
                  else{                   
                    if( vlue ){
                       filterAray_2[pmRow] = [];
                       filterAray_2[pmRow] = vlue;
                       
                    }
                  }
               }
               
            }
        }
        filterAray_1 = removeDuplicates(filterAray_2); 
        filterAray_1.sort(); 
        select = document.getElementById(filters);
        select.add( new Option( "Show All" ) );  
		document.getElementById("filters3").value = "";
		document.getElementById("filters4").value = "";
		if(document.getElementById("filters5")) { document.getElementById("filters5").value = ""; }		
        for( arr in filterAray_1 ) {
           if(filterAray_1[arr] != 'undefined'){ 
             select.add( new Option( filterAray_1[arr] ) ); 
           } 
        }; 
    }
}

function filtercolumn(n) {
    var tbody = document.getElementById('allpmtable');
    var rows = tbody.rows, rowLengh = rows.length;
    for (i = 0; i < 3; i++) {
    filters = "filters" + i
    filterAray = [];
    filterAray1 = [];
    for (pmRow = 0; pmRow < rowLengh; pmRow++) {
        cells = rows[pmRow].cells;
        cellLength = cells.length;
        n = i;
        vlue = cells[n].innerHTML.trim();
        if( vlue == ""){
           vlue = "Undefined";
        }
        if( vlue ){
          filterAray1[pmRow] = [];
          filterAray1[pmRow] = vlue;
        }
    }
    filterAray = removeDuplicates(filterAray1);
    filterAray.sort();
    select = document.getElementById(filters);
    select.add( new Option( "Show All" ) );
    for( arr in filterAray ) {
        if(filterAray[arr] != 'undefined'){ 
          select.add( new Option( filterAray[arr] ) );
        }  
    };
    }
}

function removeDuplicates(num) {
  let x;
  const len=num.length;
  const out=[];
  const obj={};

  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}

/*End of JS for filtering of All PM Counter*/

// XBIJPAN: Categorization support for Revamp MOM static Page
function filterFrontPage(defaultMap,cookieName) {
    var CookieArray;
    var CookieValue = getCookie(cookieName);
    var divFrontID = document.getElementById("mom_front_page");
    CookieValue = CookieValue ? CookieValue : defaultMap;
    if (divFrontID) {
        var divElementClassName = divFrontID.className;
        CookieArray = CookieValue.split('|');
        for(var i = 0; i < CookieArray.length; i = i + 1){
                CookieArray[i] = parseInt(CookieArray[i], 16);
        }
        if (divElementClassName.indexOf('-') === 0){
            divElementClassName =  divElementClassName.replace('-','');
            if (filterVisibility(divElementClassName,CookieArray) === 0){
                divFrontID.style.display = 'none';
            } 
        }
    }   
}

/*Start: JS for Tables sorting in XSEIF documents*/
var sorted_cols = []; //Stack of sorted column ids
function sort_table(k)
{
    var sOrd = 0, col = 0, j;
    var tblRow;
    var clicked_col = document.getElementById(k);
    var table_id = k.substring(0,k.lastIndexOf("_"));
    var tblArray = [];
    var tbody_orig = document.getElementById(table_id);
    var rows_orig = tbody_orig.rows;
    var tbody_tmp = document.getElementById(table_id).cloneNode(true);
    var tbl_rows = tbody_tmp.rows;
    var tbl_rw_len = tbl_rows.length;
    var sc_len = sorted_cols.length;
    //col = parseInt(k.charAt(k.length-1)) - 1;
    col = parseInt(k.substring(k.lastIndexOf('_')+1)) - 1;
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if( msie > 0 )
    {
        if(ua[msie+5] != '1') 
        {
            alert("Table sorting feature is disabled in this web browser(IE9). Please upgrade your browser to use this feature");
            return;
        }
    }
    if(clicked_col){
        if(sc_len == 0){ //List is empty create first node
            sorted_cols[sc_len] = [];
            sorted_cols[sc_len][0] = k;
            sorted_cols[sc_len][1] = 1;
            sOrd = 1;
        }
        else{
            for(var j=0;j < sc_len;j++)
            {
                //Toggle the sort order for sorted columns
                if(sorted_cols[j][0] == k)
                {
                    sOrd = sorted_cols[j][1];
                    sOrd = sOrd * (-1);
                    sorted_cols[j][1] = sOrd;
                    break;
                }
                //Column clicked from sorted table, remove old column and add new column id
                if(k.substring(0,k.lastIndexOf("_")) == sorted_cols[j][0].substring(0,sorted_cols[j][0].lastIndexOf("_")))
                {
                    sorted_cols[j][0] = k;
                    sorted_cols[j][1] = 1;
                    sOrd = 1;
                    break;
                }
                //New table entry, add to list
                else if((j+1) == sc_len)
                {
                    sorted_cols[sc_len] = [];
                    sorted_cols[sc_len][0] = k;
                    sorted_cols[sc_len][1] = 1;
                    sOrd = 1;
                    break;
                }
            }
        }
    }
    else{
        return;
    }

    var no_of_cols = clicked_col.parentNode.getElementsByTagName("th").length; // # Of columns in table header

    for (tblRow = 0; tblRow < tbl_rw_len; tblRow++) {
        if(no_of_cols != tbl_rows[tblRow].cells.length) //Check if the row have same #of columns as header
        {
            return;
        }
        tblArray[tblRow] = tbl_rows[tblRow];
    }

    tblArray.sort(function (a, b) 
    {
        var Xa = flCellCont(a.cells[col]);
        var Xb = flCellCont(b.cells[col]);
        //alert("\"" + Xa + "\"" + "\"" + Xb + "\"" );
        if(Xa == Xb)
        {
            return 0;
        }
        else
        {
            if(Xa > Xb)
            {
                return 1 * sOrd;
            }
            else
            {
                return  -1 * sOrd;
            }
        }
    });

    for (tblRow = 0; tblRow < tbl_rw_len; tblRow++) 
    {
        rows_orig[tblRow].innerHTML = tblArray[tblRow].innerHTML;
        rows_orig[tblRow].setAttribute("valign", tblArray[tblRow].getAttribute("valign"));
    }
    changeicon(k,sOrd);
}

function flCellCont (input){
    input = input.textContent;
    input = input.toUpperCase();
    //alert("Input=" + input + ".");
  //  input.replace(/^\s+|\s+$/gm,'');          /^(&nbsp;|<br>)+/, ''
  //  input.replace(/^\n+|\n+$/gm,'');
  //  var re = new RegExp(String.fromCharCode(160), "g");
  //  input.replace(re,' ');
  //  //input.replace(/^\s+\n+|\s+\n+$/g,"");
  //
    input2 = input.replace(/[^a-zA-Z0-9]/g, "");
    if(input2){
        return input2;
    }
    else
        return input;
}

function changeicon(k,ord)
{
    var thead_node = document.getElementById(k).parentNode;
    var th_arr = thead_node.getElementsByTagName("th");
    if(first == 1){
        if(!edw)
            edw_path();
        var_up = edw + var_up;
        var_down = edw + var_down;
        var_upandown = edw + var_upandown;
        first = 0;
    }

    for(var i = 0; i < th_arr.length;i++) 
    {
        var th_id = th_arr[i].id;
        var img_id = "img_".concat(th_id);
        var img_ele = document.getElementById(img_id);
        if(img_ele != null){
            if((k == img_id.substring(4)) && (ord == 1)){
                img_ele.src = var_up;
                img_ele.style.visibility = "visible";
            }
            else if((k == img_id.substring(4)) && (ord == -1)){
                img_ele.src = var_down;
                img_ele.style.visibility = "visible";
            }
            else
                img_ele.style.visibility = "hidden";
        }
    }
}
/*End: JS for Tables sorting in XSEIF documents*/

/*Start: JS for displaying the link target which is present within collapsed content*/

function display_target(localvar) {
    var target_id = String(localvar);
    var target = target_id.substring(target_id.indexOf("#")+1);
    var target_elem = document.getElementById(target);
    if(target_elem) {
    if((target_elem.style !== 'undefined') && (target_elem.style.display === "none")) {
        target_elem.style.display = "";
    }
    /* Parse through the parent elements until the DIV which contains hidden content is found */
    while (target_elem.parentNode) { 
        target_elem = target_elem.parentNode;
        if(target_elem.hasAttribute("style")) {
          target_elem.style.display = "";
          var prev_sibling = target_elem.previousElementSibling;
          if(prev_sibling) {
            var children = prev_sibling.getElementsByTagName("*");
            for(count = 0; count < children.length; count++){
                if(children[count].tagName == "IMG"){
                    if(children[count].src.indexOf("CP.png") !== -1) {
                        children[count].style.display = "inline";
                    }
                    else if(children[count].src.indexOf("EP.png") !== -1) {
                        children[count].style.display = "none";
                    }
                }
            }
            //break;
          }
        }
        if(target_elem.nodeName.indexOf("BODY") !== -1) {
            break;
        }
    }
    }
}

/*End: JS for displaying the link target which is present within collapsed content*/

/*Start: JS for displaying the image in lightbox*/

var imgObj = null;  // Image being dragged and panned.
var prevX;          // Previous x position of mouse (starting with start pos).
var prevY;          // Previous y position of mouse (starting with start pos).
var isSVG = 0;
var aspect;
var svgPanning = 0;
function ovl(caller) {
    document.getElementById("overlay").style.display = "inline";
    var caller_node = caller;
    var children = caller_node.childNodes;
    var target_node = null;
    var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if(caller_node.className.indexOf("svgW") != -1) {
        var ua = window.navigator.userAgent;
        // For IE and EDGE, embed tag is used to display image in Lightbox
        if(!!navigator.userAgent.match(/Trident\/7\./) || (window.navigator.userAgent.indexOf("Edge") != -1)) {
          target_node = document.createElement("embed");
          target_node.src = children[0].data;
        }
        else {
          target_node = document.createElement("object");
          target_node.data = children[0].data;
        }
        target_node.setAttribute("class","svgLB");
        target_node.setAttribute("type","image/svg+xml");
        isSVG = 1;
    }
    else {
        target_node = document.createElement("img");
        target_node.src = children[0].src;
    }
    target_node.id = "overlayImage";
    document.getElementById("overlayBox").innerHTML = "";
    document.getElementById("overlayBox").appendChild(target_node);
    imgW = children[0].width;
    imgH = children[0].height;
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
    document.body.style.margin = "0px";
    target_node.addEventListener('load', function(){
        if(isSVG) SVGImgResize();
        else imgResize();
        addPanAndZoomToImagesById('overlayImage');
    }, false);
    document.getElementById("overlay").onclick=function () {
        isSVG = 0;
        document.getElementById("overlay").style.display = "none";
        document.body.scroll = "auto"; // ie only
        document.body.style.margin = "8px"; 
        document.documentElement.style.overflow = 'auto';  // firefox, chrome
        document.getElementById("overlayBox").innerHTML = "";
    };
}

function imgResize(){
  var imgElem = document.getElementById('overlayImage');
  if((imgElem != null) && (imgElem.hasAttribute("style"))) {
      imgElem.removeAttribute("style");
  }
  if(imgElem != null) {
    var imgWidth = imgW;
    var imgHeight = imgH;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    aspect = imgWidth / imgHeight;
    if((screenWidth >= imgWidth) && (screenHeight >= imgHeight)) {
       imgHeight = screenHeight - screenHeight/20; // Changing image size to the 95% of screen Height
       imgWidth = imgHeight*aspect;
       imgElem.setAttribute("width",imgWidth);
    }
    if(screenWidth < imgWidth) {
       imgWidth = screenWidth - screenWidth/20; // Change image width to 95% of screen width       
       imgHeight = imgWidth/aspect;
       imgElem.setAttribute("width",imgWidth);
    }
    if(screenHeight < imgHeight) {
       imgHeight = screenHeight - screenHeight/20;
       imgWidth = imgHeight * aspect;
       imgElem.setAttribute("width",imgWidth);
    }
    imgElem.style.left = (screenWidth - imgWidth)/2 + "px";
    imgElem.style.top = (screenHeight - imgHeight)/2 + "px";
  }
  
}

function addPanAndZoomToImagesById(imgId) {
  var imgObj = document.getElementById(imgId);
  if(isSVG) {
    window.addEventListener('resize', SVGImgResize);
    var svgDoc = null; // Loading SVG DOM
    if(imgObj.contentDocument) {
     svgDoc = imgObj.contentDocument;
    }
    else {
     var subdoc = null;
     try {
        svgDoc = imgObj.getSVGDocument();
     } catch(e) {}
    }
    var styleSVG = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
    styleSVG.setAttribute("type",'text/css');
    styleSVG.appendChild(svgDoc.createTextNode("svg{cursor:move}\n :not(svg):not(a){cursor: auto}\n a,a *{cursor:pointer !important}"));
    svgDoc.documentElement.insertBefore(styleSVG, svgDoc.documentElement.childNodes[0]);
    svgDoc.addEventListener('mousedown', function(e){
        prevX = e.clientX;
        prevY = e.clientY;
        svgDoc.addEventListener('mousemove', svgPan, true);
    },true);
    svgDoc.addEventListener('mouseup', function(e){
        if(e.target.nodeName.toUpperCase() == "SVG" && svgPanning != 1) {
          document.documentElement.parentNode.getElementById("overlay").style.display = "none";
          document.documentElement.parentNode.body.scroll = "auto"; // ie only
          document.documentElement.parentNode.body.style.margin = "8px"; 
          document.documentElement.parentNode.documentElement.style.overflow = 'auto';  // firefox, chrome
          document.documentElement.parentNode.getElementById("overlayBox").innerHTML = "";
        }
        svgPanning = 0;
        svgDoc.removeEventListener('mousemove', svgPan, true);        
    },true);
    var scriptTag = document.createElement("script");
    if (navigator.userAgent.toLowerCase().indexOf('firefox') >= 0) 
      svgDoc.addEventListener("DOMMouseScroll", handleSVGMouseWheel, false);
    else
      svgDoc.addEventListener("mousewheel", handleSVGMouseWheel, false);
  }
  else {
    window.addEventListener('resize', imgResize);
    imgObj.addEventListener('dragstart', handleDragStart, false);
    imgObj.addEventListener('dragover', handleDragOver, false);
    if (navigator.userAgent.toLowerCase().indexOf('firefox') >= 0)
      imgObj.addEventListener("DOMMouseScroll", handleMouseWheel, false);
    else
      imgObj.addEventListener("mousewheel", handleMouseWheel, false);
  }
}

function translateImage(image, x, y) {
  var Offsetval =  image.getAttribute('style');
  if(isSVG) {
    if(x != 0 && y != 0) { svgPanning = 1;}
    image.style.marginLeft = (image.offsetLeft + x) + 'px';
    image.style.marginTop = (image.offsetTop + y) + 'px';
  }
  else {
    image.style.left = (image.offsetLeft + x) + 'px';
    image.style.top = (image.offsetTop + y) + 'px';
  }
}

function handleDragStart(e) {
  imgObj = e.target;
  prevX = e.clientX;
  prevY = e.clientY;
}

function handleDragOver(e) {
  if (!imgObj) return;

  x = e.clientX;
  y = e.clientY;
  translateImage(imgObj, x - prevX, y - prevY);
  prevX = x;
  prevY = y;
}

function repositionImg(image, scaleAmount, maxWidth, minWidth,
                   relResizePosX, relResizePosY) {
  var aspect = image.width / image.height;  // Aspect ratio of this image.
  var oldWidth = image.width;
  var oldHeight = image.height;
  var newWidth = scaleAmount * oldWidth;
  if (newWidth > maxWidth) { newWidth = maxWidth; }
  if (newWidth < minWidth) { newWidth = minWidth; }
  var resizeFract = (newWidth - oldWidth) / oldWidth;
 
  // Scale:
  image.style.width = newWidth + 'px';
 
  // Translate:
  image.style.left = ((-oldWidth * resizeFract * relResizePosX) + image.offsetLeft) + 'px';
  image.style.top = ((-oldHeight * resizeFract * relResizePosY) + image.offsetTop) + 'px';
  var style_attr = image.getAttribute('style');
  var mod_style = style_attr.concat("max-width:none");  
  image.setAttribute("style",mod_style);
}


function handleMouseWheel(e) {
  if (!e.target || e.target.height == 0 || e.target.width == 0) return;
 
  imgObj = e.target;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  var scaleAmount = 1.0 + (delta / 10.0);
  var maxWidth = 5000;
  var minWidth = 50;
  var relResizePosX = e.offsetX / e.target.width;
  var relResizePosY = e.offsetY / e.target.height;
  repositionImg(imgObj, scaleAmount, maxWidth, minWidth, relResizePosX, relResizePosY);
}

function handleKeyDown(e) {
  var imgElem = document.getElementById('overlayImage');
  var maxWidth = 5000;
  var maxHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  if(e.keyCode === 38) { //Up
    var delta = 1;
  }
  else if(e.keyCode === 40) { //Down
    var delta = -1;
  }
  else if(e.keyCode === 27) {
    document.getElementById("overlay").style.display = "none";
    document.body.scroll = "auto"; // ie only
    document.body.style.margin = "8px"; 
    document.getElementById("overlayBox").innerHTML = "";
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
  }
  else if(e.keyCode === 37) {
    translateImage(imgElem, -20, 0);
  }
  else if(e.keyCode === 39) {
    translateImage(imgElem, 20, 0);
  }
  else return;
}

function repositionSVG(image, scaleAmount, maxWidth, minWidth,
                   relResizePosX, relResizePosY) {
  var oldWidth = image.width.replace('px','');
  var oldHeight = image.height.replace('px','');
  if(oldWidth == '') {
      oldWidth = image.style.width.replace('px','');
  }
  oldHeight = oldWidth * aspect;
  var newWidth = scaleAmount*oldWidth;
  var resizeFract = (newWidth - oldWidth) / oldWidth;
  // Scale:
  image.width = newWidth+"px";
  // Translate:
  leftval = ((-oldWidth * resizeFract * relResizePosX) + image.offsetLeft) + 'px';
  topval = ((-oldHeight * resizeFract * relResizePosY) + image.offsetTop) + 'px';
  image.setAttribute("style","margin-left: " + leftval);
  image.setAttribute('style', image.getAttribute('style')+"; margin-top: " + topval);
  image.setAttribute('style', image.getAttribute('style')+"; max-width:none");
}

function handleSVGMouseWheel(e) {
  if (!e.target || e.target.height == 0 || e.target.width == 0) return; 
  imgObj = document.getElementById('overlayImage');
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  var scaleAmount = 1.0 + (delta / 10.0);
  var maxWidth = 5000;
  var minWidth = 50;
  var svgWidth = (imgObj.width).replace('px','');
  var svgHeight = aspect * svgWidth;
  var relResizePosX = e.offsetX /svgWidth;
  var relResizePosY = e.offsetY /svgHeight;
  if(isSVG) 
    repositionSVG(imgObj, scaleAmount, maxWidth, minWidth, relResizePosX, relResizePosY);
}

function SVGImgResize(){
  var imgElem = document.getElementById('overlayImage');
  if((imgElem != null) && (imgElem.hasAttribute("style"))) {
      imgElem.removeAttribute("style");
  }
  if(imgElem != null) {
    var imgWidth = imgW.replace('px','');
    var imgHeight = imgH.replace('px','');
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    aspect = imgWidth / imgHeight;
    if((screenWidth >= imgWidth) && (screenHeight >= imgHeight)) {
       imgHeight = screenHeight - screenHeight/20; // Changing image size to the 95% of screen Height
       imgWidth = imgHeight*aspect;
       imgElem.setAttribute("width",imgWidth);
    }
    if(screenWidth < imgWidth) {
       imgWidth = screenWidth - screenWidth/20; // Change image width to 95% of screen width       
       imgHeight = imgWidth/aspect;
       imgElem.setAttribute("width",imgWidth);
    }
    if(screenHeight < imgHeight) {
       imgHeight = screenHeight - screenHeight/20;
       imgWidth = imgHeight * aspect;
       imgElem.setAttribute("width",imgWidth);
    }
    imgElem.setAttribute("style","margin-left: " + (screenWidth - imgWidth)/2 + "px");
    imgElem.setAttribute('style', imgElem.getAttribute('style')+"; margin-top: " + (screenHeight - imgHeight)/2 + "px");
  }
  
}

function svgPan(e) {
    var imgObj = document.getElementById('overlayImage');
    x = e.clientX;
    y = e.clientY;
    translateImage(imgObj, x - prevX, y - prevY);
}

/*End: JS for displaying the image in lightbox*/

var copy_visibility = false;           
function showcopyright() {
  if(copy_visibility) {
      document.getElementById("copyright_table").style.display = "none";
      copy_visibility = false;
      document.getElementById("uparrow").style.display = "none";
      document.getElementById("downarrow").style.display = "inline-block";
  }
  else {
      document.getElementById("copyright_table").style.display = "inline-block";
      copy_visibility = true;
      document.getElementById("downarrow").style.display = "none";
      document.getElementById("uparrow").style.display = "inline-block";
  }
}

function showLegal()
{
    window.scrollTo(0, document.body.scrollHeight);
}


/*Start: JS to Show/Hide TOC for documents in Web Help */
var show_toc = false;
function show_hide_TOC() {
var TOC=document.getElementById("toc0");
  if (show_toc) {
    TOC.style.display="none";
    document.getElementById("ce_i1_0").setAttribute("style", "display:none");
    document.getElementById("ce_i2_0").setAttribute("style", "display:inline");
    show_toc = false;
  } else {
    TOC.style.display="inline";
    document.getElementById("ce_i1_0").setAttribute("style", "display:inline");
    document.getElementById("ce_i2_0").setAttribute("style", "display:none");
    show_toc = true;
  }
}

function searchCol(colNum,event) {
    if (event.keyCode !== 13) {
        return;
    }
    colNum = parseInt(colNum);
    var input, filter, table, tr, td, i, txtValue;
    if(document.getElementById("pmTable"))
		pmTable = document.getElementById("pmTable");
	if(pmTable.getElementsByTagName('tr'))
		rowsinPM = pmTable.getElementsByTagName('tr');
	if(rowsinPM)
		theadRow = rowsinPM[0];
	
	if(colNum == 3)
	{
		if(document.getElementById("filters4"))
			document.getElementById("filters4").value = "";
		if(document.getElementById("filters5"))
			document.getElementById("filters5").value = "";
	}
	if(colNum == 4)
	{
		if(document.getElementById("filters3"))
			document.getElementById("filters3").value = "";
		if(document.getElementById("filters5"))
			document.getElementById("filters5").value = "";
	}
	if(colNum == 5)
	{
		if(document.getElementById("filters5"))
			document.getElementById("filters3").value = "";
		if(document.getElementById("filters5"))
			document.getElementById("filters4").value = "";
	}
	
    var filters0 = document.getElementById('filters0').value;
    var filters1 = document.getElementById('filters1').value;
    var filters2 = document.getElementById('filters2').value;
	
    myFunction2(filters2,2)
	
	
	
    var filters3 = document.getElementById('filters3').value;
    var filters4 = document.getElementById('filters4').value;
	var filters5;
	if(document.getElementById('filters5'))
	{ 
		filters5 = document.getElementById('filters5').value;
	}
	
    var filterval= "";
    var colsSelected = "";
    if(filters0 && filters0 != "Show All")
        colsSelected = colsSelected + "0|";
    if(filters1 && filters1 != "Show All")
        colsSelected = colsSelected + "1|";
    if(filters2 && filters2 != "Show All")
        colsSelected = colsSelected + "2|";
    if(filters3)
        colsSelected = colsSelected + "3|";
    if(filters4)
        colsSelected = colsSelected + "4|";
	if(document.getElementById('filters5')){ 
		if(filters5){
			colsSelected = colsSelected + "5|";}
	}
    var cols = colsSelected.split("|");
	
	if(document.getElementById('filters5'))
	{ 
		if(filters3 == "" && filters4 == "" && filters5 == "") 
		{
			myFunction2(filters2,2);
			return;
		}
	}
	else 
	{
		if(filters3 == "" && filters4 == "") 
		{
			myFunction2(filters2,2);
			return;
		}
	}
    		
    for (i = 1; i < rowsinPM.length; i++) {
      if(rowsinPM[i].style.display == "table-row"){ 
      var tobeHidden = 0;    
      for (col = 0; col < cols.length - 1; col++) {
        var td = rowsinPM[i].getElementsByTagName("td")[cols[col]];
        filCol = "filters" + cols[col];
        filter = document.getElementById(filCol).value;
        
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue = txtValue.toUpperCase().trim();
          filter = filter.toUpperCase().trim();
          if (txtValue.indexOf(filter) >= 0){
              tobeHidden = 0;
          }
          else {
            tobeHidden = 1;
          }
        }
        else {
            tobeHidden = 1;
        }
      }
      if (tobeHidden) {
        rowsinPM[i].style.display = "none";
        dis_style = "none";
      } else {
        rowsinPM[i].style.display = "table-row";
        dis_style = "table-row";
      }
      if( rowsinPM[i].cells.length >= 6 ){
        parent_style = dis_style;//none
       }else{
           rowsinPM[i].style.display = parent_style;
       }
      }
    }

    // if(cols.indexOf(3) >= 0 && cols.indexOf(4) >= 0) filtercolumn1(2);
    // filtercolumn1(1);
    // filtercolumn1(0);
}
/*End: JS to Show/Hide TOC for documents in Web Help */

/*Start: JS for Tables sorting in DITA documents*/
var sorted_cols = []; //Stack of sorted column ids
function dxp_sort(clicked_col,typeOfSort)
{
    var sOrd = 0, j;
    var tblRow;
	var tbody_orig=findParent(clicked_col,"TABLE").getElementsByTagName("tbody")[0];
    var tblArray = [];
    var rows_orig = tbody_orig.rows;
    var tbody_tmp = tbody_orig.cloneNode(true);
    var tbl_rows = tbody_tmp.rows;
    var tbl_rw_len = tbl_rows.length;
    var sc_len = sorted_cols.length;
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var col = column_no(clicked_col);
    if( msie > 0 )
    {
        if(ua[msie+5] != '1') 
        {
            alert("Table sorting feature is disabled in this web browser(IE9). Please upgrade your browser to use this feature");
            return;
        }
    }
    
    if(clicked_col) {
        if(sc_len == 0){ //List is empty create first node
            sorted_cols[sc_len] = [];
            sorted_cols[sc_len][0] = clicked_col;
            sorted_cols[sc_len][1] = 1;
            sOrd = 1;
        }
        else {
            for(var j=0;j < sc_len;j++) {
                //Toggle the sort order for sorted columns
                if(sorted_cols[j][0] === clicked_col) {
                    sOrd = sorted_cols[j][1];
                    sOrd = sOrd * (-1);
                    sorted_cols[j][1] = sOrd;
                    break;
                }
                //Column clicked from sorted table, remove old column and add new column id
                if(tbody_tmp === (findParent(sorted_cols[j][0],"TABLE").getElementsByTagName("tbody")[0])) {
                    sorted_cols[j][0] = clicked_col;
                    sorted_cols[j][1] = 1;
                    sOrd = 1;
                    break;
                }
                //New table entry, add to list
                else if((j+1) == sc_len) {
                    sorted_cols[sc_len] = [];
                    sorted_cols[sc_len][0] = clicked_col;
                    sorted_cols[sc_len][1] = 1;
                    sOrd = 1;
                    break;
                }
            }
        }
    }
    else {
        return;
    }

    var no_of_cols=findParent(clicked_col,"TR").getElementsByTagName("th").length;// # Of columns in table header

    for (tblRow = 0; tblRow < tbl_rw_len; tblRow++) {
        if(no_of_cols != tbl_rows[tblRow].cells.length) { //Check if the row have same #of columns as header
            return;
        }
        tblArray[tblRow] = tbl_rows[tblRow];
    }

    tblArray.sort(function (a, b) {
        if(typeOfSort=="a") {
            var Xa = flCellCont(a.cells[col]);
            var Xb = flCellCont(b.cells[col]);
        
            if(Xa == Xb) {
                return 0;
            }
            else {
                if(Xa > Xb) {
                    return 1 * sOrd;
                }
                else {
                    return  -1 * sOrd;
                }
            }
        }
        else if(typeOfSort=="an") {
            var Xa = (a.cells[col]).textContent;
            Xa=Xa.toUpperCase();
            var Xb=(b.cells[col]).textContent;
            Xb=Xb.toUpperCase();
            var aA = Xa.replace(/[^a-zA-Z]/g, "");
            var bA = Xb.replace(/[^a-zA-Z]/g, "");
            if (aA === bA) {
                var aN = parseInt(Xa.replace(/[^0-9]/g, ""), 10);
                var bN = parseInt(Xb.replace(/[^0-9]/g, ""), 10);
                aN=/\d/.test(aN) ? aN : 0;
                bN=/\d/.test(bN) ? bN : 0;
                if(aN === bN ) {
                    if(Xa == Xb) {
                        return 0;
                    }
                    else {
                        if(Xa > Xb) {
                            return 1 * sOrd;
                        }
                        else {
                            return  -1 * sOrd;
                        }
                    }
                }
                else {
                    if(aN > bN ) {
                        return 1 * sOrd ;
                    }
                    else {
                        return -1 * sOrd;
                    }
                }
            } 
            else {
                return aA > bA ?( 1 * sOrd ):( -1 * sOrd);
            }
            
            
        }
        else {
            var Xa = (a.cells[col]).textContent;
            var Xb=(b.cells[col]).textContent;
            if(isNaN(Xa) && isNaN(Xb)) {
                Xa = Xa.toUpperCase();
                Xb = Xb.toUpperCase();
        
                if(Xa == Xb) {
                    return 0;
                }
                else {
                    if(Xa > Xb) {
                        return 1 * sOrd;
                    }
                    else {
                        return  -1 * sOrd;
                    }
                }
            }
            else {
                var aA=Xa.replace(/[^\.\-\+\d]/g,"");
                var bA=Xb.replace(/[^\.\-\+\d]/g,"");
            
                var aval = /\d/.test(aA) ? parseFloat(aA) : 0;
                var bval = /\d/.test(bA) ? parseFloat(bA) : 0;
                if(aval==bval) {
                    return 0;
                }
                else {
                    if(aval > bval) {
                        return 1 * sOrd;
                    }
                    else {
                        return  -1 * sOrd;
                    }
                }
            }
        }
    }
    );

    for (tblRow = 0; tblRow < tbl_rw_len; tblRow++) {
        rows_orig[tblRow].innerHTML = tblArray[tblRow].innerHTML;
        rows_orig[tblRow].setAttribute("valign", tblArray[tblRow].getAttribute("valign"));
    }
   dxp_changeicon(clicked_col,sOrd);
}

function dxp_changeicon(clicked_col,ord) {
     var thead_node=findParent(clicked_col,"TR");
     var th_arr = thead_node.getElementsByTagName("th");
     for(var i = 0; i < th_arr.length;i++) {
      var imgs=th_arr[i].getElementsByTagName("img");
      if(imgs.length>=2) {
       imgs[imgs.length-2].style.opacity=".2";
       imgs[imgs.length-1].style.opacity=".2";
      }
    }
  var img_arr=clicked_col.getElementsByTagName("img");
  var up_arrow=img_arr[img_arr.length-2];
  var down_arrow=img_arr[img_arr.length-1];
  if(ord ==1) {
      up_arrow.style.opacity="1";
  }
  else {
    down_arrow.style.opacity="1";
  }
}

function column_no(clmn)
{
    var col_count=0;
    var tmp_clicked=clmn.parentNode;
    console.log(tmp_clicked);
    while(tmp_clicked.previousElementSibling!=null)
    {
        tmp_clicked=tmp_clicked.previousElementSibling;
        col_count++;
    }
    return col_count;
}

function findParent(node,tag)
 {
	el = node;
	while (el.parentNode)
	{
		el = el.parentNode;
		if (el.tagName === tag.toUpperCase())
			return el;
	}
	return null;
}
