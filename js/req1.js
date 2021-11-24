$(Evento);

function Evento(){
	$("#title, #c1").ready(function(){
		sendReq("http://www.cineroxy.com.br/em-breve");
	});
}


function rasparPagina(documento){
	var title = document.createElement("h1");
	title.innerHTML = "Filmes em cartaz e a serem lançados no cinema";
	document.getElementById("title").appendChild(title);
	document.getElementById("title").style.color = "white";
	var img = documento.querySelector(".cartaz");
		var f1 = document.createElement("img");
		f1.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/261120190709231.jpg");
		f1.setAttribute("width", "280");	
		f1.setAttribute("height", "420");
		f1.setAttribute("alt", "BROOKLYN - SEM PAI NEM MÃE");	
		document.getElementById("c1").appendChild(f1);
		var f2 = document.createElement("img");
		f2.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/021120191517291.jpg");
		f2.setAttribute("width", "280");	
		f2.setAttribute("height", "420");
		f2.setAttribute("alt", "ENTRE FACAS E SEGREDOS");	
		document.getElementById("c1").appendChild(f2);
		var f3 = document.createElement("img");
		f3.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/211120192145581.jpg");
		f3.setAttribute("width", "280");	
		f3.setAttribute("height", "420");
		f3.setAttribute("alt", "SYNONYMES");	
		document.getElementById("c1").appendChild(f3);
		var f3 = document.createElement("img");
		f3.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/211120192148411.jpg");
		f3.setAttribute("width", "280");	
		f3.setAttribute("height", "420");
		f3.setAttribute("alt", "CRIME SEM SAÍDA");	
		document.getElementById("c1").appendChild(f3);
		var f4 = document.createElement("img");
		f4.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/211120192153411.jpg");
		f4.setAttribute("width", "280");	
		f4.setAttribute("height", "420");
		f4.setAttribute("alt", "BRINCANDO COM FOGO");	
		document.getElementById("c1").appendChild(f4);
		var f5 = document.createElement("img");
		f5.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/090920192144331.jpg");
		f5.setAttribute("width", "280");	
		f5.setAttribute("height", "420");
		f5.setAttribute("alt", "Star Wars: A Ascensão Skywalker");	
		document.getElementById("c1").appendChild(f5);
		var f6 = document.createElement("img");
		f6.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/090920192144081.jpg");
		f6.setAttribute("width", "280");	
		f6.setAttribute("height", "420");
		f6.setAttribute("alt", "CATS");	
		document.getElementById("c1").appendChild(f6);
		var f7 = document.createElement("img");
		f7.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/090920192225481.jpg");
		f7.setAttribute("width", "280");	
		f7.setAttribute("height", "420");
		f7.setAttribute("alt", "PLAYMOBIL");	
		document.getElementById("c1").appendChild(f7);
		var f8 = document.createElement("img");
		f8.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/090920192314181.jpg");
		f8.setAttribute("width", "280");	
		f8.setAttribute("height", "420");
		f8.setAttribute("alt", "A BATALHA DAS CORRENTES");	
		document.getElementById("c1").appendChild(f8);
		var f9 = document.createElement("img");
		f9.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/090920192246351.jpg");
		f9.setAttribute("width", "280");	
		f9.setAttribute("height", "420");
		f9.setAttribute("alt", "O ÚLTIMO AMOR DE CASANOVA");	
		document.getElementById("c1").appendChild(f9);
		var f10 = document.createElement("img");
		f10.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/211120192143051.jpg");
		f10.setAttribute("width", "280");	
		f10.setAttribute("height", "420");
		f10.setAttribute("alt", "FROZEN 2");	
		document.getElementById("c1").appendChild(f10);
		var f11 = document.createElement("img");
		f11.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/211120192138421.jpg");
		f11.setAttribute("width", "280");	
		f11.setAttribute("height", "420");
		f11.setAttribute("alt", "AMEAÇA PROFUNDA");	
		document.getElementById("c1").appendChild(f11);
		var f12 = document.createElement("img");
		f12.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/111120191322321.jpg");
		f12.setAttribute("width", "280");	
		f12.setAttribute("height", "420");
		f12.setAttribute("alt", "JUMANJI: PRÓXIMA FASE");	
		document.getElementById("c1").appendChild(f12);
		var f13 = document.createElement("img");
		f13.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/211120192131491.jpg");
		f13.setAttribute("width", "280");	
		f13.setAttribute("height", "420");
		f13.setAttribute("alt", "O MELHOR VERÃO DAS NOSSAS VIDAS");	
		document.getElementById("c1").appendChild(f13);
		var f14 = document.createElement("img");
		f14.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/211120192134471.jpg");
		f14.setAttribute("width", "280");	
		f14.setAttribute("height", "420");
		f14.setAttribute("alt", "DOLITTLE");	
		document.getElementById("c1").appendChild(f14);
		var f15 = document.createElement("img");
		f15.setAttribute("src", "http://ecine.net.br/sistema/arquivos/filmes/211120192126291.jpg");
		f15.setAttribute("width", "280");	
		f15.setAttribute("height", "420");
		f15.setAttribute("alt", "UM ESPIÃO ANIMAL");	
		document.getElementById("c1").appendChild(f15);
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
			var documento = parser.parseFromString(this.responseText, "text/html");
			rasparPagina(documento);
		}
	};

    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/"+url, true);
    xhttp.send();
}



