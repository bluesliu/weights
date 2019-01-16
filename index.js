const Weights = require('weights');

let weights = new Weights();
weights.addItem({name:'普通奖励', id:1},2);
weights.addItem({name:'稀有奖励', id:2},1);

console.log(weights.random());