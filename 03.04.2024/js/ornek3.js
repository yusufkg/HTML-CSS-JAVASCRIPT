//setTimeout(Calistir,2500);

//setInterval(CizDaire,750);

function Calistir(){

    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log("Çalıştım");
}

function CizDaire(){
    
    var divbox = document.getElementById("box");

    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    var wh = Math.floor(Math.random()*150) + 1;

    var top = Math.floor(Math.random()*250) + 1;
    var left = Math.floor(Math.random()*150) + 1;

    var div = document.createElement("div");
    div.setAttribute("class","item-box");
    div.setAttribute("style",`width:${wh}px;height:${wh}px;background-color:rgb(${red},${green},${blue});top:${top}px;left:${left}px`);

    divbox.appendChild(div);
    
    
}