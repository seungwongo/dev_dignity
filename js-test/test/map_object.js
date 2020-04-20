let user = {};
user.name = "Seungwon";
user.email = "abc@gmail.com";
user.phone = "111111111";
const key = "ID";
user[key] = "abc";
user[1] = "112333";

console.log("name", user.name);

let guestArr = [{
    name: "A",
    city: "Seoul"
  },
  {
    name: "B",
    city: "Jeju"
  },
  {
    name: "C",
    city: "Seoul"
  },
  {
    name: "D",
    city: "Daegu"
  },
  {
    name: "E",
    city: "Jeju"
  },
  {
    name: "F",
    city: "Seoul"
  },
  {
    name: "G",
    city: "Busan"
  },
  {
    name: "H",
    city: "Busan"
  },
  {
    name: "I",
    city: "Seoul"
  },
  {
    name: "J",
    city: "Seoul"
  }
];

let oGuest = {};

if (3) console.log('3');
if (1) console.log('1');
if (0) console.log('0');
if (undefined) console.log('undefined');
if ({}) console.log('{}')

console.log(oGuest['a']);

guestArr.forEach(item => {
  if (!oGuest[item.city]) {
    oGuest[item.city] = [];
  }

  oGuest[item.city].push(item);
});

console.log(oGuest);

let mapGuest = new Map();
guestArr.forEach(item => {
  if (!mapGuest.has(item.city)) {
    mapGuest.set(item.city, []);
  }

  mapGuest.get(item.city).push(item);
});

console.log(mapGuest);


let userMap = new Map();
userMap.set("name", "Seungwon");
userMap.set("email", "abc@gmail.com");
userMap.set("phone", "111111111");
// userMap.set(1, "112333");
// userMap.set(key, "112333");
// console.log("name", userMap.get("name"));