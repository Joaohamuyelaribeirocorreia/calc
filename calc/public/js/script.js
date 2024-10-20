function inserir(valor){
	const input = document.getElementById("expressao");
	input.value += valor;
	verf();
}
function calcular(){
	const input = document.getElementById("expressao");
	try{
		input.value = eval(input.value);
	} catch (error){
		input.value = "Erro: "+error;
	}
	verf();
}
function limpar(){
	document.getElementById("expressao").value = "";
	verf();
}

function backspace(){
	const input = document.getElementById("expressao");
	input.value = input.value.slice(0, -1);
	verf();
}
document.body.addEventListener("keydown", function(ev){
	const e = ev.keyCode;
	if(e == 8){
		backspace();
	} else if(e == 49 || e == 35){
		inserir(1);
	} else if(e == 50 || e == 40){
		inserir(2);
	} else if(e == 51 || e == 34){
		inserir(3);
	} else if(e == 52 || e == 37){
		inserir(4);
	} else if(e == 53 || e == 12){
		inserir(5);
	} else if(e == 54 || e == 39){
		inserir(6);
	} else if(e == 55 || e == 36){
		inserir(7);
	} else if(e == 56 || e == 38){
		inserir(8);
	} else if(e == 57 || e == 33){
		inserir(9);
	} else if(e == 48 || e == 45){
		inserir(0);
	} else if(e == 189 || e == 109){
		inserir("-");
	} else if(e == 187 || e == 107){
		inserir("+");
	} else if(e == 111){
		inserir("/");
	} else if(e == 106){
		inserir("*");
	} else if(e == 46){
		limpar();
	} else if(e == 13){
		calcular();
	}
});
function verf(){
	const input = document.getElementById("expressao").value;
	const fimInput2 = input.split("")[input.length - 1];
	const fimInput1 = input.split("")[input.length - 2];
	const inputMix = fimInput1 + fimInput2;
	console.log(fimInput2);
	const ext = ["/","*","-","+"];
if (inputMix == "//" || inputMix == "**"){
		document.getElementById("menos").disabled = true;
		document.getElementById("veses").disabled = true;
		document.getElementById("mais").disabled = true;
		document.getElementById("divisao").disabled = true;
	} else if (fimInput2 == "-" || fimInput2 == "+"){
		document.getElementById("menos").disabled = true;
		document.getElementById("veses").disabled = true;
		document.getElementById("mais").disabled = true;
		document.getElementById("divisao").disabled = true;
	}else if (fimInput2 === "/" || fimInput2 === "*" || fimInput2 === "-" || fimInput2 === "+" || fimInput2 === "."){
		document.getElementById("calc").disabled = true;
	} else{
		document.getElementById("menos").disabled = false;
		document.getElementById("veses").disabled = false;
		document.getElementById("mais").disabled = false;
		document.getElementById("divisao").disabled = false;
		document.getElementById("calc").disabled = false;
	}
}