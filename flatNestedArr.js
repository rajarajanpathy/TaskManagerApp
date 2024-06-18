function flatArray(arr) {
	let newArr = [];
	for(const item of arr) {
  	if(Array.isArray(item)){
    	newArr = newArr.concat(flatArray(item));
    } else {
    	newArr = newArr.concat(item);
    }
  }
  return newArr;
}
const input = [1,[2],[3,[4,5], [6],7], 8,[9,20]];
const result = flatArray(input);
console.log(result);
