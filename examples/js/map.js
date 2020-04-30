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

const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const newUserList = userList.map(u => ({
    userId: u.userId,
    firstName: u.firstName,
    lastName: u.lastName,
    fullName: u.firstName + ' ' + u.lastName,
    yyyymmdd: u.yyyymmdd,
    year: u.yyyymmdd.substring(0, 4),
    month: u.yyyymmdd.substring(4, 6),
    day: u.yyyymmdd.substring(6, 8),
    usDateFormat: (mon[parseInt(u.yyyymmdd.substring(4, 6)) - 1] + " " + parseInt(u.yyyymmdd.substring(6, 8)) + ", " + u.yyyymmdd.substring(0, 4)),
    phone: u.phone,
    address: u.address
}));

console.log(newUserList);