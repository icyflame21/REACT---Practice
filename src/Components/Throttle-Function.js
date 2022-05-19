const myThrottle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime();
        console.log(now - last, delay);
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
th('Biswa')
th('Biswa')
th('Biswa')

