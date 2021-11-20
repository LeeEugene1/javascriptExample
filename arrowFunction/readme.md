# function
1. function is object in JS
```javascript
function log(message){
    console.log(message)
}
log('hi')
```
2. Parameters
```javascript
function changeName(obj){
    obj.name = 'coder'
}
const yujin = {name : 'yujin'}
changeName(yujin)
console.log(yujin)
```


3. default parameters(added in es6)
```javascript
    function showMessage(message, from = 'unknown'){
        // if(from === undefined){
        //     from = 'unknown'
        // }
        console.log(`${message} by ${from}`)
    }
    showMessage('hi')
```
4. Rest parameter
```javascript
function printAll(...args){//배열
    args.forEach((e) => console.log(e))
}
print('dream','coding','yujin')
```

5.Local scope
```javascript
let globalMessage = 'g'
function printMessage(){
    let message = 'hello'
    console.log(message)
    console.log(globalMessage)
    function printAnother(){
        console.log(message)
        let childMessage = 'hello'
    }
    console.log(childMessage)//error
}
```

6. Return a value
모든 function은 return undefined 생략됨
```javascript
function sum(a,b){
    return a + b
}
const result = sum(1,2)//3
```

7. Early return, early exit
```javascript
//bad: 가독성이 떨어짐
function upgradeUser(user){
    if(user.point > 10){
        // long logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;// 조건이 맞지않는 애들을 빨리 return 하고
    }
    //long logic here
}
```

# function Expression
1. named function
```
    print()//error
    function print(){
        console.log('print')
    }
    print()

```
2. anoymous function
```
    print()//hoist 되어 가능!
    const print = function() {
        console.log('print')
    }
    print()
    const printAgain = print
    printAgain()
```

# callback function + Arrow function
```
    function randomQuiz(answer, printYes, printNo){
        if(answer === 'love'){
            printYes()
        }else{
            printNo()
        }
    }
    <!-- const printYes = function(){
        console.log('Yes')
    }
    const printNo = function(){
        console.log('No')
    } -->
    const printYes = () => console.log('Yes')
    const printNo = () => console.log('No') 
    <!-- {}를쓰려면 return이 필요함 -->
    randomQuiz('love',printYes, printNo)
    randomQuiz('no',printYes, printNo)
```

