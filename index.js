//############################################################
//##################-> Anagrams Challenge <-##################
//############################################################

// function isAnagram(firstString, secondString) {
// 	const countFirst = {};
// 	const countSecond = {};

// 	if (firstString.length != secondString.length) {
// 		return false;
// 	}

// 	for (let char of firstString) {
// 		countFirst[char] = (countFirst[char] || 0) + 1;
// 	}

// 	for (let char of secondString) {
// 		countSecond[char] = (countSecond[char] || 0) + 1;
// 	}

// 	console.log(countFirst);
// 	console.log(countSecond);

// 	for (let key in countFirst) {
// 		if (!(key in countSecond) || countFirst[key] != countSecond[key]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// console.log(isAnagram('', ''));
// console.log(isAnagram('aaz', 'zza'));
// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));
// console.log(isAnagram('awesome', 'awesom'));
// console.log(isAnagram('qwerty', 'qeyrwt'));
// console.log(isAnagram('texttwisttime', 'timetwisttext'));

//#######################################################################
//##################-> Count Unique Values Challenge <-##################
//#######################################################################

// function countUniqueValues(arr) {
// 	if (arr.length === 0) return 0;
// 	let i = 0;
// 	for (let j = 0; j < arr.length; j++) {
// 		if (arr[i] != arr[j]) {
// 			i++;
// 			arr[i] = arr[j];
// 		}
// 	}
// 	return i + 1;
// }

// console.log(countUniqueValues([ 1, 1, 1, 1, 1, 2 ]));
// console.log(countUniqueValues([ 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13 ]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([ -2, -1, -1, 0, 1 ]));

//###########################################################
//##################-> Frequency Counter <-##################
//###########################################################

// function sameFrequency(first, second) {
// 	let firstStr = first.toString();
// 	let secondStr = second.toString();

// 	if (firstStr.length != secondStr.length) {
// 		return false;
// 	}

// 	let freqFirst = {};
// 	let freqSecond = {};

// 	for (let i = 0; i < firstStr.length; i++) {
// 		freqFirst[firstStr[i]] = (freqFirst[firstStr[i]] || 0) + 1;
// 	}

// 	for (let j = 0; j < secondStr.length; j++) {
// 		if (freqFirst.hasOwnProperty(secondStr[j]) && freqFirst[secondStr[j]] > 0) {
// 			freqFirst[secondStr[j]]--;
// 		} else {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

//##############################################################
//##################-> Are There Duplicates <-##################
//##############################################################

// function areThereDuplicates(...args) {
// 	args.sort((a, b) => a > b);

// 	let start = 0;
// 	let next = 1;

// 	while (next < args.length) {
// 		if (args[start] === args[next]) {
// 			return true;
// 		}
// 		start++;
// 		next++;
// 	}

// 	return false;
// }

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates('a', 'a', 'c', 'a'));

//######################################################
//##################-> Average Pair <-##################
//######################################################

// function averagePair(arr, avrg) {
// 	if (arr.length === 0) return false;
// 	let left = 0;
// 	let right = arr.length - 1;

// 	while (right > left) {
// 		let average = (arr[right] + arr[left]) / 2;
// 		if (average == avrg) {
// 			return true;
// 		} else if (average > avrg) {
// 			right--;
// 		} else {
// 			left++;
// 		}
// 	}
// 	return false;
// }

// console.log(averagePair([ 1, 2, 3 ], 2.5));
// console.log(averagePair([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8));
// console.log(averagePair([ -1, 0, 3, 4, 5, 6 ], 4.1));
// console.log(averagePair([], 4));

//########################################################
//##################-> Is Subsequence <-##################
//########################################################

// function isSubsequence(firstStr, secondStr) {
// 	let ptrFirst = 0;
// 	let ptrSecond = 0;

// 	while (ptrSecond < secondStr.length) {
// 		if (firstStr[ptrFirst] === secondStr[ptrSecond]) {
// 			ptrFirst++;
// 			ptrSecond++;
// 		} else {
// 			ptrSecond++;
// 		}
// 		if (ptrFirst === firstStr.length) return true;
// 	}

// 	return false;
// }

// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'acb'));

//##########################################################
//##################-> Max Subarray Sum <-##################
//##########################################################

// function maxSubarraySum(arr, num) {
// 	if (arr.length < num) return null;

// 	let total = 0;
// 	for (let elem = 0; elem < num; elem++) {
// 		total += arr[elem];
// 	}
// 	let currentTotal = total;
// 	for (let elem = num; elem < arr.length; elem++) {
// 		currentTotal += arr[elem] - arr[elem - num];
// 		total = Math.max(total, currentTotal);
// 	}
// 	return total;
// }

// console.log(maxSubarraySum([ 100, 200, 300, 400 ], 2));
// console.log(maxSubarraySum([ 1, 4, 2, 10, 23, 3, 1, 0, 20 ], 4));
// console.log(maxSubarraySum([ -3, 4, 0, -2, 6, -1 ], 2));
// console.log(maxSubarraySum([ 3, -2, 7, -4, 1, -1, 4, -2, 1 ], 2));
// console.log(maxSubarraySum([ 2, 3 ], 3));

//##########################################################
//##################-> Min Subarray Sum <-##################
//##########################################################

// function minSubArrayLen(arr, int) {
// 	let sum = 0;
// 	let start = 0;
// 	let end = 0;
// 	let minLen = Infinity;

// 	while (start < arr.length) {
// 		if (sum < int && end < arr.length) {
// 			sum += arr[end];
// 			end++;
// 		} else if (sum >= int) {
// 			minLen = Math.min(minLen, end - start);
// 			sum -= arr[start];
// 			start++;
// 		} else {
// 			break;
// 		}
// 	}

// 	return minLen === Infinity ? 0 : minLen;
// }

// console.log(minSubArrayLen([ 2, 3, 1, 2, 4, 3 ], 7));
// console.log(minSubArrayLen([ 2, 1, 6, 5, 4 ], 9));
// console.log(minSubArrayLen([ 3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19 ], 52));
// console.log(minSubArrayLen([ 1, 4, 16, 22, 5, 7, 8, 9, 10 ], 39));
// console.log(minSubArrayLen([ 1, 4, 16, 22, 5, 7, 8, 9, 10 ], 55));
// console.log(minSubArrayLen([ 4, 3, 3, 8, 1, 2, 3 ], 11));
// console.log(minSubArrayLen([ 1, 4, 16, 22, 5, 7, 8, 9, 10 ], 95));

//###########################################################
//##################-> Longest Substrnig <-##################
//###########################################################

// function findLongestSubstring(str) {
// 	let longest = 0;
// 	let seen = {};
// 	let start = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i];
// 		if (seen[char]) {
// 			start = Math.max(start, seen[char]);
// 		}
// 		longest = Math.max(longest, i - start + 1);
// 		seen[char] = i + 1;
// 	}
// 	return longest;
// }

// console.log(findLongestSubstring(''));
// console.log(findLongestSubstring('rithmschool'));
// console.log(findLongestSubstring('thisisawesome'));
// console.log(findLongestSubstring('thecatinthehat'));
// console.log(findLongestSubstring('bbbbbb'));
// console.log(findLongestSubstring('longestsubstring'));
// console.log(findLongestSubstring('thisishowwedoit'));

//#######################################################
//##################-> Binary Search <-##################
//#######################################################

// function binarySearch(arr, num) {
// 	if (arr.length === 0) return -1;
// 	let left = 0;
// 	let right = arr.length - 1;
// 	let middle = Math.floor((right + left) / 2);

// 	while (arr[middle] !== num) {
// 		if (middle === right && middle === left) {
// 			return -1;
// 		} else if (arr[middle] > num) {
// 			right = middle - 1;
// 		} else {
// 			left = middle + 1;
// 		}
// 		middle = Math.floor((right + left) / 2);
// 	}

// 	return middle;
// }

// console.log(binarySearch([ 1, 2, 3, 4, 5 ], 2));
// console.log(binarySearch([ 1, 2, 3, 4, 5 ], 3));
// console.log(binarySearch([ 1, 2, 3, 4, 5 ], 5));
// console.log(binarySearch([ 1, 2, 3, 4, 5 ], 6));
// console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 10));
// console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 95));
// console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 100));

//##########################################################
//##################-> Recursion Part 1 <-##################
//##########################################################

// function reverse(str) {
// 	if (str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse('awesome'));
// console.log(reverse('rithmschool'));

// function isPalindrome(str) {
// 	if (str.length === 1) return true;
// 	if (str.length === 2) return str[0] === str[1];
// 	if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
// 	return false;
// }

// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar')); // false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false

// function someRecursive(array, callback) {
// 	if (array.length === 0) return false;
// 	if (callback(array[array.length - 1])) return true;
// 	return someRecursive(array.slice(0, -1), callback);
// }

// const isOdd = (val) => val % 2 !== 0;

// console.log(someRecursive([ 1, 2, 3, 4 ], isOdd)); // true
// console.log(someRecursive([ 4, 6, 8, 9 ], isOdd)); // true
// console.log(someRecursive([ 4, 6, 8 ], isOdd)); // false
// console.log(someRecursive([ 4, 6, 8 ], (val) => val > 10)); // false

// function flatten(oldArr) {
// 	var newArr = [];
// 	for (var i = 0; i < oldArr.length; i++) {
// 		if (Array.isArray(oldArr[i])) {
// 			newArr = newArr.concat(flatten(oldArr[i]));
// 		} else {
// 			newArr.push(oldArr[i]);
// 		}
// 	}
// 	return newArr;
// }

// console.log(flatten([ 1, 2, 3, [ 4, 5 ] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([ 1, [ 2, [ 3, 4 ], [ [ 5 ] ] ] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([ [ 1 ], [ 2 ], [ 3 ] ])); // [1, 2, 3]
// console.log(flatten([ [ [ [ 1 ], [ [ [ 2 ] ] ], [ [ [ [ [ [ [ 3 ] ] ] ] ] ] ] ] ] ])); // [1, 2, 3]

//##########################################################
//##################-> Recursion Part 2 <-##################
//##########################################################

function capitalizeWords(arr) {
	if (arr.length === 1) {
		return [ arr[0].toUpperCase() ];
	}
	let newArr = capitalizeWords(arr.slice(0, -1));
	newArr.push(arr.slice(arr.length - 1)[0].toUpperCase());
	return newArr;
}

let words = [ 'i', 'am', 'learning', 'recursion' ];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

function nestedEvenSum(obj, sum = 0) {
	for (var key in obj) {
		if (typeof obj[key] === 'object') {
			sum += nestedEvenSum(obj[key]);
		} else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			sum += obj[key];
		}
	}
	return sum;
}

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup'
		}
	}
};

var obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

function capitalizeFirst(array) {
	if (array.length === 1) {
		return [ array[0][0].toUpperCase() + array[0].substr(1) ];
	}
	const res = capitalizeFirst(array.slice(0, -1));
	const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
	res.push(string);
	return res;
}

console.log(capitalizeFirst([ 'car', 'taco', 'banana' ])); // ['Car','Taco','Banana'];

function stringifyNumbers(obj) {
	var newObj = {};
	for (var key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

let obj = {
	num: 1,
	three: 3,
	test: [ 1, 2, 3, 4 ],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66
		}
	}
};

console.log(stringifyNumbers(obj));

function collectStrings(obj) {
	var stringsArr = [];

	function gatherStrings(o) {
		function gatherStringsLvl2(theObj) {
			for (var key in theObj) {
				if (typeof theObj[key] === 'string') {
					stringsArr.push(theObj[key]);
				} else if (typeof theObj[key] === 'object') {
					return gatherStringsLvl2(theObj[key]);
				}
			}
		}

		gatherStringsLvl2(o);
	}

	gatherStrings(obj);

	return stringsArr;
}

const obj3 = {
	stuff: 'foo',
	data: {
		val: {
			thing: {
				info: 'bar',
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: 'baz'
					}
				}
			}
		}
	}
};

console.log(collectStrings(obj3)); // ["foo", "bar", "baz

function collectStrings2(obj) {
	var stringsArr = [];
	for (var key in obj) {
		if (typeof obj[key] === 'string') {
			stringsArr.push(obj[key]);
		} else if (typeof obj[key] === 'object') {
			stringsArr = stringsArr.concat(collectStrings2(obj[key]));
		}
	}

	return stringsArr;
}

console.log(collectStrings2(obj3)); // ["foo", "bar", "baz
