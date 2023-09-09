/* 100 nilai random */

const arrayRandom = [];

for (let i = 0; i < 100; i++) {
  const nilaiRandom = Math.floor(Math.random() * 50) + 1;
  arrayRandom.push(nilaiRandom);
}
console.log(arrayRandom);


/* Membuat dua array untuk index genap dan ganjil */

const arrayGenap = [];
const arrayGanjil = [];

for (let i = 0; i < arrayRandom.length; i++) 
  if (i % 2 === 0) {
    arrayGenap.push(arrayRandom[i]);
  } else {
    arrayGanjil.push(arrayRandom[i]);
  }

console.log('Array pada Index Genap:', arrayGenap);
console.log('Array pada Index Ganjil:', arrayGanjil);

/* Menghitung Min, Max, Total, dan Rata-rata dari array Genap */
const minGenap = Math.min(...arrayGenap);
const maxGenap = Math.max(...arrayGenap);
const totalGenap = arrayGenap.reduce((acc, curr) => acc + curr, 0);
const rataRataGenap = totalGenap / arrayGenap.length;

console.log('Min.Genap:');
console.log('Max Genap:', maxGenap);
console.log('Total Genap:', totalGenap);
console.log('Rata-rata Genap:', rataRataGenap);

/* Menghitung Min, Max, Total, dan Rata-rata dari array Ganjil */
const minGanjil = Math.min(...arrayGanjil);
const maxGanjil = Math.max(...arrayGanjil);
const totalGanjil = arrayGanjil.reduce((acc, curr) => acc + curr, 0);
const rataRataGanjil = totalGanjil / arrayGanjil.length;

console.log('Min Ganjil:', minGanjil);
console.log('Max Ganjil:', maxGanjil);
console.log('Total Ganjil:', totalGanjil);
console.log('Rata-rata Ganjil:', rataRataGanjil);

// Membandingkan hasil
let hasilPerbandingan = '';
if (minGenap > minGanjil) {
  hasilPerbandingan += 'Min lebih besar pada array genap\n';
} else {
  hasilPerbandingan += 'Min lebih besar pada array ganjil\n';
}

if (maxGenap > maxGanjil) {
  hasilPerbandingan += 'Max lebih besar pada array genap\n';
} else {
  hasilPerbandingan += 'Max lebih besar pada array ganjil\n';
}

if (totalGenap === totalGanjil) {
  hasilPerbandingan += 'Total memiliki nilai yang sama antara array genap dan ganjil\n';
} else if (totalGenap > totalGanjil) {
  hasilPerbandingan += 'Total lebih besar pada array genap\n';
} else {
  hasilPerbandingan += 'Total lebih besar pada array ganjil\n';
}

if (rataRataGanjil > rataRataGenap) {
  hasilPerbandingan += 'Rata-rata lebih besar pada array ganjil\n';
} else {
  hasilPerbandingan += 'Rata-rata lebih besar pada array genap\n';
}

console.log('Array Genap:', arrayGenap);
console.log('Array Ganjil:', arrayGanjil);
console.log('Hasil Perbandingan:\n', hasilPerbandingan);