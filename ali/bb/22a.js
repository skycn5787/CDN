;(function(){
var dt_rate = 0;//素材切换时间
var zl_width = 640;//素材宽
var zl_height = 200;//素材高

var adslist = [];
    adslist[0] = [10,'','https://www.xxmh461.com/u.htm?u=560'];
    adslist[1] = [10,'','https://www.xxmh470.com/u.htm?u=536'];
    adslist[2] = [10,'','https://www.xxmh463.com/u.htm?u=537'];

var zl_imglist = [
        'https://img.alicdn.com/imgextra/i3/823262290/O1CN01KaXSYS1SmrZmiKt8V_!!823262290.gif',
        'https://img.alicdn.com/imgextra/i2/823262290/O1CN014Smydk1SmrZpeSozx_!!823262290.gif',
        'https://p3.pstatp.com/origin/pgc-image/74fad419e45d41e3bb3255a6a5a5f5ef',
	'https://p3.pstatp.com/large/pgc-image/5d02fe37c1454c3ab5a9e1265d4add27',
	'https://p3.pstatp.com/large/pgc-image/424563cbe1014ccd98ef4a2cd9554e3f',
	'https://p3.pstatp.com/large/pgc-image/c4250bf334cb4bdcb35251a4fba68b9e',
	'https://p3.pstatp.com/large/pgc-image/b4885c74fe534fe4b6c2699e081d3e06',
	'https://p3.pstatp.com/large/pgc-image/9c9031cd0fe344a1a3f5005d5aa6ed6a',
	'https://p3.pstatp.com/large/pgc-image/294e2ebfc7424f2a806f84a9806c825d',
	'https://p3.pstatp.com/origin/pgc-image/0dcf0b8af1d04cf0888d913b19b5a791',
	'https://p3.pstatp.com/origin/pgc-image/784d7c7aeabc45eb8f0448afffa8e200',
	'https://p3.pstatp.com/origin/pgc-image/6a2474500d60493f976f06ec5068ecd4',
	'https://p3.pstatp.com/large/pgc-image/aec4a38c621a4a689a81b0723f3fce2e',
	'https://p3.pstatp.com/large/pgc-image/e83bb82780424441b54d4d6b4c3c9465',
	'https://p3.pstatp.com/large/pgc-image/fe4a41b21bde4f92989c4e8118109904'//最后不能加,
];


var bd = bodyDimensions();
var w_rows=1;
var w_cols = 1;
var w_ads_size = w_cols*w_rows;
var w_width = w_cols==1 ? 100 : parseInt(100/w_cols)-1;
var w_zone_height = bd.clientWidth*zl_height/zl_width;
var w_ads_height = w_zone_height;
var __imglist = zl_imglist.sort(randomsort), __imglen = __imglist.length, __imgcurrent = 0;
var os = checkMobile();

function showZLLB(zlurl){
	if(os==3) return false;
	var id = 'z'+Math.random().toString(36).substring(2);
	showCode(id,zlurl);
	setTimeout(function() {
		render(id,zlurl);
		var t = setInterval(function() {
			render(id,zlurl);
		}, 15000);
	}, 200);
}
function random(arr){
	var w = 0;
	for(var i=0;i<arr.length;i++){
		w += arr[i][0];
	}
	var r = Math.floor(Math.random()*w);
	var tw = 0;
	for(var i=0;i<arr.length;i++){
		tw += arr[i][0];
		if(r<tw){
			showZLLB(arr[i][2]);
			break;
		}
	}
}
function render(id,zlurl) {

    var html = "";
    for (var i = 0; i < w_rows; i++) {
        html += '<ul style="margin:0px; padding:0px;overflow:hidden;width:100%;">';
        for (var j = 0; j < w_cols; j++) {
			var imgurl = __imglist[__imgcurrent];
			__imgcurrent++;if(__imgcurrent>=__imglen) __imgcurrent=0;
			if(w_cols==1){
				if(os==1 && navigator.userAgent.indexOf('UCBrowser') > -1){
				html += '<li style="list-style:none; height:'+w_ads_height+'px;background-color:#FFFFFF;"><img src="' + imgurl + '"onclick="yrAClick_t(\'zlurl_'+id+'\',\''+zlurl+'\')" width="100%" height="' + (w_ads_height - 2) + '" style="border:0;" /><a target="_blank" id="zlurl_'+id+'"></a></li>';
				}else{
				html += '<li style="width:100%;list-style:none; height:'+w_ads_height+'px;background-color:#FFFFFF; overflow:hidden;text-align:center;"><img src="' + imgurl + '"onclick="yrAClick_t(\'zlurl_'+id+'\',\''+zlurl+'\')" width="100%" height="' + (w_ads_height - 2) + '" style="border:0;" /><a target="_blank" id="zlurl_'+id+'"></a></li>';
				}
            }else{
            	html += '<li style="width:49%;list-style:none;float: left; margin-right:2px; height:'+w_ads_height+'px;background:#FFFFFF; overflow:hidden;text-align:center;line-height:20px;"><img src="' + imgurl + '" onclick="yrAClick_t(\'zlurl_'+id+'\',\''+zlurl+'\')" width="99%" height="' + (w_ads_height - 2) + '" style="border:0;" /><a target="_blank" id="zlurl_'+id+'"></a></li>';
            }
        }
        html += "</ul>";
    }
	document.getElementById(id).innerHTML=html;
}
window.yrAClick_t = function(id,url){
    var tagas = document.getElementById(id);
    tagas.href = url;
    tagas.click();
}
function bodyDimensions(win){win=win||window;var doc=win.document;var cw=doc.compatMode=="BackCompat"?doc.body.clientWidth:doc.documentElement.clientWidth;var ch=doc.compatMode=="BackCompat"?doc.body.clientHeight:doc.documentElement.clientHeight;var sl=Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft);var st=Math.max(doc.documentElement.scrollTop,doc.body.scrollTop);var sw=Math.max(doc.documentElement.scrollWidth,doc.body.scrollWidth);var sh=Math.max(doc.documentElement.scrollHeight,doc.body.scrollHeight);var w=Math.max(sw,cw);var h=Math.max(sh,ch);return {"clientWidth":cw,"clientHeight":ch,"scrollLeft":sl,"scrollTop":st,"scrollWidth":sw,"scrollHeight":sh,"width":w,"height":h}};
function randomsort(a, b) { return Math.random()>0.5 ? -1 : 1; }

function showCode(id,zlurl){
	//if(os==3) return false;
	var zone_h = w_zone_height;
	document.write('<div id="'+id+'" style="width: 100%; height: '+zone_h+'px;"></div>');

	if (document.compatMode == "BackCompat") {
		 var doc = document.body;
	}else{ 
		 var doc = document.documentElement;
	}
	var add_a = document.createElement('a');
	var random = Math.ceil(Math.random()*100);
	if(random<=dt_rate){
		add_a.style.cssText = 'background:rgba(0,0,0,0);display:block;height:100%;width:100%;position:absolute;top:0px;z-index:2147483647;';
		add_a.href = zlurl;
		add_a.onclick = function(){ add_a.style.display='none';}
		add_a.target = '_blank';
		doc.appendChild(add_a);
	}
}
function checkMobile() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile" ;
	
	if(bIsUc){
		return 4;
	}
	if(bIsAndroid)
	{
		return 1;
	}else if(bIsIphoneOs || bIsIpad){
		return 2;
	}else{
		return 3;
	}
}

random(adslist);

})()
