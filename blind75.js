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

// Maximum subarray
function maximumSubArray(arr) {
  let currentMax = arr[0];
  let globalMax = arr[0];
  for(let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    globalMax = Math.max(currentMax, globalMax);
  }

  return globalMax;
}
console.log('maximumSubArray', maximumSubArray([-2, -3, 8, 0, -2, 9, 7, -10]));

// group anagrams - solution 1
function groupAnagrams(anagrams) {
  let map = new Map();
  for (let str of anagrams) {
    let sortedStr = str.split('').sort().join('');
    if(!map.get(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }

  return Array.from(map.values());
}

console.log('groupAnagrams', groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// ["eat","tea","tan","ate","nat","bat"]

// group anagrams - solution 2
function anagramGroup(anagrams) {
  let sortedArray = anagrams.map(anagram => anagram.split('').sort().join(''));
  let map = {};
  for(let i = 0; i < sortedArray.length; i++) {
    if(!map[sortedArray[i]]) {
      map[sortedArray[i]] = [anagrams[i]]
    } else {
      map[sortedArray[i]].push(anagrams[i])
    }
  }

  return Object.values(map);
}

console.log('anagramGroup', anagramGroup(["eat","tea","tan","ate","nat","bat"]))

// Same tree - same structure and node values
function isSameTree(p, q) {
  if(p === null && q === null) return true;
  if(p === null || q === null) return false;
  if(p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// console.log('isSameTree', isSameTree([1, 2, 3], [1, 2, 3]))

// detect cycle in Linked list
function isCycle(head) {

  if(!head) return false;
  let fast = head;
  let slow = head;
  while(fast) {
    if(!fast.next) return false
    fast = fast.next.next;
    slow = slow.next;

    if(fast === slow) return true;
  }

  return false;
}

// Valid Parentheses 
function isValidParenthesesString(str) {
  if(str.length === 0) return false;

  let stack = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    } else {
      let char = stack.pop();
      if(char === '(' && str[i] !== ')') return false;
      if(char === '{' && str[i] !== '}') return false;
      if(char === '[' && str[i] !== ']') return false;
      if(!char) return false;
    }
  }

  return stack.length === 0;
}

console.log('isValidParenthesesString', isValidParenthesesString('(){}'));
console.log('isValidParenthesesString', isValidParenthesesString('({}'));
console.log('isValidParenthesesString', isValidParenthesesString('(){]'))

// isValidPalindrome
function isValidPalindrome(str) {
  let updatedString = cleanStr(str);
  let left = 0;
  let right = updatedString.length - 1;

  while(left < right) {
    if(updatedString[left] !== updatedString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function cleanStr(str) {
  let char = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let finalStr = '';
  for(let i = 0; i < str.length; i++) {
    if(char.indexOf(str[i].toLowerCase()) !== -1) {
      finalStr += str[i].toLowerCase();
    }
  }
  return finalStr;
}

console.log('isValidPalindrome', 
isValidPalindrome('A man, a plan, a canal: Panama'));
console.log('isValidPalindrome', isValidPalindrome('race a car'));

// valid anagram
function isValidAnagram(str1, str2) {
  if(str1.length === 0 || str2.length ===0) {
    return false;
  }

  let frequencyMap = {};
  for(let key in str1) {
    frequencyMap[key] = (frequencyMap[key] || 0) + 1;
  }

  for(let key in str2) {
    if(!frequencyMap[key]) {
      return false;
    }
    frequencyMap[key]--;
  }

  return Object.values(frequencyMap).every(frequency => frequency === 0);
}

console.log('isValidAnagram', isValidAnagram('eat', 'ate'));
console.log('isValidAnagram', isValidAnagram('pen', 'pencil'));

// longest palindrome in a string
function longestPalindrome(str) {

  let palindromeStr = '';
  if(str.length === 0) {
    return false;
  }

  function isPal(str, left, right) {
    while(left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }

    return str.slice(left + 1, right);
  }

  for(let i = 0; i < str.length; i++) {
    let oddStr = isPal(str, i, i);
    let evenStr = isPal(str, i, i+1);

    let longestStr = oddStr.length > evenStr.length ? oddStr : evenStr;
    if(palindromeStr.length < longestStr.length) {
      palindromeStr = longestStr;
    }
  }

  return palindromeStr;
}

console.log('longestPalindrome', longestPalindrome('abbbd'));
console.log('longestPalindrome', longestPalindrome('abbbdbdb'));

// climbing stairs
function climbingStairs(n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for(let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
console.log('climbingStairs', climbingStairs(1));
console.log('climbingStairs', climbingStairs(4));
console.log('climbingStairs', climbingStairs(6));

// longest consecutive sequence
function longestConsecutiveSequence(nums) {
  let set = new Set(nums);
  let streak = 0;

  for(let num of set) {
    if(set.has(num - 1)) continue;

    let currentStreak = 1;
    while(set.has(num + 1)) {
      currentStreak++;
      num++;
    }

    streak = Math.max(streak, currentStreak);
  }

  return streak;
}

console.log('longestConsecutiveSequence', longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log('longestConsecutiveSequence', longestConsecutiveSequence([0, 3, 4, 7, 9, 0, 2, 1, 5, 6, 8]));

// reverse linked list
function reverseLinkedList(head) {
  let prev = null;
  while(head) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }

  return prev;
}