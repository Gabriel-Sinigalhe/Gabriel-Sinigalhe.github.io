const reduz = (aux, auxNow) => aux + auxNow;
const product = (auxP,auxNowP ) => auxP * auxNowP  ; 
const sum = [1,2,3];const sum1 = [2,2,2];const sum2 = [1,2,3,4,5,6];
console.log("Sum: ", sumAux.reduce(reduz));console.log("Sum: ",sum1.reduce(reduz));console.log("Sum: ",sum2.reduce(reduz));

function sumOdds (oddSumAux){ let oddHelper = [];oddHelper = oddSumAux.filter(function(odd){return odd % 2 != 0;});
if(oddHelper.length!=0)return oddHelper.reduce(reduz) 
else return 0;}

console.log("sumOdds: ",sumOdds(sum));console.log("sumOdds: ",sumOdds(sum1));console.log("sumOdds: ",sumOdds(sum2));

console.log("Product: ",sum.reduce(product));console.log("Product: ",sum1.reduce(product));console.log("Product: ",sum2.reduce(product));
