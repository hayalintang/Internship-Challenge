/***
  ==========
  ISI BENSIN
  ==========
 
  Buatlah sebuah FUNGSI dengan DUA PARAMETER -> `tipeBensin` dan `uang` yang akan menentukan berapa jumlah liter yang akan didapatkan sebuah mobil
  sesuai dengan uang yang dimiliki pengguna mobil tersebut
 
  Ketika sebuah mobil tidak memiliki `tipe bensin` atau `uang` maka tampilkan 'Tidak ada tipe bensin dan uang'
 
  Ketika `tipe bensin` mobil tersebut adalah `solar` maka biaya pengisian bensinnya adalah 5000 setiap liternya,
  Ketika `tipe bensin` mobil tersebut adalah `premium` maka biaya pengisian bensinnya adalah 7500 setiap liternya.
  Ketika `tipe bensin` mobil tersebut adalah `pertamax` maka biaya pengisian bensinnya adalah 10000 setiap liternya.
 
  Ketika pengisian bensin hasil nya tidak bulat maka hanya tampilkan satu angka dibelakang koma.
 
  contoh:
  1. tipe bensin = solar
  2. uang = 30000
 
  Output => Mobil anda telah terisi solar sebanyak 6.0 lt
 
  1. tipe bensin = premium
  2. uang = 35000
 
  Output => Mobil anda telah terisi premium sebanyak 4.6 lt
 */

 let tipeBensin = 'solar' // isi value sesuai keinginanmu
 let uang = 30000 // isi value sesuai keinginanmu
 
 function isiBensin(tipeBensin, uang) {
  if (tipeBensin !== 'solar' && tipeBensin !== 'pertamax' && tipeBensin !== 'premium' || !uang) {
    return 'Tidak ada tipe bensin dan uang';
  }
  let hargaPerLiter = 0;
  let liter = 0; 

  if (tipeBensin === 'solar') {
    hargaPerLiter = 5000;
  } else if (tipeBensin === 'premium') {
    hargaPerLiter = 7500;
  } else if (tipeBensin === 'pertamax') {
    hargaPerLiter = 10000;
  } 

  liter = uang / hargaPerLiter;
  liter = Math.floor(liter * 10) / 10;

  return `Mobil anda telah terisi ${tipeBensin} sebanyak ${liter} lt.`;
 }

 console.log(isiBensin(tipeBensin, uang));
