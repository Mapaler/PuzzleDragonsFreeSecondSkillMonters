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
//写入文件
function saveBinary(filePath,stream)
{
	var adostream = new ActiveXObject("ADODB.Stream");
	adostream.Type = 1;//1=adTypeBinary
	adostream.Open();
	adostream.write(stream);
	adostream.SaveToFile(filePath, 2);
	adostream.close;
	adostream = null;
}
//建立XMLHTTP
function getRequest()
{
	var xmlHttp = false;
	try {
		xmlHttp = new ActiveXObject("Msxml2.XMLHTTP.6.0");
	} catch (e) {
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e2) {
			xmlHttp = false;
		}
	}
	if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
		xmlHttp = new XMLHttpRequest();
	}
	return xmlHttp;
}
//仿GM_xmlhttpRequest函数v1.3
function GM_xmlhttpRequest(GM_param) {
	var xhr = new getRequest(); //创建XMLHttpRequest对象
	xhr.open(GM_param.method, GM_param.url, false);
	if (GM_param.responseType) xhr.responseType = GM_param.responseType;
	if (GM_param.overrideMimeType) xhr.overrideMimeType(GM_param.overrideMimeType);
	xhr.onreadystatechange = function() //设置回调函数
		{
			if (xhr.readyState === 4) {
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

//读取JSON数据
var universal_json = loadText("universal_jsonobj.js","utf-8");
eval(universal_json);
/*
GM_xmlhttpRequest({
	url: "http://localhost/index.html",
	method: "GET",
	onload: function(response) {
		saveBinary("觉醒图片.txt",response.responseBody);
	}
})
*/

function downOrbs(orbsArr, callback)
{
	if (orbsArr.length < 1)
	{
		callback();
		return;
	}
    var newOrbsArr = orbsArr.concat();
    var thisOrb = newOrbsArr.shift(); //删除新数组的第一个元素
	log("正在下载：" + thisOrb.cname);
	GM_xmlhttpRequest({
		url: thisOrb.icon,
		method: "GET",
		onload: function(response) {
			saveBinary("images\\drops\\" + thisOrb.name + ".png",response.responseBody);
			downOrbs(newOrbsArr, callback);
		},
		onerror: function(response) {
			log(response.status);
		}
	})
}

function downAwokens(awokensArr, callback)
{
	if (awokensArr.length < 1)
	{
		callback();
		return;
	}
    var newAwokensArr = awokensArr.concat();
    var thisAwoken = newAwokensArr.shift(); //删除新数组的第一个元素
	log("正在下载：" + thisAwoken.icon  + " " +  thisAwoken.cname);
	GM_xmlhttpRequest({
		url: thisAwoken.icon,
		method: "GET",
		onload: function(response) {
			var id = thisAwoken.icon.replace(/.+\/+skill-(\d+)_\w+\.png$/,"$1");
			saveBinary("images\\skill_icon\\skill-" + id + ".png",response.responseBody);
			downAwokens(newAwokensArr, callback);
		},
		onerror: function(response) {
			log(response.status);
		}
	})
}

if (!fso.FolderExists("images\\drops\\"))
	fso.createFolder("images\\drops\\");
if (!fso.FolderExists("images\\skill_icon\\"))
	fso.createFolder("images\\skill_icon\\");
/*log("开始下载宝珠图片");
downOrbs(orbs,function(){
	log("宝珠图片下载完毕");
})*/
log("开始下载觉醒图片");
downAwokens(awokens,function(){
	log("觉醒图片下载完毕");
})

for (var ai =0;ai<awokens.length;ai++)
{
	log(awokens[ai].icon);
}