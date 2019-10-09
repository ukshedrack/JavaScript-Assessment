var begin = prompt("Who's there?");
begin = begin.toLowerCase();

if (begin == null) {
	alert("Cancelled");
}

else if (begin == "admin"){
	let access = prompt("Enter password");

	if (access == null) {
		alert("Cancelled");
	}
	else if (access == "TheMaster") {
		alert("Welcome!");
	}
	else {alert("Wrong password");}
}

else {alert("I don't know you!");}