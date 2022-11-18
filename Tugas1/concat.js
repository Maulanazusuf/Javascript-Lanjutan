// Metode concat() digunakan untuk menggabungkan dua atau lebih array. Metode ini 
// tidak mengubah array yang ada, melainkan mengembalikan array baru.

const angka = ['1', '2', '3'];
const angka1 = ['6', '7', '8'];
const angka2 = angka.concat(angka1);
console.log(angka2);
// expected output: angka2 ['1', '2', '3', '6', '7', '8']
