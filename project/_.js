const _ = {
  clamp : function(number, lower, upper) {
    let lowerClampedValue = Math.max(number,lower)
    let clampedValue = Math.min(lowerClampedValue,upper)
    return clampedValue;
  },
  inRange : function(number, start, end) {
    if (typeof start === "undefined"){
      start = number;
    };
    if (typeof end === "undefined"){
      end = start;
      start = 0;
    };
    if (start > end && typeof end != "undefined"){
      let temp = end;
      end = start;
      start = temp;
    };
    let isInRange = (number, start, end) => {
      if (start <= number && number < end){
        return true
      } else {
        return false
      };
    };
   return isInRange(number, start, end); 
  },
  words : function(string){
    let words = string.split(' ')
    return words
  },
  pad : function(string,length){
    if (length <= string.length){
      return string;
    };
    let startPaddingLength = Math.floor((length-string.length)/2);
    let endPaddingLength = length - string.length-startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
    return paddedString
  },
  has : function(object,key){
    let hasValue = typeof object[key] != 'undefined';
    return hasValue
  },
  invert : function(object){
    let invertedObject = {};
    for (x in object){
      let originalValue = Object.keys(object)[x];
      let originalKey = Object.keys(object);
      invertedObject[object[x]] = x;
      };
    return invertedObject
  },
  findKey : function(object, predicate){
    for (let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value)
      if (predicateReturnValue){
        return key
      } 
    }
    return undefined
  },
  drop : function(array, n){
    if (!n){
      n = 1
      }
    let droppedArray = array.slice(n)
    return droppedArray
  },
  dropWhile : function(array, predicate){
    let dropNumber = array.findIndex((element,index) => !predicate(element,index,array));
    let droppedArray=this.drop(dropNumber);
    return droppedArray;
  },
  chunk : function(array,size){
    if (!size){
      size = 1
    }
    let arrayChunks = [];
    for (let i=0; i < array.length-1; i+=size){
      if (array.length%2==0){
        arrayChunk = array.slice(i,i+2);
      } else {
        arrayChunk = array.slice(size+i);
      };
      arrayChunks.push(arrayChunk);
    };
    return arrayChunks;
    }
}
// Do not write or modify code below this line.
module.exports = _;
