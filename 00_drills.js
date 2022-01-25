// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  newString = '';
  for (let i = str.length-1; i >= 0; i--)
            newString += str[i];
            return newString;
  }
 
// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  result = num;
  if (num <= 0){
    return 1;
  }
    while (num > 1){
      num--;
      result *= num;
  }
  return result;
}
// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1 
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
if (arr1.length != arr2.length){
  return -1;
}
result = [];
for (let i = 0; i < arr1.length; i++) {
  pair = [arr1[i], arr2[i]];
  result.push(pair);
}
return result;
}

// TODO - Write a function which does the opposite of `zip()`
// unzip([[1, 5], [2, 3], [3, 1]]) === [1, 2, 3], [5, 3, 1]
const unzip = (arr) => {
  result = [[],[]];
  for (let i = 0; i < arr.length; i++) {
      arr1 = arr[i][0];
      arr2 = arr[i][1];
    result[0].push(arr1);
    result[1].push(arr2);
  } 
  return result;
}
// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  if (num === 0){
    return str;
  }
  doubleStr = '';
  newStr = ''
  const n = num % (str.length);
  doubleStr = str + str;
  newStr = doubleStr.substring(n+1, n+1+str.length);
  return newStr;
}


// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March', 
    3: 'April', 
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  const date = new Date();
  const day = (value) => {
    if (value === 1 || value === 21 || value === 31) {
      return value + 'st';
    }
    else if (value === 2 || value === 22) {
      return value + 'nd';
    }
    else {
      return value + 'th';
    }
  }

const timeOfDay = (hours) => {
  if (hours < 12) {
    return 'morning';
  }
  else {
    return 'afternoon'
  }
}
  const month = months[date.getMonth()];
  const DoW = day(date.getDate());
  const yr = date.getFullYear();
  const hr =date.getHours() % 12;
  const min = date.getMinutes();
  const TOD = timeOfDay(date.getHours());

  return `Today's date is ${month} ${DoW}, ${yr}. It is ${hr}:${min} in the ${TOD}.`;
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
