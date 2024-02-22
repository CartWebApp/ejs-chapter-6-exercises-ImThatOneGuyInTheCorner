/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

class Group {
  constructor(arr = []) {
    this.arr = arr;
  }
  add(val) {
    if(!this.arr.includes(val)) {
      this.arr.push(val);
    }
    return this.arr;
  }
  delete(val) {
    let i = this.arr.indexOf(val);
    let a = this.arr.slice(0, i);
    let b = this.arr.slice(i + 1);
    this.arr = a;
    this.arr = this.arr.concat(a, b);
    return this.arr;
  }
  has(val) {
    return(this.arr.includes(val));
  }
  static from(fArr) {
    let arr = [];
    for(let j = fArr[0]; j <= fArr[1]; j++) {
      arr.push(j);
    }
    return(new Group(arr));
  }
}

// Tests:
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

