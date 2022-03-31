## 화살표 함수

화살표 함수 표현(**arrow function expression**)은 [`전통적인 함수표현(function)`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function)의 간편한 대안입니다.

하지만, 화살표 함수는 몇 가지 제한점이 있고 모든 상황에 사용할 수는 없습니다.

* `this`나 `super`에 대한 바인딩이 없고, `methods` 로 사용될 수 없습니다.

* `new.target`키워드가 없습니다.

* 일반적으로 스코프를 지정할 때 사용하는 `call`, `apply`, `bind` methods를 이용할 수 없습니다.

* 생성자(`Constructor`)로 사용할 수 없습니다.

* `yield`를 화살표 함수 내부에서 사용할 수 없습니다.

### Descriptions

화살표 함수 도입에 영향을 준 두 요소: `보다 짧아진 함수` 및 `바인딩하지 않은 this`

#### 짧은 함수

일부 함수 패턴에서는, 짧은 함수가 환영받습니다.

#### 바인딩 되지 않은 `this`

화살표 함수가 나오기 전까지는, 모든 새로운 함수는, 어떻게 그 함수가 호출되는지에 따라  자신의 `this` 값을 정의했습니다:

* 이 함수가 생성자인 경우는 새로운 객체

* 엄격 모드 함수 호출에서는 undefined 

* 함수가 "객체 메서드"로서 호출된 경우 문맥 객체

* 등등

이는 객체 지향 스타일로 프로그래밍할 때 별로 좋지않습니다.

```javascript
function Person() {
  // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
  this.age = 0;

  setInterval(function growUp() {
    // 비엄격 모드에서, growUp() 함수는 `this`를
    // 전역 객체로 정의하고, 이는 Person() 생성자에
    // 정의된 `this`와 다름.
    this.age++;
  }, 1000);
}

var p = new Person();
```

ECMAScript 3/5 에서는, 이 문제를 `this` 값을 폐쇄될 수 있는 (비전역) 변수에 할당하여 해결했습니다.

```javascript
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // 콜백은  `that` 변수를 참조하고 이것은 값이 기대한 객체이다.
    that.age++;
  }, 1000);
}
```

이렇게 하는 대신에, `바인딩한 함수`는 적절한 `this` 값이 `growUp()` 함수에 전달될 수 있도록 생성될 수 있습니다.

화살표 함수는 자신의 `this`가 없습니다.  대신 화살표 함수를 둘러싸는 렉시컬 범위(lexical scope)의 `this`가 사용됩니다; 화살표 함수는 일반 변수 조회 규칙(normal variable lookup rules)을 따릅니다. 때문에 현재 범위에서 존재하지 않는 `this`를 찾을 때, 화살표 함수는 바로 바깥 범위에서 `this`를 찾는것으로 검색을 끝내게 됩니다.

따라서 다음 코드에서 `setInterval`에 전달 된 함수 내부의 `this`는 `setInterval`을 포함한 function의 `this`와 동일한 값을 갖습니다.

```javascript
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this|는 Person 객체를 참조
  }, 1000);
}

var p = new Person();
```

#### 엄격 모드와의 관계

`this`가 렉시컬(lexical, 정적)임을 감안하면, `this`에 관한 `엄격 모드` 규칙은 그냥 무시됩니다.

```javascript
var f = () => { 'use strict'; return this; };
f() === window; // 혹은 전역객체
```

#### call 또는 apply를 통한 피호출

화살표 함수에서는 `this`가 바인딩되지 않았기 때문에, `call()` 또는 `apply()` 메서드는  인자만 전달 할 수 있습니다. this는 무시됩니다.

```javascript
var adder = {
  base : 1,

  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         // 이는 2가 콘솔에 출력될 것임
console.log(adder.addThruCall(1)); // 이도 2가 콘솔에 출력될 것임
```

#### 바인딩 되지 않은 `arguments`

화살표 함수는 `arguments 객체`를 바인드 하지 않습니다. 때문에, `arguments`는 그저 둘러 싸는 범위(scope) 내 이름에 대한 참조입니다.

```javascript
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(1); // 2
```

화살표 함수는 자신의 `arguments` 객체가 없지만, 대부분의 경우에 `나머지 매개변수`가 좋은 대안입니다:

```javascript
function foo(n) {
  var f = (...args) => args[0] + n;
  return f(2);
}

foo(1); // 3
```

### 메소드로 사용되는 화살표 함수

이야기 했듯이, 화살표 함수 표현은 메소드 함수가 아닌 형태로 사용 할 수 있습니다. 메소드로 사용하려고 한면 무슨일이 발생하는지 봅시다.

```javascript
'use strict';

var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

화살표 함수는 자신의 this를 가지고("bind" 바인드)있지 않습니다. [`Object.defineProperty()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

```javascript
'use strict';

var obj = {
  a: 10
};

Object.defineProperty(obj, 'b', {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window {...} (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  }
});
```

#### `new` 연산자 사용

화살표 함수는 생성자로서 사용될 수 없으며 new와 함께 사용하면 오류가 발생합니다.

```javascript
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

#### `prototype` 속성 사용

화살표 함수는 prototype 속성이 없습니다.

```javascript
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

#### `yield` 키워드 사용

[`yield`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield) 키워드는 화살표 함수의 본문(그 안에 더 중첩된 함수 내에서 허용한 경우를 제외하고)에 사용될 수 없습니다. 그 결과, 화살표 함수는 생성기(generator)로서 사용될 수 없습니다.

#### 함수 본문

화살표 함수는 "concise 바디"든 보통 "block 바디"든 하나를 가질 수 있습니다.

> concise바디는 중괄호'{}'로 묶이지않은 한줄짜리 바디이고 block바디는 중괄호로 묶인 바디입니다. 보통 여러줄 쓸때 block바디를 사용합니다.

block바디는 자동으로 값을 반환하지 않습니다. return을 사용해서 값을 반환해야 합니다.

```javascript
var func = x => x * x;                  // concise 바디, 생략된 "return" 여기서는 x * x
var func = (x, y) => { return x + y; }; // block 바디, "return"이 필요
```

#### 객체 리터럴 반환

간결한 구문 params => {object:literal}을 사용한 객체 리터럴 반환은 예상대로 작동하지 않음을 명심하세요:

```javascript
var func = () => {  foo: 1  };
// func() 호출은 undefined를 반환!

var func = () => {  foo: function() {}  };
// SyntaxError: function 문은 이름이 필요함
```

이는 중괄호({}) 안 코드가 일련의 문(즉 foo는 라벨처럼 취급됩니다, 객체 리터럴 내 키가 아니라)으로 파싱(parse, 구문 분석)되기 때문입니다.

객체 리터럴를 괄호로 감싸는 것을 기억하세요:
```javascript
var func = () => ({ foo: 1 });
```

#### 줄바꿈

화살표 함수는 파라메터와 화살표 사이에 개행 문자를 포함 할 수 없습니다.

```javascript
var func = (a, b, c)
           => 1;
// SyntaxError: expected expression, got '=>'
```

하지만, 보기 좋은 코드를 유지하고 싶다면, 아래에 보는 것처럼 괄호나 개행을 둠으로써 이를 수정할 수 있습니다.

```javascript
var func = (a, b, c) =>
  1;

var func = (a, b, c) => (
  1
);

var func = (a, b, c) => {
  return 1
};

var func = (
  a,
  b,
  c
) => 1;

// SyntaxError가 발생하지 않습니다.
```

#### 파싱순서

화살표 함수 내의 화살표는 연산자가 아닙니다. 그러나 화살표 함수는 평범한 함수와 비교했을 때 operator precedence와 다르게 반응하는 특별한 파싱룰을 가지고 있습니다.

```javascript
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok
```