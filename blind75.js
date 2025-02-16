// Add your code here
// Two Sum
function addSum(numbers, target) {
    const map = new Map();
  
    for(let i=0; i < numbers.length; i++) {
      const complement = target - numbers[i];
      if(map.has(complement)) {
        return [map.get(complement), i]
      }
      map.set(numbers[i], i);
    }
  
    return [];
  }
  
  console.log('sum', addSum([3, 4, 7, 9], 11));
  
  // Best time to buy and sell stock - maxProfit
  function maxProfit(stockPrices) {
    let minPrice = Infinity;
    let maxProfit = 0;
  
    for(const price of stockPrices) {
      if(price < minPrice) {
        minPrice = price;
      } else {
        maxProfit = Math.max(maxProfit, price - minPrice);
      }
    }
  
    return maxProfit;
  }
  
  console.log('maxProfit', maxProfit([1, 7, 2, 10, 9, 8]));
  
  // Find Minimum in rotated sorted array
  function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    debugger
    while(left < right) {
      let mid = Math.floor((left + right) / 2);
      // If mid element is greater than rightmost element, min is in the right half
      if(nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid; // Min could be mid itself
      }
    }
  
    return nums[left]; // Left will point to the minimum element
  }
  
  console.log('findMin', findMin([3, 4, 7, 9, 11, 1]));
  
  // Contains Duplicate in array
  function containsDuplicate(nums) {
    const set = new Set(nums);
  
    return set.size !== nums.length;
  }
  
  console.log('containsDuplicate' , containsDuplicate([1, 2, 3 ,5, 2]))
  
  // max water in container
  function maxWaterArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;
  
    while(left < right) {
      let width = right - left;
      let minHeight = Math.min(heights[left], heights[right]);
      maxArea = Math.max(maxArea, minHeight * width);
  
      if(heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxArea;
  } 
  
  console.log('maxWaterArea', maxWaterArea([4, 6, 2, 9, 8]));
  
  // Product of Array except itself
  function productOfArray(numbers) {
    const n = numbers.length;
    let output = new Array(n).fill(1);
  
    let leftProduct = 1;
    for(let i = 0; i < n; i++) {
      output[i] *= leftProduct;
      leftProduct *= numbers[i];
    }
  
    let rightProduct = 1;
    for(let i = n - 1; i >=0; i--) {
      output[i] *= rightProduct;
      rightProduct *= numbers[i];
    }
  
    return output;
  }
  
  console.log('productOfArray', productOfArray([3, 5, 9, 10]));
  
  // identify number of repeating characters 
  function repeatingCharactersCount(characters) {
    let frequency = {};
    characters.forEach(char => {
      frequency[char] = (frequency[char] || 0) + 1;
    });
  
    let repeatedCount = 0;
    for(let key in frequency) {
      if(frequency[key] > 1) {
        repeatedCount++;
        console.log(`repeatedCount: ${key}: ${frequency[key]} times`)
      } else {
        console.log(`non repeatedCount: ${key}: ${frequency[key]} time`)
      }
    }
  
    return repeatedCount;
  }
  
  console.log('repeated characters count', repeatingCharactersCount(['a', 'b', 'c', 'a', 'a', 'c']))
  console.log('repeated characters count', repeatingCharactersCount([4, 2, 4, 5, 2, 3, 1]));