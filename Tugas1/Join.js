// Metode unshift() menambahkan satu atau lebih elemen ke awal array dan mengembalikan 
// panjang baru  join() membuat dan mengembalikan string baru dengan menggabungkan all elemen dalam array 
// (atau objek mirip array ), dipisahkan dengan koma atau string pemisah tertentu. 
// Jika array hanya memiliki satu item, maka item tersebut akan dikembalikan tanpa menggunakan separator array

const elements = ['aku', 'kamu', 'dia'];

console.log(elements.join());
// expected output: "aku,kamu,dia"
console.log(elements.join(''));
// expected output: "akukamudia"
console.log(elements.join('_'));
// expected output: ""aku_kamu_dia""
