console.log('arrays');

//Challenge 1
//Write a function that takes an array and an index and prints out value

const indexAndPrint = (arr, index) => {
     console.log(arr[index])
}

const myArray = [1, 2 , 8, 'bee', 'last', 'first']

indexAndPrint(myArray, 2)

// challenge 2
// Write a function that takes an array of something and tells you if the name 'Greg' is in that array

const findGreg = (arr) => {
    const doesIncludeGreg = arr.includes('Greg')
    if (doesIncludeGreg) {
        return 'Greg found'
    } else {
        return 'Greg not found'
    }
}

console.log(findGreg(['a', 'b', 'Greg']));
console.log(findGreg(['a', 'b', 'c']));

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isItAPalindrome = (str) => {
    const arrayFromString = str.split('')
    const reversedArray = arrayFromString.reverse()
    const opposite = reversedArray.join('')

    // const opposite = str.split('').reverse().join('')

    if (str === opposite) {
        return true
    } else {
        return false
    }
}

console.log(isItAPalindrome('cat'));
console.log(isItAPalindrome('racecar'));
console.log(isItAPalindrome('mom'));
console.log(isItAPalindrome('bear'));