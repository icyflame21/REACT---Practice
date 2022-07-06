// class LinkListNode{
//     constructor(data) {
//         this.data = data;
//         this.next=null
//     }
// }

// var node1 = new LinkListNode(1)
// var node2 = new LinkListNode(2)
// var node3 = new LinkListNode(3)
// var node4 = new LinkListNode(4)
// var node5 = new LinkListNode(5)
// var node6 = new LinkListNode(6)
// var node7 = new LinkListNode(7)
// node1.next = node2
// node2.next = node3
// node3.next = node4
// node4.next = node5
// node6.next = node7

// var node1= new LinkListNode(stk[0])
// for (var i = 1; i < stk.length; i++){
//     node1.next = new LinkListNode(stk[i])
// }
// var arr = [3, 7, 9, 10, 12], k = 17
// function target(arr, k) {
//     arr.sort((a,b)=>a-b)
//     var l = 0, r = arr.length - 1,count=0
//     while (l < r) {
//         if (arr[l] + arr[r]>=k) {
//             count++;
//             r--
//         }
//         else l++
//     }
//     console.log(count)
// }

// target(arr,k)

// function two_numbers_meet(n1, n2) {
//     var a=n1, b=n2
//         if (n1 < n2) {
//             let temp = a % 10
//             n1 += temp
//             a = parseInt(a / 10)
//         } else if (n2 < n1) {
//             let temp = b % 10
//             n1 += temp
//             b = parseInt(b / 10)
//         } else if (n1 == n2) {
//             console.log("True")
//         } else {
//             console.log('False')
//         }
    
// }

// two_numbers_meet(123,117)

// function intersection_array(arr1, arr2) {
//     let new_arr = arr1.concat(arr2)
//     console.log([...new Set(new_arr)].sort((a,b)=>a-b).join(" "))
// }
// let ar1 = [3,5,8]
// let ar2 = [2,8,9,10,15]
// intersection_array(ar1,ar2)

// function recursive_algo(n){
// 	let arr = [1, 6];
// 	index = n;
// 	for (let i = 2; i < index; i++) {
//   	arr[i] = (arr[i - 1] + 2) * 2 - arr[i - 2];
// }
// 	console.log(arr[index - 1]);	
// }
// recursive_algo(1986738954 % (10 ^ 9 + 7))
function sum() {
    for (var i = 0; i < 10; i++) {
    setTimeout((i) =>{console.log(i)},1000*i,i)
    }
}
sum()
