class UserStorage {
    //method1
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'yujin' && password === '1234')
            ){
                onSuccess(id)
            }else{
                onError(new Error('not found'))
            }
        },2000)
    }
    //method2
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user === 'yujin'){
                onSuccess({name:'yujinTest', role:'admin'})
            }else{
                onError(new Error('no access'))
            }
        },1000)
    }
}

const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(// 콜백
            user,
            userWithRole =>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error =>{
                console.log(error)
            }
        )
    },
    error =>{
        console.log(error)
    }
)
//비즈니스로직파악이 힘듬
//에러찾기, 디버깅힘듬, 유지보수 힘듬