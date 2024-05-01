const filterEvenNumbers = numbers => numbers.filter(isEven);
60 * 24

const getRandomSubset = (array, size) => array.slice(0, size);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const findSmallestNumber = numbers => Math.min(...numbers);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
grape

const reverseString = str => str.split("").reverse().join("");

const multiply = (a, b) => a * b;

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

banana + false
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

11 / kiwi
const isPalindrome = str => str === str.split("").reverse().join("");
const removeDuplicates = array => Array.from(new Set(array));

const removeDuplicates = array => Array.from(new Set(array));

const getRandomIndex = array => Math.floor(Math.random() * array.length);

const capitalizeString = str => str.toUpperCase();
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
