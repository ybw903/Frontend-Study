## URL API

URL API는 유효한 `Uniform Resource Locator` 를 구성하는 요소와 URL에 액세스하고 URL을 조작하는 API를 정의하는 URL 표준의 구성 요소입니다. URL 표준은 또한 도메인, 호스트 및 IP 주소와 같은 개념을 정의하고 웹 양식의 콘텐츠를 키/값 쌍 세트로 제출하는 데 사용되는 레거시 `application/x-www-form-urlencoded` `MIME 유형 을 표준 방식으로 설명하려고 시도합니다.`

> 참고: 이 기능은 웹 작업자 에서 사용할 수 있습니다.

### URL 개념 및 사용법

URL 표준의 대부분은 URL의 정의와 URL 이 구조화되고 구문 분석되는 방식에 따라 결정됩니다. 또한 네트워크에서 컴퓨터의 주소 지정과 관련된 다양한 용어의 정의와 IP 주소 및 DOM 주소를 구문 분석하는 알고리즘이 지정됩니다. 대부분의 개발자에게 더 흥미로운 것은 API 자체입니다.

#### URL 구성 요소 액세스

주어진 URL에 대한 `URL`객체를 생성하면 URL을 구문 분석하고 속성을 통해 해당 구성 요소에 빠르게 액세스할 수 있습니다.

```javascript
let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

위의 스니펫 URL은 지금 읽고 있는 기사에 대한 개체를 만든 다음 `host`및 `pathname`속성을 가져옵니다. 이 경우 해당 문자열은 각각 developer.mozilla.org및 /en-US/docs/Web/API/URL_API입니다.

#### URL 변경

대부분의 URL속성은 설정 가능합니다. 새 값을 작성하여 개체가 나타내는 URL을 변경할 수 있습니다. 예를 들어 URL을 만들고 사용자 이름을 설정하려면 다음을 수행합니다.

```javascript
let myUsername = "someguy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

값을 설정하면 username해당 속성의 값이 설정될 뿐만 아니라 전체 URL이 업데이트됩니다. 위의 코드 조각을 실행한 후 반환되는 값 `addr.href`은 입니다 https://someguy@example.com/login. 이것은 모든 쓰기 가능한 속성에 해당됩니다.

#### 쿼리

search속성은 URL의 쿼리 문자열 부분을 포함합니다. 예를 들어 URL이 https://example.com/login?user=someguy&page=news이면 `search`속성값은 `?user=someguy&page=news`입니다. `URLSearchParams`와 객체의 `get()`메서드 를 사용하여 개별 매개변수의 값을 조회할 수도 있습니다.

```javascript
let addr = new URL("https://example.com/login?user=someguy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

예를 들어 위의 스니펫에서 사용자 이름과 대상 페이지는 쿼리에서 가져와 사이트 코드에서 사용하는 적절한 함수로 전달되어 로그인하고 사용자를 사이트 내의 원하는 대상으로 라우팅합니다.

`URLSearchParams`내의 다른 기능을 사용하여 키 값을 변경하고, 키와 해당 값을 추가 및 삭제하고, 매개변수 목록을 정렬할 수도 있습니다.

### URL API 인터페이스

URL API는 이름에 몇 가지 인터페이스만 있는 간단한 API입니다.

- `URL`

* `URLSearchParams`

### 예

URL에 포함된 매개변수를 처리하려면 수동으로 처리할 수 있지만 자동으로 처리할 URL개체를 만드는 것이 훨씬 쉽습니다. 아래 fillTableWithParameters()함수는 를 `HTMLTableElement`나타내는 객체 를 입력으로 받습니다 `<table>`. 매개변수에서 찾은 각 키에 대해 하나씩 행이 테이블에 추가되며 첫 번째 열에는 키 이름이 포함되고 두 번째 열에는 값이 포함됩니다.

`URLSearchParams.sort()`테이블을 생성하기 전에 매개변수 목록을 정렬하기 위한 호출에 유의하십시오 .

```javascript
function fillTableWithParameters(tbl) {
  let url = new URL(document.location.href);
  url.searchParams.sort();
  let keys = url.searchParams.keys();

  for (let key of keys) {
    let val = url.searchParams.get(key);
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerText = key;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerText = val;
    row.appendChild(cell);
    tbl.appendChild(row);
  }
}
```

이 예제의 작동 버전은 Glitch 에서 찾을 수 있습니다 . 페이지를 로드할 때 URL에 매개변수를 추가하기만 하면 테이블에서 볼 수 있습니다. 예를 들어 `https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`.

### Specification

- [URL\_표준](https://url.spec.whatwg.org/#api)
