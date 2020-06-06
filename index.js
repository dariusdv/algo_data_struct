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

function averagePair(arr, avrg) {
	if (arr.length === 0) return false;
	let left = 0;
	let right = arr.length - 1;

	while (right > left) {
		let average = (arr[right] + arr[left]) / 2;
		if (average == avrg) {
			return true;
		} else if (average > avrg) {
			right--;
		} else {
			left++;
		}
	}
	return false;
}

console.log(averagePair([ 1, 2, 3 ], 2.5));
console.log(averagePair([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8));
console.log(averagePair([ -1, 0, 3, 4, 5, 6 ], 4.1));
console.log(averagePair([], 4));
