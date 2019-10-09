//Finding Minimum of Two numbers
function min(a, b) {
	if (a - b < 0) {return a;}
	else if (a - b == 0) {return a;}
	else {return b;}
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));