/*  Dibawah ini merupakan fungsi yang bernama 'printWithArr()' 
    Anda diharapkan untuk melengkapi fungsi tersebut agar ketika fungsi dijalankan hasilnya menjadi:
    
     OUTPUT:
=>   Hari ini saya pergi ke {Seaworld} bersama teman-teman.
=>   Disana saya membeli melihat ikan {Lumba-lumba}, {Hiu}, dan {Pari}.
=>   Saat itu rombongan kami berjumlah {3} orang, dengan harga tiket per orang sebesar Rp{75000}, sehingga total harga menjadi {225000}.
=>   Kami pulang menggunakan {Ojek Online}. 

    Simbol kurawal diantara kata wajib menggunakan DATA dari ARRAY yang diberikan. Struktur hasil string harus sesuai hasil diatas.
*/

function printWithArr() {
    const arr = [
        ['Lumba-lumba', 'Kura-kura', 'Hiu', 'Udang', 'Pari'], 
        ['Dufan', 'Atlantis', 'Seaworld'],
        [
            {
                namaPengunjung: 'Jan',
                usia: 20,
                orangDewasa: true,
            },
            {
                namaPengunjung: 'Ken',
                usia: 19,
                orangDewasa: true,
            },
            {
                namaPengunjung: 'Pon',
                usia: 15,
                orangDewasa: false,
            },
        ],
        {
            hargaTiket: 75000,
            jumlahPengunjung: 3,
        },
        'Ojek Online'
    ]
    // Tulis code kalian dibawah ini (code dapat kalian tambah/ubah sesuai kreativitas kalian).
    console.log(`Hari ini saya pergi ke ${arr[1][2]} bersama teman-teman.`);
    console.log(`Disana saya melihat ikan ${arr[0][0]}, ${arr[0][2]}, dan ${arr[0][4]}.`);
    console.log(`Saat itu rombongan kami berjumlah ${arr[3].jumlahPengunjung} orang, dengan harga tiket per orang sebesar Rp ${arr[3].hargaTiket}, sehingga total harga menjadi ${arr[3].jumlahPengunjung * arr[3].hargaTiket}.`);
    console.log(`Kami pulang menggunakan ${arr[4]}.`);
}

printWithArr();