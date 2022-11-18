//Metode copyWithin() akan menyalin bagian dari larik ke lokasi lain dalam larik 
//yang sama dan mengembalikannya tanpa mengubah panjangnya.

const huruf1 = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(huruf1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(huruf1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
