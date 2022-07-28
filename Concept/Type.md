## Type

### 동적 타입

JavaScript는 `느슨한 타입(loosely typed)`의 `동적(dynamic) 언어`입니다. JavaScript의 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당 (및 재할당) 가능합니다.

```javascript
let foo = 42; // foo가 숫자
foo = "bar"; // foo가 이제 문자열
foo = true; // foo가 이제 불리언
```

###  Javascript의 타입

JavaScript 언어의 타입은 원시 값과 객체로 나뉩니다.

### 원시값

JavaScript에서 원시 값(primitive, 또는 원시 자료형)이란 객체가 아니면서 메서드도 가지지 않는 데이터입니다. 원시 값에는 아래와 같이 크게 7종류가 있습니다.

- boolean
- null
- undefined
- number
- string
- symbol (new in ECMAScript 2015)
- bigint (ECMA2020, ES11 )

대부분의 경우, 원시 값은 언어 구현체의 가장 저급(low level) 단계에서 나타냅니다.

모든 원시 값은 불변하여 변형할 수 없습니다. 원시 값 자체와, 원시값을 할당한 변수를 혼동하지 않는 것이 중요합니다.

변수는 새로운 값을 다시 할당할 수 있지만, 이미 생성한 원시 값은 객체, 배열, 함수와는 달리 변형할 수 없습니다.

#### 예제

아래의 예제는 원시값이 불변함을 이해할 때, 도움이 되는 예시 입니다.

```javascript
// 문자열 메서드는 문자열을 변형하지 않음
var bar = "baz";
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// 배열 메소드는 배열을 변형함
var foo = [];
console.log(foo); // []
foo.push("plugh");
console.log(foo); // ["plugh"]

// 할당은 원시 값에 새로운 값을 부여 (변형이 아님)
bar = bar.toUpperCase(); // BAZ
```

즉, 다음과 같이 원시 값을 교체할 수는 있지만, 직접 변형할 수는 없습니다.

### 객체

컴퓨터 과학에서의 객체란 식별자로 참조할 수 있는 메모리 상의 값을 말합니다.

JavaScript에서의 객체는 속성의 컬렉션으로 볼 수 있습니다.

객체 리터럴 구문을 사용해 제한적으로 속성을 초기화할 수의 있고, 그 후에 속성을 추가하거나 제거할 수도 있습니다.

속성 값으로는 다른 객체를 포함해 모든 타입을 사용할 수 있으므로 복잡한 자료구조의 구축이 가능합니다. 속성은 '키' 값으로 식별하며, 키 값으로는 문자열 값이나 심볼을 사용할 수 있습니다.
