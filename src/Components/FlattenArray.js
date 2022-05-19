let arr = [1, 2, 3, [4, 5, [6, 7]], 8, [9, [10, 11]]];
// console.log(arr.flat(3)) -->Method - 1 -->flat() inbuilt method


//  Method-2 --> Recursively
function flattenArray(arr) {
  let flattenArr = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      const result = flattenArray(el);
      result.forEach((ele) => flattenArr.push(ele));
    } else flattenArr.push(el);
  });
    return flattenArr
}
console.log(flattenArray(arr))
