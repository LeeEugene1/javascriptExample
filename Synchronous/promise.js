//promise를 만드는순간 바로 네트워크통신을 수행한다!!!!
//사용자가 요구할때 나오는게아니라 유의해야함
const promise = new Promise((resolve, reject)=>{
    console.log('doing something')
    //doing some heavy work(network, files)
    setTimeout(()=>{
        resolve('yujin')
        // reject(new Error('no network'))
    },2000)
})

//promise를 활용해보자

// promise
// .then((value)=>{
//     console.log(value)//yujin
// })
// .catch(error=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log('실패든 성공이든 무조건')
// })

//Error handling
const getChicken = () =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('🐔'),1000)
    })//치킨을 가지고만있음 준비완료!

const getEgg = chicken =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${chicken} -> ⚪`),1000)
        // setTimeout(()=>reject(new Error(`error! ${chicken} -> ⚪`)),1000)

    })

const cook = egg2 =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${egg2} -> 🍳`),1000)
    })


getChicken()
.then(chicken => getEgg(chicken))
.catch( error =>{ // getEgg 도중 에러가 날경우 빵으로변경
    return `🍞`
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(error => console.log(error))//에러를 콘솔에