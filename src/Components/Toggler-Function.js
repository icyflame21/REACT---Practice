function toggler() {
  let arr = arguments;
  let index = -1;
  return function () {
    index += 1;
    if (index >= arr.length) index = 0;

    return arr[index];
  };
}

const toggle = toggler(1, 2, 3);

// const toggle = toggler("ON","OFF")
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
