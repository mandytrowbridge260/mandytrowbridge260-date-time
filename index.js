// dateTimeUtils.js
const moment = require('moment-timezone');

/**
 * Converts a given date string to a different timezone.
 * @param {string} dateStr The input date string.
 * @param {string} fromTimeZone The timezone of the input date.
 * @param {string} toTimeZone The timezone to convert to.
 * @returns {string} The converted date string.
 */
const convertToTimeZone = (dateStr, fromTimeZone, toTimeZone) => {
  return moment.tz(dateStr, fromTimeZone).tz(toTimeZone).format('YYYY-MM-DD HH:mm:ss');
};

/**
 * Checks if a given date is within a specified range.
 * @param {string} dateStr The input date string.
 * @param {string} startDateStr The start date string of the range.
 * @param {string} endDateStr The end date string of the range.
 * @returns {boolean} True if the date is within the range, false otherwise.
 */
const isDateInRange = (dateStr, startDateStr, endDateStr) => {
  const date = moment(dateStr);
  const startDate = moment(startDateStr);
  const endDate = moment(endDateStr);
  return date.isBetween(startDate, endDate, null, '[]');
};

module.exports = {
  convertToTimeZone,
  isDateInRange,
};
