const stringLength = (string) => {
  let length;
    if (string.length > 0 && string.length <= 10) {
        length = string.length;
    } else {  
        throw `String size inconsistency`
    }
    return length
}

const reverseString = (string) => {
  const result = string.split('').reverse().join('');
  return result;
}

const makeCamelCase = (str) => {
  const toChange = str.toLowerCase();
  const string = (toChange[0].toUpperCase() + toChange.slice(1))
  return string
}

module.exports = { stringLength, reverseString, makeCamelCase }