var isim = prompt ("Lütfen isminizi yazınız.")
document.getElementById("myName").innerHTML = isim

function anlikTarihVeSaat () {
    var tarih = new Date();
    var tarihVeSaat = tarih.toLocaleString();
    document.getElementById("myClock").innerHTML = tarihVeSaat
}

anlikTarihVeSaat();

setInterval(anlikTarihVeSaat, 1000);