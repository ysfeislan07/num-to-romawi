let masukkan = document.getElementById("masukkan");
let button = document.getElementById("submit");
let pesanEror = document.getElementById("error");
let hasil = document.getElementById("hasil");

const bilanganRomawi = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,

};

button.addEventListener("click", () => {
    masukkan_bil_romawi(masukkan.value);
    masukkan.value = "";
});

function masukkan_bil_romawi(bil) {
    let angka = parseInt(bil);

    if(bil.trim().length == 0) {
        pesanEror.innerHTML = "Format salah";
        hasil.innerHTML = "";
        return false;
    }
    
    if(angka > 5000 || angka < 1) {
        pesanEror.innerHTML = "Jangkauan melampaui batas";
        hasil.innerHTML = "";
        return false;
    }
    pesanEror.innerHTML = "";
    hasil.innerHTML = "";

    let result = "";
    let nilai_bil_romawi = Object.keys(bilanganRomawi);
    nilai_bil_romawi.forEach((key) => {
        while (bilanganRomawi[key] <= angka) {
            angka -= bilanganRomawi[key];
            result += key;
        }
    });
    hasil.innerHTML = result;
}