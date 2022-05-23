/*
let ogrenci={ad:"Ahmet",soyad:"İlbars",no:"9842",telNo:"5551112233"}

//console.log(ogrenci.ad,ogrenci.no);

let ogrenciler = '{"ogrenciler":[' +
    '{"ad":"Ahmet","soyad":"İlbars","no":"9842","telNo":"5551112233"},' +
    '{"ad":"Mehmet","soyad":"Demir","no":"9800","telNo":"5551112233"},' +
    '{"ad":"Ayşe","soyad":"Çelik","no":"8842","telNo":"5551112233"},' +
    '{"ad":"Fatma","soyad":"Bakır","no":"8322","telNo":"5551112233"} ]}';

var kisiler = '{ "kisiler" : [' + 
                '{ "ad":"Zafer" , "soyad":"Yıldız" },' +
                '{ "ad":"Sedanur" , "soyad":"Yıldız" },' +
                '{ "ad":"Sudenur" , "soyad":"Yıldız" } ]}';

let ogrencileriDonustur=JSON.parse(ogrenciler);

console.log(ogrencileriDonustur);
*/

//Senkron çalışan fonksiyon(sırayla,bir iş diğerine bağımlı)
/*
fetch('data.json')
    .then(gelen => gelen.json())
    .then(veri => console.log(veri))
*/

//Asenkron fonksiyon(Aynı anda birbirinden bağımsız işler--HIZLI)

async function gitGetir(){
    const kaynak=await fetch('data.json');
    let veriler=await kaynak.json();
    console.log(veriler);
    console.log("veriler");
    veriler.ogrenciler.forEach(element => {
        let yeniOgrenci=document.createElement("li");
        document.getElementById("ogrenciler").appendChild(yeniOgrenci);
        yeniOgrenci.innerHTML=element.ad+" "+element.soyad;
    });

}


