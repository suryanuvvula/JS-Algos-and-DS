// Add your code here
// codeevolution algorithms
function fiboanocciSequence(number) {
  let arr = [0, 1];
  for(let i = 2; i < number; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }

  return arr;
}

console.log(fiboanocciSequence(8));

function factorialOfNumber(number) {
  let sum = 1;
  for(let i = 2; i <= number; i++) {
    sum *= i;
  }

  return sum;
  // return number.reduce((accum, index) => accum * index, 0);
}

console.log(factorialOfNumber(5));

function isPrimerNumber(number) {
  if(number < 2) return false;
  for(let i =2; i<number; i++) {
    if(number%i === 0){
      return false;
    }
  }
  return true;
}
console.log(isPrimerNumber(2));
console.log(isPrimerNumber(5));
console.log(isPrimerNumber(6));

// used for sortedArrays
function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while(leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);

    if(array[mid] === target) {
      return mid;
    }

    if(array[mid] > target) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }

  return -1;
}

console.log('binarySearch', binarySearch([3, 5, 6, 8, 9, 12, 15], 9));
console.log('binarySearch', binarySearch([3, 5, 6, 8, 90, 122, 155], 122));

//recursive binary search
function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
  if(leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if(array[middleIndex] === target) {
    return middleIndex;
  }

  if(array[middleIndex] > target) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, rightIndex);
  }
}

console.log('recursiveBinarySearch', recursiveBinarySearch([3, 5, 6, 8, 9, 12, 15], 9));
console.log('recursiveBinarySearch', recursiveBinarySearch([3, 5, 6, 8, 90, 122, 155], 122));
console.log('recursiveBinarySearch', recursiveBinarySearch([3, 5, 6, 8, 90, 122, 155], 190));

// bubble sorting
function bubbleSort(array) {
  let swapped;

  do {
    swapped = false;
    for(let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while(swapped)

  return array;
}

console.log('bubbleSort', bubbleSort([-2, -1, -10, 20, 30, -100]));

// insertion sorting
//Idea: assume first element is already sorted and remaining are unsorted in array
function insertionSorting(array) {
  for(let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while(j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j+1] = numberToInsert;
  }

  return array;
}
console.log('insertionSorting', insertionSorting([-2, -1, -10, 20, 30, -100]));

// quicksort algorithm
function quickSort(array) {
  if(array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let leftArr = [];
  let rightArr = [];

  for(let i =0; i< array.length - 1; i++) {
    if(array[i] < pivot) {
      leftArr.push(array[i])
    } else {
      rightArr.push(array[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log('quickSort', quickSort([-2, -1, -10, 20, 30, -100]));

// mergeSort algorithm

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid, arr.length);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while(leftArr.length && rightArr.length) {
    if(leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log('mergeSort', mergeSort([-2, -1, -10, 20, 30, -100]));

// Cartesian Product
// Big-O = O(mn) since array of different lengths.. if they are of same lengths then it would've been O(n2) because of two for loops
function cartesianProduct(arr1, arr2) {
  let finalArr = [];
  for(let i = 0; i < arr1.length;i++) {
    for(let j = 0; j < arr2.length; j++) {
      finalArr.push([arr1[i], arr2[j]]);
    }
  }
  return finalArr;
}

console.log('cartesianProduct', cartesianProduct([1, 3], [5, 6]));

// Climbing staircase 
function climbingStairCase(n) {
  debugger;
  const noOfWays = [1, 2];
  for(let i = 2; i <=n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

console.log('climbingStairCase', climbingStairCase(2));
console.log('climbingStairCase', climbingStairCase(4));
console.log('climbingStairCase', climbingStairCase(5));
