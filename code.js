let diziArabalar=[];

async function macGetir(){
    const kaynak=await fetch('fikstur.json');
    let maclar=await kaynak.json();
    console.log(maclar);

    maclar.matches.forEach(element => {
        let yeniMac=document.createElement("li");
        document.getElementById("fikstur").appendChild(yeniMac);
        yeniMac.innerHTML=element.team1+" & "+element.team2;
    });
}

async function arabaGetir(){
    const kaynak=await fetch('https://private-anon-77eb46d4c5-carsapi1.apiary-mock.com/cars');
    let arabalar=await kaynak.json();
    console.log(arabalar);

    arabalar.forEach(element => {
        let yeniAraba=document.createElement("li");
        document.getElementById("arabalar").appendChild(yeniAraba);
        let yeniArabaResmi=document.createElement("img");
        document.getElementById("arabalar").appendChild(yeniArabaResmi);
        yeniArabaResmi.setAttribute("src",element.img_url);
        yeniAraba.innerHTML=element.make+" & "+element.model;
        diziArabalar.push(element.make);
    });


}

document.getElementById("arama").addEventListener("submit",ara);
function ara(aranan){
    aranan=document.getElementById("txtArama").value;
    const aramaKriteri=new RegExp(aranan,"gi");
    let eslesenler=diziArabalar.filter(anahtar => aramaKriteri.test(anahtar));
    console.log(eslesenler);
    alert(eslesenler.length+" adet sonuç bulundu!");
}