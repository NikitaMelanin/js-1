export function add(x, y) {
   if (!Number.isInteger(x, y) && (x,y) === NaN && (x,y) === Infinity){
      throw new Error("WrongType");
   } else {
      return x+y;
   }
};
add(1,2);

export function addx(x, y) {
      return (!Number.isInteger(x, y) && (x,y) === NaN && (x,y) === Infinity) ? new Error("WrongType") : x+y  ;
};
addx(1,2);