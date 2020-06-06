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

function isSubsequence(firstStr, secondStr) {
	let ptrFirst = 0;
	let ptrSecond = 0;

	while (ptrSecond < secondStr.length) {
		if (firstStr[ptrFirst] === secondStr[ptrSecond]) {
			ptrFirst++;
			ptrSecond++;
		} else {
			ptrSecond++;
		}
		if (ptrFirst === firstStr.length) return true;
	}

	return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));

//##########################################################
//##################-> Max Subarray Sum <-##################
//##########################################################

function maxSubarraySum(arr, num) {
	if (arr.length < num) return null;

	let total = 0;
	for (let elem = 0; elem < num; elem++) {
		total += arr[elem];
	}
	let currentTotal = total;
	for (let elem = num; elem < arr.length; elem++) {
		currentTotal += arr[elem] - arr[elem - num];
		total = Math.max(total, currentTotal);
	}
	return total;
}

console.log(maxSubarraySum([ 100, 200, 300, 400 ], 2));
console.log(maxSubarraySum([ 1, 4, 2, 10, 23, 3, 1, 0, 20 ], 4));
console.log(maxSubarraySum([ -3, 4, 0, -2, 6, -1 ], 2));
console.log(maxSubarraySum([ 3, -2, 7, -4, 1, -1, 4, -2, 1 ], 2));
console.log(maxSubarraySum([ 2, 3 ], 3));

//##########################################################
//##################-> Min Subarray Sum <-##################
//##########################################################

function minSubArrayLen(arr, int) {
	let sum = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < arr.length) {
		if (sum < int && end < arr.length) {
			sum += arr[end];
			end++;
		} else if (sum >= int) {
			minLen = Math.min(minLen, end - start);
			sum -= arr[start];
			start++;
		} else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([ 2, 3, 1, 2, 4, 3 ], 7));
console.log(minSubArrayLen([ 2, 1, 6, 5, 4 ], 9));
console.log(minSubArrayLen([ 3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19 ], 52));
console.log(minSubArrayLen([ 1, 4, 16, 22, 5, 7, 8, 9, 10 ], 39));
console.log(minSubArrayLen([ 1, 4, 16, 22, 5, 7, 8, 9, 10 ], 55));
console.log(minSubArrayLen([ 4, 3, 3, 8, 1, 2, 3 ], 11));
console.log(minSubArrayLen([ 1, 4, 16, 22, 5, 7, 8, 9, 10 ], 95));
