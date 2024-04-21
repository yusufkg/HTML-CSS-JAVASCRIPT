

  //Görev1
window.onload = function() {
  // Div içine "ÖDEV 8" yazısını ekleme
  document.getElementById("odev8").innerHTML = "ÖDEV 8";
};

function yaziyiKaldır() {
  var mesajDiv = document.getElementById("odev8");

  mesajDiv.parentNode.removeChild(mesajDiv);
}

// Belirli bir süre sonra yazıyı kaldır
setTimeout(yaziyiKaldır, 3000); // 3000 milisaniye (3 saniye)



//Görev2



document.getElementById("a").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
});



document.getElementById("n").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
});



document.getElementById("k").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
});


document.getElementById("bir").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
});


document.getElementById("altı").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
});




document.getElementById("btn1").addEventListener("click", function() {
  var text = document.getElementById("ac");
  if (text.textContent === "Açıldı") {
      text.textContent = "Kapandı";
  } else {
      text.textContent = "Açıldı";
  }
});



  document.getElementById("btn1").addEventListener("click", function() {
    // Buton 1 tıklandığında, yazıyı kaldır
    document.getElementById("basilan").style.display = "none";
  });


//Görev3

document.getElementById("a").addEventListener("click", function() {
  document.getElementById("ac").innerText = "A";
});

document.getElementById("n").addEventListener("click", function() {
  document.getElementById("ac").innerText = "N";
});

document.getElementById("k").addEventListener("click", function() {
  document.getElementById("ac").innerText = "K";
});

document.getElementById("bir").addEventListener("click", function() {
  document.getElementById("ac").innerText = "1";
});

document.getElementById("altı").addEventListener("click", function() {
  document.getElementById("ac").innerText = "6";
});