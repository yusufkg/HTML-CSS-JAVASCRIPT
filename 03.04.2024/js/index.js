
function Bul() {

    //Yapılacaklar

      //dolorolor ?
      //m l ?
   
    //metin içerisinde aratılanı bul, kaç defa olduğunu bul ve sarıya boya
    let adet = 0;
    let metin = document.getElementById("yazi").innerText;
    let aranan = document.getElementById("txtAranan").value;
    let konum;

    while (true) {
        konum = metin.toLocaleLowerCase('tr-TR').indexOf(aranan.toLocaleLowerCase('tr-TR'));
        if (konum == -1)
            break;

        adet++;

        //bulunandan sonrasını al
        metin = metin.substring(konum + aranan.length);
    }
    if (adet == 0)
        alert("Bulunamamıştır");
    else
        alert(adet + " kere bulunmuştur");

    let orijinalMetin = document.getElementById("yazi").innerText;
    let bolunmusHali = orijinalMetin.split(" ");


    //boşluğa göre split yapıp içerisindeki kelimeleri buluyoruz.
    //Sonra bu kelimeler içerisinde dönerek aratılana eşit olan varsa onu sarıya
    //boyayacağız
    for (let index = 0; index < bolunmusHali.length; index++) {
        if (bolunmusHali[index].toLocaleLowerCase('tr-TR') == aranan.toLocaleLowerCase('tr-TR'))
            //o zaman sarıya boya ==> tam kelime aratıldı ise
            bolunmusHali[index] = `<mark>${bolunmusHali[index]}</mark>`;
        else if (bolunmusHali[index].toLocaleLowerCase('tr-TR').includes(aranan.toLocaleLowerCase('tr-TR')))   //kelimenin bir kısmı aratıldı ise  
        {
            let arananIndex = bolunmusHali[index].toLocaleLowerCase('tr-TR').indexOf(aranan.toLocaleLowerCase('tr-TR'));

            bolunmusHali[index] = bolunmusHali[index].substr(0, arananIndex) +
                `<mark>${bolunmusHali[index].substr(arananIndex, aranan.length)}</mark>` +
                bolunmusHali[index].substr(bolunmusHali[index].indexOf(aranan) + aranan.length);


        }

    }
    //şimdi bölünmüş halini (boyananlar dahil) birleştir ve paragrafa  ata.'
    document.getElementById("yazi").innerHTML = bolunmusHali.join(' ');
}



