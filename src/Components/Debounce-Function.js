const myDebounce = (fn, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn.apply(context, args), delay);
  };
};
const print = (name) => {
  console.log(name);
};

const th = myDebounce(print, 3000);
th("biswa");
th("Biswa");

 