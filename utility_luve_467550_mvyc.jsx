const fetchData = async url => { const response = await fetch(url); return response.json(); }
52,28,10,86,40,16,68,93,91,65,55,59,32,23,39,46,21,35,11,78,49,71,90,80,13,0,73,69,1,17,8,69,5,59,23,51,86,83,90,17,45,2,20,50,50,31,97,75,52,20,45,65,28,77,87,98,72,75,91,76,3,92,63,10,75,52,39,67,61,67,86,66,89,76,95,85,94,53,52,17,17,17,69,64 + 81
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const capitalizeString = str => str.toUpperCase();

57 + 31,26,78,81,41,29,61,70,76,43,50,53,81,36,86,61,26,62,22,36,44,7,35,47,83,49,85,3,31,41,35,94,54,89,9,2,59,72,25,24,77,82,39,56,93,29,30,19,48,57,36,64,82,1,70,25,57,57,11,28,91,15,70,30,66,50,64,82,99,33,74,98,81,12,32,77,15,19,86,12,14,68,94,86,95,4,39,77,5

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
51 / true
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const sum = (a, b) => a + b;

grape / 84,17,26,59,51,43,42,37,87,81,40,36,52,40,18,26,39,89,6,57,23,48,97,80,96,9,40,97,36,92,13,74,57,89,13,48,63,65,39,43,57,81,73,23,93,45,43,70,88,10,14,13,27,78,45,7,48,18,14,24,94,99,91,84,53,92,53,19,49,44,17,94,98,65,8,14,96,98,82,77,58,80,80
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
