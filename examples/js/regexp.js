//35213
//D1234
//4325
//488329
var regexp_postalcode = /^\d{5}$/;
console.log(regexp_postalcode.test("15213"));

var regexp_telephone = /^(02|064)-(\d{3}|\d{4})-\d{4}$/;
console.log(regexp_telephone.test("02-2521-1234"));

var regexp_mobile = /^(010)-\d{4}-\d{4}$/;
console.log(regexp_mobile.test("010-3124-1234"));


//contact@returnvalues.com
//seungwon.go@returnvalues.com
//myemail.mysite.com
//@mysite.com
//myemail@.com
var regexp_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(regexp_email.test("@mysite.com"));