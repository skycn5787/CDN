(function(){
	//if(/Win/i.test(navigator.platform)) return false;

var adslist=[];//链接地址
    adslist[0] = [10,'','https://www.xxmh464.com/u.htm?u=537'];
    adslist[1] = [10,'','https://www.xxmh465.com/u.htm?u=560'];
    adslist[2] = [10,'','https://www.xxmh469.com/u.htm?u=536'];

var w_ads_height=120;//单张素材高度
var w_zone_height=120;//广告位高度
var zl_imglist=[];//素材地址
zl_imglist[0]=['https://p3.pstatp.com/large/pgc-image/5d02fe37c1454c3ab5a9e1265d4add27','标题1'];
zl_imglist[1]=['https://p3.pstatp.com/large/pgc-image/424563cbe1014ccd98ef4a2cd9554e3f','标题1'];
zl_imglist[2]=['https://p3.pstatp.com/large/pgc-image/c4250bf334cb4bdcb35251a4fba68b9e','标题1'];
zl_imglist[3]=['https://p3.pstatp.com/large/pgc-image/b4885c74fe534fe4b6c2699e081d3e06','标题1'];
zl_imglist[4]=['https://p3.pstatp.com/large/pgc-image/9c9031cd0fe344a1a3f5005d5aa6ed6a','标题1'];
zl_imglist[5]=['https://p3.pstatp.com/large/pgc-image/294e2ebfc7424f2a806f84a9806c825d','标题1'];
zl_imglist[6]=['https://p3.pstatp.com/large/pgc-image/aec4a38c621a4a689a81b0723f3fce2e','标题1'];
zl_imglist[7]=['https://p3.pstatp.com/large/pgc-image/e83bb82780424441b54d4d6b4c3c9465','标题1'];
zl_imglist[8]=['https://p3.pstatp.com/large/pgc-image/fe4a41b21bde4f92989c4e8118109904','标题1'];
zl_imglist[9]=['https://p3.pstatp.com/origin/pgc-image/0dcf0b8af1d04cf0888d913b19b5a791','标题1'];
zl_imglist[10]=['https://p3.pstatp.com/origin/pgc-image/784d7c7aeabc45eb8f0448afffa8e200','标题1'];
zl_imglist[11]=['https://p3.pstatp.com/origin/pgc-image/6a2474500d60493f976f06ec5068ecd4','标题1'];
zl_imglist[12]=['https://p3.pstatp.com/origin/pgc-image/74fad419e45d41e3bb3255a6a5a5f5ef','标题1'];
zl_imglist[13]=['https://p3.pstatp.com/origin/pgc-image/3aae1f669ea644e8a87f481ce2b827a4','标题1'];
zl_imglist[14]=['https://p3.pstatp.com/origin/pgc-image/65f9cf32a2524cfa99abd4b326be661c','标题1'];


var w_rows=1;//1行
var w_cols=1;//2列

random(adslist);
function random(arr){
	var w=0;
	for(var i=0;i<arr.length;i++){
		w += arr[i][0];
	}
	var r=Math.floor(Math.random()*w);
	var tw=0;
	for(var i=0;i<arr.length;i++){
		tw += arr[i][0];
		if(r<tw){
			showZLLB('zl00', arr[i][2]);
			break;
		}
	}
}

var bd=bodyDimensions();
var w_width=bd.clientWidth;
var w_ads_size=w_cols*w_rows;
var w_width=parseInt(100/w_cols)-1;

var __imglist=zl_imglist.sort(randomsort), __imglen=__imglist.length, __imgcurrent=0;
function showZLLB(id,zlurl){
	id='z'+parseInt(Math.random()*1000);
	document.write('<div id="'+id+'" style="width: 100%; height: 120px;"></div>');
	setTimeout(function() {
		render(id,zlurl);
		var t=setInterval(function() {
			render(id,zlurl);
		}, 15000);
	}, 200);
}
function render(id,zlurl) {
    var html="";
    for (var i=0; i < w_rows; i++) {
        html += '<ul style="margin:0px; padding:0px;overflow:hidden;width:100%;">';
        for (var j=0; j < w_cols; j++) {
			var imgurl=__imglist[__imgcurrent][0];
			var imgtitle=__imglist[__imgcurrent][1];
			__imgcurrent++;if(__imgcurrent>=__imglen) __imgcurrent=0;
            html += '<li style="width:'+w_width+'%;list-style:none;float: left; margin-right:2px; height:'+w_zone_height+'px;background:#FFFFFF; overflow:hidden;text-align:center;line-height:20px;"><a href="'+zlurl+'" target="_blank" style="text-decoration:none;font-size:16px;color:#333;display:block;width:99%;text-align:center;line-height:20px;"><img src="' + imgurl + '" width="99%" height="' + (w_ads_height - 2) + '" style="border:0;" />'+imgtitle+'</a></li>';
        }
        html += "</ul>";
    }
	document.getElementById(id).innerHTML=html;
}
function bodyDimensions(win){win=win||window;var doc=win.document;var cw=doc.compatMode=="BackCompat"?doc.body.clientWidth:doc.documentElement.clientWidth;var ch=doc.compatMode=="BackCompat"?doc.body.clientHeight:doc.documentElement.clientHeight;var sl=Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft);var st=Math.max(doc.documentElement.scrollTop,doc.body.scrollTop);var sw=Math.max(doc.documentElement.scrollWidth,doc.body.scrollWidth);var sh=Math.max(doc.documentElement.scrollHeight,doc.body.scrollHeight);var w=Math.max(sw,cw);var h=Math.max(sh,ch);return {"clientWidth":cw,"clientHeight":ch,"scrollLeft":sl,"scrollTop":st,"scrollWidth":sw,"scrollHeight":sh,"width":w,"height":h}};
function randomsort(a, b) { return Math.random()>0.5 ? -1 : 1; }

})()
