/*  Dibawah ini merupakan fungsi yang bernama 'hanyaYangHabisDibagiTiga(arr)' 
    yang menerima 1 buah parameter yaitu 
    
    'arr' berupa Array.
    
    Anda diharapkan untuk melengkapi fungsi tersebut agar ketika fungsi dijalankan menghasilkan array yang berisikan angka-angka yang habis dibagi 3.
    
    CONTOH: 
=>  input parameter 'arr' yaitu [1, 2, 3, 4, 5]
=>  maka hasil/outputnya adalah [3]

    CONTOH 2:
=>  input paramater 'arr' yaitu [2, 4, 6, 8, 9, 17]
=>  maka hasil/outputnya adalah [6, 9]

*/

function hanyaYangHabisDibagiTiga(arr) {
    console.log(arr.filter(number => number % 3 === 0));
    // Tulis code kalian dibawah ini (code dapat kalian tambah/ubah sesuai kreativitas kalian).
   
}

hanyaYangHabisDibagiTiga([1, 2, 3, 4, 5]);