// Metode slice() adalah metode mengembalikan salinan dangkal dari sebagian array ke dalam 
//objek array baru yang dipilih dari awal hingga akhir (tidak termasuk akhir) di mana awal 
//dan akhir mewakili indeks item dalam array tersebut. Array asli tidak akan dimodifikasi.

//contoh slice
const alphabet = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

console.log(alphabet.slice(2));
// expected output: Array ["ccc", "ddd", "eee"]
console.log(alphabet.slice(2, 3));
// expected output: Array ["ccc"]
console.log(alphabet.slice(2, 4));
// expected output: Array ["ccc", "ddd"]
