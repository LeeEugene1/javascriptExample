# 동기적처리 vs 비동기적처리
동기적처리 : 작업이 끝날 때까지 기다리는 동안 중지상태
비동기적처리 : 동시에 여러작업, 특정 코드를 수행하는 도중 다음코드를 실행

# 비동기처리 1.callback
순차적으로 실행 하고싶을때 콜백함수를 파라미터로 전달해주면된다.
예)
- addEventListener('click',(이게 콜백함수)=>{
    //버튼을클릭했을때 이 함수실행
})
-  setTimeout(function(){
    //1초 후에 이런 코드 실행해주세요
},1000)

```javascript
// first()함수다음에 second()함수를 순차적으로 실행하고 싶으면?
function first(파라미터){
    console.log(1)
    파라미터()
}

function second(){
    console.log(2)
}

first(second) //first 함수안의 코드를 실행해주세요 근데 파라미터에 second를 집어넣어서요
```

# 콜백함수의 문제점
예를들어 DB에서 데이터를 뽑고싶은데 A=>B=>C순으로
```
    db.collection('post').findone(A, function(){
        db.collection('post').findone(B,function(){
            db.collection('post').findone(C,function(){
                ...
            })
        })
    })
```

# 2 promise의 등장
- 프로미스는 비동기작업을 조금 더 편하기 처리할 수 있도록 ES6에 도입된 기능(js Object)
- 모든것을 콜백함수로 처리하면 비동기작업이 많아질 경우 코드가 난잡해짐
- promise는 성공 할 수도 있고, 실패 할 수도있다. 성공할때 resolve를 호출해준다.
- 반드시 resolve를 해줘야함 return으로하면 pending되고 그 프로미스안에만 쭉 있음
```javascript
    const first = () =>
        new Promise((resolve, reject)=>{
        resolve(1)
  	  })
  	
    const second = (number) =>
        new Promise((resolve, reject)=>{
        resolve(2+number)
    })

    first()
    .then(result => console.log(result)) //1

    first()
    .then(console.log) //1

    first()
    .then(result => second(result))
    .then(console.log) //3


```

# 3 Async
```javascript
const first = async () =>{
    return 11
}
    
    
const second = async (number) =>{
  return 2+number
}

/* async function first(){
    return 11
}
    
async function second(number){
  return 2+number
} */

first()
.then(result => second(result))
.then(console.log)
```

# 3-1 await
```javascript
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}

async function getApple(){
    await delay(1000) //wait till delay is done
    return '🍎'
}

async function getBanana(){
    await delay(1000)
    return '🍌'
}

function getBanana2(){
    return delay(1000)
    .then(()=>'🍌')
}

function pickFruitsAsPromise(){
    return getApple()
        .then(apple =>{
            return getBanana()
            .then(banana => `${apple}+${banana}`)
        })
        // ... just like callback hell
}
pickFruitsAsPromise().then(console.log)

async function pickFruitsAsAsync(){
    const apple = await getApple()
    const banana = await getBanana()
    return `${apple}+${banana}`
}

```