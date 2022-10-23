function myAtoi(s: string): number {
  const x = [];
  const y = s.split("");  

  for(let i = 0; i <= s.length; i++){
    if(Number(y[i])){
      x.push(Number(y[i])); 
    }else if(y[i] == "-"){
      x.push(y[i]); 
    }
  }
  
  return Number(x.join(""));
};
console.log(myAtoi("-2ab1c")); 
/*
[x] create new arr x 
[x] turn str into arr 
[x] loop in the str arr 
[x] if i when turned into int equals the type int then push it to the new arr 
[x] return the arr x as an int 
*/
