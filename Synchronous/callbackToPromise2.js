class UserStorage {
    //method1
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                    (id === 'yujin' && password === '1234')
                ){
                    resolve(id)
                }else{
                    reject(new Error('not found'))
                }
            },2000)
        })
    }
    //method2
    getRoles(user){
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                if (user === 'yujin'){
                    resolve({name:'yujinTest', role:'admin'})
                }else{
                    reject(new Error('no access'))
                }
            },1000)
        })
    }
}
const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')
// userStorage.loginUser()
// .then()
userStorage.loginUser(id,password)
// .catch(err => console.log(err))
.then(id => userStorage.getRoles(id))
// .catch(err2 => console.log(err2))
.then(user =>
    alert(`Hello ${user.name}, you have a ${user.role} role`)
)
.catch(err => console.log(err))

// userStorage.loginUser(
//     id,
//     password,
//     user => {
//         userStorage.getRoles(// 콜백
//             user,
//             userWithRole =>{
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
//             },
//             error =>{
//                 console.log(error)
//             }
//         )
//     },
//     error =>{
//         console.log(error)
//     }
// )
