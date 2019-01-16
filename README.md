# Weights 权重

Weights 可以添加多个对象，为其分配权重，然后根据权重随机返回，一般用于随机获得奖励。

## 安装
> npm i weights

## 使用
```javascripts
const Weights = require('weights');

let weights = new Weights();
weights.addItem({name:'普通奖励', id:1},2);
weights.addItem({name:'稀有奖励', id:2},1);

console.log(weights.random());
```