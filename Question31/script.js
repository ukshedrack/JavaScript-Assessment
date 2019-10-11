// Searching Algorithm

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

// Part 1

table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

console.log(pockets.pen);
console.log(bed.glasses);

// Part 2

// It is faster to get glasses as head.glasses because glasses is in
// the head object so it only looks it up once. On the contrary, 
// pocket.glasses will have to first look it up in its object. If not 
// found, will then look it up in bed.