function hesapla() {
    // Kullanıcıdan girdileri al
    var kalinacakGun = parseInt(document.getElementById("kalinacakGun").value);
    var gunlukUcret = parseFloat(document.getElementById("gunlukUcret").value);
    var ulasimSecimi = document.getElementById("ulasimSecimi").value;
    var seyahatYeri = document.getElementById("seyahatYeri").value;
    var otelSecimi = document.getElementById("otelSecimi").value;

    // Otel fiyatlarını tanımla
    var otelFiyatlari = {
        "5_yildiz": 300,
        "4_yildiz": 200,
        "3_yildiz": 100
    };

    var ulasimUcretleri={
        "Ucak":1000,
        "Otobüs":800,
        "Tren":500
    };


    var ulasimYerleri={
        "Budapeste":10000,
        "Moskova":5000,
        "Paris":1500
    };

    var ulasimYeri=ulasimYerleri[seyahatYeri];

    var ulasimUcreti=ulasimUcretleri[ulasimSecimi];

    // Seçilen otelin fiyatını al
    var otelFiyati = otelFiyatlari[otelSecimi];

    // Toplam ücreti hesapla
    var toplamUcret = (gunlukUcret * kalinacakGun) + ulasimUcreti + otelFiyati+ulasimYeri;

    // Sonucu ekrana yazdır
    document.getElementById("sonuc").innerHTML = "Seyahat Yeri: " + seyahatYeri + "<br>" +
                                                   "Toplam Ücret: " + toplamUcret.toFixed(2) + " TL";
}


