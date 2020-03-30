// const array1 = [1, 30, 4, 21, 100000];

// console.log(array1.sort(function (a, b) {
//   if (a < b) return -1;
//   else if (a > b) return 1;
//   return 0;
// }));

// console.log(array1.sort((a, b) => a - b));

const userList = [{
    userId: "1",
    firstName: "Seungwon",
    lastName: "Go",
    yyyymmdd: "19770513",
    phone: "010-111-1111",
    address: "Jeju"
  },
  {
    userId: "2",
    firstName: "Jeremy",
    lastName: "Go",
    yyyymmdd: "19800103",
    phone: "010-111-1112",
    address: "Seoul"
  },
  {
    userId: "3",
    firstName: "James",
    lastName: "Go",
    yyyymmdd: "19821113",
    phone: "010-111-1113",
    address: "Seoul"
  }
];

var sortUserList = userList.sort((a, b) => (a.firstName < b.firstName) ? -1 : (a.firstName > b.firstName) ? 1 : 0);
console.log(sortUserList);