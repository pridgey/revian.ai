const brain = require("brain.js");
const dataset = require("./dataset.json");
const fs = require("fs");
const model = require("./model.json");

const net = new brain.recurrent.LSTM();

if (model) {
  net.fromJSON(model);
} else {
  net.train(dataset, {
    iterations: 500,
    log: true,
  });

  fs.writeFile("model.json", JSON.stringify(net.toJSON()), (err) =>
    console.error(err)
  );
}

const output = net.run("HEART");
console.log("Output:", output);
