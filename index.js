const readline = require('readline');


const inputFunction = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

 
 async function start(){
  let parrafo = await getPharagraph();
  console.log("EL parrafo es: ", parrafo.trim());
  let wordsNotAllowed = [];
  let wordNotAllowed = await getWordsNotAllowed();
  wordsNotAllowed.push(wordNotAllowed);
  console.log("la palabra es: ", wordsNotAllowed);
  let duplicates = checkDuplicates(parrafo);
  console.log(duplicates);
  let output = checkIfAllowed(duplicates,wordsNotAllowed);
  console.log(output);
 }
 

 async function getPharagraph(){
  return new Promise( (res,rej ) => {
    
    inputFunction.question(`Insert pharagraph: `,(input) => {
      let pharagraphInput = input.trim();
       if(pharagraphInput.length > 100){
        inputFunction.setPrompt('Your pharagraph is bigger than 1000, please insert a valid pharagraph \n');
        inputFunction.prompt();
        inputFunction.on('line', (input) => 
        {
          pharagraphInput = input.trim();
          if(pharagraphInput.length > 10){
            inputFunction.setPrompt('Your pharagraph still bigger than 1000, please insert a valid pharagraph \n');
            inputFunction.prompt();
          }else{
            res (pharagraphInput);
          }
        })
       }else{
         if(!checkComposition('pharagraph',pharagraphInput)){
          inputFunction.setPrompt('Your pharagraph contain invalid characters, please insert a valid pharagraph \n');
          inputFunction.prompt();
          inputFunction.on('line', (input) => 
          {
            pharagraphInput = input.trim();
            if(!checkComposition('pharagraph',pharagraphInput)){
              inputFunction.setPrompt('Your pharagraph still invalid, please insert a valid pharagraph \n');
              inputFunction.prompt();
            }else{
              res (pharagraphInput);
            }
         })
        } 
        else{
          res (pharagraphInput);
       }
      }
     })    
     //inputFunction.close();
    });
    
}

function checkComposition(valueType,data){
  let expresion = (valueType = 'pharagraph')? /[A-Za-z "!?',;.]/ : /[a-z]/;
  
  console.log('EXPRESION', expresion)
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log("---------",expresion.test(element));
    if(!expresion.test(element)){
      return false;
    }
  }
  return  true;
}

async function getWordsNotAllowed(){
  return new Promise((res,rej) => {
    inputFunction.question('Insert one word not allowed:', (input) => {
      let word = input.trim();
      if(word.length > 10){
        inputFunction.setPrompt('Your word is bigger than 100, please insert a valid word: ');
        inputFunction.prompt();
        inputFunction.on('line', (input) => 
        {
          word = input.trim();
          if(word.length > 10){
            inputFunction.setPrompt('Your word still bigger than 100, please insert a valid word: ');
            inputFunction.prompt();
          }else{
            res (word);
          }
        })
       }else{
         if(!checkComposition('word',word)){
          inputFunction.setPrompt('Your word contain invalid characters, please insert a valid word: ');
          inputFunction.prompt();
          inputFunction.on('line', (input) => 
          {
            word = input.trim();
            if(!checkComposition('word',word)){
              inputFunction.setPrompt('Your word still invalid, please insert a valid word: ');
              inputFunction.prompt();
            }else{
              res (word);
            }
         })
        } 
        else{
          res (word);
       }
      }

    })
  })
};

function checkDuplicates(pharagraph){
  let duplicates = [];

  let pharagraphWords = pharagraph.split(" ");
   pharagraphWords = pharagraphWords.map(word => word.toLowerCase().replace(/["!?',;. ]/,""));
  let pharagraphWordsSorted = [...pharagraphWords].sort();
  console.log("----",pharagraphWordsSorted,"----")

  for (let i = 0; i < pharagraphWordsSorted.length; i++) {
    if(pharagraphWordsSorted[i+1] == pharagraphWordsSorted[i]){
      duplicates.push(pharagraphWordsSorted[i]);
    }
  }
  if(duplicates.length == 0){ duplicates.push(pharagraphWords[0])};
  return duplicates;
}

function checkIfAllowed(duplicates, wordsNotAllowed){
  for (let i = 0; i < duplicates.length; i++) {
    const element = duplicates[i];
    if(!wordsNotAllowed.includes(element)){
      return element;
    }
  }
  return false;
}

start();

