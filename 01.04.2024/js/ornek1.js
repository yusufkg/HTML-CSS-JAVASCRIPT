//alert(document.getElementById("ad").value);

document.write("Merhaba Dünya");

console.log("Merhaba Dünya");
console.warn("Bu bir uyarıdır.");
console.error("Bu bir hatadır");
console.info("Bu bir bilgidir");
console.clear();
console.debug("Bu bir debug dır");
console.log('%cBu mesaj kırmızıdır','color:yellow; font-size:32px;background-color:blue');


var sayi = "10";
console.log(sayi + " " + typeof(sayi));
{
    var sayixx = 15;
    console.log(sayixx);
    
    var sayixx = 25;
    console.log(sayixx);
}

var number = 5;
console.log(number);
var number = 15;
console.log(number);

sayi = 20;
console.log(sayi + " " + typeof(sayi));

sayi = 15.99;
console.log(sayi + " " + typeof(sayi));

sayi = false;
console.log(sayi + " " + typeof(sayi));

sayi = new Date();
console.log(sayi + " " + typeof(sayi));

sayi = [1,2,3,4];
console.log(sayi + " " + typeof(sayi));


var sayi1 = 10;
var sayi2 = 20;

if(sayi1 > sayi2)
    console.log("sayi1 büyük sayi2 den");
else
    console.log("sayi2 büyük sayi1 den");

var sonuc = sayi1 > sayi2 ? "Sayi1 büyük" : "Sayi2 büyük";

console.log(sonuc);

var gunSayi = 3;

if(gunSayi == 1){
    console.log("Pazartesi");
}
else if(gunSayi == 2){
    console.log("Salı");
}
else if(gunSayi == 3){
    console.log("Çarşamba");
}
else if(gunSayi == 4){
    console.log("Perşembe");
}
else if(gunSayi == 5){
    console.log("Cuma");
}


switch (gunSayi) {
    case 1:
        console.log("PAZARTESİ");
        break;
    case 2:
        console.log("SALI");
        break;
    case 3:
        console.log("ÇARŞAMBA");
        break;
    case 4:
        console.log("PERŞEMBE");
        break;

    default:
        break;
}


var sayi1 = 5;
var sayi2 = 10;

console.log(sayi1 + sayi2);
console.log(sayi1 * sayi2);
console.log(sayi1 - sayi2);
console.log(sayi1 / sayi2);

console.log(sayi1++); // Önce yazar sonra sayiyi artırır.
console.log(sayi1);

console.log(++sayi2);
/*
Önce sayıyı artırır sonra yazar
*/
console.log(sayi2);

if(sayi2 % 2 == 0){
    console.log("sayi2 çiftir");
}
else
{
    console.log("sayi2 tektir.");
}

//a += 5 // a = a + 5;  // ornek1.js:108 Uncaught ReferenceError: a is not defined

var a = 5; 

a +=7; // a = a + 7;
console.log(a);

a -=7; // a = a - 7;
console.log(a);

a *=7; // a = a * 7;
console.log(a);

a /=7; // a = a / 7;
console.log(a);

a %=2; // a = a % 2;
console.log(a);


console.log("5" + 2);
console.log(5 + 2);

var numberA = "5";
var numberB = 5;

if(numberA == numberB)
    console.log("Sayılar eşittir");
else
    console.log("Sayılar eşit değildir");


if(numberA == numberB && typeof(numberA) == typeof(numberB))
    console.log("Sayılar eşittir");
else
    console.log("Sayılar eşit değildir");


if(numberA === numberB)
    console.log("Sayılar eşittir");
else
    console.log("değerler tür seviyeside eşit değildir");

//var numberC; 
// console.log(numberC); // numberC is not defined

console.log("test");

var numberD; 
console.log(numberD); // undefined


const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;

console.log(area);
