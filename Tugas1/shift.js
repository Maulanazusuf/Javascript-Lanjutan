// Metode shift() menghapus elemen pertama dari array dan mengembalikan elemen yang dihapus itu. 
// Metode ini mengubah panjang array.

const angka1 = [92, 102, 321];
const perubahan1 = angka1.shift();

console.log(angka1);
// expected output: Array [102, 321]
console.log(perubahan1);
// expected output: 92