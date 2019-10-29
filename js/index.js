// 86a,b
// Given a natural number, how many digits in the number and what their sum

const sumOfDig =()=> {
	let n = document.getElementById('task1').value;
	let nLength = n.toString().length;
  let nSum = n.toString().split('').reduce((sum,dig) => sum + +dig,0);
  document.getElementById('result').innerHTML = `Digits in the number: ${nLength}   Sum of digits is: ${nSum} `;
}


// 330
// Get all perfect numbers less than n;

const perfectNumbers = () => {
	let max = document.getElementById('task2').value || 0;
  let res = [];
  for(let i = 3; i <= max; i++){
    let num = 1;
    for(let j = 2; j <= i / 2; j++){
      if(i % j === 0) num += j;
    }
  if (i == num) res.push(i);
  }
  document.getElementById('result2').innerHTML = res;
}
