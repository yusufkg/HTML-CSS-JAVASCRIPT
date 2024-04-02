// JS Fonksiyonlar

function PopUpMessage(message){
    alert(message);
}

function Log(message, isPopupMessage = false){
    console.log(message);
    if(isPopupMessage)
        PopUpMessage(message);
}

function Topla(number1, number2){

    var result = number1 + number2;

    Log(`${number1} + ${number2} = ${result}`);
    return result;
}

// JS String Metotlar
var metin = "  Merhaba dünya bugün hava çok güzel  ";

Log(metin.length);
Log(metin.charAt(2));
Log(metin.at(3));
Log(metin.trim().length);
Log(metin.trimEnd().length);
Log(metin.trimStart().length);
Log(metin.charCodeAt(2));
Log(metin.trim().endsWith("güzel"));
Log(metin.trim().startsWith("Me"));
Log(metin.trim().slice(0,7));
Log(metin.trim().substring(0,7));
Log(metin.toLowerCase());
Log(metin.toUpperCase())
Log(metin.toLocaleUpperCase());

var code = "312";

Log(code.padStart(5,"0"));
Log(code.padEnd(10,"0"));

Log("_".repeat(5));
Log("Merhaba World World World".replace("World","Dünya"));
Log("Merhaba World World World".replaceAll("World","Dünya"));

Log(metin.trim().split(' '));




