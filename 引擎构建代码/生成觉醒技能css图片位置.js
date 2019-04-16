var sx = 610;	//初始x
var sy = 110;	//初始y
var w = 32;var h = 32;//每个区域的宽度
var ws = 4;var hs = 4;//每个区域的间隔
var lx = 11;	//横向个数
var ly = 11;	//纵向个数
var skn = 4; //跳过开头的个数

var lxn = 1; //记录是第几列了
var lyn = 1; //记录是第几行了
var row = false; //记录是行还是列
var poArr = [];
for (var i=0;i<(awokens.length + skn);i++)
{
	poArr.push([lxn,lyn]);
	if (row)
	{
		lxn++;
		if (lxn>lx)
		{
			lxn = lyn+1;
			lyn++;
			row = !row;
		}
	}else
	{
		lyn++;
		if (lyn>ly)
		{
			lyn = lxn;
			lxn++;
			row = !row;
		}
	}
}

var t = awokens.map(function(a,idx){
	var poIdx = poArr[idx + skn];
	var pox = sx + (poIdx[0]-1) * (w+ws);
	var poy = sy + (poIdx[1]-1) * (h+hs);
	var txt = ".awoken-" + idx + "{/*" + a.cname + "*/\n\tbackground-position: -" + pox + "px -" + poy + "px;\n}";
		return txt;
	});

console.log(t.join("\n"));