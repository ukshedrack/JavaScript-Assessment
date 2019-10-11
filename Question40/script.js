// Question 40

// 1
var styles = ["Jazz", "Blues"];
console.log(styles);
// 2
styles.push("Rock-n-Roll");
console.log(styles);
// 3
let middle = Math.floor(styles.length / 2);
styles[middle] = "Classics";
console.log(styles);
// 4
styles = styles.slice(1);
console.log(styles);
// 5
styles.unshift("Reggae");
styles.unshift("Rap");
console.log(styles);