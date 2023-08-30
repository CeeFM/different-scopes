/* const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
*/

// ANSWER for above - y was inserted into for loop conditions and body, 
// creating an infinite loop. replaced with x to fix.

/*
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord}${secondWord}`
    console.log(conjoinedWord);
}

conjunction("Master", "Card")
*/
// ANSWER for above - block scoped variable "conjoinedWord" was being called in the 
// global scope, leading to an error. Moved the console.log inside the function block,
//  which fixed the error.

/*
{
    const modSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series: {
            start: "1968",
            end: "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
    console.log(HTMLRepresentation)
}
*/

// ANSWER for above - lots of little issues, object keys wrapped in quotes, 
// commas missing between key/value pairs, using const where let is needed, 
// and another block scoped variable trying to be accessed globally.

/* const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {
    let invalidLocation;
    if (location[0] > 2) {
        invalidLocation = true;
        if (invalidLocation) {
            console.log("This location is invalid")
        }
    }
}
*/

// ANSWER for above - block scoped variable declaration for invalidLocation, 
// changed from const to let so the value could be changed, declared it as the first 
// line of the for..of loop, reassigned its value in the first if statement, 
// nested the second if statement inside the first if statement.

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    const name = possibleNames[randomizer]

    const namer = function () {
        const suffix = " the Llama"
        return name + suffix
    }

    return namer();
    //console.log(namer());
}

const nameMaker = llamaNamer();
const anotherNameMaker = llamaNamer();
const yetAnotherNameMaker = llamaNamer();
llamaNamer();
console.log(nameMaker);
console.log(anotherNameMaker);
console.log(yetAnotherNameMaker);

// ANSWER for the above - Man, there was a lot going on with this one. 
// I brought the "name" variable into the top level function so it 
// wasn't limited to the scope of the nested function. I moved
// the return value into the nested function, and put a console.log call of the namer function
// in its place, to ensure that function is called and executed within the top level
// function. Then replaced the final variable declaration and console.log with simply
// invoking the llamaNamer() function, since the console.log of the return value 
// was already built into it.