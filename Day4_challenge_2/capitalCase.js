/**
  ============
  Capital case
  ============
 
  Sebuah fungsi bernama capitalCase akan menerima satu buah parameter yang berupa array of string,
  Fungsi ini akan mengembalikan array of string yang dimana setiap huruf pertama pada element nya
  akan berubah menjadi huruf besar
 
  Example:
  @input -> ['semmi', 'verian', 'putera']
  @output -> ['Semmi', 'Verian', 'Putera']
 
  RULES :
  - Kerjakan tanpa built-in function kecuali push(), Number(), String(), toString(), toLowerCase(), toUpperCase() 
 */

 function capitalCase(arr) {
    // Insert your code here
    var capitalWord = [];
    for (var i = 0; i < arr.length; i++) {
      var word = arr[i];
      var firstLetter = word[0].toUpperCase();
      var restWord = '';
      for (var j = 1; j < word.length; j++) {
        restWord += word[j];
      }
      capitalWord.push(firstLetter + restWord);
    }
    return capitalWord;
}

console.log(capitalCase(['semmi', 'verian', 'putera'])) // ['Semmi', 'Verian', 'Putera']
console.log(capitalCase(['Naufal', 'muhaMmad', 'siddiq'])) // ['Naufal', 'MuhaMmad', 'Siddiq']
