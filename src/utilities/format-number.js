/* file: src/utilities/format-number.js */
const objMap = ["years", "months", "days", "hours", "minutes", "seconds"];
const numbers = "\\d+(?:[\\.,]\\d{0,3})?";
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`;
const timePattern = `T(${numbers}H)?(${numbers}M)?(${numbers}S)?`;
const pattern = new RegExp(`P(?:${datePattern}(?:${timePattern})?)`);

export function formatNumberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export function parseISO8601TimePattern(durationString) {
  // https://github.com/tolu/ISO8601-duration/blob/master/src/index.js
  return durationString
    .match(pattern)
    .slice(1)
    .reduce((prev, next, idx) => {
      prev[objMap[idx]] = parseFloat(next) || 0;
      return prev;
    }, {});
}

export function getVideoDurationString(iso8601DurationString) {
  if (!iso8601DurationString || iso8601DurationString === "") {
    return "";
  }
  //create an object to hold the parts returned from the parseISO8601TimePattern
  let { days, hours, minutes, seconds } = parseISO8601TimePattern(
    iso8601DurationString
  );

  let secondsString = seconds.toString();
  let minutesString = minutes.toString();
  let accumulatedHours = days * 24 + hours;

  if (seconds < 10) {
    secondsString = seconds.toString().padStart(2, "0");
  }
  if (minutes < 10 && hours !== 0) {
    minutesString = minutesString.toString().padStart(2, "0");
  }
  if (!accumulatedHours) {
    return [minutesString, secondsString].join(":");
  } else {
    return [accumulatedHours, minutesString, secondsString].join(":");
  }
}
