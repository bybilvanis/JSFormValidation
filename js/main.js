"use strict";

// functie voor eerste validatie
function formValidatie(){
	// alle inhoud bewaren in een functie
    var gebruiker = document.getElementById("myForm");
    var gegevens = new formGegevens(
        gebruiker.elements.namedItem("voornaam").value,
        gebruiker.elements.namedItem("achternaam").value,
        gebruiker.elements.namedItem("straat").value,
        gebruiker.elements.namedItem("straatnummer").value,
        gebruiker.elements.namedItem("postcode").value,
        gebruiker.elements.namedItem("gemeente").value,
        gebruiker.elements.namedItem("email").value,
        gebruiker.elements.namedItem("wachtwoord").value,
        gebruiker.elements.namedItem("wachtwoord2").value
    );

    // controle voor lege velden
    var legeVeld = gegevens.leegVeldControle();

    // aanpassen van fouten
    for(var i=0;i<document.getElementsByClassName('fout').length;i++){
        document.getElementsByClassName('fout')[i].style.display = "none";
    }

    if (legeVeld == true){
    	// controle geldige inhoud
        var foutInhoud = gegevens.geldigVeldControle();
        if(foutInhoud==true){
        	// na controle console.log uitvoeren
            console.log(gegevens.consoleGegevens());
        }
        else{
            for(var i=0;i<foutInhoud.length;i++){
                document.getElementById(foutInhoud[i]).style.display = "inline";
            }
        }
    }	else {
        for(var i=0;i<legeVeld.length;i++){
            //legeVeld[i].style.visibility = "visible";
            document.getElementById(legeVeld[i]).style.display = "inline";
        }
    }
}


// Objecten

// Gegevens
function formGegevens (voornaam, achternaam, straat, straatnummer, postcode, gemeente, email, wachtwoord, wachtwoord2) {
    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.straat = straat;
    this.straatnummer = straatnummer;
    this.postcode = postcode;
    this.gemeente = gemeente;
    this.email = email;
    this.wachtwoord = wachtwoord;
    this.wachtwoord2 = wachtwoord2;

  	// Controleert als er lege velden zijn.
    this.leegVeldControle = function () {
        var leegVeld = [];
        if(!this.voornaam){leegVeld.push("foutVoornaam");}
        if(!this.achternaam){leegVeld.push("foutAchternaam");}
        if(!this.straat){leegVeld.push("foutStraat");}
        if(!this.straatnummer){leegVeld.push("foutStraatnummer");}
        if(!this.postcode){leegVeld.push("foutPostcode");}
        if(!this.gemeente){leegVeld.push("foutGemeente");}
        if(!this.email){leegVeld.push("foutEmail");}
        if(!this.wachtwoord){leegVeld.push("foutwachtwoord");}
        if(!this.wachtwoord2){leegVeld.push("foutWachtwoord2");}

        if(leegVeld.length==0){
            return true;
        }
        else {
            return leegVeld;
        }
    };

    // Controleert als de velden correct ingevuld zijn.
    this.geldigVeldControle = function () {
        var controleVeld = [];
        if(this.voornaam.length < 2){controleVeld.push("fout2Voornaam");}
        if(this.achternaam.length < 2){controleVeld.push("fout2Achternaam");}
        if(this.straat.length < 2){controleVeld.push("fout2Straat");}
        if(!/^([0-9]+[a-z]?)$/.test(this.straatnummer)){controleVeld.push("fout2Straatnummer");}
        if(!/^([0-9]{4,})$/.test(this.postcode)){controleVeld.push("fout2Postcode");}
        if(this.gemeente.length<2){controleVeld.push("fout2Gemeente");}
        if(!/^([a-zA-Z]{1}[a-zA-Z0-9._+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(this.email)){controleVeld.push("fout2Email");}
        if(!/^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*():<>?~.,';|/\[\]]{7,20}$/.test(this.wachtwoord)){controleVeld.push("fout2wachtwoord");}
        if(this.wachtwoord!= this.wachtwoord2){controleVeld.push("fout2Wachtwoord2");}

        if(controleVeld.length==0){
            return true;
        }
        else {
            return controleVeld;
        }
    }
    // Geeft de gegevens door aan console
    this.consoleGegevens = function(){
        var gegevensForm = "";
        gegevensForm += "Voornaam: " + this.voornaam + "\n";
        gegevensForm += "Achternaam: " + this.achternaam + "\n";
        gegevensForm += "Straat: " + this.straat + "\n";
        gegevensForm += "Straatnummer: " + this.straatnummer + "\n";
        gegevensForm += "Postcode: " + this.postcode + "\n";
        gegevensForm += "Gemeente: " + this.gemeente + "\n";
        gegevensForm += "Email: " + this.email + "\n";
        gegevensForm += "Wachtwoord: " + this.wachtwoord;
        return gegevensForm;
    }
}