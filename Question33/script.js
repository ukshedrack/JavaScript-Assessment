function sum(){

	while (true){
		let a = prompt("Enter a number");
		let b = prompt("Enter another number");

		if (!a || !b){return "Please input only numbers e.g. 1, -5, 0.";}
		else if (isNaN(Number(a)) == true || isNaN(Number(b)) == true){
			return "Please input only numbers e.g. 1, -5, 0.";
		}
		else{return Number(a) + Number(b);}
	}
	
}

console.log(sum());