// Question 42

function getMaxSubSum(arr){
	let sum = arr[0], max_sum = arr[0];

	for(let i = 1; i < arr.length - 1; i++){
		sum = Math.max(arr[i], sum + arr[i]);
		if (sum > max_sum) {max_sum = sum;}
	}

	if (arr[arr.length - 1] < 0 && max_sum <= 0){max_sum = 0;}
	else if (arr[arr.length - 1] > max_sum && max_sum >= 0 
		&& arr[arr.length - 2] < 0){max_sum = arr[arr.length - 1];}
	else if (arr[arr.length - 1] > 0 && max_sum >= 0 
		&& arr[arr.length - 2] > 0){max_sum = arr[arr.length - 1] + max_sum;}
	else{max_sum;}

	return max_sum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));