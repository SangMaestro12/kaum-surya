// Meminta pengguna untuk memasukkan dua angka
var angka1 = parseFloat(prompt("Masukkan angka pertama:"));
var angka2 = parseFloat(prompt("Masukkan angka kedua:"));

// Memeriksa apakah kedua angka valid
if (!isNaN(angka1) && !isNaN(angka2)) {
    // Melakukan operasi perhitungan
    var hasilPenjumlahan = angka1 + angka2;
    var hasilPengurangan = angka1 - angka2;
    var hasilPerkalian = angka1 * angka2;
    
    // Memeriksa apakah pembagian mungkin (angka kedua bukan nol)
    var hasilPembagian = angka2 !== 0 ? angka1 / angka2 : "Tidak dapat dibagi oleh nol";

    // Menampilkan hasil perhitungan
    console.log("Hasil Penjumlahan: " + hasilPenjumlahan);
    console.log("Hasil Pengurangan: " + hasilPengurangan);
    console.log("Hasil Perkalian: " + hasilPerkalian);
    console.log("Hasil Pembagian: " + hasilPembagian);
} else {
    // Menampilkan pesan jika salah satu atau kedua angka tidak valid
    console.log("Masukkan angka yang valid untuk melakukan perhitungan.");
}
