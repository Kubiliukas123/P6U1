let act1 = "Christian";
let act2 = "Bale";
if (act1.length > act2.length) {
    console.log(act1);
}
else {
    console.log(act2);
}


console.log("--------------Užduotis 2---------------");


console.log(act1.toUpperCase(), act2.toLowerCase());


console.log("--------------Užduotis 3---------------");


let act3 = act1[0] + act2[0];
console.log(act3);


console.log("--------------Užduotis 4---------------");


let act4 = act1.substring(act1.length - 3) + " " + act2.substring(act2.length - 3);
console.log(act4);


console.log("--------------Užduotis 5---------------");


let act5 = "An American in Paris"
console.log(act5.replace(/[Aa]/g, '*'));


console.log("--------------Užduotis 6---------------");


let act6 = "Breakfast at Tiffany's"
let act7 = "2001: A Space Odyssey"
let act8 = "It's a Wonderful Life"
console.log(act5.replace(/[aeiou]/gi, ''));
console.log(act6.replace(/[aeiou]/gi, ''));
console.log(act7.replace(/[aeiou]/gi, ''));
console.log(act8.replace(/[aeiou]/gi, ''));


console.log("--------------Užduotis 7---------------");


let numb = /\d+/g;
let strg = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";
let ep = strg.match(numb);
console.log(strg);
console.log(ep);


console.log("--------------Užduotis 8---------------");


let en = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
let all = en.split(" ");
let count = 0;
for (let i = 0; i < all.length; i++) {
    let element = all[i];
    if(element.length <=5){
        count++;
    }
}
console.log(count);


console.log("-----------------------------");


let lt = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
let all_lt = lt.split(" ");
let count_lt = 0;
for (let x = 0; x < all_lt.length; x++) {
    let element_lt = all_lt[x];
    if (element_lt.length <=5) {
        count_lt++;
    }   
}
console.log(count_lt);


console.log("--------------Užduotis 9---------------");


let letters = "abcdefghijklmnopqrstuvwxyz";
let rnd_letter = letters[Math.floor(Math.random() * letters.length)];
let rnd_letter2 = letters[Math.floor(Math.random() * letters.length)];
let rnd_letter3 = letters[Math.floor(Math.random() * letters.length)];
let rnd_letter123 = rnd_letter + rnd_letter2 + rnd_letter3;
console.log(rnd_letter123);