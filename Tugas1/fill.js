// Metode fill() mengubah semua elemen dalam array menjadi nilai statis, dari indeks awal (default 0)
// hingga indeks akhir (array.panjang default). Ini mengembalikan array yang dimodifikasi

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(8, 2, 4));
// expected output: [1, 2, 8, 8]

// fill with 5 from position 1
console.log(array1.fill(7, 1));
// expected output: [1, 7, 7, 7]

console.log(array1.fill(2));
// expected output: [2, 2, 2, 2]