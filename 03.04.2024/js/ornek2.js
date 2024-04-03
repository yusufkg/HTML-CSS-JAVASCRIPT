function Ekle(){

    var menu = document.getElementById("menu");

    var urunler = document.getElementById("urunler");

    var miktar = document.getElementById("miktar");

    console.log(urunler.value);
    console.log(miktar.value);

    var div = document.createElement("div");

    div.setAttribute("class","menu-item");

    var spanUrun = document.createElement("span");

    spanUrun.setAttribute("class","urun-item");

    var spanMiktar = document.createElement("span");

    spanMiktar.setAttribute("class","miktar-item");

    spanMiktar.innerText = miktar.value;
    spanUrun.innerText = urunler.value;

    div.appendChild(spanUrun);
    div.appendChild(spanMiktar);

    menu.appendChild(div);

}