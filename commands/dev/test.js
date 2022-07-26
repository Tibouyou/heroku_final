const schedule = require('node-schedule');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const listePC = {
  1 : [2,4],
  2 : [8,16],
  3 : [32,64],
  4 : [128,256],
  5 : [512,1024],
  6 : [2048,4096],
  7 : [8192,16384],
  8 : [32768,65536],
  9 : [131072,262144],
  10 : [524288,1000000],
  11 : [1250000,2500000]
}

module.exports = {
  name: 'test',
  ownerOnly: true,
  description: 'placeholder',
  async runInteraction(client, interaction) {
    let zone = 5;
    console.log(getRandomIntInclusive(listePC[zone][0],listePC[zone][1]));
  }
}