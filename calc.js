function add() {
	var f = document.getElementById('first').value;
	var first = Number(f);
	var s = document.getElementById('second').value;
	var second =Number(s);
	var add = first + second;
	document.getElementById("ans").innerHTML= add;
}

function sub() {
	var f = document.getElementById('first').value;
	var s = document.getElementById('second').value;
	var sub = f-s;
	document.getElementById("ans").innerHTML= sub;
}

function mul() {
	var f = document.getElementById('first').value;
	var s = document.getElementById('second').value;
	var mul = f * s;
	document.getElementById("ans").innerHTML= mul;
}

function divs() {
	var f = document.getElementById('first').value;
	var s = document.getElementById('second').value;
	var divs = f/s;
	document.getElementById("ans").innerHTML= divs;
}