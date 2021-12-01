## 딕셔너리만들기
클래스와 유사하나 [키,키] 대신에 [키,값]쌍을 저장한다는 점만 다르다.

# 딕셔너리 클래스
```javascript
function Dictionary(){
	let items = {}

	//has method : 자바스크립트의 in연산자로 items에 key가 있는지 체크, true/false
	this.has = function(key){
		return key in items
	}

	//set method : key,value를 인자로 받아 items에 [key, value]형태로 원소를 세팅. 새로운 원소추가나 기존 원소 수정
	this.set = function(key, value){
		items[key] = value
	}

	//remove method : key로 원소를 찾아서 delete한다
	this.remove = function(key){
		if (this.has(key)){
			delete items[key]
			return true
		}
		return false
	}

	//get method:찾는 원소 존재여부를체크, 있으면 value 반환 없으면undefined
	this.get = function(key){
		return this.has(key)? items[key] : undefined
	}

	//values method: 딕셔너리 전체 원소의 값을 배열로 반환
	this.values = function(key){
		let values = []
		for(k in items){
			values.push(items[k])
		}
		return values
	}
}


```

# 딕셔너리 활용
먼저 딕셔너리 인스턴스를 생성하고 이메일주소 3개를 넣자.
이메일 주소록이 하나의 딕셔너리 객체라고 보는것이다.