const timesWorkRange = (tiemWorkStarts, timeWorkEnds) => {
  const startDate = tiemWorkStarts.split(":");
  const endDate = timeWorkEnds.split(":");
  const times = {
    range1start: "00:00",
    range1end: "00:00",
    range2start: "09:00",
    range2end: "09:00",
    range3start: "18:00",
    range3end: "18:00",
  };
  //if the start time is between any range
  if (startDate[0] >= 0 && startDate[0] < 9) {
    times.range1start = tiemWorkStarts;
  } else if (startDate[0] >= 9 && startDate[0] < 18) {
    times.range2start = tiemWorkStarts;
  } else if (startDate[0] >= 18 && startDate[0] < 24) {
    times.range3start = tiemWorkStarts;
  }
  //if the end time is between any range
  if (endDate[0] > 0 && endDate[0] <= 9) {
    times.range1end = timeWorkEnds;
  } else if (endDate[0] > 9 && endDate[0] <= 18) {
    times.range2end = timeWorkEnds;
  } else if (endDate[0] > 18 && endDate[0] <= 24) {
    times.range3end = timeWorkEnds;
  }

  if (startDate[0] < 9 && endDate[0] > 9) {
    times.range1end = "09:00";
  }
  if (startDate[0] < 18 && endDate[0] > 18) {
    times.range2end = "18:00";
  }
  return times;
};
module.exports = { timesWorkRange };
