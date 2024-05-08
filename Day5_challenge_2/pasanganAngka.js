/* 
Diberikan sebuah variabel `angka` bertipe number. 
Buatlah sebuah FUNGSI yang menerima satu buah PARAM bernama `angka` yang dapat menentukan pasangan dua digit angka mana yang paling besar. 

Contoh: let angka = 183928

maka output yang dihasilkan adalah 92.

penjelasan:

- 18 merupakan pasangan angka ke-1
- 83 merupakan pasangan angka ke-2
- 39 merupakan pasangan angka ke-3
- 92 merupakan pasangan angka ke-4
- 28 merupakan pasangan angka ke-5

Maka 92 adalah pasangan dua digit angka yang paling besar diantara yang lainnya.

Testlah program kamu dengan value angka dibawah ini:
    let angka = 641573  //73
    let angka = 12783456 //83
    let angka = 910233 //91
    let angka = 79918293 //99
*/ 

function pasanganAngka(angka) {
    let angkaStr = angka.toString();
    let pasanganTerbesar = 0;

    for (let i = 0; i < angkaStr.length - 1; i++) {
        let pasangan = parseInt(angkaStr[i] + angkaStr[i + 1]);
        if (pasangan > pasanganTerbesar) {
            pasanganTerbesar = pasangan;
        }
    }
    return pasanganTerbesar;
}
let angka = 79918293  
console.log(pasanganAngka(angka));