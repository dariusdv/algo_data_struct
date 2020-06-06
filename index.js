//##################-> Anagrams challenge <-##################

function isAnagram(firstString, secondString) {
	const countFirst = {};
	const countSecond = {};

	if (firstString.length != secondString.length) {
		return false;
	}

	for (let char of firstString) {
		countFirst[char] = (countFirst[char] || 0) + 1;
	}

	for (let char of secondString) {
		countSecond[char] = (countSecond[char] || 0) + 1;
	}

	console.log(countFirst);
	console.log(countSecond);

	for (let key in countFirst) {
		if (!(key in countSecond) || countFirst[key] != countSecond[key]) {
			return false;
		}
	}

	return true;
}

console.log(isAnagram('', ''));
console.log(isAnagram('aaz', 'zza'));
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('awesome', 'awesom'));
console.log(isAnagram('qwerty', 'qeyrwt'));
console.log(isAnagram('texttwisttime', 'timetwisttext'));
