const inquirer = require('inquirer');
const fs = require('fs').promises;
const { theme1, theme2 } = require('./quiz-model');

async function start() {
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'theme',
        message: 'Выберите тему:',
        choices: ['Memes', 'Song'],
      },
    ])
    .then((themes) => {
      if (themes.theme === 'Memes') {
        theme1();
      }
      if (themes.theme === 'Song') {
        theme2();
      }
    });
}
start();
// console.clear()
// start()
