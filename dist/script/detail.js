"use strict";!function(o){var i=location.search.substring(1).split("=")[1],l=o("#smallpic"),c=o("#bpic"),e=o(".loadtitle"),r=o(".loadpcp"),i=i||1;o.ajax({url:"http://localhost/nz1903item/php/getsid.php",data:{sid:i},dataType:"json"}).done(function(i){console.log(i),l.attr("src",i.url),l.attr("sid",i.sid),c.attr("src",i.url),e.html(i.title),r.html(i.price),console.log(i.piclisturl.split(","));var t=i.piclisturl.split(","),s="";o.each(t,function(i,t){s+='<li><img src="'+t+'"/>></li>'}),o("#list ul").html(s)});var n=o("#spic"),h=o("#sf"),t=o("#bf"),s=o("#left"),a=o("#right");o("#list");h.width(n.width()*t.width()/c.width()),h.height(n.height()*t.height()/c.height());var d=c.width()/n.width();n.hover(function(){h.css("visibility","visible"),t.css("visibility","visible"),o(this).on("mousemove",function(i){var t=i.pageX-o(".goodsinfo").offset().left-h.width()/2,s=i.pageY-o(".goodsinfo").offset().top-h.height()/2;t<0?t=0:t>=n.width()-h.width()&&(t=n.width()-h.width()),s<0?s=0:s>=n.height()-h.height()&&(s=n.height()-h.height()),h.css({left:t,top:s}),c.css({left:-t*d,top:-s*d})})},function(){h.css("visibility","hidden"),t.css("visibility","hidden")}),o("#list ul").on("click","li",function(){var i=o(this).find("img").attr("src");l.attr("src",i),c.attr("src",i)});var p=6;a.on("click",function(){var i=o("#list ul li");i.size()>p&&(p++,s.css("color","#333"),i.size()==p&&a.css("color","#fff"),o("#list ul").animate({left:-(p-6)*i.eq(0).outerWidth(!0)}))}),s.on("click",function(){var i=o("#list ul li");6<p&&(p--,a.css("color","#333"),p<=6&&s.css("color","#fff"),o("#list ul").animate({left:-(p-6)*i.eq(0).outerWidth(!0)}))});var u=[],f=[];o(".p-btn a").on("click",function(){var i,t=o(this).parents(".goodsinfo").find("#smallpic").attr("sid");f=o.cookie("cookiesid")&&o.cookie("cookienum")?(u=o.cookie("cookiesid").split(","),o.cookie("cookienum").split(",")):(u=[],[]),-1!=o.inArray(t,u)?(i=parseInt(f[o.inArray(t,u)])+parseInt(o("#count").val()),f[o.inArray(t,u)]=i):(u.push(t),o.cookie("cookiesid",u,{expires:10,path:"/"}),f.push(o("#count").val())),o.cookie("cookienum",f,{expires:10,path:"/"}),alert("按钮触发了")})}(jQuery);