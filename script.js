// Reverse sring function: method 1

function ReverseString(str) {
  var ReverseStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    ReverseStr += str[i];
  }
  return ReverseStr;
}

var str1 = "Hello World !";
var ReverseStr1 = ReverseString(str1);
console.log(ReverseStr1);

// Reverse string function: method 2

function ReverseString2(str) {
  var ReverseStr2 = "";
  var arr = ReverseStr2.split("");
  arr.reverse();
  var ReverseStr2 = arr.join("");
  return ReverseStr2;
}

var str2 = "Bonjour à tous !";
var ReverseStr2 = ReverseString(str2);
console.log(ReverseStr2);

// Count Characters function:

function CountCaracters(str3) {
  var count1 = 0;
  for (i = 1; i <= str3.length; i++) {
    count1 += 1;
  }
  return count1;
}

var str3 = "Bonjour à tous !";
var count1 = CountCaracters(str3);
console.log(count1);

// Capitalize Words function:

function CapitalizeWord(sentence) {
  var words = sentence.toLowerCase().split(" ");

  for (i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

var sentence = "jAvascRipt esT le meillEur lanGague de proGraMmation !";
var CapitalizedSentence = CapitalizeWord(sentence);
console.log(CapitalizedSentence);

// Maximum and Minimum functions:

function Max(array) {
  var max = array[0];

  for (i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function Min(array) {
  var min = array[0];
  for (i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

var array = [1254, 52, 2, -956, 0, 6585784];
var max = Max(array);
var min = Min(array);
console.log("The maximum of the array [" + array + "] is : " + max);
console.log("The minimum of the array [" + array + "] is : " + min);

// Sum of Array function:

function SumArray(arr1) {
  var sum = 0;
  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
}

var sum = SumArray(array);
console.log("The sum of the array [" + array + "] is : " + sum);

// Filter Array function :

function FilterArray(arr2, condition) {
  var FilteredArray = [];
  for (var i = 0; i < arr2.length; i++) {
    if (condition(arr2[i])) {
      FilteredArray.push(arr2[i]);
    }
  }
  return FilteredArray;
}

/* Filter even numbers */
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = FilterArray(arr2, function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

// Factorial function :

function Factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "Invalid input. Please provide a non-negative integer.";
  } else if (n === 0) {
    return 1;
  }
  var factorial_n = 1;
  for (i = 1; i <= n; i++) {
    factorial_n *= i;
  }
  return factorial_n;
}

var n1 = 5;
var factorial_n = Factorial(n1);
console.log(factorial_n);

// Prime Number Check function :

function primeNumber(x) {
  var x;
  if (x === 2) {
    return "The number 2 is prime";
  }
  for (i = 2; i < x; i++) {
    if (x % i === 0) {
      return "The number " + x + " is not prime";
    }
  }
  return "The number " + x + " is prime";
}

var x = 27;
var isprime = primeNumber(x);
console.log(isprime);

//Fibonacci Sequence function:

function generateFibonacci(z) {
  // Check if the input is a valid positive integer
  if (!Number.isInteger(z) || z <= 0) {
    return "Invalid input. Please provide a positive integer.";
  }

  const fibSequence = [];

  // Base cases for the first two terms
  if (z >= 1) {
    fibSequence.push(0);
  }
  if (z >= 2) {
    fibSequence.push(1);
  }

  // Generate the remaining terms of the sequence
  for (let i = 2; i < z; i++) {
    const nextTerm = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextTerm);
  }

  return fibSequence;
}
var z = 9;
var fib = generateFibonacci(z);
console.log(fib);
