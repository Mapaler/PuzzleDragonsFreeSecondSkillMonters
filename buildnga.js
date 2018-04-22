
var outTextarea;
window.onload = function()
{
	outTextarea = document.getElementById("ngacode");
	GM_xmlhttpRequest({
		method: "GET",
		url:"monsters.json",
		onload: function(response) {
			buildNGACode(response.response);
		},
		onerror: function(response) {
			console.error("数据获取错误",response);
		}
	})
}

function buildNGACode(response)
{
	mdata = JSON.parse(response);
	var tieziText = [];
	mdata.forEach(function(grp){
		tieziText.push("[size=150%][b]" + grp.name + "[/b][/size]");
		tieziText.push("[table]");
		grp.mosters.forEach(function(mon,idx){
			tieziText.push("[tr]");
			tieziText.push(
				"[td " + (idx==0?"width=8 ":"") + "rowspan=2]" + 
				"[url=" + "http://pad.skyozora.com/pets/" + mon.id + "]" + 
				"[img]" + mon.icon + "[/img]" +
				"[/url]" + 
				"[/td]"
			);
			tieziText.push(
				"[td " + (idx==0?"width=12 ":"") + "]" + 
				"No."+mon.id + 
				"[/td]"
			);
			tieziText.push(
				"[td " + (idx==0?"width=15 ":"") + "]" + 
				"主动技能：" + mon.skill.name + 
				"[/td]"
			);
			tieziText.push(
				"[td " + (idx==0?"width=12 ":"") + "]" + 
				"CD：" + mon.skill.CDlong + "→" + mon.skill.CDshort + "(Lv"+mon.skill.levelMax+")" + 
				"[/td]"
			);
	
			var jxUBB = [];
			var wepon = mon.awokens.some(function(awoken){
				return awoken == 48; //武器觉醒
			})
			if (wepon)
			{
				mon.awokens.forEach(function(awoken){
					jxUBB.push("[img]" + awokens[awoken].icon + "[/img]");
				})
			}
	
			tieziText.push(
				"[td]" + 
				(jxUBB.length>0?"武器觉醒："+jxUBB.join(""):"") + 
				"[/td]"
			);
			tieziText.push("[/tr]");
			tieziText.push("[tr]");
	
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
			var showUTF_8UBB = mon.name;
			showUTF_8UBB = showUTF_8UBB.replace("・","&#12539;");
			showUTF_8UBB = showUTF_8UBB.replace("♀","&#9792;");
			showUTF_8UBB = showUTF_8UBB.replace("♂","&#9794;");
			tieziText.push(
				"[td]" + 
				showUTF_8UBB + 
				"[/td]"
			);
	
			var skillUBB = [];
			mon.skill.text.forEach(function(ifo){
				switch(ifo.type)
				{
					case 0:
						skillUBB.push(ifo.text);
						break;
					case 1:
						skillUBB.push("\n");
						break;
					case 2:
						if (ifo.src != "http://pad.skyozora.com/images/change.gif")
						{
							skillUBB.push("[img]" + ifo.src + "[/img]");
						}
						switch(ifo.src)
						{
							case "http://pad.skyozora.com/images/change.gif":
								skillUBB.push("→");
								break;
							case "http://pad.skyozora.com/images/drops/Fire.png":
								skillUBB.push("火珠");
								break;
							case "http://pad.skyozora.com/images/drops/Fire+.png":
								skillUBB.push("强化火珠");
								break;
							case "http://pad.skyozora.com/images/drops/Water.png":
								skillUBB.push("水珠");
								break;
							case "http://pad.skyozora.com/images/drops/Water+.png":
								skillUBB.push("强化水珠");
								break;
							case "http://pad.skyozora.com/images/drops/Wood.png":
								skillUBB.push("木珠");
								break;
							case "http://pad.skyozora.com/images/drops/Wood+.png":
								skillUBB.push("强化木珠");
								break;
							case "http://pad.skyozora.com/images/drops/Light.png":
								skillUBB.push("光珠");
								break;
							case "http://pad.skyozora.com/images/drops/Light+.png":
								skillUBB.push("强化光珠");
								break;
							case "http://pad.skyozora.com/images/drops/Dark.png":
								skillUBB.push("暗珠");
								break;
							case "http://pad.skyozora.com/images/drops/Dark+.png":
								skillUBB.push("强化暗珠");
								break;
							case "http://pad.skyozora.com/images/drops/Heart.png":
								skillUBB.push("心珠");
								break;
							case "http://pad.skyozora.com/images/drops/Heart+.png":
								skillUBB.push("强化心珠");
								break;
							case "http://pad.skyozora.com/images/drops/Dead.png":
								skillUBB.push("废珠");
								break;
							case "http://pad.skyozora.com/images/drops/Poison.png":
								skillUBB.push("毒珠");
								break;
							case "http://pad.skyozora.com/images/drops/Poison+.png":
								skillUBB.push("剧毒");
								break;
						}
						break;
					default:
						console.error("未知的类型",ifo);
				}
				
			})
			tieziText.push(
				"[td colspan=3]" + 
				(skillUBB.length>0?skillUBB.join(""):"") + 
				"[/td]"
			);
			tieziText.push("[/tr]");
		})
		tieziText.push("[/table]");
	})
	outTextarea.value = tieziText.join("\n");
}