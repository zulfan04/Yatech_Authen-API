function randomArray(min, max, length) {
	return Array.from(
		{ length },
		() => Math.floor(Math.random() * (max - min + 1)) + min
	);
}

// from example
// const a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
// const m = 4;
// const k = 10;

// randomArray(min, max, length)
const a = randomArray(1, 5, 10);
const m = 2;
const k = 7;

function solution(arr, m, sum) {
	const subarraysWithPairs = [];
	let pairs = 0;

	for (let i = 0; i <= arr.length - m; i++) {
		const subarray = arr.slice(i, i + m);
		outerLoop: for (let j = 0; j < subarray.length - 1; j++) {
			for (let k = j + 1; k < subarray.length; k++) {
				if (subarray[j] + subarray[k] === sum) {
					subarraysWithPairs.push(subarray);
					pairs++;
					break outerLoop;
				}
			}
		}
	}

	return { subarraysWithPairs, pairs };
}

const { subarraysWithPairs, count } = solution(a, m, k);

console.log("========================");
console.log(`From array : ${a}`);

if (subarraysWithPairs.length === 0) {
	console.log(`There are no subarrays with a pair sum of ${k}.`);
} else {
	console.log(`There are ${count} subarrays with a pair sum of ${k}.`);
	console.log("Subarrays with pairs:");
	subarraysWithPairs.forEach((subarray) => {
		console.log(`[${subarray.join(", ")}]`);
	});
}
console.log("========================");
