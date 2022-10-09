 export function range (start, end) {
   if (!Number.isInteger(start,end)) {
      throw (`WrongArgumentType`)
   }
   let arr = [];
   for (let i = start; i <= end; i++) {
      arr.push(i);
   }
   return arr;
}

export function sum (arr) {
   let total = 0;
   if (arr === []) {
      throw (`WrongArgumentType`)
   }
   for (let i = 0; i < arr.length; i++) {
      total += arr[i];
   } debugger
   return total;
}
sum(range(1,11))

// function rangeSum (first, two) {
//    return Array.from({length:two-first + 1}, (first, two) => two+1).reduce((sum, current) => sum + current);
// }
// range(1,11)
