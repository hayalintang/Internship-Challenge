/**
  ==========================
    HITUNG ALFABET LAGI?!?
  ==========================
  Function hitungAlfabet memiliki input sebuah kalimat (String).
  Tugasmu menghitung panjang kalimat tersebut dan menghitung huruf vokal dan huruf kosonan pada input.
  
  Huruf vokal: A I U E O. 
  Huruf kosonan : merupakan huruf alfabet tanpa huruf vokal.
  (huruf upper & lower case diperhitungkan)
  
  Output dari function ini merupakan object dengan key huruf dan panjang. 
  lihat pada contoh atau test case untuk lebih jelasnya.
  
  RULES :
  Kerjakan tanpa built-in function kecuali push(), Number(), String(), toString(), toLowerCase(), toUpperCase() 
  
 */


 function hitungAlfabet(str) {
    // your code here
    let huruf = {
      vokal: 0,
      konsonan: 0
    }
    let panjang = 0;

    let lowercaseStr = str.toLowerCase();

    for (let i = 0; i < lowercaseStr.length; i++) {
      let char = lowercaseStr[i];

      if (char >= 'a' && char <= 'z'){
        if (char === 'a' || char === 'i' || char === 'u' || char === 'e' || char === 'o') {
          huruf.vokal++;
        } else {
          huruf.konsonan++;
        }
      }
      panjang++;
    }
    return {
      huruf: huruf,
      panjang: panjang
    }
}

console.log(hitungAlfabet('javascript!'))
/*
{
  huruf: {
    vokal: 3,
    konsonan: 7
  },
  panjang: 11
}
*/

console.log(hitungAlfabet('When I get older losing my hair'))
/*
{
  huruf: {
    vokal: 9,
    konsonan: 16
  },
  panjang: 31
}
*/

console.log(hitungAlfabet('2020 20 20 ## && +'))
  /*
{
  huruf: {
    vokal: 0,
    konsonan: 0
  },
  panjang: 18
}
*/