var truncate = (str, maxlength) => {
	if (str.length <= maxlength){return str;}
	else {
		newStr = str.slice(0,maxlength);
		return newStr + "...";
	}
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to tel…"
console.log(truncate("Hi everyone!", 20)); // = "Hi everyone!"

console.log("What I'd like to tel".length)