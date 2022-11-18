// Metode every() menguji apakah semua elemen dalam array lulus pengujian yang diterapkan oleh fungsi yang disediakan. 
//Ini mengembalikan nilai Boolean.

const isBelowThreshold = (currentValue) => currentValue > 55;
const array1 = [11, 22, 32, 39, 50, 10];

console.log(array1.every(isBelowThreshold));
// expected output: False