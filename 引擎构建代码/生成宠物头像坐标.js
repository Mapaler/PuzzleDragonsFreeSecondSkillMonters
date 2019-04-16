//数字补0
function PrefixInteger(num, length) {  
	return (Array(length).join('0') + num).slice(-length); 
}

var t = [];
for (var i=1;i<=100; i++)
{
	t.push(".pet-cards-" + i + "{background-image: url(images/cards/CARDS_" + PrefixInteger(Math.ceil(i),3) + ".webp);}")
}

console.log(t.join("\n"));

//=======================================================


var t = [];
for (var x=0;x<10; x++)
{
	t.push(".pet-cards-index-x-" + x + "{background-position-x:" + ((100 + 2) * x * -1) + "px;}")
}
for (var y=0;y<10; y++)
{
	t.push(".pet-cards-index-y-" + y + "{background-position-y:" + ((100 + 2) * y * -1) + "px;}")
}

console.log(t.join("\n"));