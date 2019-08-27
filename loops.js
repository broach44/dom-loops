// loop through the rainbow and print out the colors to the page

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];



// const printRainbow = (colorArr) => {
//     for (let i = 0; i < colorArr.length; i++) {
//     const color = colorArr[i];
//     printToDom(color, 'rainbow');
//     }
// }

// printRainbow(colors);

const printRainbow = (colorArr) => {
    for (let i = 0; i < colorArr.length; i++) {
    const color = `<p style='color: ${colorArr[i]}'>${colorArr[i]}</p>`;
    printToDom(color, 'rainbow');
    }
}

printRainbow(colors);

const instructors = [
    {first: "Zoee", last: "Amese"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarke"},
  ];

const printNames = (namesArray) => {
    for (let i = 0; i < namesArray.length; i++) {
        const person = namesArray[i];
        const element = `<p>${person.first} ${person.last}</p>`;
    printToDom(element, 'instructors');
    }
}

printNames(instructors);