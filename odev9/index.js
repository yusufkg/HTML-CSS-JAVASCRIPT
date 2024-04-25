document.addEventListener("DOMContentLoaded", function() {
  // Kareleri oluştur
  const kareSayisi = 9; // Karelerin sayısını belirt
  for (let i = 1; i <= kareSayisi; i++) {
    let kare = document.createElement("div");
    kare.classList.add("kare");
    kare.textContent = i;
    document.body.appendChild(kare);
  }

  // Kedi ziyaretlerini yönet
  function kediZiyareti() {
    // Tüm kareleri temizle
    let kareler = document.querySelectorAll(".kare");
    kareler.forEach(function(kare) {
      kare.classList.remove("secili");
    });

    // Rastgele bir kareyi seç
    let randomIndex = Math.floor(Math.random() * kareler.length);
    let secilenKare = kareler[randomIndex];
    secilenKare.classList.add("secili");

    // Ziyaret edilen kareyi numaralandır
    secilenKare.textContent = "+";

    // Bir sonraki ziyaret için zamanlayıcıyı ayarla
    setTimeout(function() {
      kareler.forEach(function(kare) {
        let numara = parseInt(kare.textContent);
        kare.textContent = numara + 1;
      });
      kediZiyareti();
    }, 1000);
  }

  // İlk kedi ziyareti için zamanlayıcıyı ayarla
  setTimeout(kediZiyareti, 1000);
});

