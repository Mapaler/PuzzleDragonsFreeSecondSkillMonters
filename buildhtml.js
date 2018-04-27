var MainList;
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
//数字补0
function PrefixInteger(num, length) {  
	return (Array(length).join('0') + num).slice(-length); 
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
			if (specialMonsterName(mon.id)) //处理几个word转简体会出错的
				mon.name = specialMonsterName(mon.id)
			mon.name = specialCharacterReplace(mon.name);

			var row1 = tb.insertRow();
			row1.className = "row1";
			var row2 = tb.insertRow();
			row2.className = "row2";
			var cellIcon = row1.insertCell();
			cellIcon.rowSpan = 2;
			cellIcon.className = "icon";
			var lnk = cellIcon.appendChild(document.createElement("a"));
			lnk.href = "http://pad.skyozora.com/pets/" + mon.id;
			lnk.target = "_blank";
			lnk.alt = lnk.title = mon.name;
			//怪物头像部分
			var iconF1 = lnk.appendChild(document.createElement("div"));iconF1.className = "icon-link";
			iconF1.style.backgroundImage = "url(images/cards/CARDS_" + PrefixInteger(Math.ceil(mon.id/100),3) + ".png)";
			var position = iconPosition(mon.id);
			iconF1.style.backgroundPosition = position.map(function(p){return p + "px";}).join(" ");
			//怪物主属性
			var iconF2 = iconF1.appendChild(document.createElement("div"));iconF2.className = "property";
			iconF2.classList.add("property-" + mon.property[0]);
			//怪物副属性
			var iconF3 = iconF1.appendChild(document.createElement("div"));
			iconF3.classList.add("subproperty");
			if (mon.property.length>1)
			{
				iconF3.classList.add("subproperty-" + mon.property[1]);
			}

			var cellId = row1.insertCell();
			cellId.className = "id";
			cellId.appendChild(document.createTextNode("No."+mon.id));
			var cellName = row2.insertCell();
			cellName.className = "name";
			cellName.appendChild(document.createTextNode(mon.name));
			var cellSkillName = row1.insertCell();
			cellSkillName.className = "skill-name";
			cellSkillName.appendChild(document.createTextNode(specialCharacterReplace(mon.skill.name)));
			var cellSkillCD = row1.insertCell();
			cellSkillCD.className = "skill-cd";
			cellSkillCD.appendChild(document.createTextNode("CD:" + mon.skill.CD[0] + "→" + mon.skill.CD[1] + "(Lv"+(mon.skill.CD[0] - mon.skill.CD[1] + 1)+")"));
			var cellSkillText = row2.insertCell();
			cellSkillText.className = "skill-detail";
			cellSkillText.colSpan = 3;
			mon.skill.text.forEach(function(ifo){
				switch(ifo.type)
				{
					case 0:
						cellSkillText.appendChild(document.createTextNode(specialCharacterReplace(ifo.text)));
						break;
					case 1:
						cellSkillText.appendChild(document.createElement("br"));
						break;
					case 2:
						var img = cellSkillText.appendChild(document.createElement("img"));
						img.className = "icon-in-txt"
						if (ifo.type == 2) //转换为
						{
							img.className = "change-in-txt"
							img.src = "images/change.gif";
							img.alt = img.title = "→";
						}else if(ifo.type == 3) //宝珠
						{
							img.src = "images/drops/" + orbs[ifo.index].name + ".png";
							img.alt = img.title = orbs[ifo.index].cname;
						}else if(ifo.type == 4) //觉醒
						{
							img.src = "images/skill_icon/skill-" + PrefixInteger(ifo.index+1,2) + ".png";
							img.alt = img.title = awokens[ifo.index].cname;
							cellSkillText.appendChild(document.createTextNode(img.alt + " "));
						}
						break;
					case 3:
						var blockBoxR = cellSkillText.appendChild(document.createElement("div")); //珠子
						blockBoxR.className = "block-box-real";
						var blockBox = blockBoxR.appendChild(document.createElement("div")); //珠子
						blockBox.className = "block-box block-" + ifo.index;
						blockBox.title = orbs[ifo.index].cname;
						var block1 = blockBox.appendChild(document.createElement("div")); //珠子
						block1.className = "block";
						var blockLight = blockBox.appendChild(document.createElement("div")); //点灯的光亮层
						blockLight.className = "blockCBlight";
						var block2 = blockBox.appendChild(document.createElement("div")); //点灯层
						block2.className = "blockCBp";
						var blockFire1 = block1.appendChild(document.createElement("div")); //点灯层
						blockFire1.className = "block-fire-1";
						var blockFire2 = block1.appendChild(document.createElement("div")); //点灯层
						blockFire2.className = "block-fire-2";
						var txtSpan = blockBoxR.appendChild(document.createElement("span"));
						txtSpan.className = "block-name";
						txtSpan.appendChild(document.createTextNode(orbs[ifo.index].cname));
						break;
					case 4:
						var awBox = cellSkillText.appendChild(document.createElement("div")); //珠子
						awBox.className = "awoken";
						awBox.classList.add("awoken-" + ifo.index);
						awBox.title = awokens[ifo.index].cname;
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
					var jxiconLink = cellJX.appendChild(document.createElement("a"));
					jxiconLink.href = "http://pad.skyozora.com/skill/" + awokens[awoken].name;
					jxiconLink.target = "_blank";
					var awBox = jxiconLink.appendChild(document.createElement("div")); //珠子
					awBox.className = "awoken";
					awBox.classList.add("awoken-" + awoken);
					awBox.title = awokens[awoken].cname;
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