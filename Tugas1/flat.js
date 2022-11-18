//Metode flat() membuat array baru dengan semua elemen sub-array yang digabungkan
//ke dalamnya secara rekursif hingga kedalaman yang ditentukan.

const angka = [10, 11, 12, [13, 14]];
console.log(angka.flat());
// expected output: [10,11, 12, 13, 14]

const angka1 = [10, 11, 12, [[[13, 14]]]];
console.log(angka1.flat(2));
// expected output: [10, 11, 12, [13, 14]]
console.log(angka1.flat(3));
// expected output: [10, 11, 12, 13, 14]
