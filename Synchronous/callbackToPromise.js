const loginUser = (id, password) => {
    new Promise((resolve, reject)=>{
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

const getRoles = (user) => {
    new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (user === 'yujin'){
                resolve({name:'yujinTest', role:'admin'})
            }else{
                reject(new Error('no access'))
            }
        },1000)
    })
}
const id = prompt('enter your id')
const password = prompt('enter your password')
loginUser(id,password)
.then(resolvedId => getRoles(resolvedId))
.then(resolvedUser =>
    alert(`Hello ${resolvedUser.name}, you have a ${resolvedUser.role} role`)
)
.catch(err => console.log(err))
