function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = '';

  for (let i = 0; i < 7; i++) {
    while (num >= obj[i][1]) {
      result += obj[i][0]; 
      num -= obj[i][1]; 
    }
  }

  return result;

}




// do not edit below this line
module.exports = convertToRoman
