//应用于网址：
//http://pad.skyozora.com/ 任意页面
var monsterList = [
	{"id":801,"name":"U&Y","drop":["Wt","Wd","Lt","Dk"]},
	{"id":751,"name":"Sakuya","drop":["Fr","Wt","Wd","Lt"]},
	{"id":1338,"name":"Durga","drop":["Fr","Wt","Wd","Dk"]},
	{"id":1585,"name":"L.Kali","drop":["Fr","Wt","Lt","Dk"]},
	{"id":1587,"name":"D.Kali","drop":["Fr","Wt","Wd","Dk","Rcv"]},
	{"id":745,"name":"Leilan","drop":["Fr","Wd","Lt"]},
	{"id":747,"name":"Karin","drop":["Wt","Wd","Dk"]},
	{"id":749,"name":"Meimei","drop":["Wd","Lt","Dk"]},
	{"id":753,"name":"Haku","drop":["Fr","Wt","Dk"]},
	{"id":1237,"name":"DQXQ / Set","drop":["Fr","Wt","Wd","Lt","Dk","Rcv"]},
	{"id":492,"name":"Isis","drop":["Fr","Wt","Wd","Lt","Dk"]},
	{"id":490,"name":"Horus","drop":["Fr","Wt","Wd","Lt","Dk"]},
	{"id":1665,"name":"Hathor","drop":["Fr","Wt","Wd","Lt","Dk","Rcv"]},
	{"id":494,"name":"Bastet","drop":[]},
	{"id":2012,"name":"Awoken Ra","drop":["Fr","Wt","Wd","Lt","Dk"]},
	{"id":1661,"name":"Nut","drop":[]},
	{"id":1663,"name":"Osiris","drop":[]},
	{"id":1065,"name":"Yamato Takeru","drop":["Fr"]},
	{"id":1067,"name":"Andromeda","drop":["Wt"]},
	{"id":1069,"name":"Perseus","drop":["Wd"]},
	{"id":1071,"name":"Sun Wukong","drop":["Lt"]},
	{"id":1073,"name":"Pandora","drop":["Dk"]},
	{"id":2325,"name":"Awoken Tsukuyomi","drop":[]},
	{"id":1955,"name":"Awoken Lakshmi","drop":["Rcv"]},
	{"id":1956,"name":"Awoken Parvati","drop":["Rcv"]},
	{"id":1948,"name":"Typhon","drop":["Rcv"]},
	{"id":1946,"name":"Gadius","drop":["Rcv"]},
	{"id":2141,"name":"Tsubaki","drop":["Fr","Lt"]},
	{"id":2767,"name":"Cecil","drop":["Dk"]},
	{"id":834,"name":"Amberjack","drop":["Fr","Wt","Lt"]},
	{"id":2143,"name":"Sumire","drop":["Wt","Rcv"]},
	{"id":2145,"name":"Kaede","drop":["Wd","Rcv"]},
	{"id":2904,"name":"Awoken DQXQ","drop":["Fr","Wt","Wd","Lt","Dk","Rcv"]},
	{"id":2969,"name":"Myr","drop":["Rcv"]},
	{"id":2998,"name":"Gremory","drop":["Dk","Rcv"]},
	{"id":2994,"name":"Ronove","drop":["Fr","Wt","Wd","Lt","Dk","Rcv"]},
	{"id":2757,"name":"You Yu","drop":["Wt"]},
	{"id":3124,"name":"Kinnikuman","drop":["Fr"]},
	{"id":2260,"name":"Yomi Dragon","drop":[]},
	{"id":2640,"name":"Fenrir","drop":["Jm"]},
	{"id":3019,"name":"Rurouni","drop":["Fr","Lt"]},
	{"id":1332,"name":"Sarasvati","drop":["Wt"]},
	{"id":2996,"name":"Paimon","drop":["Lt","Rcv"]},
	{"id":3201,"name":"Acala","drop":["Fr","Wd"]},
	{"id":2990,"name":"Dantalion","drop":["Fr","Dk","Rcv"]},
	{"id":2992,"name":"Sitri","drop":["Wt"]},
	{"id":2929,"name":"Ace Bastet","drop":["Wd"]},
	{"id":2760,"name":"Xiu Min","drop":["Lt"]},
	{"id":3197,"name":"Trailokya","drop":["Fr"]},
	{"id":3095,"name":"Tamazo X Awoken Odin","drop":["Wd"]},
	{"id":2942,"name":"Sherias Roots","drop":["Fr","Wt","Wd","Lt","Dk","Rcv"]},
	{"id":2748,"name":"Awoken Hermes","drop":["Fr","Wt"]},
	{"id":1330,"name":"Krishna","drop":["Fr"]},
	{"id":2982,"name":"Awoken U&Y","drop":["Wt","Wd","Lt","Dk"]},
	{"id":2983,"name":"Awoken Kushi","drop":[]},
	{"id":1950,"name":"Ilm","drop":["Fr","Lt"]},
	{"id":2401,"name":"Hel","drop":["Psn"]},
	{"id":3299,"name":"Tifa","drop":["Fr","Lt"]},
	{"id":2780,"name":"Lightning","drop":["Fr","Wt","Wd","Lt","Dk"]},
	{"id":3305,"name":"Noctis","drop":[]},
	{"id":2766,"name":"Yuna","drop":["Fr","Wt","Wd","Lt","Dk","Rcv"]},
	{"id":3359,"name":"Aizen","drop":["Dk"]},
	{"id":1952,"name":"Zuoh","drop":["Wd","Dk"]},
	{"id":3193,"name":"Dark Athena","drop":["Wt","Dk"]},
	{"id":3534,"name":"Light Metatron","drop":["Lt"]},
	{"id":2756,"name":"Xiang Mei","drop":["Rcv"]},
	{"id":2602,"name":"Voltron","drop":["Fr"]},
	{"id":3646,"name":"Yog-Sothoth","drop":["Lt"]},
	{"id":3786,"name":"Kamimusubi","drop":["Wd","Dk"]},
	{"id":3264,"name":"Odin Dragon","drop":["Wd","Lt"]},
	{"id":3941,"name":"Nees","drop":["Wd","Lt","Dk"]},
	{"id":3715,"name":"Awoken Raphael","drop":["Fr","Wt","Wd","Lt","Dk"]},
	{"id":3337,"name":"Amen","drop":[]},
	{"id":3449,"name":"Reincarnated Indra","drop":["Lt","Dk"]},
	{"id":4196,"name":"Stasis Norn, Planar","drop":["Fr","Dk"]},
	{"id":4302,"name":"Yusuke","drop":["Wt","Lt"]},
	{"id":3565,"name":"Kaede (split)","drop":["Wd","Wd"]},
	{"id":4413,"name":"Reeche","drop":["Fr","Wt","Wd","Lt","Dk"]},
	{"id":4244,"name":"Awoken Spica","drop":["Wd","Wd"]},
	{"id":4415,"name":"Zela","drop":["Wd"]},
	{"id":4356,"name":"Mowa","drop":["Jm"]},
	{"id":4411,"name":"Madoo (Uevo)","drop":[]},
	{"id":4737,"name":"Ameno (B/x)","drop":[]},
	{"id":4410,"name":"Madoo (Base)","drop":[]},
	{"id":4260,"name":"Raijin (L/x)","drop":["Fr","Wt","Wd","Lt","Dk"]},
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

function getMonster(monsterArr, mdateArr, callback) {
    if (monsterArr.length < 1) {
        callback();
        return;
    }
    var newMArr = monsterArr.concat(); //储存到新数组
    var thisM = newMArr.shift(); //删除新数组的第一个元素
    console.log("开始获取怪物数据 No." + thisM.id);

    GM_xmlhttpRequest({
        url: "http://pad.skyozora.com/pets/" + thisM.id,
        method: "GET",
        onload: function(response) {
            var monster = dealMonsterHTML(response.responseText, thisM);
            mdateArr.push(monster);
            getMonster(newMArr, mdateArr, callback)
        },
        onerror: function(response) {
            console.error(response);
        }
    })
}
//将获取到的网页处理成json
function dealMonsterHTML(responseText, monsterData) {
    var PageDOM = new DOMParser().parseFromString(responseText, "text/html");
    var monster = monsterData;

    var content = PageDOM.querySelector("#wrapper>table:nth-last-of-type(2)>tbody>tr:nth-of-type(2)>td");
    var mosterInfo = content.querySelector("table:nth-of-type(2)"); //怪物名片
    var monsterIconNameTable = mosterInfo.rows[0].cells[0].querySelector("table");
    var monsterIcon = monsterIconNameTable.rows[0].cells[0].querySelector("img");
    monster.icon = monsterIcon.src;
    var monsterNameCard = monsterIconNameTable.rows[0].cells[1];
    monster.cname = monsterNameCard.querySelector("h2").textContent; //怪物名
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

	var skill = content.querySelector("table:nth-of-type(7)"); //队长技能
	if (!/^隊長技能/.test(skill.rows[0].cells[0].textContent))
	{
		var skill = content.querySelector("table:nth-of-type(8)"); //队长技能
	}
    var skillDetail = skill.rows[1].cells[0]; //技能详细的内容
    var skillText = [];
    var sTTemp = []; //储存目前临时的文字
    var nodes = skillDetail.childNodes;
    monster.leaderSkillText = skillText;

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
				case "SPAN":case "SUP":case "SUB":
					clearOldText();
					var strTemp = node.textContent;
					awokens.forEach(function(awoken) { //替换掉所有的觉醒日文名
						strTemp = strTemp.replace(awoken.name, "");
					})
					strTemp = strTemp.replace(/(^\s*|\s*$)/igm, ""); //替换掉前后空格
					var txtObj = { type: 0, text: strTemp}
					txtObj.tagName = node.nodeName;
					if (node.getAttribute("style") != undefined)
					{
						txtObj.style = node.getAttribute("style");
					}
					skillText.push(txtObj);
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
	console.log(monster);
    return monster;
}

var monsterDataList = []; //储存获取后转换的数据

getMonster(monsterList, monsterDataList, function() {
    console.log("处理完毕", monsterDataList);
    var jtxt = JSON.stringify(monsterDataList);
    //jtxt=jtxt.replace(/"(id|name|mosters|skill|CDlong|CDshort|levelMax|text|type|src|icon|awokens)"/igm,"$1");
    //console.log(jtxt);
    var jsonTextarea = document.querySelector(".jsonTextarea") || document.body.appendChild(document.createElement("textarea"));
    jsonTextarea.classList.add("jsonTextarea");
    jsonTextarea.value = jtxt;
})