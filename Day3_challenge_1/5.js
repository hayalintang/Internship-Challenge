/*  Dibawah ini merupakan fungsi yang bernama 'kaliDanTambahArray(arr)' 
    yang menerima 1 buah parameter yaitu 
    
    'arr' berupa Array.
    
    Anda diharapkan untuk melengkapi fungsi tersebut agar ketika fungsi dijalankan setiap elemen dari arr DIKALI 3 dan DITAMBAH 5.
    
    
    CONTOH: 
=>  input parameter 'arr' yaitu [1, 2, 3, 4, 5]
=>  maka hasil/outputnya adalah [8, 11, 14, 17, 20]

    CONTOH 2:
=>  input paramater 'arr' yaitu [2, 4, 6, 8]
=>  maka hasil/outputnya adalah [11, 17, 23, 29]

*/

function kaliDanTambahArray(arr) {
    // Tulis code kalian dibawah ini (code dapat kalian tambah/ubah sesuai kreativitas kalian).
    const kaliTambah = arr.map(number => number * 3 + 5);
    console.log(kaliTambah);
}

kaliDanTambahArray([1, 2, 3, 4, 5]);