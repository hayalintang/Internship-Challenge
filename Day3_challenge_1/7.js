/*  Dibawah ini merupakan fungsi yang bernama 'printArrKelipatanTigaDanEmpat(arr)' 
    yang menerima 1 buah parameter yaitu 
    
    'arr' berupa Array.

    Anda diharapkan untuk melengkapi fungsi tersebut agar ketika fungsi dijalankan akan mem-print angka yang merupakan kelipatan 3 & 4.
    
    CONTOH: 
=>  input parameter 'arr' yaitu [4, 12, 5, 24, 8, 9, 10]
=>  maka hasil/outputnya adalah: 
    12 
    24

    CONTOH 2:
=>  input paramater 'arr' yaitu [2, 4, 72 6, 8]
=>  maka hasil/outputnya adalah: 
    72

*/

function printArrKelipatanTigaDanEmpat(arr) {
    // Tulis code kalian dibawah ini (code dapat kalian tambah/ubah sesuai kreativitas kalian).
    const kelipatan = arr.filter(number => number % 3 === 0 && number % 4 === 0);
    console.log(kelipatan);
}

printArrKelipatanTigaDanEmpat([2, 4, 72, 6, 8]);