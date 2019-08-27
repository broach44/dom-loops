console.log('dino');

const dinosaurs = [
    {
      dinoType: 't-rex',
      name: 'wrex',
      emoji: '🎨'
    },
    {
      dinoType: 'stegosaurus',
      name: 'steve',
      emoji: '🐱‍🐉'
    },
    {
      dinoType: 'velociraptor',
      name: 'Ted',
      emoji: '🎁'
    }
  ];

  const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const dinoPrinter = (dinoArr) => {
    for (let i = 0; i < dinoArr.length; i++) {
        const dinos = dinoArr[i];

        const stringToPrint = `
        <div class="dino-card">
            <h3>${dinos.dinoType}</h3>
            <p>${dinos.name}</p>
            <h1>${dinos.emoji}</h1>
        </div>
        `
        printToDom(stringToPrint, 'dino-div');
    }
}

dinoPrinter(dinosaurs);