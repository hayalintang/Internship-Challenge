/**
  ==========================
  What is my email provider?
  ==========================
 
  Description
  -----------
  Email merupakan sebuah cara untuk kita berinteraksi antar satu dengan yang lainnya secara elektronik,
  Banyak sekali provider yang menyediakan layanan email ini.
 
  Instruction
  -----------
  Buatlah sebuah FUNGSI yang akan mengeluarkan output provider email yang digunakan oleh user.
 
  Contoh
  =======
  @input => lingga@gmail.com
  @output => Your email provider is gmail
  (tidak menggunakan .com di belakang)
  
  @input => angga@kampusmerdeka.gov.id
  @output => Your email provider is kampusmerdeka
  (tidak menggunakan .gov.id di belakang)
 
  Rules
  =====
  1. Tidak diperbolehkan menggunakan built-in function:
     .map .filter .reduce .split .join .indexOf .findIndex .substring
 
 */

// your code here
function getEmailProvider(email) {
  var provider = '';
  var isProvider = false;

  for (var i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      isProvider = true;
      continue;
    }
    if (isProvider) {
      if (email[i] !== '.') {
          provider += email[i];
      } else {
        break;
      }
    }
  }
  console.log(`Your email provider is ${provider}`);
}

getEmailProvider('lingga@gmail.com');
getEmailProvider('angga@kampusmerdeka.gov.id');