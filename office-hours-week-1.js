// Create a function that returns the highest number
var numbers = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// declare a function that takes in an array of Numbers
const highestNumber = (arr) => {
  // create an anchor variable that is a number to compare all other numbers to
  let highestNum = arr[0]
  // loop through the array and compare each index value to the anchor number
  for(let i = 0; i < arr.length; i++) {
    // if arr[i] is greater than the anchor, reassign the anchor to the current value
    if(arr[i] > highestNum) {
      highestNum = arr[i]
    }
  }
  // return the anchor
  return highestNum
}

console.log(highestNumber(numbers));

// Write a function that takes in an array of numbers and letters and returns a string with only the letters.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// declare a function
const createWords = (arr) => {
  // create an empty array to house all of my letters (strings)
  let letterArr = []
  // loop through and find the strings, then push those string to the new array
  for(let i = 0; i < 5; i++) {
    if(typeof arr[i] === "string") {
      letterArr.push(arr[i])
    }
  }
  // return the new array, joined
  return letterArr.join("")
}

console.log(createWords(comboArr));

// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message
