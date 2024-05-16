// Task 1. Bir funksiya yazın həmən funksiya parametr olaraq bir cümlə qəbul etsin və cümlədəki hər sözün ilk hərfini böyük hərfə çevirsin.

function capitalizeFirstLetter(text) {
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "") {
            continue;
        }

        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");
}

let newSentence = capitalizeFirstLetter("hello world");
console.log(newSentence);




// Task 2. Daxil olan stringin palindrom olub olmadigini yoxlayan funksiya yazın və boolean dəyər qaytarsın.
const isPalidrome = (str) => {
    let left = "";
    let right = "";

    // ===> Loop for the left side <===
    for (let i = 0; i <= str.length - 1; i++) {
        left += str[i];
    }

    // ===> Loop for the rigth side <===
    for (let i = str.length - 1; i >= 0; i--) {
        right += str[i];
    }
    console.log(`from left to right side : ${left}`);
    console.log(`from right to left side: ${right}`);

    // ===> Conditon of the word an palidrome is <===
    if (left === right) {
        console.log("this is a palindrom", true);
    } else {
        console.log("this is'nt a palindrom", false);
    }
};
isPalidrome("qayaq");

// Task 3.
const findLetterInText = (text, letter, isBoolean) => {
    text = prompt("Type something");
    letter = prompt("Type letter please");
    isBoolean = prompt("Type true or false");

    if (isBoolean.toLowerCase() === "false") {
        letter = letter.toLowerCase(); 
    }

    for (let i = 0; i < text.length; i++) {
        if (letter === text[i].toLowerCase()) {
            if (isBoolean.toLowerCase() === "true") {
                text = text.replace(new RegExp(text[i], 'g'), text[i].toUpperCase());
            } else {
                text = text.replace(new RegExp(text[i], 'g'), text[i].toLowerCase());
            }
        }
    }
    console.log(text);
}

findLetterInText();

