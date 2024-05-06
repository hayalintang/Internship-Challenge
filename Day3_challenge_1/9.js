/*  Dibawah ini merupakan fungsi yang bernama 'objDikaliDanDipangkat(arr, pengali, pemangkat)'
    yang menerima 3 buah parameter yaitu 
    
    'arr' berupa Array. 
    'pengali' berupa Number 
    'pemangkat' berupa Number
    
    Anda diharapkan untuk melengkapi fungsi tersebut agar ketika fungsi dijalankan akan 
    menghasilkan ARRAY dengan OBJECT YANG BERISIKAN KEY DAN VALUE YANG SUDAH DIKALI DAN DIPANGKAT.
    
    CONTOH: 
=>  input parameter 'arr' yaitu 
    [
        {
            angka: 2
        },
        {
            angka: 4
        }
    ]
    input 'pengali' yaitu 3
    input 'pemangkat' yaitu 2

=>  maka hasil/outputnya adalah 
    [
        {
            angka: 2,
            hasilKali: 6,
            hasilPangkat: 4
        },
        {
            angka: 4,
            hasilKali: 12,
            hasilPangkat: 16,
        }
    ]

*/

function arrIndexGanjil(arr, pengali, pemangkat) {
    // Tulis code kalian dibawah ini (code dapat kalian tambah/ubah sesuai kreativitas kalian).
    const hasil = arr.map(obj => {
        const hasilKali = obj.angka * pengali;
        const hasilPangkat = obj.angka ** pemangkat;

        return {
            angka : obj.angka, 
            hasilKali : hasilKali, 
            hasilPangkat : hasilPangkat,

        };
    });
    console.log(hasil);
}

arrIndexGanjil([
    {
        angka: 2
    },
    {
        angka: 4
    }
], 3, 2);