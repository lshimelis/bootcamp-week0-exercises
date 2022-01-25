/**
  Implement your own version or Array.filter()
  The function should take as input:
    an array: arr
    a function: f
  The function should output a new list with only the elements for which f(arr[i]) === true
  Do not use a for loop!
  Example:
    myFilter([1, 3, 4], v => v % 2 === 1)
    -> [1, 3]
*/

const myFilter = (arr, f) => {
  const results = []
  arr.forEach( (value) => {
    if (f(value)) {
      results.push(value);
    }
  })
  return results;
}

module.exports = myFilter
