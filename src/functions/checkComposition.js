const checkComposition = (req,res,next) => {
    const {
        pharagraph,
        wordsNotAllowed
    } = req.body;

    let pharagraphExpresion = /[A-Za-z "!?',;.]/;
    let status = false;
    if(pharagraph.length > 100){
        status = "LENGTH ERROR";
        res.status(400).send( 'Error - Your pharagraph is bigger than 1000, please insert a valid pharagraph ')
    }
    for (let i = 0; i < pharagraph.length; i++) {
        const element = pharagraph[i];
        if(!pharagraphExpresion.test(element)){
            status = "FORMAT ERROR";
            res.status(400).send( 'Error - Your pharagraph contain invalid characters, please insert a valid pharagraph ')
        }
      }
    
    let wordExpresion = /[a-z]/;
    if(wordsNotAllowed.length> 10){
        status = "ARRAY LENGTH ERROR";
        res.status(400).send( 'Error - Can not receive more than 10 words not allowed')
    }

    wordsNotAllowed.forEach(word => {
        if(word.length > 100){
            status = "LENGTH ERROR";
            res.status(400).send( `Error - Your word "${word}" is bigger than 100, please insert a valid word.`)
        }
        for (let i = 0; i < word.length; i++) {
            const element = word[i];
            if(!wordExpresion.test(element)){
                status = "FORMAT ERROR";
                res.status(400).send( `Error - Your word "${word} "contain invalid characters, please insert a valid word.`)
            }
          }
    });
    
    status ? console.log(status): next() ;
    

}

module.exports = {checkComposition};