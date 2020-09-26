const { timesWorkRange } = require("../utils/dataFormat");
const week = [25, 15, 20];
const weeKend = [30, 20, 25];

const getPayCuantity = (timeWeek, workTime, quantiTime = 0) =>
  timeWeek ? weeKend[workTime] * quantiTime : week[workTime] * quantiTime;

const getTimeWork = (startedTime, finalTime) => {
  const startDate = new Date("6 Apr, 2020 " + startedTime);
  const finlaDate = new Date("6 Apr, 2020 " + finalTime);
  return Math.abs(startDate - finlaDate) / 36e5;
};
const getPayments = (startTime, endTime, dayType) => {
  const range = timesWorkRange(startTime, endTime);
  const timeRange1 = getTimeWork(range.range1start, range.range1end);
  const timeRange2 = getTimeWork(range.range2start, range.range2end);
  const timeRange3 = getTimeWork(range.range3start, range.range3end);
  return (
    getPayCuantity(dayType, 0, timeRange1) +
    getPayCuantity(dayType, 1, timeRange2) +
    getPayCuantity(dayType, 2, timeRange3)
  );
};
module.exports = { getPayCuantity, getTimeWork, getPayments };
