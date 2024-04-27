
document.addEventListener("DOMContentLoaded", function() {
  const kareSayisi = 9; // Karelerin sayısını belirt
  const kareler = []; // Kareleri saklamak için dizi oluştur
  let index = 1; // Rakamları 1'den başlat
  let kediIndex; // Kedinin bulunduğu kareyi takip etmek için indis

  // Kareleri oluştur ve diziye ekle
  for (let i = 0; i < kareSayisi; i++) {
    let kare = document.createElement("div");
    kare.classList.add("kare");
    document.body.appendChild(kare);
    kareler.push({ element: kare, ziyaretEdildi: false });
  }

  // Kediye rastgele bir kare seç
  kediIndex = Math.floor(Math.random() * kareSayisi);
  kareler[kediIndex].element.innerHTML = "<span>🐱</span>";
  kareler[kediIndex].ziyaretEdildi = true;

  // 1 saniye sonra kedinin ziyaret ettiği kareyi numaralandır ve kediye yeni kare seç
  let yazilanRakam = setInterval(function() {
    // Eğer son kareyi ziyaret ettikse işlemi durdur
    if (index > kareSayisi) {
      clearInterval(yazilanRakam);
      return;
    }

    // Kedinin bulunduğu kareyi numaralandır
    kareler[kediIndex].element.textContent = index;

    // Rastgele bir kare seç
    let bosKareler = kareler.filter(function(kare) {
      return !kare.ziyaretEdildi;
    });
    let secilenIndex = Math.floor(Math.random() * bosKareler.length);
    let secilenKare = bosKareler[secilenIndex];

    // Kediye yeni kare seç ve ziyaret edildi olarak işaretle
    kediIndex = kareler.indexOf(secilenKare);
    secilenKare.element.innerHTML = "<span>🐱</span>";
    secilenKare.ziyaretEdildi = true;

    // Sonraki rakama geç
    index++;
  }, 1000);
});
