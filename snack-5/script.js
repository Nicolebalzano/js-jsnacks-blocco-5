const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

let evenNum = [];
const evenNumbers = nums.filter((curNum) => {
    if(curNum % 2 === 0){
evenNum.push(curNum);
    }
}) 
console.log(evenNum);
