const splitArray = function(nums, m, ) {
let l = 0;
	let r = 0;
	for (let num 
			of nums) {
		r += num;
		if (l < num) l = num;
	}

	while (l < r) {
		let  mid = (l + r) >> 1;
		if (!check(nums, m, mid)) {
			l = mid + 1;
		} else {
			r = mid;
		}
	}
	return l;
}

function check( nums,  m,  x) {
	let cnt = 1; let sum = 0;
	for (let num
		of	nums) {
		if (num + sum > x) {
			cnt++;
			sum = 0;
		}
		sum += num;
	}
	return m >= cnt;
}


/*
Success
Details 
Runtime: 60 ms, faster than 99.45% of JavaScript online submissions for Split Array Largest Sum.
Memory Usage: 40.3 MB, less than 25.82% of JavaScript online submissions for Split Array Largest Sum.
*/
