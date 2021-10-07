const checkWords = (req,res,next) => {
    const {
        pharagraph,
        wordsNotAllowed
    } = req.body;

     let duplicates = [];
     let pharagraphWords = pharagraph.split(" ");
     pharagraphWords = pharagraphWords.map(word => word.toLowerCase().replace(/["!?',;. ]/,""));
     let pharagraphWordsSorted = [...pharagraphWords].sort();
     

     for (let i = 0; i < pharagraphWordsSorted.length; i++) {
          if(pharagraphWordsSorted[i+1] == pharagraphWordsSorted[i]){
          duplicates.push(pharagraphWordsSorted[i]);
          }
     } 
    
     if(duplicates.length == 0){ duplicates.push(pharagraphWords[0])};
    
     let output = "";
     for (let i = 0; i < duplicates.length; i++) {
        const element = duplicates[i];
        if(!wordsNotAllowed.includes(element)){
            output = element;
        }
      }
      output? res.send(output): next();

}

module.exports = {checkWords};