

window.addEventListener('load', function() {
	//stran nalozena

	var izvediPrijavo = function(event){
		var uporabnikIme = document.querySelector("#uporabnisko_ime").value;
		var pokrivalo = document.querySelector(".pokrivalo");
		pokrivalo.style.display = "none";
		var ime = document.querySelector("#uporabnik");
		ime.textContent = uporabnikIme;
	}
	
	var dodajOpomnik = function(event){
		var nazivOpomnika = document.querySelector("#naziv_opomnika").value;
		var casOpomnika = document.querySelector("#cas_opomnika").value;
		document.querySelector("#cas_opomnika").value = "";
	 	document.querySelector("#naziv_opomnika").value = "";
	 	var opomnikiHTML = document.querySelector("#opomniki");
	 	opomnikiHTML.innerHTML += "\n<div class='opomnik'>\n\t<div class='naziv_opomnika'>"+nazivOpomnika+"</div>"+
	 		"\n\t<div class='cas_opomnika'> Opomnik čez <span>"+casOpomnika+"</span> sekund.</div>\n</div>";
		console.log("clicked");
	}
	
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);	
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		var i = 0;
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	
	setInterval(posodobiOpomnike, 1000);
});

