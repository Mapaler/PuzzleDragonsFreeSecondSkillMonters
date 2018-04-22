﻿var MainList;
window.onload = function()
{
	MainList = document.getElementById("monsters");
	GM_xmlhttpRequest({
		method: "GET",
		url:"monsters.json",
		onload: function(response) {
			buildHTML(response.response);
		},
		onerror: function(response) {
			console.error("数据获取错误",response);
		}
	})
}

function buildHTML(response)
{
	mdata = JSON.parse(response);
	mdata.forEach(function(grp){
		var grpTitle = MainList.appendChild(document.createElement("dt"));
		grpTitle.appendChild(document.createTextNode(grp.name));

		var grpTable = MainList.appendChild(document.createElement("dd"));

		var tb = grpTable.appendChild(document.createElement("table"));
		grp.mosters.forEach(function(mon){
			var row1 = tb.insertRow();
			row1.className = "row1";
			var row2 = tb.insertRow();
			row2.className = "row2";
			var cellIcon = row1.insertCell();
			cellIcon.rowSpan = 2;
			cellIcon.className = "icon";
			var lnk = cellIcon.appendChild(document.createElement("a"));
			var icon = lnk.appendChild(document.createElement("img"));
			icon.alt = mon.name;
			lnk.href = "http://pad.skyozora.com/pets/" + mon.id;
			icon.src = mon.icon;
			var cellId = row1.insertCell();
			cellId.className = "id";
			cellId.appendChild(document.createTextNode("No."+mon.id));
			var cellName = row2.insertCell();
			cellName.className = "name";
			switch(mon.id)
			{
				case 1098:
					mon.name = "试练刚神・海克力斯";
					break;
				case 3834:
					mon.name = "空都的守护神・雅典娜＝赫利奥斯";
					break;
				case 3193:
					mon.name = "帝都之守护神・雅典娜";
					break;
			}
			cellName.appendChild(document.createTextNode(mon.name));
			var cellSkillName = row1.insertCell();
			cellSkillName.className = "skill-name";
			cellSkillName.appendChild(document.createTextNode(mon.skill.name));
			var cellSkillCD = row1.insertCell();
			cellSkillCD.className = "skill-cd";
			cellSkillCD.appendChild(document.createTextNode(mon.skill.CDlong + "→" + mon.skill.CDshort + "(Lv"+mon.skill.levelMax+")"));
			var cellSkillText = row2.insertCell();
			cellSkillText.className = "skill-detail";
			cellSkillText.colSpan = 3;
			mon.skill.text.forEach(function(ifo){
				switch(ifo.type)
				{
					case 0:
						cellSkillText.appendChild(document.createTextNode(ifo.text));
						break;
					case 1:
						cellSkillText.appendChild(document.createElement("br"));
						break;
					case 2:
						if (ifo.src != "http://pad.skyozora.com/images/change.gif")
						{
							var img = cellSkillText.appendChild(document.createElement("img"));
							img.className = "icon-in-txt"
							img.src = ifo.src;
						}
						switch(ifo.src)
						{
							case "http://pad.skyozora.com/images/change.gif":
								cellSkillText.appendChild(document.createTextNode("→"));
								break;
						
							case "http://pad.skyozora.com/images/drops/Fire.png":
								cellSkillText.appendChild(document.createTextNode("火珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Fire+.png":
								cellSkillText.appendChild(document.createTextNode("强化火珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Water.png":
								cellSkillText.appendChild(document.createTextNode("水珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Water+.png":
								cellSkillText.appendChild(document.createTextNode("强化水珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Wood.png":
								cellSkillText.appendChild(document.createTextNode("木珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Wood+.png":
								cellSkillText.appendChild(document.createTextNode("强化木珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Light.png":
								cellSkillText.appendChild(document.createTextNode("光珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Light+.png":
								cellSkillText.appendChild(document.createTextNode("强化光珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Dark.png":
								cellSkillText.appendChild(document.createTextNode("暗珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Dark+.png":
								cellSkillText.appendChild(document.createTextNode("强化暗珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Heart.png":
								cellSkillText.appendChild(document.createTextNode("心珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Heart+.png":
								cellSkillText.appendChild(document.createTextNode("强化心珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Dead.png":
								cellSkillText.appendChild(document.createTextNode("废珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Poison.png":
								cellSkillText.appendChild(document.createTextNode("毒珠"));
								break;
							case "http://pad.skyozora.com/images/drops/Poison+.png":
								cellSkillText.appendChild(document.createTextNode("剧毒"));
								break;
						
							default:
								break;
						}
						break;
					default:
						console.error("未知的类型",ifo);
				}
				
			})
			var cellJX = row1.insertCell();
			cellJX.className = "jx";
			var wepon = mon.awokens.some(function(awoken){
				return awoken == 48; //武器觉醒
			})
			if (wepon)
			{
				mon.awokens.forEach(function(awoken){
					var jxicon = cellJX.appendChild(document.createElement("img"));
					jxicon.src = awokens[awoken].icon;
				})
			}
			var cellBonus = row1.insertCell();
			cellBonus.rowSpan = 2;
			cellBonus.className = "bonus";
			var bonusDetail = cellBonus.appendChild(document.createElement("div"));
			bonusDetail.appendChild(document.createTextNode((mon.bonus.lvtype?"Lv110":"满等") + "+297时BONUS："));
			var bonusName = ["HP","攻击力","回复力"];
			for (var bi=0;bi<3;bi++)
			{
				var bonusNum = cellBonus.appendChild(document.createElement("div"));
				var bn = mon.bonus.num[bi];
				var bonusNameSpan = bonusNum.appendChild(document.createElement("span"));
				bonusNameSpan.className = "bouns-name";
				bonusNameSpan.appendChild(document.createTextNode(bonusName[bi]));
				var bonusNumSpan = bonusNum.appendChild(document.createElement("span"));
				bonusNumSpan.className = bn>0?"bouns-positive":"bouns-negative";
				bonusNumSpan.appendChild(document.createTextNode((bn>0?"+":"") + bn));
			}
		})
	})
}