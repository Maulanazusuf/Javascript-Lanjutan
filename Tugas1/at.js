// Metode at() mengambil nilai integer dan mengembalikan item pada indeks itu, memungkinkan bilangan bulat positif dan negatif.
// Bilangan bulat negatif menghitung mundur dari item terakhir dalam array.

const angka = [1, 4, 8, 16, 32];
let ambil = 2;
console.log(`Using an ambil of ${ambil} the item returned is ${angka.at(ambil)}`);
// expected output: "Using an ambil of 2 the item returned is 8"
ambil = -2;
console.log(`Using an ambil of ${ambil} item returned is ${angka.at(ambil)}`);
// expected output: "Using an ambil of -1 item returned is 16"
