//输出觉醒
var txt_awokens = awokens.map(function(a,idx){
	var poX = 0;
	var poY = -32 * (idx+1);
	var txt = ".awoken-" + idx + "{/*" + a.cname + "*/\n\tbackground-position: " + poX + "px " + poY + "px;\n}";
		return txt;
	});
console.log(txt_awokens.join("\n"));

//输出类型
var txt_types = types.map(function(a,idx){
	var poX = 0;
	var poY = -32 * idx;
	var txt = ".type-" + idx + "{/*" + a.cname + "*/\n\tbackground-position: " + poX + "px " + poY + "px;\n}";
		return txt;
	});
console.log(txt_types.join("\n"));