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

function countUniqueValues(arr) {
	let i = 0;
	for (let j = 0; j < arr.length; j++) {
		if (arr[i] != arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return !arr.length ? i : i + 1;
}

console.log(countUniqueValues([ 1, 1, 1, 1, 1, 2 ]));
console.log(countUniqueValues([ 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13 ]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([ -2, -1, -1, 0, 1 ]));
