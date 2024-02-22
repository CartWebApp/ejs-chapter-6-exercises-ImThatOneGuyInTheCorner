/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)

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
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c