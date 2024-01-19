/* eslint-disable no-await-in-loop */
/* eslint-disable linebreak-style */
const fs = require('fs').promises;
const inquirer = require('inquirer');
const { EOL } = require('os');

async function readQuest() {
  const tema = await fs.readFile('./questions1.json', 'utf8');
  const parsedTema = JSON.parse(tema);

  let count = 0;
  for (let i = 0; i < parsedTema.length; i += 1) {
    const vopros = await inquirer.prompt([

      {
        type: 'list',
        name: 'point',
        message: `Vopros: ${parsedTema[i].question}`,
        choices: [
          { name: `${parsedTema[i].answers[0]}`, value: parsedTema[i].points[0] },
          { name: `${parsedTema[i].answers[1]}`, value: parsedTema[i].points[1] },
          { name: `${parsedTema[i].answers[2]}`, value: parsedTema[i].points[2] },
        ],
      },
    ])
      .finally(() => { console.log(`Right now u have: ${count} points`); });

    count += vopros.point;
    console.log(count);
  }
}
readQuest();
