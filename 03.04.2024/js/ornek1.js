console.log(document.getElementById("box"));
console.log(document.getElementsByClassName("box"));
console.log(document.getElementsByName("box"));
console.log(document.getElementsByTagName("div"));

function EkleCss(){
    document.getElementById("box")
        .setAttribute("class","kutu");


    var boxElement = document.getElementsByClassName("box");
    var elemanSayisi = boxElement.length;

    for (let index = 0; index < elemanSayisi; index++) {

        boxElement[index].setAttribute("style","color:red");
    }

    var boxNameElement = document.getElementsByName("box");
    var length = boxNameElement.length;
    
    for (let index = 0; index < length; index++) {
        boxNameElement[index].setAttribute("style","color:blue;background-color:yellow");
        boxNameElement[index].innerHTML = "Selamlar <b>Merhaba</b>";
    }

}


function Sec(){
    // console.log(document.querySelector(".container > .main > #content12"));

    // console.log(document.querySelectorAll(".container > .main > #content12:nth-child(odd)"));

    document.querySelectorAll(".container > .main > #content12:nth-child(odd)").forEach((value, key, parent)=>{
        value.setAttribute("style","color:pink");

        // console.log(value);
        // console.log(key);
        // console.log(parent);
    });
}
