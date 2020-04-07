//Global Scope
//Local Scope - Function Scope, Block Scope

// var a = 10;

//let, const

if (true) {
  let a = 20;
  const b = 30;
  console.log('2 - ', a);
}

// console.log('3 - ', a);

function test() {
  var b = 30;
  console.log('4 - ', a);
  console.log('5 - ', b);
}

// console.log('6 - ', b);

test();