class UserStorage {
    //method1
    async loginUser(id, password){
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
    async getRoles(user){
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
userStorage.loginUser(id,password)
.then(id => userStorage.getRoles(id))
.then(user =>
    alert(`Hello ${user.name}, you have a ${user.role} role`)
)
.catch(err => console.log(err))

