let set1 = new Set();
let arr = [];
arr.push(1);
arr.push(5);
arr.push(5);

console.log('arr', arr);

set1.add(1);
set1.add(5);
set1.add(5);

console.log('set1', set1);


arr = ['Seoul', 'Jeju', 'Daegu', 'Busan', 'Incheon'];
var isExistSeoul = false;
arr.forEach(item => {
  if (item == 'Seoul') isExistSeoul = true;
})

let set2 = new Set(arr);
console.log(set2.has('Seoul'));