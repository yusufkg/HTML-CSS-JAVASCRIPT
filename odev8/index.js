

  //Görev1
window.onload = function() {
  // Div içine "ÖDEV 8" yazısını ekleme
  document.getElementById("odev8").innerHTML = "ÖDEV 8";
};

function yaziyiKaldır() {
  var mesajDiv = document.getElementById("odev8");
  mesajDiv.innerHTML = "";
  document.getElementById("basilan").innerText = "";
  //mesajDiv.parentNode.removeChild(mesajDiv);
}

// Belirli bir süre sonra yazıyı kaldır
setTimeout(yaziyiKaldır, 3000); // 3000 milisaniye (3 saniye)



//Görev2

document.getElementById("a").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
});


document.getElementById("n").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
});


document.getElementById("k").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
});


document.getElementById("bir").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
});


document.getElementById("altı").addEventListener("click", function() {

  document.getElementById("basilan").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
});


// bool = false;

// document.getElementById("btn1").addEventListener("click", function() {
//   var text = document.getElementById("ac");
//   bool;
//   if (text.textContent === "Açıldı") {
//       bool==true;
//       text.textContent = "Kapandı";
//       setTimeout(function() {
//         text.textContent = "";
//       }, 3000);
//   } 
  
//   else {
//       text.textContent = "Açıldı";
//       setTimeout(function() {
//         text.textContent = "";
//       }, 3000);
//   }
// });


var bool = false; // Değişkeni başlangıçta false olarak tanımla

document.getElementById("btn1").addEventListener("click", function() {
  var text = document.getElementById("ac");
  
  if (text.textContent === "Açıldı") {
    bool = true; // bool değişkenine true değerini ata
    text.textContent = "Kapandı";
    setTimeout(function() {
      text.textContent = "";
    }, 3000);
  } else {
    bool = false; // bool değişkenine false değerini ata
    text.textContent = "Açıldı";
    setTimeout(function() {
      text.textContent = "";
    }, 3000);
  }
});


  document.getElementById("btn1").addEventListener("click", function() {
    // Buton 1 tıklandığında, yazıyı kaldır
    document.getElementById("basilan").style.display = "none";
  });


//Görev3
document.getElementById("btn1").addEventListener("click", function() {
  var text = document.getElementById("ac");
  if (text.textContent === "Açıldı") {

document.getElementById("a").addEventListener("click", function() {
  document.getElementById("ac").innerText = "A";
  document.getElementById("randomSquare1").style.backgroundColor = "red"; 
  setTimeout(function() {
    document.getElementById("randomSquare1").style.backgroundColor = "black"; 
    text.textContent = "";
  }, 3000);
});

document.getElementById("n").addEventListener("click", function() {
  document.getElementById("ac").innerText = "N";
  setTimeout(yaziyiKaldır, 3000);
});

document.getElementById("k").addEventListener("click", function() {
  document.getElementById("ac").innerText = "K";
  setTimeout(yaziyiKaldır, 3000);
});

document.getElementById("bir").addEventListener("click", function() {
  document.getElementById("ac").innerText = "1";
  setTimeout(yaziyiKaldır, 3000);
});

document.getElementById("altı").addEventListener("click", function() {
  document.getElementById("ac").innerText = "6";
  setTimeout(yaziyiKaldır, 3000);
});
  }

});


document.getElementById("btn1").addEventListener("click", function() {
  var text = document.getElementById("ac");
  if (text.textContent === "Kapandı") {

document.getElementById("a").addEventListener("click", function() {
  document.getElementById("ac").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
  document.getElementById("randomSquare1").style.backgroundColor = "black";
});


document.getElementById("n").addEventListener("click", function() {
  document.getElementById("ac").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
});

document.getElementById("k").addEventListener("click", function() {
  document.getElementById("ac").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
});

document.getElementById("bir").addEventListener("click", function() {
  document.getElementById("ac").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
});

document.getElementById("altı").addEventListener("click", function() {
  document.getElementById("ac").innerText = "Önce Açınız";
  setTimeout(yaziyiKaldır, 3000);
});

  }

});