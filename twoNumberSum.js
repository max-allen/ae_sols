//easy category 
//my sol

const twoNumberSum = (arr, targetSum) => {
	for(i = 0; i < arr.length; i++) {
		let tempArr = arr.slice(i+1);
		while(tempArr.length) {
			let currentNum = tempArr.shift();
			if((arr[i] + currentNum) === targetSum) {
				let resArr = [arr[i], currentNum];
				return resArr.sort((a,b) => return a-b})
			}
		}

	}

	return [];
}

//ae sol 1 (double for loop)
// O(n^2) time O(1) space

function twoNumberSum(array, targetsum) {
	for (let i = 0; i < array.length-1; i++) {
		const firstNum = array[i];
		for(let j = i+1; j < array.length; j++) {
			const secondNum = array[j];
			if(firstNum + secondNum === targetSum) {
				return [firstNum, secondNum].sort((a,b) => a - b)
			}
		}
	}

	return [];
}

//ae sol 2 (hashtable)
// O(n) time | O(n) space

function twoNumberSum(array, targetsum) {
	const nums = {};
	for (const num of array) {
		const potentialMatch = targetsum - num;
		if (potentialMatch in nums) {
			return [potentialMatch, num].sort((a,b) => a - b)
		} else {
			nums[num] = true;
		}
	}
}


//ae sol 3 (sort then use pointers)
// O(nlog(n)) | O(1) space

function twoNumberSum(array, targetSum) {
	array.sort((a,b) => a-b);
	let left = 0;
	let right = array.length-1;
	while(left < right) {
		const currentSum = array[left] + array[right];
		if (currentSum === targetSum) {
			return [array[left], array[right]];
		} else if (currentSum < targetSum) {
			left++;
		} else if (currentSum > targetSum) {
			right--;
		}
	}
	return [];
}