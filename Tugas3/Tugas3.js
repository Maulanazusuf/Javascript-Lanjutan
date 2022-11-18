const angka_awal = [6,7,9,11,15,18,19,21];
const angka_akhir = [22,25,31,23,29,32,35];
const angka = angka_awal.concat(angka_akhir);

    let Seleksiangka1 = angka.filter((x, y) => x >= 5 && x < 30);
Seleksiangka1.length = 5
    console.log("Seleksi Angka-1",Seleksiangka1); 
    // Seleksi Angka-1 [ 6, 7, 9, 11, 15 ]

    let Seleksiangka2 = angka.filter((x, y) => x >= 30 && x < 4);
if(Seleksiangka2 !== 30) {
    console.log("Seleksi Angka-2 Nilai akhir harus lebih besar dari nilai awal");
} else {
    console.log("Seleksi Angka-2",Seleksiangka2); }
    // Seleksi Angka-2 Nilai akhir harus lebih besar dari nilai awal

    let Seleksiangka3 = angka.filter((x, y) => x >= 5 && x < 11);
Seleksiangka3.length = 3
    console.log("Seleksi Angka-3",Seleksiangka3); 
    // Seleksi Angka-3 [ 6, 7, 9 ]

    let Seleksiangka4 = angka.filter((x, y) => x >= 1 && x < 5);
if(Seleksiangka4 !== 5)
console.log("Seleksi Angka-4 Nilai Tidak Ditemukan");
    // Seleksi Angka-4 Nilai Tidak Ditemukan
""