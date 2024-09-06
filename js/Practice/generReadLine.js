const readline = require("readline");
import assert from "assert";
const { stdin: input } = require("process");

function* add() {
  const x = yield "첫번째 수?";
  const y = yield "두번째 수?";
  return x + y;
}

const rl = readline.createInterface({ input });

const itAdd = add();
console.log("🚀 ~ itAdd:", itAdd.next().value);

// cf. line listener
rl.on("line", (answer) => {
  const { value, done } = itAdd.next(+answer);

  if (done) {
    console.log("total:", value);
    rl.close;
  } else {
    console.log(value);
  }
}).on("close", () => {
  process.exit();
});

rl.question("What do you think of Node.js? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

rl.on("close", function () {
  process.exit();
});
