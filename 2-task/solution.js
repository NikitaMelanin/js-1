//Solution 1
export function fib(n) {
   return ((!Number.isInteger(n)) ? new Error("WrongType") : n <= 1 ? n : fib(n - 1) + fib(n - 2));
};
fib(3);
//Solution 2
// export function fiba(n) {
//    let f1 = 0;
//    let f2 = 1;
//    let sum = 0;
//    if (!Number.isInteger(n))
//       throw new Error("WrongType")
//    else {
//       for (let i; i < n; i++) {
//          sum = f1 + f2;
//          f1 = f2;
//          f2 = sum;
//       };
//    };
//    return sum;
// };
// fib(7);