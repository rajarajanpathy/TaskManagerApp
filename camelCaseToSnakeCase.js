const str = "MyNameIsMathiRajan";

let start = 0;
let end = 0;
let upperLetters = 0;
let result = [];
for(let i = 0;i <= str.length;i++) {
debugger;
	if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {

		upperLetters = upperLetters + 1;
		if(upperLetters > 1) {
    	end = i
      result.push(str.substring(start, end));
    }
    start = i;
  } else  {
  	continue;
  } 
}
result.push(str.substr(start));
console.log(result.join('_').toLowerCase())
