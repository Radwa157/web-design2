// var startNum= prompt('enter startNUM')
// var endNum= prompt('enter endNUM')
// var breakNum= prompt('enter breakNUM')
// var continueNum= prompt('enter continueNUM')



// function looping (startNum, endNum, breakNum, continueNum){
//     if ( startNum=Number && endNum=Number && breakNum=Number && continueNum=Number )
//         for(var i=startNum; i<breakNum; i++) {
//         console.log (i)}
        
//         }
        


// looping()





// if ( startNum=Number && endNum==Number && breakNUM==Number && continueNum==Number );



// var users =[{
//     fName: "Ahmed",
//     lName: "Aly"
// },

// {
//     fName: "Nader",
//     lName: " Assem"
// },

// {
//     fName: "Habiba",
//     lName: " Mohamed"
// }

// ]

// users.forEach((item, index, array)=>{
//     var n=users.findIndex((item)=>item=="Habiba")
//     console.log(n);
//     users.findIndex((item)=>item=="Habiba")===1
//     console.log(index.fName)
// })


// var numberofusers=prompt('number of users')
// var user=[{
//     userName:"",
//     userBalance:"",
//     userId:""

// }]



// function adduser(){
// var User={
//     name: prompt("user name"),
//     balance: "",
//     id:""  ///unique,
//     }}



// editUserBalanceById() //id, new balance

// deleteUserById()


// console.table()




var p= +prompt('number of users')
console.log(p)



var users=[]
function adduser(){
    var user={
            name: prompt("user name"),
            balance: prompt("enter userBalance"),
            id:prompt("enter userId"),  ///unique,
            }
    users.push(user)
    console.table(users)
}

for (var i=1; i<=p; i++){
    console.log(i)
   adduser()
}


function editUserBalanceByID(){
    var id = prompt('enter edit user id')
    var newBalance = prompt('enter edit user balance')
    objIndex= users.findIndex(obj=>obj.id==id)
    users[objIndex].balance = newBalance
    // users[objIndex].balance=prompt('enter new balance')
    // console.log("after update: ", user[objIndex])
}

editUserBalanceByID()


function deleteUserById(){
var id= prompt('enter delete user id')
objdelete= users.findIndex(obj=>obj.id==id)
delete users[objdelete]

}

deleteUserById()
console.table(users)