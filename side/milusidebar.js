function milusidebar(setting) {
    var c = {
        "names": "麋鹿鲁哟",
        "notice": '<b>温馨提示</b><span><a href="https://github.com/miluluyo/cute-cnblogs" target="_black">cute-cnblogs</a> &nbsp;样式已开源</span><b style="margin-top: 3px;"><a style="font-size:10px" href="https://www.cnblogs.com/IsAlpaca/" target="_black">查看一期样式</a></b>',
        "headerUrl": "https://images.cnblogs.com/cnblogs_com/miluluyo/1765646/o_200519075219notice5.png",
        "follow": "a1e76459-101d-47af-a8b6-08d523685c8c",
        "sidebarInfo": [
            [{
                "icon": "#icon-github1",
                "url": "https://github.com/miluluyo",
                "title": "github"
            }, {
                "icon": "#icon-weixin",
                "url": "",
                "title": "微信",
                "classname": "popper_weixin",
                "click": false
            }, {
                "icon": "#icon-QQ",
                "url": "http://wpa.qq.com/msgrd?v=3&uin=978761587&site=qq&menu=yes",
                "title": "QQ"
            }, {
                "icon": "#icon-juejin",
                "url": "https://juejin.im/user/5d18adce5188256e98090e33",
                "title": "掘金"
            }],
            [{
                "icon": "#icon-weibobangding",
                "url": "https://www.weibo.com/6001406082/profile?topnav=1&wvr=6",
                "title": "微博"
            }, {
                "icon": "#icon-csdn",
                "url": "https://blog.csdn.net/qq_39394518",
                "title": "CSDN"
            }, {
                "icon": "#icon-bilibili",
                "url": "https://space.bilibili.com/100007925",
                "title": "bilibili"
            }, {
                "icon": "#icon-yuquemianlogo",
                "url": "https://www.yuque.com/miluluyo",
                "title": "语雀"
            }]
        ],
        "signature": "靡不有初  鲜克有终",
        "popper_weixin": '<div class="popper_box"><p><b>很高兴认识你鸭~  (づ｡◕ᴗᴗ◕｡)づ</b> </p><div class="popper_box_con"><div class="popper_box_con_li"><img src="https://images.cnblogs.com/cnblogs_com/miluluyo/1765646/o_200614064005qrcode.jpg" alt="">公众号：麋鹿鲁哟</div><div class="popper_box_con_li"><img src="https://images.cnblogs.com/cnblogs_com/miluluyo/1493340/t_wxh.jpg" alt="">微信号：s978761</div></div><p>（加我记得备注 博客园 喔）</div>',
        "portrait": "https://images.cnblogs.com/cnblogs_com/miluluyo/1765646/o_200515061851tx.jpg"
    };
    $.extend(c, setting);
    sidebar(c)
}

function sidebar(c) {
    $("#sidebar_news .catListTitle").text("个人信息");
    $("#sidebar_news .catListTitle").before('<h3 class="catListTitle">公告</h3><div style="background:url(' + c.headerUrl + ');height:150px;background-size: auto 150px;background-repeat: no-repeat;background-position:center;margin-bottom:10px"><p class="notice_title">' + c.notice + "<p></div>");
    var p_b_follow = $("#p_b_follow").html();
    $("#profile_block").before('<div class="attention" onclick="follow(\'' + c.follow + "')\"><span>+加关注</span></div>");
    var le = c.sidebarInfo.length;
    var sidebarInfoHtml = '<p class="catListTitle" style="font-weight:500;margin-top:10px;">' + c.names + '</p><table id="info_table" style="">';
    var sidebarInfo = c.sidebarInfo;
    for (var i = 0; i < le; i++) {
        sidebarInfoHtml += "<tr>";
        for (var j = 0; j < sidebarInfo[i].length; j++) {
            if (sidebarInfo[i][j].click == false) {
                sidebarInfoHtml += '<td><svg class="icon ' + sidebarInfo[i][j].classname + '" aria-hidden="true"><use xlink:href="' + sidebarInfo[i][j].icon + '"></use></svg></td>'
            } else {
                sidebarInfoHtml += '<td><a href="' + sidebarInfo[i][j].url + '" target="_black" title="' + sidebarInfo[i][j].title + '"><svg class="icon ' + sidebarInfo[i][j].classname + '" aria-hidden="true"><use xlink:href="' + sidebarInfo[i][j].icon + '"></use></svg></a></td>'
            }
        }
        sidebarInfoHtml += "</tr>"
    }
    sidebarInfoHtml += '</table><p class="catListTitle" style="margin-bottom:20px">' + c.signature + "</p>";
    $("#blog-news").append(sidebarInfoHtml);
    $("#blog-calendar").before('<h3 class="catListTitle">日历</h3>');
    tippy(".popper_weixin", {
        content: c.popper_weixin,
        theme: "tomato",
        allowHTML: true,
        animation: "scale",
        duration: 500,
        arrow: true,
        hideOnClick: "false",
        interactive: true
    });
    var portrait = '<div id="portrait"><img src="' + c.portrait + '" /></div>';
    $("#profile_block").before(portrait);
    var search = '<svg class="icon search_icon" aria-hidden="true" onclick="zzk_go()"><use xlink:href="#icon-sousuo"></use></svg >';
    $(".input_my_zzk").after(search);
    $(".input_my_zzk").eq(1).parent().find("svg").attr("onclick", "google_go()");
    $(".input_my_zzk").eq(0).attr("placeholder", "搜索关键词~");
    $(".input_my_zzk").eq(1).attr("placeholder", "谷歌内搜索~")
};