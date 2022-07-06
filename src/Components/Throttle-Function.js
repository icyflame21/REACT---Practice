const myThrottle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - last > delay) {
            last = now
            return fn(...args);
        };
    };
}
const print = (name) => {
  console.log(name);
};

const th = myThrottle(print, 100);
for (var i = 0; i < 1000000; i++){
    th('Biswa')
}


