let pattern = {
	password: /^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$% &*]{6,16}$/,
	email: /^[a-zA-Z0-9.!#$%&'*+\/=?a_{}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?: \. [a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
}

let inputs = document.querySelectorAll('input')

inputs.forEach(inp => {
	inp.onkeyup = () => {
		let key = inp.getAttribute('name')
		validate(inp, pattern[key])
	}
})


var modal = document.getElementById('myModal'); var btn = document.getElementById("myBtn"); var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
	modal.style.display = "block";
}
span.onclick = function () {
	modal.style.display = "none";
}


var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2"); 
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
	modal2.style.display = "block";
}
span2.onclick = function () {
	modal2.style.display = "none";
}

