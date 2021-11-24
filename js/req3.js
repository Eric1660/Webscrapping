$(Evento);

function Evento(){
	$("2020-1, #2020-2").ready(function(){
		sendReq("https://cinema10.com.br/materias/os-filmes-mais-aguardados-de-2020");
	});
}

function raspar(x){	
	var div	= x.querySelectorAll(".conteudoArtigo");
	var divNova1 = document.createElement("h1");
	divNova1.innerHTML = "Filmes mais esperados de 2020";
	document.getElementById("2020-1").appendChild(divNova1);
	document.getElementById("2020-1").style.color = "white";
	div.forEach(function(div){
		var divNova2 = document.createElement("div");
		divNova2.innerHTML = div.innerHTML;
		document.getElementById("2020-2").appendChild(divNova2);
	});
	var m = document.querySelectorAll("img");
			for(let i = 0; i < m.length; i++){
				m[i].style.border = "thick solid white";
		}
	}
	
function sendReq(url){	
	var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var parser = new DOMParser();
			var x = parser.parseFromString(this.responseText, "text/html");
			raspar(x);
		}
	};

    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/"+url, true);
    xhttp.send();
}


