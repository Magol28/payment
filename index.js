const fs = require("fs");
const readline = require("readline");
const { calculatePayment } = require("./utils/infoPay");

(async function () {
  const fileStream = fs.createReadStream(process.cwd() + "/assets/data.txt");

  const info = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of info) {
    calculatePayment(line);
  }
})();
