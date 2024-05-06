/*  Dibawah ini merupakan fungsi yang bernama 'masukanSesuatu(arr, arrData, diDepan)' 
    yang menerima 3 buah parameter yaitu 
    
    'arr' berupa Array. 
    'arrData' berupa Array. 
    'diDepan' berupa Boolean.
    
    Anda diharapkan untuk melengkapi fungsi tersebut agar ketika fungsi dijalankan akan menghasilkan:
    
    CONTOH: 
=>  input parameter 'arr' yaitu [1, 2, 3, 4, 5], 
    input 'data' yaitu [1, 2, 3]
    input 'diDepan' yaitu true

=>  maka hasil/outputnya adalah 
    [1, 2, 3, 1, 2, 3, 4, 5]

    CONTOH2: 
=>  input parameter 'arr' yaitu [1, 2, 3, 4, 5], 
    input 'data' yaitu [1, 2]
    input 'diDepan' yaitu false

=>  maka hasil/outputnya adalah 
    [1, 2, 3, 4, 5, 1, 2]


*/

function masukanSesuatu(arr, arrData, diDepan) {
    // Tulis code kalian dibawah ini (code dapat kalian tambah/ubah sesuai kreativitas kalian).
    if (diDepan) {
        arr.unshift(...arrData)
    } else {
        arr.push(...arrData)
    }
    console.log(arr);
}

masukanSesuatu([1, 2, 3, 4, 5], [1, 2, 3], true);