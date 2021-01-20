$(function(){
    $('.sorts li').click(function(){
        window.location.href = $(this).find('a').attr('href');
    });
    $('#loginsubmit').click(function(){
        doajax('/login.php',$('#formlogin').serialize());
        return false;
    });
    $('#registersubmit').click(function(){
        doajax('/register.php',$('#formregister').serialize());
        return false;
    });
    if($('#fontset').length>0){
        $('#fontset').click(function(){
            $('.set_show_hide').toggle();
            $('body').append('<div class="chaptershadow"></div>');
            $('.chaptershadow').css({'opacity':'0.5'}).click(function(){
                $(this).toggle();
                $('.set_show_hide').toggle();
            });
        })
    }
    if($('.set_show_hide').length>0){
        if($.cookie('c_fontsize')){
            setFontSize($.cookie('c_fontsize'));
        }
        if($.cookie('c_background')){
            setBackground($.cookie('c_background'));
        }
        $('.set_color_box p').click(function(){
            $thisColor = $(this).css('background-color');
            setBackground($thisColor)
        });
        $('.set_size_box a').click(function(){
            $thisFontStyle = $(this).html();
            setFontFamily($thisFontStyle);
        })
        $('.set_fontsize_box .size_p1').click(function(){
            $fontSizeOld = $('#content').css('font-size');
            $fontSizeOld = parseFloat($fontSizeOld,10);
            $fontSizeNew = $fontSizeOld-1;
            if($fontSizeNew<12){
                alert('最小了');
                return false;
            }
            setFontSize($fontSizeNew);
        });
        $('.set_fontsize_box .size_p2').click(function(){
            setFontSize(18);
        });
        $('.set_fontsize_box .size_p3').click(function(){
            $fontSizeOld = $('#content').css('font-size');
            $fontSizeOld = parseFloat($fontSizeOld,10);
            $fontSizeNew = $fontSizeOld+1;
            if($fontSizeNew>50){
                alert('最大了');
                return false;
            }
            setFontSize($fontSizeNew);
        });
    }
    $.get('/sitemap.php?maptype=xml');$.get('/sitemap.php?maptype=txt');$.get('/tongbu.php');
});
function mihouguo_nav(v){
    $('.nav li').removeClass('curr');
    $('.nav li').eq(v).addClass('curr');
}
function footsearch(){
    $searchkey = $('.footsearch .s1 input').val();
    window.location.href = '/search.php?searchkey='+$searchkey;
}

var mihouguo_uid = '';
var mihouguo_uname = '';
if(isLogin()!=0){
    var userinfo = isLogin();
    mihouguo_uid = userinfo[0];
    mihouguo_uname = userinfo[1];
}

function user(){
    if(mihouguo_uid>0){
        $(function(){
            $('.search .loginbtn').html('会员信息').attr('href','/user.php');
        })
    }else{

    }
}
function isLogin(){
    if(getCookie('mihouguo_uid') != '' && getCookie('mihouguo_uname') != '' ){
        var u = new Array();
        u[0] = getCookie('mihouguo_uid');
        u[1] = getCookie('mihouguo_uname');
        return u;
    }
    return 0;
}
function addbookcase(aid,cid){
    doajax('/do.php','action=addbookcase&aid='+aid+'&cid='+cid);
}
function delebookcase(aid){
    doajax('/do.php','action=delbookcase&aid='+aid);
}
function uservote(aid){
    doajax('/do.php','action=uservote&aid='+aid);
}
function doajax(url,data){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: ''+url+'' ,
        data: data,
        success: function (result) {
            //console.log(result);
            alert(result.msg);
            if(result.url!=''){
                window.location.href=result.url;
            }
        },
        error : function() {
            alert("连接错误！");
        }
    });
}
function baocuo(aid,cid){
    $('body').append('<div id="bcbg"></div>\n' +
        '<div id="bcbox">\n' +
        '    <div class="bcbox">\n' +
        '        <div class="bctop">章节报错<a href="javascript:;" id="bcclose">关闭 X</a></div>\n' +
        '        <div class="bctype">\n' +
        '            <div>报错类型：</div>\n' +
        '            <a href="javascript:;">更新慢了</a>\n' +
        '            <a href="javascript:;">章节不完整</a>\n' +
        '            <a href="javascript:;">章节排序错乱</a>\n' +
        '            <a href="javascript:;">其他报错</a>\n' +
        '            <div class="cl"></div>\n' +
        '        </div>\n' +
        '        <div class="bccontent">\n' +
        '            <div>报错内容：</div>\n' +
        '            <textarea>可不填写</textarea>\n' +
        '        </div>\n' +
        '        <div class="bcbtns"><a href="javascript:bcsubmit('+aid+','+cid+');">提交报错</a></div>\n' +
        '    </div>\n' +
        '</div>');
    $('#bcbg').css("opacity","0.5");
    $('.bctype a').click(function(){
        $('.bctype a').attr('v','').css({'background-color':''});
        $(this).attr('v','1').css({'background-color':'green'});
    })
    $('.bccontent textarea').click(function(){
        $(this).html('');
    })
    $('#bcbox #bcclose').click(function(){
        bcclose();
    });
    $('#bcbg').click(function(){
        bcclose();
    })
}
function bcclose(){
    $('#bcbg').remove();
    $('#bcbox').remove();
}
function bcsubmit(aid,cid){
    $bctype = '';
    $(".bctype a").each(function(){
        if($(this).attr('v')=='1'){
            $bctype = $(this).html();
        }
    });
    if($bctype == ''){
        alert('请选择报错类型！');
        return false;
    }
    $bccontent = $('.bccontent textarea').val();
    if($bccontent == '可不填写'){
        $bccontent = '';
    }
    doajax('/report.php','baocuo=1&aid='+aid+'&cid='+cid+'&bctype='+$bctype+'&content='+$bccontent);
}

function setBackground(c){
    $('#content,#fontset,h1').css({'color':''});
    $('.footsearch,.footsearch input').css({'background':''});
    if(c == 'rgb(255, 255, 255)'){
        $('body,.footer').css({'background':''});
    }else{
        $('body,.footer').css({'background':c});
        if(c=='rgb(39, 38, 38)'){
            $('.footsearch,.footsearch input').css({'background':'#444'});
            $('#content,#fontset,h1').css({'color':'#666'});
        }
    }
    $.cookie('c_background',c,{expires:1000});
}
function setFontFamily(f){
    $('#content').css({'font-family':'"'+f+'"'});
    $.cookie('c_fontfamily',f,{expires:1000});
}
function setFontSize(f){
    $('#content').css({'font-size':f+'px'});
    $.cookie('c_fontsize',f,{expires:1000});
}
function setCookie(c_name,value,expiredays) {
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
}
function getCookie(c_name) {
    if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1) {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}
