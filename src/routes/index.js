const express = require ("express");
const {checkComposition} = require('./../functions/checkComposition');
const { checkWords } = require('./../functions/checkWords');

var router = express.Router();

router.post('/pharagraph', checkComposition , (req,res,next) => {
    checkWords(req,res,next);
    //res.send("Todo bien");
});

module.exports = router;
