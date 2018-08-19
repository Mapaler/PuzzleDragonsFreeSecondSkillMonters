//应用于网址：
//http://pad.skyozora.com/ 任意页面
var monsterList = [
    {group: "绝限定双破吸-水魔女",ids: [
        4412, //絕島之大魔女・莉邪
        4413, //冰華之大魔女・莉邪
    ]},
    {group: "伤害吸收-风神",ids: [
        3413, //風神
        3414, //翠角的天鬼姬・風神
        4257, //旋嵐之天鬼姬・風神
        4258, //雙扇之天鬼姬・風神
        3846, //樂園的天鬼姬・風神
        4791, //乘浪之天鬼姬・風神
        2301, //木點數龍
    ]},
    {group: "伤害吸收-黑社会/高校",ids: [
        3466, //武田好誠
        3467, //五代目武裝戰線頭・武田好誠
        3479, //好誠的騎士外套
    ]},
    {group: "伤害吸收-水咖喱",ids: [
        3524, //水華之喜女神・烏璐迦
        3525, //冥星之喜女神・烏璐迦
        160, //米斯精靈
    ]},
    {group: "伤害吸收-剑心/师傅",ids: [
        3555, //新津覺之進
        3556, //比古清十郎
        4001, //飛天御劍流繼承者・比古清十郎
        3563, //新津覚之進的陶藝作品
    ]},
    {group: "伤害吸收-拳皇/雷欧娜",ids: [
        4085, //蕾歐娜・海迪倫
        4086, //被繼承的暗殺術・蕾歐娜・海迪倫
        4116, //蕾歐娜的耳環
    ]},
    {group: "伤害吸收-MH/怪猎/金雷公",ids: [
        4135, //金雷公神王牙
        4153, //極・金狼牙劍斧【曄】
        4163, //金雷公的重殻
    ]},
    {group: "伤害吸收-光凯尔特/老头",ids: [
        4182, //魯格
        4183, //偉才的烈日神・魯格
    ]},
    {group: "伤害吸收（免费）-火精灵王",ids: [
        4352, //火之精靈王・波曼
        4484, //火之精靈王・波曼的希石
    ]},
    {group: "伤害吸收-火苏美尔/金闪闪",ids: [
        4359, //勇王神・吉爾伽美什
        4360, //果敢之勇王神・吉爾伽美什
    ]},
    {group: "伤害吸收（免费）-马戏团",ids: [
        4420, //帕尼娜
        4421, //新星之獸使・帕尼娜
    ]},
    {group: "伤害吸收（最短且2回合）-银魂/神威",ids: [
        4760, //神威
        4761, //神威＆陸羽衣裝
        4762, //夜兔之番傘
    ]},
    {group: "属性吸收-納兹",ids: [
        3605, //納兹
        3606, //火龍・納兹
        3632, //FAIRY TAIL的單行本第1卷
    ]},
    {group: "属性吸收-第3弹火希腊",ids: [
        3746, //赫斯提亞
        4345, //陶藝的の女神・赫斯提亞
        4637, //火之伴神龍・哈尼士
    ]},
    {group: "属性吸收-第3弹水希腊",ids: [
        3748, //忒堤斯
        4639, //水之伴神龍・尼涅亞
    ]},
    {group: "属性吸收-第3弹木希腊",ids: [
        3750, //克洛諾斯
        4641, //木之伴神龍・靈獨
    ]},
    {group: "属性吸收-第3弹光希腊",ids: [
        3752, //阿斯特賴亞
        //4643, //光之伴神龍
    ]},
    {group: "属性吸收-第3弹暗希腊",ids: [
        3754, //烏拉諾斯
        4645, //暗之伴神龍・度爾托斯
    ]},
    {group: "属性吸收-花嫁妮妮",ids: [
        3791, //星夜的新娘・珀耳塞福涅
        3792, //幸福的糕點師・暗女郎
    ]},
    {group: "属性吸收-泳装狩猎",ids: [
        3848, //常夏之狩獵神・阿緹蜜絲
        3849, //納涼的流浪馬・水馬
    ]},
    {group: "属性吸收-学院水咖喱",ids: [
        4344, //學園的偶像・烏璐迦
        4350, //陶藝愛好者・莉絲可
    ]},
    {group: "属性吸收-P5",ids: [
        4380, //力量控制者・伊麗莎白
        4381, //伊麗莎白＆桑納托斯
        4403, //女神異聞錄3・女神異聞錄全書
    ]},
    {group: "属性吸收-排位马",ids: [
        4653, //神戰之軍馬・斯雷普尼爾
        4654, //主護之神馬・斯雷普尼爾
    ]},
];

var awokens = [{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-01_zpsxxwacmws.png",name:"HP強化",cname:"HP+"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-02_zpsy1jchamv.png",name:"攻撃強化",cname:"攻击+"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-03_zpsak0tuqfw.png",name:"回復強化",cname:"回复+"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-04_zps6vn4a1r2.png",name:"火ダメージ軽減",cname:"火盾"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-05_zpsk7krbzfw.png",name:"水ダメージ軽減",cname:"水盾"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-06_zpsg3uiml1b.png",name:"木ダメージ軽減",cname:"木盾"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-07_zpssj2kpgm4.png",name:"光ダメージ軽減",cname:"光盾"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-08_zpsxmjgonyv.png",name:"闇ダメージ軽減",cname:"暗盾"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-09_zpscmpb1a9u.png",name:"自動回復",cname:"自回"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-10_zpsgnawh4aw.png",name:"バインド耐性",cname:"防封"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-11_zpstzezynbd.png",name:"暗闇耐性",cname:"防暗"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-12_zpstrlqs0zm.png",name:"お邪魔耐性",cname:"防废"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-13_zpsgmoqh6yh.png",name:"毒耐性",cname:"防毒"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-14_zpspgajml6y.png",name:"火ドロップ強化",cname:"火+"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-15_zpsiqnomwjo.png",name:"水ドロップ強化",cname:"水+"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-16_zps96jzpova.png",name:"木ドロップ強化",cname:"木+"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-17_zpsreclhahj.png",name:"光ドロップ強化",cname:"光+"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-18_zpscwksy2ka.png",name:"闇ドロップ強化",cname:"暗+"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-19_zpstsfhgt1g.png",name:"操作時間延長",cname:"手指"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-20_zpspo6ssykv.png",name:"バインド回復",cname:"心解"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-21_zps3rfxonew.png",name:"スキルブースト",cname:"SB"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-22_zpsr51wxpxg.png",name:"火属性強化",cname:"火横"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-23_zpsnpbjjiml.png",name:"水属性強化",cname:"水横"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-24_zpsplzefe22.png",name:"木属性強化",cname:"木横"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-25_zpsbstitgpp.png",name:"光属性強化",cname:"光横"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-26_zps6464lef2.png",name:"闇属性強化",cname:"暗横"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-27_zpsekmypn6z.png",name:"2体攻撃",cname:"U"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-28_zpscdmq9kyw.png",name:"封印耐性",cname:"SX"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-29_zpsc4ab42lx.png",name:"回復ドロップ強化",cname:"心+"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-30_zpsgze5vdtg.png",name:"マルチブースト",cname:"协力"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-31_zpsgefpdpof.png",name:"ドラゴンキラー",cname:"龙杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-32_zpsozuiwcrf.png",name:"神キラー",cname:"神杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-33_zpsp6tq5egi.png",name:"悪魔キラー",cname:"恶魔杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-34_zps9qppy6u3.png",name:"マシンキラー",cname:"机杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-35_zps7yp5sa7p.png",name:"バランスキラー",cname:"平衡杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-36_zpsdaddifpz.png",name:"攻撃キラー",cname:"攻击杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-37_zps0vbbzf6g.png",name:"体力キラー",cname:"体力杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-38_zpsvsnuvszc.png",name:"回復キラー",cname:"回复杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-39_zpskswn9txf.png",name:"進化用キラー",cname:"进化杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-40_zpsoh0s208i.png",name:"能力覚醒用キラー",cname:"觉醒杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-41_zpsrkywclzi.png",name:"強化合成用キラー",cname:"强化杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-42_zpsecsdwttd.png",name:"売却用キラー",cname:"卖钱杀"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-43_zpsclamisko.png",name:"コンボ強化",cname:"7c"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-44_zpsaow1ee5r.png",name:"ガードブレイク",cname:"5色破防"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-45_zpstetgt7jw.png",name:"追加攻撃",cname:"心追"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-46_zps5ukjqltw.png",name:"チームHP強化",cname:"全体HP强化"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-47_zpsukbaaqf1.png",name:"チーム回復強化",cname:"全体回复强化"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-48_zpsmbnqtfdz.png",name:"ダメージ無効貫通",cname:"破无效"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-49_zpsdm4onmue.png",name:"覚醒アシスト",cname:"武器觉醒"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-50_zpstrbv2fmv.png",name:"超追加攻撃",cname:"3x3心追"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-51_zpsettxry2b.png",name:"スキルチャージ",cname:"5色溜"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-52_zps0ty3faav.png",name:"バインド耐性＋",cname:"大防封"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-53_zpse11raatm.png",name:"操作時間延長＋",cname:"大手指"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-54_zpsudvrwxtr.png",name:"雲耐性",cname:"防云"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-55_zpsf65qotza.png",name:"操作不可耐性",cname:"防封条"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-56_zps0myhew7j.png",name:"スキルブースト＋",cname:"大SB"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-57_zpswomcefzz.png",name:"HP80％以上強化",cname:"8血以上强化"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-58_zpsc7luzojm.png",name:"HP50％以下強化",cname:"半血以下强化"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-59_zpsqpybuzlz.png",name:"L字消し軽減",cname:"L盾"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-60_zpstbqdrxc8.png",name:"L字消し攻撃",cname:"L解锁"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-61_zpsgyrn9dmp.png",name:"超コンボ強化",cname:"10c"},{icon:"http://i1296.photobucket.com/albums/ag18/skyozora/skill_icon/skill-62_zpsmolwdy6q.png",name:"コンボドロップ",cname:"c珠"},{icon:"http://pad.gungho.jp/member/img/skill_icon/63.png",name:"スキルボイス",cname:"语音"},{icon:"http://pad.gungho.jp/member/img/skill_icon/64.png",name:"ダンジョンボーナス",cname:"奖励增加"}];
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