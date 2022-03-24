## History API

`DOM`의 `Window` 객체는 `history` 객체를 통해 브라우저의 세션 기록에 접근할 수 있는 방법을 제공합니다. `history`는 사용자를 자신의 방문 기록 앞과 뒤로 보내고 기록 스택의 콘텐츠도 조작할 수 있는, 유용한 메서드와 속성을 가집니다.

### 개념과 사용 방법

사용자 방문 기록에서 앞뒤로 이동할 땐 `back()`, `forward()`, `go()` 메서드를 사용합니다.

### 앞으로 가기와 뒤로 가기

방문 기록의 뒤로 이동하려면 다음과 같이 사용합니다.

```javascript
history.back();
```

위의 코드는 사용자가 브라우저 도구 모음의 뒤로 가기 버튼을 누른 것과 같습니다.

이와 비슷하게, 기록의 앞으로 (도구 모음의 앞으로 가기 버튼) 가는 것도 할 수 있습니다.

```javascript
history.forward();
```

### 기록의 특정 지점으로 이동

`go()` 메서드를 사용하면 세션 기록에서 현재 페이지의 위치를 기준으로, 상대적인 거리에 위치한 특정 지점까지 이동할 수 있습니다.

한 페이지 뒤로 이동하려면 다음과 같이 사용합니다. (`back()`과 동일)

```javascript
history.go(-1);
```

한 페이지 앞으로 이동하려면 다음과 같이 사용합니다. (`forward()`와 동일)

```javascript
history.go(1);
```

매개변수로 지정한 숫자를 바꾸면 2 페이지씩 이동하는 것도 가능합니다.

`go()`의 다른 사용법은 매개변수를 제공하지 않거나 0을 제공해 현재 페이지를 다시 불러오는 것입니다.

```javascript
// The following statements
// both have the effect of
// refreshing the page
history.go(0);
history.go();
```

`length` 속성을 사용해 방문 기록 스택의 크기도 알아낼 수 있습니다.

### 인터페이스

### History

History 인터페이스는 브라우저의 세션 history, 즉 현재 페이지를 불러온 탭 또는 프레임의 방문 history을 조작할 수 있는 방법을 제공합니다.

#### Properties

History 인터페이스는 어떤 속성도 상속하지 않습니다.

- History.length (Read Only)

  현재 페이지를 포함해, 세션 history의 길이를 나타내는 정수를 반환합니다.

* History.scrollRestoration

  history 탐색 시 스크롤 위치 복원 여부를 명시할 수 있습니다. 가능한 값은 `auto`와 `manual`입니다.

* History.state (Read only)

  history 스택 `최상단의 스테이트`를 나타내는 값을 반환합니다.

  `popstate` 이벤트를 기다리지 않고 현재 기록의 스테이트를 볼 수 있는 방법입니다.

#### Methods

- back()
  세션 history의 바로 뒤 페이지로 이동하는 `비동기 메서드`입니다.

  브라우저의 뒤로 가기 버튼을 눌렀을 때, 그리고 `history.go(-1)`을 사용했을 때와 같습니다.

  ```
  참고: 세션 기록의 제일 첫 번째 페이지에서 호출해도 오류는 발생하지 않습니다.
  ```

* forward()
  세션 기록의 바로 앞 페이지로 이동하는 `비동기 메서드`입니다. 브라우저의 앞으로 가기 버튼을 눌렀을 때, 그리고 `history.go(1)`을 사용했을 때와 같습니다.

  ```
  참고: 세션 기록의 제일 마지막 페이지에서 호출해도 오류는 발생하지 않습니다.
  ```

* go()

  현재 페이지를 기준으로, 상대적인 위치에 존재하는 세션 기록 내 페이지로 이동하는 `비동기 메서드`입니다.

  예를 들어, 매개변수로 -1을 제공하면 바로 뒤로, 1을 제공하면 바로 앞으로 이동합니다.

  세션 기록의 범위를 벗어나는 값을 제공하면 아무 일도 일어나지 않습니다.

  매개변수를 제공하지 않거나, 0을 제공하면 현재 페이지를 다시 불러옵니다.

* pushState()

  주어진 데이터를 지정한 `제목(제공한 경우 URL도)`으로 세션 기록 스택에 넣습니다.

  `데이터는 DOM이 불투명(opaque)하게 취급하므로, 직렬화 가능한 모든 JavaScript 객체를 사용할 수 있습니다.`

  참고로, `Safari를 제외한 모든 브라우저는 title 매개변수를 무시`합니다.

* replaceState()

  세션 기록 스택의 제일 최근 항목을 주어진 데이터, 지정한 제목 및 URL로 `대체합니다.`

  데이터는 DOM이 불투명(opaque)하게 취급하므로, 직렬화 가능한 모든 JavaScript 객체를 사용할 수 있습니다.

  참고로, Safari를 제외한 모든 브라우저는 title 매개변수를 무시합니다.

### 예제

```javascript
window.onpopstate = function (event) {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );
};

history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null"
history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
```
