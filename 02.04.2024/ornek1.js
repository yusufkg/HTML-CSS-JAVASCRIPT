alert("Hello World");
let sayi=8;
let gun="Sali";
let tatilGunu1="Cumartesi";
let tatilGunu2="Pazar";
alert(gun);
let tatilGunleri=tatilGunu1+" "+tatilGunu2;
let z=gun+sayi;
console.log(z);
console.log(tatilGunleri);
console.log(8+5);
console.log(8+"5");
console.log(8+"5"+7+(5+"2"));
console.log(8-"5");
console.log("8"-"5");
console.log(8*"5");
let a=5;
let b=5;

if (b==a) {
    alert("Sayılar eşittir"+ a +" "+b);
}

else if (b>a) {
    alert("Büyük sayı"+" "+a);
}
else{
    console.log(a);
}

//Sayı karşılaştırma
function Bul(){
    let sayi1=Number(document.getElementById("txtSayi1").value);
    let sayi2=Number(document.getElementById("txtSayi2").value);
    if (sayi1==sayi2) {
        console.log("Sayılar eşittir"+ sayi1+" "+ sayi2);
    }
    
    else if (sayi1>sayi2) {
        console.log("Büyük sayı"+" "+sayi1);
    }
    else{
        console.log("Büyük sayı"+" "+sayi2);
    }
        
}
//Sayı karşılaştırma

//mouse un hareketine göre koordinat yazma
window.onmousemove=function(fare)
{
    document.getElementById("divX").innerHTML="X: "+fare.clientX;
    document.getElementById("divY").innerHTML="Y: "+fare.clientY;
}
//mouse un hareketine göre koordinat yazma

//butona her tıkladığında bacground renk değiştirme

let renkler=["red","green","blue","yellow","pink"];
let rastgeleIndis;
function RenkAta(){
//  rastgeleIndis=Math.floor(Math.random()*5);
// document.body.style.backgroundColor=renkler[rastgeleIndis];
r1=Math.floor(Math.random()*256);
r2=Math.floor(Math.random()*256);
r3=Math.floor(Math.random()*256);
document.body.style.backgroundColor="rgb("+r1+","+r2+","+r3+")";
}
//butona her tıkladığında bacground renk değiştirme