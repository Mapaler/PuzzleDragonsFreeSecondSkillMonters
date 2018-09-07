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
//数字补0
function PrefixInteger(num, length) {  
	return (Array(length).join('0') + num).slice(-length); 
}
//返回特殊的几个word会转错的
function specialMonsterName(monid)
{
    switch(monid)
    {
        case 1098:
            return "试练刚神・海克力斯";
            break;
        case 3834:
            return "空都的守护神・雅典娜＝赫利奥斯";
            break;
        case 3193:
            return "帝都之守护神・雅典娜";
            break;
        case 4576:
            return "水都之守护神・雅典娜";
            break;
        case 4172:
            return "猎人♂・灭尽龙 X 装备";
            break;
        case 4173:
            return "猎人♀・冰牙龙X装备";
            break;
        case 4174:
            return "猎人♀・风漂龙X装备";
            break;
        default:
            return false;
    }
}

//替换一些无法转换为简体的特殊字符
function specialCharacterReplace(str)
{
    var replaceArr = [
        ["闇", "暗"],
        ["闘", "斗"],
        ["撃", "击"],
        ["転","转"],
        ["伝","传"],
        ["気","气"],
        ["戦","战"],
        ["継","继"],
        ["呪","咒"],
        ["経","经"],
        ["獣","兽"],
        ["マグマ", "岩浆"],
        ["ブリザード", "暴雪"],
        ["ガイア", "盖亚"],
        ["ホーリー", "神圣"],
        ["ヘル", "地狱"],
        ["ドロップ", "掉落"],
        ["ボール", "球"],
        ["ブレス", "吐息"],
        ["ストロベリー","草莓"],
        ["ブルーベリー","蓝莓"],
        ["メロン","蜜瓜"],
        ["レモン","柠檬"],
        ["グレープ","葡萄"],
        ["シャワー","沐浴"],
        ["イグニート","燃爆"],
        ["フロスト","冰霜"],
        ["グラウンド","大地"],
        ["エンハンス","强化"],
        ["ダークネス","黑暗"],
        ["アーマー","装甲"],
        ["ブレイク","碎裂"],
        ["ジャスティス","正义"],
        ["アーネスト","欧内斯特"],
        ["ピュリファイ","净化"],
        ["モード","模式"],
        ["パズル＆ドラゴンズ","智龙迷城"],
    ]
    var nstr = str;
    replaceArr.forEach(function(re){
        nstr = nstr.replace(re[0],re[1]);
    })
    return nstr;
}

//根据id返回宠物图标的坐标
function iconPosition(monid)
{
    var indexInThisPage = (monid-1) % 100;
    var ix = indexInThisPage % 10;
    var iy = parseInt(indexInThisPage / 10);
    var position = [(100 + 2) * ix * -1,(100 + 2) * iy * -1];
    return position;
}