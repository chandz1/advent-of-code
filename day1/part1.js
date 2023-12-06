const fs = require("fs");

const contents = fs
  .readFileSync("part1", "utf8")
  .split("\n")
  .map((x) => x.split(""));

let sum = 0;

for (let i = 0; i < contents.length; ++i) {
  let num1 = null;
  let num2 = null;
  for (let k = 0; k < contents[i].length; ++k) {
    let temp = Number.parseInt(contents[i][k]);
    if (Number.isInteger(temp)) {
      num1 = num1 ?? temp;
      num2 = temp;
    }
  }
  sum += 10 * num1 + num2;
}

console.log(sum);
