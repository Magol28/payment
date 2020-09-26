const fs = require("fs");
const readline = require("readline");
const { getPayments } = require("./utils/infoPay");
const calculatePayment = (data) => {
  const information = data.split("=");
  const days = information[1].split(",");
  const payment = days.map((day) => {
    const dayName = day.substring(0, 2);
    const range = day.substring(2, 13).split("-");

    if (dayName === "SA" || dayName === "SU") {
      return getPayments(range[0], range[1], true);
    } else {
      return getPayments(range[0], range[1], false);
    }
  });
  const amoungToPay = payment.reduce((a, b) => a + b);
  console.log(`The amount to pay ${information[0]} is:${amoungToPay} USD`);
};

async function mainProces() {
  const fileStream = fs.createReadStream(process.cwd() + "/assets/data.txt");

  const info = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of info) {
    calculatePayment(line);
  }
}

mainProces();
