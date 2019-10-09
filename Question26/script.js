var salaries = {
  	John: 100,
  	Ann: 160,
  	Pete: 130
};

var salaryArr = Object.values(salaries);

console.log(salaryArr.reduce((a, b) => a + b, 0));

