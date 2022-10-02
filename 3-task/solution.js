export function palindrome(s) {
   let s1;
   let s2;
   //let midle;
   //debugger;
   if (typeof s !== "string")
      throw new Error(`WrongType`);
   if (s === "" || s[2] === undefined || (s[0] !== s[s.length - 1]))
      return (false);
   
   if (s.length / 2 === 0) {
      s1 = s.substring(0, s.length/2);
      s2 = s.substring((s.length/2), s.length);
   } else {
      //midle = s[Math.ceil(s.length/2) - 1];
      s1 = s.substring(0, Math.round(s.length/2) - 1);
      s2 = s.substring(s1.length + 1, s.length);
      //s = s1 + midle + s2;
   }
   for (let i = 0; i < s1.length - 1; i++){
      if (s1[i] == s2[s1.length - 1 - i])
      continue
      return(false);
   }

   return (true);
};

palindrome(`3`)

export function pali4 (str) {
   return str.split("").reverse().join("") == str
}
pali4(`3`)