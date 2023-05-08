const fs = require("fs");
const path = require("node:path");

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

fs.writeFile(path.join(__dirname, "mynotes.txt"), "Your text: \n", (err) => {
  if (err) throw err;
  console.log("Файл был создан");
  console.log("Введите ваш текст:");
});

const rl = readline.createInterface({ input, output });

rl.on("line", (input) => {
  if(input === 'exit'){
    rl.close();
    console.log('Спасибо за ваши тёплые фразы');
  } else {
    console.log(`Received: ${input}`);
    fs.appendFile(path.join(__dirname, "mynotes.txt"), `${input} \n`, (err) => {
      if (err) throw err;
      console.log("Файл был изменен");
    });
  }
  
});

rl.on('SIGINT', () => {
  console.log('Доброго дня');
  rl.close();
})


