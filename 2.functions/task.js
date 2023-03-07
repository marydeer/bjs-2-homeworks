//1
function getArrayParams(...arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  let avg = sum / arr.length;
  return {
    min: min,
    max: max,
    avg: +avg.toFixed(2)
  };
}
console.log(getArrayParams());
console.log(getArrayParams(-99, 99, 10));
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(getArrayParams(5));

//2
function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  let avg = sum / arr.length;
  return sum;
}

// summElementsWorker
console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let dif = 0;
  for (let i = 0; i < arr.length; i++) {
    dif = max - min;
  }
  return dif;
}
// differenceMaxMinWorker
console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 

function differenceEvenOddWorker(...arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }
return even - odd;
}
// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  if(arr.length === 0) {
    return 0;
  }
  return sumEvenElement/countEvenElement;
}
// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 

//3
function makeWork (arrOfArr, func) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(func(...arrOfArr[i]));
  }
  let maxWorkerRezult = Math.max.apply(null, array);
  return maxWorkerRezult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); 
console.log(makeWork(arr, differenceMaxMinWorker)); 
console.log(makeWork(arr, differenceEvenOddWorker)); 
console.log(makeWork(arr, averageEvenElementsWorker)); 