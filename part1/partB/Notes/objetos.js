const object1 = {
  name: "John",
  age: 28,
  education: "PhD",
};

const object2 = {
  name: "Fullstack web aplicattion development",
  level: "intermediate",
  size: 6,
};

const object3 = {
  name: {
    first: "Dan",
    last: "Harper",
  },
  grades: [88, 89, 62, 95],
  department: "Stanford University",
};

console.log(object1.name);
const fieldName = "age";
console.log(object1[fieldName]);
object1.address = "Helsinki";
object1["secret number"] = 12341;
console.log(object1);
