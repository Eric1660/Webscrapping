$(Evento);

function Evento(){
	$("#cine1, #cine2, #cine3").ready(function(){
		sendReq("https://observatoriodocinema.bol.uol.com.br/filmes");
		sendR("https://observatoriodocinema.bol.uol.com.br/series-e-tv");
	});
}

function feed() {
	var divNova1 = document.createElement("h1");
	divNova1.innerHTML = "Feed de Noticias";
	document.getElementById("cine1").appendChild(divNova1);
	document.getElementById("cine1").style.color = "white";
}

function raspagem(doc){
	var div = doc.querySelectorAll(".td-block-row");
	div.forEach(function(div){
		var divNova2 = document.createElement("div");
		divNova2.innerHTML = div.innerHTML;
		document.getElementById("cine2").appendChild(divNova2);
	});
	var m = document.querySelectorAll("img");
			for(let i = 0; i < m.length; i++){
				m[i].style.border = "thick solid white";
		}
	}

	

function raspa(d){
	var div = d.querySelectorAll(".td-block-row");
	div.forEach(function(div){
		var divNova3 = document.createElement("div");
		divNova3.innerHTML = div.innerHTML;
		document.getElementById("cine3").appendChild(divNova3);
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
			var doc = parser.parseFromString(this.responseText, "text/html");
			raspagem(doc);
		}
	};

    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/"+url, true);
    xhttp.send();
}


function sendR(url){	
	var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var parser = new DOMParser();
			var d = parser.parseFromString(this.responseText, "text/html");
			raspa(d)
		}
	};

    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/"+url, true);
    xhttp.send();
}