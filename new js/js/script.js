let userForm=document.getElementById('userForm')
let divContainer= document.getElementById('divContainer')


let users=[]
function adduser(userName,userBalance,userId){
    let user={
            name:userName,
            balance: userBalance,
            id: userId,
            isCompleted:false ///unique,
            }
    users.push(user)
    console.table(users)
    showusers(user)
}



function editUser(div,i){
    div.classList.remove('alert-secondary')
    div.classList.add('alert-success')
    users[i].isCompleted= true
    console.table(users)
    // users[objIndex].balance=prompt('enter new balance')
    // console.log("after update: ", user[objIndex])
}




function removeUser(div,i){
users.splice(i,1)
    console.table(users)
    showusers()

}


function showusers(){
    divContainer.innerText=""

    users.forEach((ele,i)=>{
        let div= document.createElement('div');
        (ele.isCompleted) ? div.classList.add('alert', 'alert-success') : div.classList.add('alert', 'alert-secondary');
        
        let h2 = document.createElement('h2')
        h2.innerText = ele.name
        let p = document.createElement('p')
        p.innerText = ele.user
        let completedBtn = document.createElement('button')
        completedBtn.innerText = "completed account"
        completedBtn.classList.add('btn', 'btn-success')
        let removeBtn = document.createElement('button')
        removeBtn.classList.add('btn', 'btn-danger')
        removeBtn.innerText = 'Remove account'
        completedBtn.addEventListener('click', function () {
           editUser(div , i)
        })
        removeBtn.addEventListener('click', () => {
            removeUser(div , i)
        })
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(completedBtn)
        div.appendChild(removeBtn)
    
    
        divContainer.appendChild(div)
    })







}



userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target[0].value)
    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userBalance.value)
    console.log(e.target.elements.userId.value)
    
    adduser(e.target.elements.userName.value, e.target.elements.userBalance.value,e.target.elements.userId.value)



})


let accounts = [{
    name : 'Radwa', 
    address:'Giza'
}]


// localStorage.setItem('userName' , 'Nouran')
localStorage.removeItem('userName')
localStorage.removeItem('userName')



localStorage.setItem('usersInfo' , JSON.stringify(accounts))

let usersLocalStorage = JSON.parse(localStorage.getItem('usersInfo'))

// usersLocalStorage.push()

console.log(usersLocalStorage)
