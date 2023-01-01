// Lists of projects

// Password generator
// 30/12/2022
// Nathan | Dimqnd

/**
 * Generates a password with the inputted length from a range of upper and lower case letters, symbols and numbers.
 * @param {string} length - How many characters should the password be?
 * @param {number} number - How many passwords should be generated?
 * @param {object} characters - Parse in an object with the type of characters you would like in the password set to true.
 * @returns Returns the generated password as string, unless the number is > 1, in which case it returns an array of the passwords.
 */
function passwordGenerator(length, number = 1, characters = {lowercase: true, uppercase: true, symbols: true, numbers: true}) {
    const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const UPPERCASE = LOWERCASE.toUpperCase();
    const SYMBOLS = "!@#$%^&*()`,.<>/?";
    const NUMBERS = "0123456789";

    const RELATIONS = { lowercase: LOWERCASE, uppercase: UPPERCASE, symbols: SYMBOLS, numbers: NUMBERS};
    let collection = "";

    // check to make sure the user wants these types of characters in their password
    for (let key in characters) {
        if (characters[key]) {
            collection += RELATIONS[key];
        }
    }

    let finalString = "";
    let passwords = [];
    for (let l = 0; l < number; l++) {
        for (let i = 0; i < length; i++) {
            finalString += collection[Math.floor(Math.random() * collection.length)];
        }
    
        passwords.push(finalString);
        finalString = "";
    }

    // return an array if there are multiple, otherwise just a string, just to be a pain
    return passwords.length === 1 ? passwords[0] : passwords;
}

// function call

console.log(passwordGenerator(17, 5, { uppercase: true, numbers: true }));