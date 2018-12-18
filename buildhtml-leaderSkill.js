var MainList;
window.onload = function()
{
	MainList = document.getElementById("monsters");
	GM_xmlhttpRequest({
		method: "GET",
		url:"monsterLeaderSkill.json",
		onload: function(response) {
			mdata = JSON.parse(response.response);
			buildHTML(mdata);
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
function buildHTML(mdata)
{
	var tb = MainList.appendChild(document.createElement("table"));
	var th = tb.createTHead();
	var tRow1 = th.insertRow();
	var cellEnName = tRow1.insertCell();
	cellEnName.className = "enName";
	cellEnName.appendChild(document.createTextNode("P&D内英文名"));
	var cellIcon = tRow1.insertCell();
	cellIcon.className = "icon";
	cellIcon.appendChild(document.createTextNode("图标与链接"));
	var cellId = tRow1.insertCell();
	cellId.className = "id";
	cellId.appendChild(document.createTextNode("ID与中文名"));
	var cellSkillText = tRow1.insertCell();
	cellSkillText.className = "skill-detail";
	cellSkillText.appendChild(document.createTextNode("队长技能介绍"));

	mdata.forEach(function(mon){
		if (specialMonsterName(mon.id)) //处理几个word转简体会出错的
			mon.cname = specialMonsterName(mon.id)
		mon.name = specialCharacterReplace(mon.name);

		var row1 = tb.insertRow();
		row1.className = "row1";
		var row2 = tb.insertRow();
		row2.className = "row2";
		var cellEnName = row1.insertCell();
		cellEnName.rowSpan = 2;
		cellEnName.className = "enName";
		cellEnName.appendChild(document.createTextNode(mon.name + (mon.drop.length?" (":"")));
		mon.drop.forEach(function(d,idx,arr){
			var sp = cellEnName.appendChild(document.createElement("span"));
			sp.appendChild(document.createTextNode(d));
			sp.className = "dropName-" + d;
			if (idx<arr.length-1)
				cellEnName.appendChild(document.createTextNode(", "));
		})
		if (mon.drop.length) cellEnName.appendChild(document.createTextNode(")"));


		var cellIcon = row1.insertCell();
		cellIcon.rowSpan = 2;
		cellIcon.className = "icon";
		var lnk = cellIcon.appendChild(document.createElement("a"));
		lnk.href = "http://pad.skyozora.com/pets/" + mon.id;
		lnk.target = "_blank";
		lnk.alt = lnk.title = mon.name;
		//怪物头像部分
		var iconF1 = lnk.appendChild(document.createElement("div"));iconF1.className = "icon-link";
		iconF1.style.backgroundImage = "url(images/cards/CARDS_" + PrefixInteger(Math.ceil(mon.id/100),3) + ".PNG)";
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
		cellId.appendChild(document.createTextNode("No."+mon.id));;
		var cellName = row2.insertCell();
		cellName.className = "name";
		cellName.appendChild(document.createTextNode(mon.cname));
		var cellSkillText = row1.insertCell();
		cellSkillText.rowSpan = 2;
		cellSkillText.className = "skill-detail";
		mon.leaderSkillText.forEach(function(ifo,idx,arr){
			switch(ifo.type)
			{
				case 0:
					if (ifo.tagName != undefined)
					{
						var node = cellSkillText.appendChild(document.createElement(ifo.tagName));
						node.appendChild(document.createTextNode(specialCharacterReplace(ifo.text)));
						if (ifo.style != undefined)
							node.setAttribute("style",ifo.style);
					}else{
						cellSkillText.appendChild(document.createTextNode(specialCharacterReplace(ifo.text)));
					}
					break;
				case 1:
					cellSkillText.appendChild(document.createElement("br"));
					break;
				case 2:
					var img = cellSkillText.appendChild(document.createElement("img"));
					img.className = "icon-in-txt"
					img.className = "change-in-txt"
					img.src = "images/change.gif";
					img.alt = img.title = "→";
					break;
				case 3:
					var blockBoxR = cellSkillText.appendChild(document.createElement("div")); //珠子
					blockBoxR.className = "block-box-real";
					var blockBox = blockBoxR.appendChild(document.createElement("div")); //珠子
					blockBox.className = "block-box block-" + ifo.index;
					blockBox.title = orbs[ifo.index].cname;
					var block = blockBox.appendChild(document.createElement("div")); //珠子
					block.className = "block";
					var blockLight = blockBox.appendChild(document.createElement("div")); //点灯的光亮层
					blockLight.className = "blockCBlight";
					var blockLock = blockBox.appendChild(document.createElement("div")); //锁层
					blockLock.className = "blockLock";
					var blockPlus = blockBox.appendChild(document.createElement("div")); //点灯层
					blockPlus.className = "blockCBp";
					var blockFire1 = block.appendChild(document.createElement("div")); //点灯层
					blockFire1.className = "block-fire-1";
					var blockFire2 = block.appendChild(document.createElement("div")); //点灯层
					blockFire2.className = "block-fire-2";
					var txtSpan = blockBoxR.appendChild(document.createElement("span"));
					txtSpan.className = "block-name";
					txtSpan.appendChild(document.createTextNode(orbs[ifo.index].cname));
					for (var ii=idx+1;ii<arr.length;ii++)
					{
						if (arr[ii].type != 3)
						{
							if (arr[ii].type == 0 && arr[ii].text.indexOf("锁定") == 0)
							{
								blockBox.classList.add("block-lock");
							}else
							{
								break;
							}
						}
					}
					break;
				case 4:
					var awBox = cellSkillText.appendChild(document.createElement("div")); //珠子
					awBox.className = "awoken";
					awBox.classList.add("awoken-" + ifo.index);
					awBox.title = awokens[ifo.index].cname;
					cellSkillText.appendChild(document.createTextNode(awBox.title + " "));
					break;
				default:
					console.error("未知的类型",ifo);
			}
			
		})
	})
}