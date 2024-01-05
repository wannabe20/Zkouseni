let cislo = prompt("Zadejte celé číslo:");
cislo = parseInt(cislo);  
let odmocnina = Math.sqrt(cislo);
console.log(`Odmocnina z ${cislo} je ${odmocnina}`);





function zjistiSudeLiche(cislo) {
    if (cislo % 2 === 0) {
        return "není liché";
    } else {
        return "liché";
    }
}
let cislo = prompt("Zadejte celé číslo:");
cislo = parseInt(cislo);  
    let vysledek = zjistiSudeLiche(cislo);
    console.log(`Číslo ${cislo} je ${vysledek}.`);





let cisla = [10, 20, 30, 40, 50];
let soucet = 0;
for (let i = 0; i < cisla.length; i++) {
    soucet += cisla[i];
}
let prumer = soucet / cisla.length;
console.log(`Průměr čísel ${cisla.join(', ')} je ${prumer}`);





let pole = [10, 20, 30, 40, 50];
let hledanyPrvek = prompt("Zadejte prvek k ověření:");
if (pole.includes(parseInt(hledanyPrvek))) {
    console.log(`Prvek ${hledanyPrvek} je obsažen v poli.`);
} else {
    console.log(`Prvek ${hledanyPrvek} není obsažen v poli.`);
}

