//应用于网址：
//http://pad.skyozora.com/skill/%E8%A6%BA%E9%86%92%E6%8A%80%E8%83%BD%E4%B8%80%E8%A6%BD/
var awokenCname = [ //对应的中文简称
	"HP+",
	"攻击+",
	"回复+",
	"火盾",
	"水盾",
	"木盾",
	"光盾",
	"暗盾",
	"自回",
	"防封",
	"防暗",
	"防废",
	"防毒",
	"火+",
	"水+",
	"木+",
	"光+",
	"暗+",
	"手指",
	"心解",
	"SB",
	"火横",
	"水横",
	"木横",
	"光横",
	"暗横",
	"U",
	"SX",
	"心+",
	"协力",
	"龙杀",
	"神杀",
	"恶魔杀",
	"机杀",
	"平衡杀",
	"攻击杀",
	"体力杀",
	"回复杀",
	"进化杀",
	"觉醒杀",
	"强化杀",
	"卖钱杀",
	"7c",
	"5色破防",
	"心追",
	"全体HP强化",
	"全体回复强化",
	"破无效",
	"武器觉醒",
	"3x3心追",
	"5色溜",
	"大防封",
	"大手指",
	"防云",
	"防封条",
	"大SB",
	"8血以上强化",
	"半血以下强化",
	"L盾",
	"L解锁",
	"10c",
	"c珠",
	"语音",
	"奖励增加",
]

var table = document.querySelector("#wrapper > table:nth-of-type(3) table");
var awokens = [];
for (var r=0;r<table.rows.length;r++)
{
	var row = table.rows[r];
	var awoken = {
		icon: row.cells[0].querySelector("img").src,
		name: row.cells[1].querySelector("a").textContent,
		cname:awokenCname[r],
		//detail: row.cells[2].textContent,
	}
	awokens.push(awoken);
}

var outText = JSON.stringify(awokens);
outText = outText.replace(/"(c?name|icon)"/igm,"$1");
//outText = outText.replace(/^\[(.+)\]$/igm,"[$1\n]");
//outText = outText.replace(/{(.+?)}/igm,"\n{$1}");
var jsonTextarea = document.querySelector(".jsonTextarea") || table.parentNode.insertBefore(document.createElement("textarea"),table);
jsonTextarea.classList.add("jsonTextarea");
jsonTextarea.value = outText;
//console.log(outText);
