let _ = {
    clamp: (number, lb,ub) =>  {
        if (number <= lb){
            return lb;
        }else if(number >= ub){
            return ub;
        }else{
            return number;
        }
    },
    inRange: (number,start,end) => {
        if (end === undefined){
            end = start;
            start = 0;
        }

        if(start > end){
            let temp = start;
            start = end;
            end = temp;
        }

        if (start <= number && number < end){
            return true;
        }else{
            return false;
        }
    },
    words: (string) => {
        return string.split(' ');
    },
    pad: (string,padding) => {
        if(padding < string.length){
            return string;
        }else{
            let totalPadding = padding - string.length;
            let beginningPadding = Math.floor(totalPadding/2);
            let endPadding = Math.ceil(totalPadding/2);
            let space = ' ';
            return `${space.repeat(beginningPadding)}${string}${space.repeat(endPadding)}`
        }

    },
    has: (obj, key) => {
        let eval = obj[key];
        if(eval != undefined){
            return true;
        }else{
            return false;
        }
    },
    invert: (obj) => {
        let invertedObject ={};
        let x;
        for(x in obj) {
            let originalValue = obj[x];
            invertedObject[originalValue] = x;
        }
        return invertedObject;
    },
    findKey: (obj,func) => {
        for (key in obj){
            let value = obj[key];
            let predicateReturnValue = func(value);
            if (predicateReturnValue){
                return key;
            }
        }
        return undefined;
    },
    drop: function (arr, num =1) {
        return newArr = arr.slice(num);
    },
    dropWhile: function  (arr, predicate) {
        const dropNumber = arr.findIndex(function(element, index){
            return !predicate(element, index, arr) 
          });
            
          const droparr = this.drop(arr, dropNumber); 
          return droparr;
    }, 
    chunk: function (arr, size = 1 ) {
        let arrChunks = [];
        for (i = 0; i < arr.length; i = i+size){
            var arrChunk = arr.slice(i,i+size);
            arrChunks.push(arrChunk);
          }
          return arrChunks;
    }
};
// Do not write or modify code below this line.
module.exports = _;