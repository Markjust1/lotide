const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["House", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);