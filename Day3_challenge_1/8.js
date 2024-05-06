/*  Dibawah ini merupakan fungsi yang bernama 'arrIndexGanjil(arr)' 
    yang menerima 1 buah parameter yaitu 

    'arr' berupa Array.

    Anda diharapkan untuk melengkapi fungsi tersebut agar ketika fungsi dijalankan akan menghasilkan ARRAY dengan INDEX GANJIL.
    
    CONTOH: 
=>  input parameter 'arr' yaitu [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
=>  maka hasil/outputnya adalah [2, 4, 6, 8, 10]

    CONTOH 2:
=>  input paramater 'arr' yaitu [2, 4, 6, 8]
=>  maka hasil/outputnya adalah [4, 8]

*/

function arrIndexGanjil(arr) {
    // Tulis code kalian dibawah ini (code dapat kalian tambah/ubah sesuai kreativitas kalian).
    const ganjil = arr.filter((elemen, index) => index % 2 == 1);
    console.log(ganjil);
}

arrIndexGanjil([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);