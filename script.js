const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Reza" }
];

const result = users.find(user => user.id === 2);
console.log(result); // { id: 2, name: "Sara" }




const numbers = [1, 3, 5, 8];

const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true (چون 8 زوجه)




const scores = [90, 85, 88, 92];

const allPassed = scores.every(score => score >= 80);
console.log(allPassed); // true
