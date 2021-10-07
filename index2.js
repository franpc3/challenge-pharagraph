const readline = require('readline');
const util = require('util');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
const question = util.promisify(rl.question).bind(rl);

let parrafo ;
  
  async function questionExample() {
    
      parrafo = await question('What is you favorite food? ');
    
  }

  questionExample();
  console.log(`Oh, so your favorite food is ${parrafo}`);