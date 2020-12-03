const ecran = document.querySelector('#ecranResultat');
const clavier = document.querySelector('#toucheCLavier');

var operateur = "+";
var chiffreSaisie = "";
var resultat = 0;


clavier.addEventListener('click', function(event){
    var button = event.target.id;
    if(button){
        if(button.substring(0,1) === "t"){
            gererCalcul();
            switch(button){
                case "tDiv" : operateur = "/";
                break;
                case "tmul" : operateur = "*";
                break;
                case "tmoins" : operateur = "-";
                break;
                case "tadd" : operateur = "+";
                break
                default : 
                break;
            }

        }else if(button === "point"){
            chiffreSaisie += ".";
            ecran.innerHTML = chiffreSaisie;
        }else if(button === "egal"){
            gererCalcul();
        } else if(button.substring(0,1) === "b"){

            chiffreSaisie += button.substring(1,2);
            ecran.innerHTML = chiffreSaisie;
        }else if(button === "ce"){
            chiffreSaisie = "";
            operateur = "+";
            resultat = 0;
            ecran.innerHTML = 0;
        }
    }
})

function gererCalcul(){
    if(chiffreSaisie !== ""){
        resultat = calculer(resultat, parseFloat(chiffreSaisie), operateur);
    }
    ecran.innerHTML = resultat;
    chiffreSaisie ="";
}

function calculer(chiffre1, chiffre2, operateur){
    var resultatCalcul = 0;
    switch(operateur){
        case "+" : resultatCalcul = chiffre1 + chiffre2;
        break;
        case "-" : resultatCalcul = chiffre1 - chiffre2;
        break;
        case "*" : resultatCalcul = chiffre1 * chiffre2;
        break;
        case "/" : resultatCalcul = chiffre1 / chiffre2;
        break;
    }
    return resultatCalcul;
}

