export function unionLog(type, msg) {
   switch(type) {
      case `log`: 
         console.log(msg);
         break
      case `warn`:
         console.warn(msg);
         break
      case `error`:
         console.error(msg);
         break
      case ``:
         throw (`WrongType`);
   }
};
unionLog(`log`,`hello,rtf`);