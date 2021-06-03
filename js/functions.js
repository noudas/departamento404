//Exibir input de senha
function showCasePass(){
	document.getElementById("home-form").style.display = "block";
	document.getElementById("home-button").style.display = "none";
	
	//Verificar compatibilidade com Local Storage
	if (typeof(Storage) !== "undefined") {
		//Ativar o pulo do botão
		sessionStorage.setItem("skip", "1");
	}
}

//Verificar senha
function verifyPassword(){
	var pass = document.getElementById("pass").value.toLowerCase();
	
	//Senha do Caso 1
	if (pass == "c49a51-i"){
		window.location = "caso_1.html";
	}
	//Senha do PC do 2º Policial
	else if (pass == "c49b50-2"){
		window.location = "caso_1_1.html";
	}
	//Senha p/ fim do Caso 1
	else if (pass == "c50a00-1"){
		window.location = "caso_1_m.html";
	}
	//Senha secreta (easter-egg)
	else if (pass == "34st3r-egg"){
		window.location = "secr.html";
	}
	//Campo vazio/inválidos
	//Senha errada
	else {
		document.getElementById("error-msg").innerHTML = "SENHA INVÁLIDA.";
		document.getElementById("pass").style.borderColor = "#ff2634";
	}
	return false;
}
//Remove msg. de erro da senha ao tentar novamente
function resetError(){
	document.getElementById("error-msg").innerHTML = "";
	document.getElementById("pass").style.borderColor = "transparent";
}

//Para as fotos
var cont = 0;
var maxFotos = 0;
var modalImg;
var captionText;
var modal;
var img;

//Abrir imagem
function imgClickBDN(ImgSelect,IdSelect)
{
	modal = document.getElementById('myModal');
	captionText = document.getElementById("caption");    
	maxFotos=3;
	modal.style.display = "block";
	document.getElementById("img01").src = document.getElementsByName(ImgSelect)[0].src;
	document.getElementById("img01").name =  document.getElementsByName(ImgSelect)[0].name;
	captionText.innerHTML = document.getElementsByName(ImgSelect)[0].alt;
	changeImage(ImgSelect);
}

//Mudar imagem
function changeImage(ImgSelect) {
	if(modal.style.display == "block")
	{
		if(cont>=0 && cont <=  maxFotos ) {                       
			if(cont==maxFotos)
			{
				cont=1;
			}
			else
			{
				cont++;
			}             
			var img = document.getElementsByName(ImgSelect)[cont].src;
			document.getElementById("img01").src = img;
		}             
	}
}

//Fechar imagem
function Close(){
	modal.style.display = "none";
	document.getElementById("img01").src = "";
	cont = 0;
}