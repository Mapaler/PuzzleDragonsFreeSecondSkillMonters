var fso = new ActiveXObject("Scripting.FileSystemObject");
var osh = new ActiveXObject("WScript.Shell");
if (/wscript\.exe/ig.test(WScript.FullName))
{
    osh.run("cmd /c cscript.exe //nologo \"" + WScript.ScriptFullName + "\"");
    WScript.Quit();
}

//显示文本
function log(str)
{
	WScript.Echo(str);
}
//读取文件
function loadText(filePath,charset)
{
	var adostream = new ActiveXObject("ADODB.Stream");
	adostream.Type = 2;
	adostream.Open();
	adostream.Charset = charset;
	adostream.Position = 0;
	adostream.LoadFromFile(filePath);
	var strtemp = adostream.readtext;
	adostream.close;
	adostream = null;
	return strtemp;
}
//写入文件
function saveText(filePath,str,charset)
{
	var adostream = new ActiveXObject("ADODB.Stream");
	adostream.Type = 2;
	adostream.Open();
	adostream.Charset = charset;
	adostream.Position = 0;
	adostream.writetext(str);
	adostream.SaveToFile(filePath, 2);
	adostream.flush;
	adostream.close;
	adostream = null;
}
//生成一条down文件内的下载信息
function aDownInfo(url,dir,out)
{
	return url + "\n dir=" + dir + "\n out=" + out;
}

//读取JSON数据
var universal_json = loadText("..\\universal_jsonobj.js","utf-8");
eval(universal_json);

var downInfoList = [];
log("正在生成宝珠和类型下载列表");
//添加珠子
for (var oi=0; oi< orbs.length; oi++)
{
	var orb = orbs[oi];
	if (!fso.FileExists("../images/drops/" + orb.name + ".png"))
	downInfoList.push(aDownInfo(orb.icon,"../images/drops",orb.name + ".png"));
}
//添加类型
for (var ti=0; ti< types.length; ti++)
{
	var type = types[ti];
	if (!fso.FileExists("../images/types/" + type.name + ".png"))
	downInfoList.push(aDownInfo(type.icon,"../images/types",type.name + ".png"));
}
saveText("Aria2下载列表文件-宝珠和类型图片.down",downInfoList.join("\n"),"GBK");
var downInfoList = [];

//添加觉醒
log("正在生成觉醒下载列表");
for (var ai =0;ai<awokens.length;ai++)
{
	var awoken = awokens[ai];
	var id = awoken.icon.replace(/.+\/+skill-(\d+)_\w+\.png$/,"$1");
	if (!fso.FileExists("../images/skill_icon/" + "skill-" + id + ".png"))
		downInfoList.push(aDownInfo(awoken.icon,"../images/skill_icon","skill-" + id + ".png"));
}
saveText("Aria2下载列表文件-觉醒图片.down",downInfoList.join("\n"),"GBK");

//读取怪物JSON数据
var downInfoList = [];
var monsters_json = loadText("..\\monsters.json","utf-8");
var monsters = null;
eval("monsters = " + monsters_json + ";");
log("正在生成怪物下载列表");
//添加怪物
for (var gi =0;gi<monsters.length;gi++)
{
	var grp = monsters[gi];
	for (var mi =0;mi<grp.mosters.length;mi++)
	{
		var mons = grp.mosters[mi];
		if (!fso.FileExists("../images/pets_icon/" + mons.id + ".png"))
			downInfoList.push(aDownInfo(mons.icon,"../images/pets_icon",mons.id + ".png"));
	}
}

saveText("Aria2下载列表文件-怪物图片.down",downInfoList.join("\n"),"GBK");