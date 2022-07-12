## URL 패턴 API

URL 패턴 API는 URL 패턴 일치자를 만드는 데 사용되는 구문을 정의합니다. 이러한 패턴은 URL 또는 개별 URL 구성요소에 대해 일치될 수 있습니다. URL 패턴 API는 `URLPattern` 인터페이스에서 사용됩니다.

### 개념 및 사용법

패턴 구문은 `path-to-regexp` 라이브러리의 구문을 기반으로 합니다. 패턴에는 다음이 포함될 수 있습니다.

- 정확히 일치하는 리터럴 문자열입니다.
- `/posts/\*`모든 문자와 일치하는 와일드카드( ).
- `/books/:id`일치하는 URL의 일부를 추출하는 명명된 그룹( ).
- `/books{/old}?`패턴의 일부를 선택 사항으로 만들거나 여러 번 일치시키는 비 캡처 그룹( ).
- `RegExp`그룹( )은 몇 가지 제한`/books/(\\d+)` 이 있는 임의의 복잡한 정규식 일치를 만듭니다 .

아래의 패턴 구문 섹션 에서 구문에 대한 세부 정보를 찾을 수 있습니다 .

### URL 패턴 API 인터페이스

URL 패턴 API에는 관련 인터페이스가 하나만 있습니다.

- `URLPattern`

### 패턴 구문

패턴 구문은 `path-to-regexp` JavaScript 라이브러리를 기반으로 합니다. 이 구문은 `Ruby on Rails` 또는 `Express` 또는 `Next.js` 와 같은 JavaScript 프레임워크 에서 사용되는 구문과 유사합니다 .

#### 고정된 텍스트 및 캡처 그룹

각 패턴은 고정 텍스트와 그룹의 조합을 포함할 수 있습니다. 고정 텍스트는 정확히 일치하는 일련의 문자입니다. 그룹은 일치 규칙에 따라 임의의 문자열과 일치합니다. 각 URL 부분에는 아래에 설명된 고유한 기본 규칙이 있지만 덮어쓸 수 있습니다.

```javascript
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}

// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

#### 세그먼트 와일드카드

기본적으로 `pathname` URL의 일부와 일치하는 그룹은 슬래시(`/`)를 제외한 모든 문자와 일치합니다. 부분 에서 `hostname`그룹은 점(`.`)을 제외한 모든 문자와 일치합니다. 다른 모든 부분에서 그룹은 모든 문자와 일치합니다. 세그먼트 와일드카드는 non-greedy입니다. 즉, 가능한 가장 짧은 문자열과 일치합니다.

#### 정규식 일치자

그룹에 대한 기본 일치 규칙을 사용하는 대신 각 그룹에 대해 정규식을 사용할 수 있습니다. 이 정규식은 그룹에 대한 일치 규칙을 정의합니다. 다음은 하나 이상의 숫자가 포함된 경우에만 일치하도록 그룹을 제한하는 명명된 그룹의 정규식 일치자의 예입니다.

```javascript
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/abc")); // false
console.log(pattern.test("https://example.com/books/")); // false
```

#### 정규식 일치자 제한 사항

일부 정규식 패턴은 예상대로 작동하지 않습니다.

- Starts with `^`는 URLPattern의 프로토콜 부분의 시작 부분에서 사용되는 경우에만 일치하고 사용되는 경우 중복됩니다.

```javascript
// with `^` in pathname
const pattern = new URLPattern({ pathname: "(^b)" });
console.log(pattern.test("https://example.com/ba")); // false
console.log(pattern.test("https://example.com/xa")); // false

// with `^` in protocol
const pattern = new URLPattern({ protocol: "(^https?)" });
console.log(pattern.test("https://example.com/index.html")); // true
console.log(pattern.test("xhttps://example.com/index.html")); // false

// without `^` in protocol
const pattern = new URLPattern({ protocol: "(https?)" });
console.log(pattern.test("https://example.com/index.html")); // true
console.log(pattern.test("xhttps://example.com/index.html")); // false
```

- Ends with `$`는 URLPattern의 해시 부분 끝에 사용되는 경우에만 일치하며 사용되는 경우 중복됩니다.

```javascript
// with `$` in pathname
const pattern = new URLPattern({ pathname: "(path$)" });
console.log(pattern.test("https://example.com/path")); // false
console.log(pattern.test("https://example.com/other")); // false

// with `$` in protocol
const pattern = new URLPattern({ hash: "(hash$)" });
console.log(pattern.test("https://example.com/#hash")); // true
console.log(pattern.test("xhttps://example.com/#otherhash")); // false

// without `$` in protocol
const pattern = new URLPattern({ hash: "(hash)" });
console.log(pattern.test("https://example.com/#hash")); // true
console.log(pattern.test("xhttps://example.com/#otherhash")); // false
```

- Lookahead 및 lookbehinds는 URLPattern의 어떤 부분과도 일치하지 않습니다.

```javascript
// lookahead
const pattern = new URLPattern({ pathname: "(a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
console.log(pattern.test("https://example.com/ax")); // false

// negative-lookahead
const pattern = new URLPattern({ pathname: "(a(?!b))" });
console.log(pattern.test("https://example.com/ab")); // false
console.log(pattern.test("https://example.com/ax")); // false

// lookbehind
const pattern = new URLPattern({ pathname: "((?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // false
console.log(pattern.test("https://example.com/xa")); // false

// negative-lookbehind
const pattern = new URLPattern({ pathname: "((?<!b)a)" });
console.log(pattern.test("https://example.com/ba")); // false
console.log(pattern.test("https://example.com/xa")); // false
```

- 괄호는 RegExp에 없는 경우에도 URLPattern 내의 범위 표현식에서 이스케이프되어야 합니다.

```javascript
const pattern = new URLPattern({ pathname: "([()])" }); // throws
const pattern = new URLPattern({ pathname: "([\\(\\)])" }); // ok

const regex = new RegExp("[()]"); // ok
const regex = new RegExp("[\\(\\)]"); // ok
```

#### 명명된 그룹 및 명명된 그룹

그룹은 이름이 지정되거나 지정되지 않을 수 있습니다. 명명된 그룹은 그룹 이름 앞에 콜론( `:`)을 붙여 지정합니다. 콜론과 이름이 접두사로 붙지 않은 정규 표현식 그룹은 이름이 지정되지 않습니다. 이름이 없는 그룹은 패턴의 순서에 따라 일치 결과에서 숫자로 인덱싱됩니다.

```javascript
// A named group
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }

// An unnamed group
const pattern = new URLPattern("/books/(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { '0': '123' }
```

#### 그룹 수정자

그룹에는 수정자가 있을 수도 있습니다. 이들은 그룹 이름 뒤에 지정됩니다(또는 있는 경우 regexp 뒤에). 세 가지 수정자가 있습니다. `?`그룹을 선택 사항 `+`으로 만드는 것, 그룹을 한 번 이상 반복 `\*`하도록 만드는 것, 그룹을 0번 이상 반복하는 것입니다.

```javascript
// An optional group
const pattern = new URLPattern("/books/:id?", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // false
console.log(pattern.test("https://example.com/books/123/456/789")); // false

// A repeating group with a minimum of one
const pattern = new URLPattern("/books/:id+", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true

// A repeating group with a minimum of zero
const pattern = new URLPattern("/books/:id*", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true
```
