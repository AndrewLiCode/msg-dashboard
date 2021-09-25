const chance = require('chance');
const uuid = require('uuid').v4;
const { levels } = require('./levels');

const randomLevel = () => {
  return levels[Math.floor(Math.random() * 3)];
};

const randomGenerator = () => {
  return {
    level: randomLevel(),
    message: chance().sentence({ words: 5 }),
    timestamp: new Date(Date.now()).toUTCString(),
    id: uuid(),
  };
};

module.exports = { randomGenerator };
