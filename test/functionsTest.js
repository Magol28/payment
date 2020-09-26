const { assert } = require("chai");
const { getPayCuantity, getTimeWork } = require("../utils/infoPay");
const { timesWorkRange } = require("../utils/dataFormat");
describe("get paid for weekday paymants ", () => {
  it("if we set a weekday work from 00:01 to 8:00 i will return 200", () => {
    assert.equal(getPayCuantity(false, 0, 8), 200);
  });
  it("if we set a weekday work from 00:01 to 8:05 i will return 226.0825", () => {
    assert.equal(getPayCuantity(false, 0, 8.0833), 202.08249999999998);
  });
  it("if we set a weekday work from 09:01 to 14:00 i will return 75", () => {
    assert.equal(getPayCuantity(false, 1, 5), 75);
  });
  it("if we set a weekday work from 09:01 to 14:05 i will return 76.2495", () => {
    assert.equal(getPayCuantity(false, 1, 5.0833), 76.24950000000001);
  });
  it("if we set a weekday work from 16:01 to 18:00 i will return 80", () => {
    assert.equal(getPayCuantity(false, 2, 4), 80);
  });
  it("if we set a weekday work from 16:01 to 20:05 i will return 81.66", () => {
    assert.equal(getPayCuantity(false, 2, 4.0833), 81.66600000000001);
  });
});

describe("get weekend day payments ", () => {
  it("if we set a sunday work from 00:01 to 8:00 i will return 240", () => {
    assert.equal(getPayCuantity(true, 0, 8), 240);
  });
  it("if we set a sunday work from 00:01 to 8:05 i will return 2242.499)", () => {
    assert.equal(getPayCuantity(true, 0, 8.0833), 242.499);
  });
  it("if we set a sunday work from 09:01 to 14:00 i will return 100", () => {
    assert.equal(getPayCuantity(true, 1, 5), 100);
  });
  it("if we set a sunday work from 09:01 to 14:05 i will return 101.666", () => {
    assert.equal(getPayCuantity(true, 1, 5.0833), 101.66600000000001);
  });
  it("if we set a saturday work from 16:01 to 18:00 i will return 100", () => {
    assert.equal(getPayCuantity(true, 2, 4), 100);
  });
  it("if we set a saturday work from 16:01 to 20:05 i will return 102.0825", () => {
    assert.equal(getPayCuantity(true, 2, 4.0833), 102.08250000000001);
  });
});

describe("get the real number of working hours ", () => {
  it("if we set a day  from 00:00 to 8:00 i will return 8", () => {
    assert.equal(getTimeWork("00:00", "08:00"), 8);
  });
  it("if we set a day  from 00:00 to 8:05 i will return 8.0833", () => {
    assert.equal(getTimeWork("00:00", "08:05"), 8.083333333333334);
  });

  it("if we set a day  from 00:00 to 8:05 i will return 7.5", () => {
    assert.equal(getTimeWork("00:30", "08:00"), 7.5);
  });

  it("if we set a day  from 08:00 to 8:00 i will return 0", () => {
    assert.equal(getTimeWork("08:00", "08:00"), 0);
  });
});

describe("get an object to explain what range are using the working time ", () => {
  it("if we set a day  from 00:00 to 8:00 i will return a object to start 0 and end 8 )", () => {
    assert.deepEqual(timesWorkRange("00:00", "08:00"), {
      range1start: "00:00",
      range1end: "08:00",
      range2start: "09:00",
      range2end: "09:00",
      range3start: "18:00",
      range3end: "18:00",
    });
  });
  it("if we set a day  from 09:00 to 15:00 i will return a object to start 09:00 and end 15:00 )", () => {
    assert.deepEqual(timesWorkRange("09:00", "15:00"), {
      range1start: "00:00",
      range1end: "00:00",
      range2start: "09:00",
      range2end: "15:00",
      range3start: "18:00",
      range3end: "18:00",
    });
  });
  it("if we set a day  from 19:00 to 23:00 i will return a object to start 19:00 and end 23:00 )", () => {
    assert.deepEqual(timesWorkRange("19:00", "23:00"), {
      range1start: "00:00",
      range1end: "00:00",
      range2start: "09:00",
      range2end: "09:00",
      range3start: "19:00",
      range3end: "23:00",
    });
  });
  it("if we set a day  from 07:45 to 19:50 i will return a object to start 7:45 and end 16:50)", () => {
    assert.deepEqual(timesWorkRange("7:45", "16:50"), {
      range1start: "7:45",
      range1end: "09:00",
      range2start: "09:00",
      range2end: "16:50",
      range3start: "18:00",
      range3end: "18:00",
    });
  });
  it("if we set a day  from 07:45 to 19:50 i will return a object to start 7:45 and end 19:50 )", () => {
    assert.deepEqual(timesWorkRange("7:45", "19:50"), {
      range1start: "7:45",
      range1end: "09:00",
      range2start: "09:00",
      range2end: "18:00",
      range3start: "18:00",
      range3end: "19:50",
    });
  });
});
