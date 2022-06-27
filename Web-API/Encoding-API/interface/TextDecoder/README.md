## TextDecoder

`TextDecoder` 인터페이스는 `UTF-8`, `ISO-8859-2`, `KOI8-R`, `GBK` 등과 같은 특정 텍스트 인코딩에 대한 디코더를 나타냅니다. 디코더는 바이트 스트림을 입력으로 사용하고 코드 포인트 스트림을 내보냅니다.

> Note: This feature is available in Web Workers

### Examples

#### 타입 배열로 텍스트 나타내기

이 예는 중국어/일본어 문자를 디코딩하는 방법을 보여줍니다.

`Uint8Array`, `Int8Array`, `Uint16Array`, `Int16Array` 및 `Int32Array`의 5가지 다른 형식화된 배열로 표시됩니다.

```javascript
let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

let u8arr = new Uint8Array([240, 160, 174, 183]);
let i8arr = new Int8Array([-16, -96, -82, -73]);
let u16arr = new Uint16Array([41200, 47022]);
let i16arr = new Int16Array([-24336, -18514]);
let i32arr = new Int32Array([-1213292304]);

console.log(utf8decoder.decode(u8arr));
console.log(utf8decoder.decode(i8arr));
console.log(utf8decoder.decode(u16arr));
console.log(utf8decoder.decode(i16arr));
console.log(utf8decoder.decode(i32arr));
```

#### Non UTF-8 텍스트 다루기

이 예에서는 "Hello, world"를 의미하는 러시아어 텍스트 "Привет, мир!"를 디코딩합니다. `TextDecoder()` 생성자에서 키릴 문자에 적합한 Windows-1251 문자 인코딩을 지정합니다.

```javascript
let win1251decoder = new TextDecoder("windows-1251");
let bytes = new Uint8Array([
  207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33,
]);
console.log(win1251decoder.decode(bytes)); // Привет, мир!
```

### Constructor

- `TextDecoder()`

  매개변수에 지정된 디코딩 방법으로 코드 포인트 스트림을 생성할 새로 구성된 `TextDecoder`를 반환합니다.

### Properties

TextDecoder 인터페이스는 속성을 상속하지 않습니다.

- `TextDecoder.encoding (read only)`

  디코더의 이름을 포함하는 문자열, 즉 TextDecoder가 사용할 방법을 설명하는 문자열입니다.

* `TextDecoder.fatal (read only)`

  오류 모드가 치명적인지 여부를 나타내는 부울입니다.

* `TextDecoder.ignoreBOM (read only)`

  바이트 순서 표시가 무시되는지 여부를 나타내는 부울입니다.

### Methods

TextDecoder 인터페이스는 메서드를 상속하지 않습니다.

- `TextDecoder.decode()`

  특정 TextDecoder 개체의 메서드로 디코딩된 텍스트가 포함된 문자열을 반환합니다.
