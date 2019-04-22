//应用于网址：
//http://pad.skyozora.com/ 任意页面
var monsterList = [
    {group: "攻击态势英雄",ids: [
        3917, //癸干忒斯巨斧
        3918, //幻想大剑
        3919, //库胡林的魔枪
        3920, //瓦尔奇琳刀&蔷薇之白盾
        3088, //神命姬神的装甲X龙唤士・安娜
        3921, //公爵斗篷
    ]},
    {group: "防龙",ids: [
        1090, //飓风火山龙
        1091, //爆烈极光龙
        1092, //热能大地龙
        1093, //龙卷圣光龙
        1094, //旋风恶魔龙
    ]},
    {group: "玩具龙",ids: [
        757, //灼爪龙・炽热火焰龙
        758, //穿鲛龙・巨型鲨鱼龙
        759, //角砦龙・堡垒三角龙
        760, //圣獣龙・天使妖精龙
        761, //道化龙・鬼魅小丑龙
    ]},
    {group: "魔剑士",ids: [
        2739, //转生烈火凤凰骑士・焰
        2740, //转生洪流魔狼骑士・神威
        2741, //转生太古龙骑士・零式
        2742, //转生苍天神骑士・帕杰
        2743, //转生浑沌龙骑士・绝音
    ]},
    {group: "希腊神话",ids: [
        1098, //试练刚神・海克力斯
        3329, //救蛇之钢星医・拉丝
    ]},
    {group: "北欧神话",ids: [
        2320, //觉醒娇德
        2639, //神胁的毒蛇・耶梦加得
        2893, //魂缚的黑冥姬・赫尔
    ]},
    {group: "埃及神话",ids: [
        3259, //隼护の冥蝎神・セルケト
    ]},
    {group: "日本神话",ids: [
        2805, //恶鬼的首领・酒呑童子
    ]},
    {group: "西游记",ids: [
        1248, //冥眼之龙僧・三藏法师
        3906, //活眼的龙僧・三藏法师
    ]},
    {group: "三国",ids: [
        1425, //决死燕将军・张飞
    ]},
    {group: "大天使",ids: [
        1848, //密命的天使・伊利雅
        2892, //开眼的瞑想神・圣德芬
        3600, //天界的书记官・以诺
    ]},
    {group: "魔神",ids: [
        1849, //忘却的死神・库利沙尔
        2894, //忠实的魔公子・恶梦丸
        3457, //不法的魔绅士・阿撒泻勒
    ]},
    {group: "名模",ids: [
        2263, //刻薄的冻冥魔・靛蓝魔女
    ]},
    {group: "妖精",ids: [
        3327, //妖精森之女王・蒂坦尼娅
    ]},
    {group: "三神面转生",ids: [
        2898, //神去的毒蛇・耶梦加得=重生
        3459, //邪教的魔绅士・阿撒泻勒
        3903, //魔星之神王妃・赫拉=尼克斯
        3834, //空都的守护神・阿西娜=赫利奥斯
        4013, //万天之全能神・宙斯=巴斯
        4286, //壞獄的魔神王・撒旦＝空虛
    ]},
    {group: "龙唤士&龙契士",ids: [
        1760, //最初之龙唤士・元始索妮亚
        2737, //最终之龙唤士・元始索妮亚=颠覆
    ]},
    {group: "华龙",ids: [
        3929, //史特灵裙
    ]},
    {group: "龙帝",ids: [
        1631, //天冥之星龙帝・迪科特
        2092, //爆天的刚龙帝・利夫尔布
        2277, //紫棘之霜龙帝・伊路希古斯
        2754, //虹翼之旋龙帝・舍份扎多
        3013, //岩鳞之海龙帝・迪埃托洛斯
        3245, //爆怒之铁龙帝・奈格鲁逹
    ]},
    {group: "龙王",ids: [
        3927, //零军刀&海贼龙王外套
        3928, //龙刀・零黑天双鬼
        1839, //雷天之顽龙王・盖洛多
        1841, //大弯之海龙王・沃尔松
        1843, //玻璃之风龙王・琳西亚
    ]},
    {group: "机神兵",ids: [
        2127, //光之机神将・天剑
        2128, //暗之机神将・炽岩
    ]},
    {group: "机械姬",ids: [
        2234, //觉醒貂思=机械姬
    ]},
    {group: "机械人",ids: [
        2987, //铁机王・正义之星
        2989, //鐵機帝・另一正義使者
        3015, //闘机王・自由之灵
        3017, //闘機帝・另一自由之靈
        3155, //闪机王・宇宙十字军
        3157, //閃機帝・另一宇宙十字軍
    ]},
    {group: "魔兽",ids: [
        4358, //灼林的魔獄獸・蠍獅
        4417, //輝山之魔原獣・大腳怪
        4419, //雲天の魔海獣・白鯨
    ]},
    {group: "克苏鲁神话",ids: [
        3638, //化身恶梦之物・克苏鲁
        3640, //化身无貌之物・奈亚拉托提普
        3642, //化身无形之物・阿撒托斯
    ]},
    {group: "里·极限竞技场",ids: [
        3829, //神视之狂天使・卡麦尔
        3832, //美貌之贤鬼・茨木童子
        3881, //幽姿的狂鬼・桥姬
    ]},
    {group: "宠物交换所",ids: [
        4897, //特洛伊的木馬
        4654, //主護之神馬・斯雷普尼爾
        4297, //冥黑神・拉＝龍
    ]},
    {group: "MP商店",ids: [
        5169, //好吃棒 龍味
        3910, //瞬刻的白龍喚士・索妮亞＝艾璐
        3330, //異刻之黑龍喚士・索妮亞
        3447, //火古龍的裝甲Ｘ龍喚士・安娜
        4577, //暗路守之玄武・美美
        4296, //帝國之守護神・雅典娜
        4429, //燈刻之時龍契士・美瑠
        3192, //煌雷神・赫拉龍
        3338, //炎柱的護衛神・阿蒙
        3340, //水柱的護衛神・姆特
        3342, //地柱的護衛神・孔斯
    ]},
    {group: "特别版角色（限时）：降临",ids: [
        3977, //燃烧荷鲁斯
        4226, //情人節巧克力【四神】
    ]},
    {group: "特别版角色（限时）：宠物交换所",ids: [
        5040, //闇夜之月龍喚士・皋月
        5222, //PAD學園的學生手冊
    ]},
    {group: "特别版角色（限时）：MP商店",ids: [
        2318, //琥珀的美公主・女武神葛雷婭
        3112, //休息的狙擊手・時龍契士 美瑠
        2407, //古城的女主神・迦梨
        3222, //紅蘭之黑魔女・尚美
        2512, //聖夜的赤龍喚士・索妮亞
        2533, //遊山的天舞神・天照大神
        2950, //疾走的新郎・赤龍契士 加狄烏斯
        4343, //樂隊的麒麟姬・朔夜
    ]},
    {group: "GungHo本家合作（限时）：降临",ids: [
        4723, //神機普路托斯的卡
    ]},
    {group: "GungHo本家合作（限时）：宠物交换所",ids: [
        4687, //SO135-阿蕾斯達
        4684, //豪武官田村麻呂的卡
    ]},
    {group: "GungHo本家合作（限时）：友情桶",ids: [
        4712, //破滅之化身堤豐的卡
        4713, //悲劇之姬海倫的卡
        4714, //半神之英雄海克力斯的卡
        4715, //白龍的卡
    ]},
    {group: "GungHo本家合作（限时）：MP商店",ids: [
        4686, //大海獸俄刻阿諾斯的卡
        4688, //黑白合
    ]},
    {group: "第三方合作-少年Magazine（限时）：降临",ids: [
        3629, //告知時代終結的黒龍・亞克諾羅基亞
        4444, //皮莫皮莫
    ]},
    {group: "第三方合作-最终幻想（限时）：降临",ids: [
        3804, //亚兹曼特
    ]},
    {group: "第三方合作-筋肉人（限时）：降临",ids: [
        3864, //筋肉族超人预言书
    ]},
    {group: "第三方合作-Duel Masters（限时）：降临",ids: [
        3990, //切札胜舞的特别牌组
    ]},
    {group: "第三方合作-Duel Masters（限时）：MP商店",ids: [
        3167, //蒼藍團長多吉龍劍
    ]},
    {group: "第三方合作-钢之炼金术师（限时）：降临",ids: [
        4050, //钢之炼金术师的银怀表
    ]},
    {group: "第三方合作-拳皇（限时）：降临",ids: [
        4120, //Neo Geo ROM卡带・KOF98
    ]},
    {group: "第三方合作-幽☆游☆白书（限时）：降临",ids: [
        4324, //靈界獸・小波
    ]},
    {group: "第三方合作-女神异闻录（限时）：降临",ids: [
        4392, //技能卡片・迪亞
        4394, //技能卡片・布芙
        4396, //技能卡片・ 亞基達因
        4398, //K冰霜披風
    ]},
    {group: "第三方合作-女神异闻录（限时）：宠物交换所",ids: [
        4388, //摩爾迦納
    ]},
    {group: "第三方合作-万智牌（限时）：降临",ids: [
        4618, //晴空號
    ]},
    {group: "第三方合作-银魂（限时）：降临",ids: [
        4783, //廢材大叔的太陽眼鏡
    ]},
    {group: "第三方合作-银魂（限时）：赠送",ids: [
        4780, //PAD隊＆伊麗莎白衣裝
    ]},
    {group: "第三方合作-银魂（限时）：宠物交换所",ids: [
        4779, //JUSTAWAY
        4778, //定春
        4777, //謎之生物・伊麗莎白
        4781, //橙龍契士・莎里雅＆神樂衣裝
    ]},
    {group: "第三方合作-刀剑神域（限时）：降临",ids: [
        4885, //無銘之劍
    ]},
    {group: "第三方合作-刀剑神域（限时）：赠送",ids: [
        4879, //導航妖精・結衣
    ]},
    {group: "第三方合作-刀剑神域（限时）：MP商店",ids: [
        4880, //尤娜
    ]},
    {group: "第三方合作-刀剑神域（限时）：宠物交换所",ids: [
        4877, //初等練士・尤吉歐
        4878, //初等練士・桐人
    ]},
    {group: "第三方合作-妖怪手表（限时）：降临",ids: [
        4984, //光妖怪蛇武器
        4986, //木妖怪3头蝾螈武器
    ]},
    {group: "第三方合作-妖怪手表（限时）：赠送",ids: [
        4988, //英雄喵的妖怪徽章
    ]},
    {group: "第三方合作-妖怪手表（限时）：宠物交换所",ids: [
        4977, //威斯帕
        4978, //威斯帕的妖怪徽章
        4979, //大蛇【妖怪手錶】
        4980, //大蛇的妖怪徽章
        4981, //九尾【妖怪手錶】
        4982, //九尾的妖怪徽章
    ]},
    {group: "第三方合作-妖怪手表（限时）：MP商店",ids: [
        4975, //武士喵
        4976, //武士喵的妖怪徽章
    ]},
    {group: "第三方合作-Fate/stay night（限时）：赠送",ids: [
        5020, //藤村大河
    ]},
    {group: "第三方合作-Fate/stay night（限时）：宠物交换所",ids: [
        5019, //間桐櫻
        5021, //英靈・ASSASSIN
    ]},
    {group: "第三方合作-Fate/stay night（限时）：MP商店",ids: [
        5018, //言峰綺禮
    ]},
    {group: "第三方合作-实况野球（限时）：宠物交换所",ids: [
        4672, //早川葵
        4678, //干達
    ]},
    {group: "第三方合作-实况野球（限时）：MP商店",ids: [
        4677, //經理人・津乃田梨亞
    ]},
    {group: "第三方合作-周刊少年Sunday（限时）：宠物交换所",ids: [
        4826, //SUNDAY合作
        4827, //名探偵柯南安室透特選
        4828, //CHRONO MA：GIA 漫畫
    ]},
    {group: "第三方合作-假面骑士（限时）：宠物交换所",ids: [
        4934, //幪面超人ZI-O（假面騎士ZI-O）
        4935, //幪面超人Stronger（假面騎士Stronger）
    ]},
    {group: "第三方合作-假面骑士（限时）：MP商店",ids: [
        4933, //桃塔羅斯
    ]},
    {group: "第三方合作-神罗万象（限时）：宠物交换所",ids: [
        5049, //煌骸大星 鎧武
        5050, //陽
    ]},
    {group: "第三方合作-神罗万象（限时）：MP商店",ids: [
        2569, //翠輝星的麒麟・朔夜 Another
    ]},
    {group: "第三方合作-街霸（限时）：宠物交换所",ids: [
        5111, //影隆
    ]},
    {group: "第三方合作-怪物猎人（限时）：宠物交换所",ids: [
        5200, //獵人♂・宙斯GIGA裝備
        5202, //獵人♀・瓦爾奇琳CIEL裝備
    ]},
    {group: "第三方合作-怪物猎人（限时）：MP商店",ids: [
        3705, //猎人♂・雄火龙X装备
        3706, //猎人♂・泡狐龙X装备
        3707, //猎人♂・鏖魔装备
        4171, //猎人♂・碎龙 X 装备
        4172, //猎人♂・灭尽龙 X 装备
        5199, //獵人♂・曉丸裝備
        3709, //猎人♀・麒麟X装备
        3710, //猎人♀・迅龙X装备
        3711, //猎人♀・斩龙X装备
        4173, //猎人♀・冰牙龙X装备
        4174, //猎人♀・风漂龙X装备
        5201, //獵人♀・艷裝備
    ]},
    {group: "第三方合作-麦当劳（限时）：宠物交换所",ids: [
        5229, //休息的玩龍喚士・柯朵
    ]},
    {group: "第三方合作-小学馆（限时）：MP商店",ids: [
        3782, //木之宮孝男
        3865, //御坊茶魔
        4017, //星馬烈
        4018, //星馬豪
        4125, //薯餅
        4904, //怪物君帽子
        5171, //電子神童的帽子
    ]},
    {group: "第三方合作-忍者服部君（限时）：MP商店",ids: [
        4795, //服部的手裏劍
    ]},
    {group: "第三方合作-通灵王（限时）：降临",ids: [
        5267, //持靈・伊萬里＆信樂燒
    ]},
    {group: "第三方合作-通灵王（限时）：赠送",ids: [
        5270, //小山田萬太
        5273, //超靈體 精靈王
    ]},
    {group: "第三方合作-通灵王（限时）：宠物交换所",ids: [
        5271, //貓又全宗
        5272, //席巴
    ]},
    {group: "第三方合作-通灵王（限时）：MP商店",ids: [
        5268, //道潤
        5269, //玉村玉緒
    ]},
    {group: "雷达：雷达龙降临",ids: [
        5176, //薫風的寵物晶片
        5178, //雲瑪的寵物晶片
        5180, //岩石的寵物晶片
        5182, //奶油的寵物晶片
        5184, //西卜的寵物晶片
    ]},
    {group: "雷达：捡徽章（仅日本）：美化龙",ids: [
        1109, //炎天雙極星・伊弗里特
        1095, //水天雙極星・利拜亞桑
        1096, //風天雙極星・法夫納
        1110, //光天雙極星・神龍
        1111, //闇天雙極星・提亞馬特
    ]},
    {group: "雷达：捡徽章（仅日本）：精灵",ids: [
        919, //炎戒大精灵・撒旦
        920, //慈水大精灵・温迪妮
        921, //风来大精灵・席尔芙
        922, //宝辉大精灵・吉娜
        923, //死兆大精灵・塔纳托斯
    ]},
    {group: "雷达：捡徽章（仅日本）：水果龙",ids: [
        1076, //红天的果实・草莓龙
        1078, //苍天的果实・蓝苺龙
        1080, //碧天的果实・蜜瓜龙
        1082, //黄天的果实・柠檬龙
        1084, //紫天的果实・葡萄龙
    ]},
    {group: "雷达：搜索开箱子（限非活动时段，且几率极低）",ids: [
        3173, //冥道之根源神・伊邪那岐Ｘ
        3175, //紫光的深淵龍・默示Ｘ
        3176, //山津神之子・神鵺
        3177, //弓津神之子・影鵺
        3178, //夜見神之子・國鵺
        3179, //紅蓮之逆刃・炎鐵雙角
        3180, //真羅之諸刃・森鐵兩角
        3181, //煉獄之亂刃・冥鐵貳角
        3182, //炎冰刃・武士巨人
        3183, //炎樹槌・鎚之巨人
        3184, //冰炎刃・武士巨人
        3185, //冰樹槌・鎚之巨人
        3186, //樹炎刃・武士巨人
        3187, //樹冰槌・鎚之巨人
        3261, //蛋藏Ｘ月讀
        3336, //木古龍・天貝爾＆龍喚士・托年
        3162, //蛋藏Ｘ覺醒幻神・奧丁
    ]},
    {group: "雷达：搜索开箱子（未经证实的）",ids: [
        4576, //水都之守護神・雅典娜
        4636, //滅神機・諸神黃昏龍
        4993, //陽風之愛猫神・芭丝特
        5168, //聖神魔・亞極特＝迪奧
    ]},
];

var awokens = [{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-01_zpsxxwacmws.png","name":"HP強化","cname":"HP+"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-02_zpsy1jchamv.png","name":"攻撃強化","cname":"攻击+"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-03_zpsak0tuqfw.png","name":"回復強化","cname":"回复+"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-04_zps6vn4a1r2.png","name":"火ダメージ軽減","cname":"火盾"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-05_zpsk7krbzfw.png","name":"水ダメージ軽減","cname":"水盾"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-06_zpsg3uiml1b.png","name":"木ダメージ軽減","cname":"木盾"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-07_zpssj2kpgm4.png","name":"光ダメージ軽減","cname":"光盾"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-08_zpsxmjgonyv.png","name":"闇ダメージ軽減","cname":"暗盾"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-09_zpscmpb1a9u.png","name":"自動回復","cname":"自回"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-10_zpsgnawh4aw.png","name":"バインド耐性","cname":"防封"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-11_zpstzezynbd.png","name":"暗闇耐性","cname":"防暗"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-12_zpstrlqs0zm.png","name":"お邪魔耐性","cname":"防废"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-13_zpsgmoqh6yh.png","name":"毒耐性","cname":"防毒"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-14_zpspgajml6y.png","name":"火ドロップ強化","cname":"火+"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-15_zpsiqnomwjo.png","name":"水ドロップ強化","cname":"水+"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-16_zps96jzpova.png","name":"木ドロップ強化","cname":"木+"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-17_zpsreclhahj.png","name":"光ドロップ強化","cname":"光+"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-18_zpscwksy2ka.png","name":"闇ドロップ強化","cname":"暗+"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-19_zpstsfhgt1g.png","name":"操作時間延長","cname":"手指"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-20_zpspo6ssykv.png","name":"バインド回復","cname":"心解"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-21_zps3rfxonew.png","name":"スキルブースト","cname":"SB"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-22_zpsr51wxpxg.png","name":"火属性強化","cname":"火横"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-23_zpsnpbjjiml.png","name":"水属性強化","cname":"水横"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-24_zpsplzefe22.png","name":"木属性強化","cname":"木横"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-25_zpsbstitgpp.png","name":"光属性強化","cname":"光横"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-26_zps6464lef2.png","name":"闇属性強化","cname":"暗横"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-27_zpsekmypn6z.png","name":"2体攻撃","cname":"U"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-28_zpscdmq9kyw.png","name":"封印耐性","cname":"SX"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-29_zpsc4ab42lx.png","name":"回復ドロップ強化","cname":"心+"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-30_zpsgze5vdtg.png","name":"マルチブースト","cname":"协力"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-31_zpsgefpdpof.png","name":"ドラゴンキラー","cname":"龙杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-32_zpsozuiwcrf.png","name":"神キラー","cname":"神杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-33_zpsp6tq5egi.png","name":"悪魔キラー","cname":"恶魔杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-34_zps9qppy6u3.png","name":"マシンキラー","cname":"机杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-35_zps7yp5sa7p.png","name":"バランスキラー","cname":"平衡杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-36_zpsdaddifpz.png","name":"攻撃キラー","cname":"攻击杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-37_zps0vbbzf6g.png","name":"体力キラー","cname":"体力杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-38_zpsvsnuvszc.png","name":"回復キラー","cname":"回复杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-39_zpskswn9txf.png","name":"進化用キラー","cname":"进化杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-40_zpsoh0s208i.png","name":"能力覚醒用キラー","cname":"觉醒杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-41_zpsrkywclzi.png","name":"強化合成用キラー","cname":"强化杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-42_zpsecsdwttd.png","name":"売却用キラー","cname":"卖钱杀"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-43_zpsclamisko.png","name":"コンボ強化","cname":"7c"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-44_zpsaow1ee5r.png","name":"ガードブレイク","cname":"5色破防"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-45_zpstetgt7jw.png","name":"追加攻撃","cname":"心追"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-46_zps5ukjqltw.png","name":"チームHP強化","cname":"全体HP"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-47_zpsukbaaqf1.png","name":"チーム回復強化","cname":"全体回复"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-48_zpsmbnqtfdz.png","name":"ダメージ無効貫通","cname":"破无效"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-49_zpsdm4onmue.png","name":"覚醒アシスト","cname":"武器觉醒"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-50_zpstrbv2fmv.png","name":"超追加攻撃","cname":"方块心追"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-51_zpsettxry2b.png","name":"スキルチャージ","cname":"5色溜"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-52_zps0ty3faav.png","name":"バインド耐性＋","cname":"大防封"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-53_zpse11raatm.png","name":"操作時間延長＋","cname":"大手指"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-54_zpsudvrwxtr.png","name":"雲耐性","cname":"防云"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-55_zpsf65qotza.png","name":"操作不可耐性","cname":"防封条"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-56_zps0myhew7j.png","name":"スキルブースト＋","cname":"大SB"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-57_zpswomcefzz.png","name":"HP80％以上強化","cname":"满血强化"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-58_zpsc7luzojm.png","name":"HP50％以下強化","cname":"下半血强化"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-59_zpsqpybuzlz.png","name":"回復L字消し","cname":"L盾"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-60_zpstbqdrxc8.png","name":"L字消し攻撃","cname":"L解锁"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-61_zpsgyrn9dmp.png","name":"超コンボ強化","cname":"10c"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-62_zpsmolwdy6q.png","name":"コンボドロップ","cname":"c珠"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-63_zpswpdmjwuy.png","name":"スキルボイス","cname":"语音"},{"icon":"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-64_zpsksgdogic.png","name":"ダンジョンボーナス","cname":"奖励增加"},{"icon":"https://oi1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-65_zpsxbsecu3l.png","name":"HP弱化","cname":"HP-"},{"icon":"https://oi1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-66_zpsavsh2lqb.png","name":"攻撃弱化","cname":"攻击-"},{"icon":"https://oi1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-67_zpsbkih90bx.png","name":"回復弱化","cname":"回复-"}];
var orbs = [{icon:"http://pad.skyozora.com/images/drops/Fire.png",name:"Fire",cname:"火珠"},{icon:"http://pad.skyozora.com/images/drops/Fire+.png",name:"Fire+",cname:"强化火珠"},{icon:"http://pad.skyozora.com/images/drops/Water.png",name:"Water",cname:"水珠"},{icon:"http://pad.skyozora.com/images/drops/Water+.png",name:"Water+",cname:"强化水珠"},{icon:"http://pad.skyozora.com/images/drops/Wood.png",name:"Wood",cname:"木珠"},{icon:"http://pad.skyozora.com/images/drops/Wood+.png",name:"Wood+",cname:"强化木珠"},{icon:"http://pad.skyozora.com/images/drops/Light.png",name:"Light",cname:"光珠"},{icon:"http://pad.skyozora.com/images/drops/Light+.png",name:"Light+",cname:"强化光珠"},{icon:"http://pad.skyozora.com/images/drops/Dark.png",name:"Dark",cname:"暗珠"},{icon:"http://pad.skyozora.com/images/drops/Dark+.png",name:"Dark+",cname:"强化暗珠"},{icon:"http://pad.skyozora.com/images/drops/Heart.png",name:"Heart",cname:"心珠"},{icon:"http://pad.skyozora.com/images/drops/Heart+.png",name:"Heart+",cname:"强化心珠"},{icon:"http://pad.skyozora.com/images/drops/Dead.png",name:"Dead",cname:"废珠"},{icon:"http://pad.skyozora.com/images/drops/Bomb.png",name:"Bomb",cname:"炸弹"},{icon:"http://pad.skyozora.com/images/drops/Poison.png",name:"Poison",cname:"毒珠"},{icon:"http://pad.skyozora.com/images/drops/Poison+.png",name:"Poison+",cname:"剧毒"}];
var propertys = [{icon:"http://pad.skyozora.com/images/drops/Fire.png",name:"Fire",cname:"火"},{icon:"http://pad.skyozora.com/images/drops/Water.png",name:"Water",cname:"水"},{icon:"http://pad.skyozora.com/images/drops/Wood.png",name:"Wood",cname:"木"},{icon:"http://pad.skyozora.com/images/drops/Light.png",name:"Light",cname:"光"},{icon:"http://pad.skyozora.com/images/drops/Dark.png",name:"Dark",cname:"暗"},];
var types = [{icon:"http://pad.skyozora.com/images/type/dragon.png",name:"dragon",jname:"ドラゴン",cname:"龙"},{icon:"http://pad.skyozora.com/images/type/god.png",name:"god",jname:"神",cname:"神"},{icon:"http://pad.skyozora.com/images/type/demon.png",name:"demon",jname:"悪魔",cname:"恶魔"},{icon:"http://pad.skyozora.com/images/type/machine.png",name:"machine",jname:"マシン",cname:"机械"},{icon:"http://pad.skyozora.com/images/type/balance.png",name:"balance",jname:"バランス",cname:"平衡"},{icon:"http://pad.skyozora.com/images/type/attack.png",name:"attack",jname:"攻撃",cname:"攻击"},{icon:"http://pad.skyozora.com/images/type/strength.png",name:"strength",jname:"体力",cname:"体力"},{icon:"http://pad.skyozora.com/images/type/healing.png",name:"healing",jname:"回復",cname:"回复"},{icon:"http://pad.skyozora.com/images/type/evo.png",name:"evo",jname:"進化用",cname:"进化用"},{icon:"http://pad.skyozora.com/images/type/aw.png",name:"aw",jname:"能力覚醒用",cname:"能力觉醒用"},{icon:"http://pad.skyozora.com/images/type/power.png",name:"power",jname:"強化合成用",cname:"强化合成用"},{icon:"http://pad.skyozora.com/images/type/sell.png",name:"sell",jname:"売却用",cname:"贩卖用"},{icon:"http://pad.skyozora.com/images/type/special.png",name:"sell",jname:"特殊",cname:"特殊"}];

var changeUrl = "http://pad.skyozora.com/images/change.gif";

//仿GM_xmlhttpRequest函数v1.3
if (typeof(GM_xmlhttpRequest) == "undefined") {
    var GM_xmlhttpRequest = function(GM_param) {

        var xhr = new XMLHttpRequest(); //创建XMLHttpRequest对象
        xhr.open(GM_param.method, GM_param.url, true);
        if (GM_param.responseType) xhr.responseType = GM_param.responseType;
        if (GM_param.overrideMimeType) xhr.overrideMimeType(GM_param.overrideMimeType);
        xhr.onreadystatechange = function() //设置回调函数
            {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 200 && GM_param.onload)
                        GM_param.onload(xhr);
                    if (xhr.status !== 200 && GM_param.onerror)
                        GM_param.onerror(xhr);
                }
            }

        for (var header in GM_param.headers) {
            xhr.setRequestHeader(header, GM_param.headers[header]);
        }

        xhr.send(GM_param.data ? GM_param.data : null);
    }
}

function getGroup(groupArr, dateArr, callback) {
    if (groupArr.length < 1) {
        callback();
        return;
    }
    var newGrpArr = groupArr.concat(); //储存到新数组
    var thisGrp = newGrpArr.shift(); //删除新数组的第一个元素
    console.log("开始处理 " + thisGrp.group + " 组");

    var group = { name: thisGrp.group, mosters: [] };
    dateArr.push(group);
    getMonster(thisGrp.ids, group.mosters, function() {
        getGroup(newGrpArr, dateArr, callback);
    })
}

function getMonster(monsterIdArr, mdateArr, callback) {
    if (monsterIdArr.length < 1) {
        callback();
        return;
    }
    var newMIdArr = monsterIdArr.concat(); //储存到新数组
    var thisMId = newMIdArr.shift(); //删除新数组的第一个元素
    console.log("开始获取怪物数据 No." + thisMId);

    GM_xmlhttpRequest({
        url: "http://pad.skyozora.com/pets/" + thisMId,
        method: "GET",
        onload: function(response) {
            var monster = dealMonsterHTML(response.responseText);
            mdateArr.push(monster);
            getMonster(newMIdArr, mdateArr, callback)
        },
        onerror: function(response) {
            console.error(response);
        }
    })
}
//将获取到的网页处理成json
function dealMonsterHTML(responseText) {
    var PageDOM = new DOMParser().parseFromString(responseText, "text/html");
    var monster = new Object();
    var skillObj = new Object();
    monster.skill = skillObj;

    var content = PageDOM.querySelector("#wrapper>table:nth-last-of-type(2)>tbody>tr:nth-of-type(2)>td");
    var mosterInfo = content.querySelector("table:nth-of-type(2)"); //怪物名片
    var monsterIconNameTable = mosterInfo.rows[0].cells[0].querySelector("table");
    var monsterIcon = monsterIconNameTable.rows[0].cells[0].querySelector("img");
    monster.icon = monsterIcon.src;
    var monsterNameCard = monsterIconNameTable.rows[0].cells[1];
    monster.id = parseInt(/No\.(\d+)/ig.exec(monsterNameCard.querySelector("h3").textContent)[1]);
    monster.name = monsterNameCard.querySelector("h2").textContent; //怪物名
    var rareTxt = monsterNameCard.lastChild.textContent;
    monster.rare = rareTxt.split('').filter(function(c){return c == "★"}).length;

    monster.property = [];
    var monsterProperty = mosterInfo.rows[0].cells[1].querySelectorAll("img"); //怪物属性
    for (var ii=0;ii<monsterProperty.length;ii++)
    {
        var propertyIndex = -1;
        var has = propertys.some(function(property,idx){
            if (new RegExp(property.name.replace("+","\\+"),"ig").test(monsterProperty[ii].src))
            {
                propertyIndex = idx;
                return true;
            }else return false;
        })
        if (has && propertyIndex>=0)
            monster.property.push(propertyIndex);
        else
            console.error("未知的怪物属性",monsterProperty[ii].parentNode);
    }
    monster.type = [];
    var monsterType = mosterInfo.rows[0].cells[2].querySelectorAll("img"); //怪物类型
    for (var ii=0;ii<monsterType.length;ii++)
    {
        var typeIndex = -1;
        var has = types.some(function(type,idx){
            if (new RegExp(type.name,"ig").test(monsterType[ii].src))
            {
                typeIndex = idx;
                return true;
            }else return false;
        })
        if (has && typeIndex>=0)
            monster.type.push(typeIndex);
        else
            console.error("未知的怪物类型",monsterType[ii].parentNode);
    }

    var skill = content.querySelector("table:nth-of-type(5)"); //技能
    var skillInfoLine = skill.rows[0];
    skillObj.name = skillInfoLine.cells[0].querySelector("span").textContent; //技能名称
    skillObj.CD = [parseInt(skillInfoLine.cells[2].textContent), parseInt(skillInfoLine.cells[4].textContent)] //技能原始CD，技能最短CD

    var skillDetail = skill.rows[1].cells[0]; //技能详细的内容
    var skillText = [];
    var sTTemp = []; //储存目前临时的文字
    var nodes = skillDetail.childNodes;
    monster.skill.text = skillText;

    function clearOldText() {
        if (sTTemp.length > 0) {
            skillText.push({ type: 0, text: sTTemp.join("") });
            sTTemp = [];
        }
    }
    for (var ni = 0; ni < nodes.length; ni++) {
        var node = nodes[ni];
        checkNode: //用来越级返回的锚标
            switch (node.nodeName) {
                case "#text":
                    var strTemp = node.nodeValue;
                    awokens.forEach(function(awoken) { //替换掉所有的觉醒日文名
                        strTemp = strTemp.replace(awoken.name, "");
                    })
                    strTemp = strTemp.replace(/(^\s*|\s*$)/igm, ""); //替换掉前后空格
                    sTTemp.push(strTemp);
                    break;
                case "BR":
                    clearOldText();
                    skillText.push({ type: 1 });
                    break;
                case "IMG":
                    clearOldText();
                    //记录改变
                    if (node.src == changeUrl)
                    {
                        skillText.push({ type: 2 });
                        break;
                    }
                    //记录宝珠序号
                    var orbIndex = -1;
                    orbs.some(function(orb,idx){
                        if (orb.icon == node.src)
                        {
                            orbIndex = idx;
                            return true;
                        }else return false;
                    })
                    if (orbIndex>=0)
                    {
                        skillText.push({ type: 3, index: orbIndex });
                        break;
                    }
                    //记录觉醒序号
                    var awokenIndex = -1;
                    awokens.some(function(awoken,idx){
                        if (awoken.icon == node.src)
                        {
                            awokenIndex = idx;
                            return true;
                        }else return false;
                    })
                    if (awokenIndex>=0)
                    {
                        skillText.push({ type: 4, index: awokenIndex });
                        break;
                    }
                    break;
                default:
                    sTTemp.push("未知的TAG");
                    console.error("未知的TAG", node);
            }
    }
    clearOldText();
    
    monster.bonus = null; //储存辅助同属性追加的数值BONUS
    var bonusCard = content.querySelector("table:nth-of-type(6)"); //bonus的卡
    var bonusList = bonusCard.rows[1].cells[0].querySelector("table"); //具体显示bonus的表格
    if (bonusList != undefined)
    {
        monster.bonus = {lvtype:0,num:[0,0,0]}; //储存辅助同属性追加的数值BONUS
        var maxBonusLine = bonusList.rows[bonusList.rows.length - 1];
        if (/（LV110＆\+297時）/igm.test(maxBonusLine.cells[3].textContent))
        {
            monster.bonus.lvtype = 1;
        }
        for (var bi=0;bi<3;bi++)
        {
            var numCell = maxBonusLine.cells[bi];
            var numSpan = numCell.querySelector("span");
            var numInt = parseInt(numSpan.textContent.replace("+",""));
            monster.bonus.num[bi] = numInt;
        }
    }

    monster.awokens = []; //储存觉醒
    var jxCard = content.querySelector("table:nth-of-type(7)"); //觉醒
    if (/覺醒技能/.test(jxCard.rows[0].cells[0].textContent))
    {
        var jxList = jxCard.rows[0].cells[1].querySelectorAll("img");
        for (var ji = 0; ji < jxList.length; ji++) {
            var jximg = jxList[ji];
            var jxIndex = -1;
            awokens.some(function(awoken, index) {
                if (awoken.icon == jximg.src) {
                    jxIndex = index;
                    return true;
                }
            })
            monster.awokens.push(jxIndex);
            if (jxIndex < 0)
                console.error("未知的觉醒图片", jximg);
        }
    }

    return monster;
}

var monsterDataList = []; //储存获取后转换的数据

getGroup(monsterList, monsterDataList, function() {
    console.log("处理完毕", monsterDataList);
    var jtxt = JSON.stringify(monsterDataList);
    var jsonTextarea = document.querySelector(".jsonTextarea") || document.body.appendChild(document.createElement("textarea"));
    jsonTextarea.classList.add("jsonTextarea");
    jsonTextarea.value = jtxt;
})