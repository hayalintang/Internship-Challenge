/*  Dibawah ini merupakan fungsi yang bernama 'printWithObj()'.
    Anda diharapkan untuk melengkapi fungsi tersebut agar ketika fungsi dijalankan hasilnya menjadi:
    
     OUTPUT:
=>   Halo nama saya {Gary Neville}, hari ini saya pergi ke {Gramevia}.
=>   Disana saya membeli {Buku Tulis} sebanyak {2} buah, Buku Coding sebanyak {5} buah, dan Mocking Bird sebanyak {2} buah.
=>   Selain itu, saya juga menemukan beberapa alat tulis seperti {Pulpen}, {Pensil}, dan {Penghapus}.
=>   Total belanja saya hari ini sebesar: {117000}.

    Simbol kurawal diantara kata wajib menggunakan DATA dari OBJECT yang diberikan. Struktur hasil string harus sesuai hasil diatas.
*/

function printWithObj() {
    const objPerjalanan = {
        objNama: {
            nama1: 'Putri Amelia',
            nama2: 'Clinton Haver',
            nama3: 'Gary Neville',
        },
        arrAlatTulis: ['Pulpen', 'Penggaris', 'Pensil', 'Cermin', 'Spidol', 'Penghapus', 'Papan Tulis'],
        arrInfoBarang: [
            {
                namaBarang: 'Buku Tulis',
                harga: 5000,
                kuantitas: 2,  
            },
            {
                namaBarang: 'Buku Coding',
                harga: 20000,
                kuantitas: 5,
            },
            {
                namaBarang: 'Harry Potter',
                harga: 7500,
                kuantitas: 1,  
            },
            {
                namaBarang: 'Majalah',
                harga: 2500,
                kuantitas: 10,  
            },
            {
                namaBarang: 'Buku Masak',
                harga: 3000,
                kuantitas: 20,  
            },
            {
                namaBarang: 'Mocking Bird',
                harga: 3500,
                kuantitas: 2, 
            }
        ],
        namaToko: 'Gramevia',
    }
    // Tulis code kalian dibawah ini (code dapat kalian tambah/ubah sesuai kreativitas kalian).
    console.log(`Halo nama saya ${objPerjalanan.objNama['nama3']}, hari ini saya pergi ke ${objPerjalanan.namaToko}.`);
    console.log(`Disana saya membeli ${objPerjalanan.arrInfoBarang[0].namaBarang} sebanyak ${objPerjalanan.arrInfoBarang[0].kuantitas} buah, Buku Coding sebanyak ${objPerjalanan.arrInfoBarang[1].kuantitas} buah, dan Mocking Bird sebanyak ${objPerjalanan.arrInfoBarang[5].kuantitas} buah.`);
    console.log(`Selain itu, saya juga menemukan beberapa alat tulis seperti ${objPerjalanan.arrAlatTulis[0]}, ${objPerjalanan.arrAlatTulis[2]}, dan ${objPerjalanan.arrAlatTulis[5]}.`);
    const totalBelanja = objPerjalanan.arrInfoBarang.reduce((total, barang) => {
        if (barang.namaBarang === 'Buku Tulis' || barang.namaBarang === 'Buku Coding' || barang.namaBarang === 'Mocking Bird') {
            return total + (barang.harga * barang.kuantitas);
        }
        return total;
    }, 0);
    console.log(`Total belanja saya hari ini sebesar: ${totalBelanja}.`);
}

printWithObj();