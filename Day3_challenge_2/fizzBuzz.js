/*  
    - Dibawah ini diberikan sebuah variabel `arrayAngka` berupa <ARRAY> dan sebuah fungsi yang bernama 'fizzBuzz'.
    - Anda diminta untuk TIDAK MENGGANTI NAMA dan VALUE variabel `arrayAngka` dan nama fungsi `fizzBuzz`.
    - Kerjakan seluruh logic coding di dalam fungsi `fizzBuzz()`, fungsi tersebut wajib me-RETURN output/result yang diharapkan.

    DIRECTIONS:
    Pada challenge kali ini Anda diminta untuk membuat sebuah fungsi dengan kondisi, yaitu
        Apabila nilai suatu integer/number dapat dibagi habis oleh 3, maka ganti dengan 'Fizz'
        Apabila nilai suatu integer/number dapat dibagi habis oleh 5, maka ganti dengan 'Buzz'
        Apabila nilai suatu integer/number dapat dibagi habis oleh 3 dan 5, maka ganti dengan 'FizzBuzz'
    

    CONTOH 1:
    const arrayAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    console.log(FizzBuzz(arrayAngka))
    
    outputnya:

    [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
    
    CONTOH 2:
    const arrayAngka = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    console.log(FizzBuzz(arrayAngka))
    
    outputnya:

    ['Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']

*/

// Variabel ini tidak perlu diganti-ganti, gunakan variabel ini sebagai test case codingan kalian.
const arrayAngka = Array(100).fill().map((x, i, arr) => i !== arr.length ? i + 1 : 0);

function fizzBuzz() {
    // Tulis code kalian dibawah ini (code dapat kalian tambah/ubah sesuai kreativitas kalian).
    let result = [];

    for (let i = 0; i < arrayAngka.length; i++) {
        let num = arrayAngka[i];
        
        if (num % 3 === 0 && num % 5 === 0) {
            result.push('FizzBuzz');
        } else if (num % 3 === 0) {
            result.push('Fizz');
        } else if (num % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(num)
        }
    }
    return result;
}
console.log(fizzBuzz(arrayAngka));
