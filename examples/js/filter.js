const userList = [
    {userId:"1", userName:"James", phone:"010-111-1111", address:"Seoul"},
    {userId:"2", userName:"Jeremy", phone:"010-111-1112", address:"Jeju"},
    {userId:"3", userName:"Justin", phone:"010-111-1113", address:"Seoul"}
];

var selectedUserInfo = {};
for(var i=0 ; i<userList.length ; i++) {
    if(userList[i].userId == "2") {
        selectedUserInfo = userList[i];
    }
}

console.log('method-1',selectedUserInfo);

var selectedUserInfo2 = userList.filter(u => (u.userId=="2"))[0];
console.log('method-2',selectedUserInfo2);