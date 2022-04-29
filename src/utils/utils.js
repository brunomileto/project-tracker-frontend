// const bcrypt = require('bcryptjs');

const { func } = require("prop-types");

const daysOfMonths = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

function stringHasNumber(str){
  return /\d/.test(str);
};

function stringHasCapitalLetters(str){
  return (/[a-z]/.test(str) && /[A-Z]/.test(str));
};

function emailValidation (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
};

function isString(value){
  return typeof(value) === 'string';
}

function isInteger(value){
  return typeof(value) === 'integer';
}

function stringIsEmpty(str){
  return str === ""
}

function dateTodayAAAAMMDD(){
  return getDateAAAAMMDD(new Date())
}

function dateToAAAAMMDD(date){
  return getDateAAAAMMDD(date);
}

function getDateAAAAMMDD(date){
  var day = date.getDate().toString();
  if(day.length == 1){
    day = 0 + day;
  }

  var month = (date.getMonth() + 1).toString();
  if (month.length == 1) {
    month = 0 + month;
  }
  
  const year = date.getFullYear().toString();

  const newDate = +(year + month + day); // Convert to integer
  return (year + month + day);
}

function getDate(dateInteger){
  var dateString = dateInteger.toString();
  const year = +(dateString.substring(0, 4));
  const month = +(dateString.substring(4, 6));
  const day = +(dateString.substring(6));
  return new Date(year, month-1, day);
}

function objectToJson(obj){
  return (JSON.parse(JSON.stringify(obj)));
}

function jsonToObject(jsonString){
  return (JSON.parse(jsonString));
}

function exists(value){
  return (typeof(value !== 'undefined') && (value != null));
}

function dateTodayStr(){
  return new Date().toLocaleDateString()
}

function dateTodayInt(){
  var date = new Date().toLocaleDateString()
  var day = (dateStr.substring(0, 2))
  var month = (dateStr.substring(3, 5))
  var year = (dateStr.substring(6))
  return parseInt(year+month+day)
}

function dateTodayDDMMAAAA(){
  var date = new Date().toLocaleTimeString()
  var day = (date.substring(0, 2))
  var month = (date.substring(3, 5))
  var year = (date.substring(6))
  return parseInt(day, month, year)
}

function isValidDateStrDDMMAAAA(dateStr){
  try {
    var day = parseInt(dateStr.substring(0, 2))
    var month = parseInt(dateStr.substring(2, 4))
    var year = parseInt(dateStr.substring(4))
    if (year < 1900 || year > 9999)
      return false;
    
    if (month < 1 || month > 12)
      return false;
    
    if (day < 1 || day > 31)
      return false

    var dayOfTheMonth = daysOfMonths[month]
    if (month == 2 && isBiSixYear(year))
      dayOfTheMonth += 1;

    if (day > dayOfTheMonth)
      return false;

    return true;

  } catch (error) {
    return false;
  }
}

function isValidDateStr(dateStr){
  try {
    var day = parseInt(dateStr.substring(0, 2))
    var month = parseInt(dateStr.substring(3, 5))
    var year = parseInt(dateStr.substring(6))

    if (year < 1900 || year > 9999)
      return false;
    
    if (month < 1 || month > 12)
      return false;
    
    if (day < 1 || day > 31)
      return false

    
    var dayOfTheMonth = daysOfMonths[month]
    if (month == 2 && isBiSixYear(year))
      dayOfTheMonth += 1;
    
    if (day > dayOfTheMonth)
      return false;
    return true;
  } catch (error) {
    return false;
  }
}

function isBiSixYear(year){
  return (((year % 4 == 0) && (year % 100 != 0)) 
    || (year % 400 == 0));
}

function stringContainsLetters(str) {
 return /[a-zA-Z]+$/.test(str)
}

function formatDateStrDDMMAAAA(dateStr){
  var day = (dateStr.substring(0, 2))
  var month = (dateStr.substring(2, 4))
  var year = (dateStr.substring(4))
  return `${day}/${month}/${year}`
}

function getTimeFromStr(timeStr){
  var timeLst = timeStr.split(":")
  var hour = parseInt(timeLst[0]);
  var minute = parseInt(timeLst[1]);
  var second = parseInt(timeLst[2]);
  return {hours:hour, minutes:minute, seconds:second};  
}

function timeToStr(time){
  var timeStr = time.toString()
  if (timeStr.length == 1){
    timeStr = `0${timeStr}`
  }
  return timeStr;
}

function writeLog(str, object){
  console.log(`LOG: ${str}`)
  if(object != undefined && typeof(object) != 'undefined' && object != null)
    console.log(object)
}

// async function encrypt(value){
//   return await bcrypt.hash(value, 10);
// };

// async function compareEncrypted(value, encryptedValue){
//   return await bcrypt.compare(value, encryptedValue)
// }

export {
  stringHasNumber,
  stringHasCapitalLetters,
  emailValidation,
  isInteger,
  isString,
  getDate,
  getDateAAAAMMDD,
  dateToAAAAMMDD,
  dateTodayAAAAMMDD,
  jsonToObject,
  objectToJson,
  exists,
  dateTodayInt,
  dateTodayDDMMAAAA,
  isValidDateStrDDMMAAAA,
  formatDateStrDDMMAAAA,
  dateTodayStr,
  isValidDateStr,
  stringContainsLetters,
  getTimeFromStr,
  timeToStr,
  writeLog
  // encrypt,
  // compareEncrypted,
};