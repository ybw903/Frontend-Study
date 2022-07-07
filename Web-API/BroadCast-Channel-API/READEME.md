## 브로드캐스트채널 API

`브로드 캐스트 채널 API` 는 [브라우징 컨텍스트](https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context) (즉, windows , tabs , frames 또는 iframes )와 동일한 출처 에 있는 작업자 간의 기본 통신을 허용 합니다.

> `참고`: 이 기능은 웹 Worker 에서 사용할 수 있습니다.

객체를 생성하여 `BroadcastChannel`게시된 모든 메시지를 받을 수 있습니다. 통신하려는 프레임 또는 작업자에 대한 참조를 유지할 필요가 없습니다. `BroadcastChannel`은 동일한 이름으로 자체 채널을 구성하여 특정 채널에 "구독"할 수 있고 모든 프레임 간에 양방향 통신을 할 수 있습니다.

### BroadcastChannel Interface

#### 채널 만들기 또는 가입하기

클라이언트는 BroadcastChannel객체를 생성하여 브로드캐스트 채널에 참여 합니다. 생성자 는 채널 이름이라는 단일 매개변수 를 사용합니다. 해당 브로드캐스트 채널 이름에 처음으로 연결하는 경우 기본 채널이 생성됩니다.

```javascript
// Connection to a broadcast channel
const bc = new BroadcastChannel("test_channel");
```

#### 메시지 보내기

```javascript
// Example of sending of a very simple messages
bc.postMessage("This is a test message.");
```

[채널로 전송된 데이터는 구조화된 복제 알고리즘](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)을 사용하여 직렬화됩니다. 즉, 직접 직렬화하지 않고도 다양한 데이터 개체를 안전하게 보낼 수 있습니다.

API는 의미 체계를 메시지에 연결하지 않으므로 예상되는 메시지의 종류와 메시지로 수행할 작업을 아는 것은 코드에 달려 있습니다.

#### 메시지 수신

```javascript
// A handler that only logs the event to the console:
bc.onmessage = (event) => {
  console.log(event);
};
```

#### 채널 연결 끊기

채널을 떠나려면 close()개체에서 메서드를 호출합니다. 이렇게 하면 기본 채널에서 개체의 연결이 끊어져 가비지 수집이 허용됩니다.

```javascript
// Disconnect the channel
bc.close();
```

### 결론

Broadcast Channel API의 독립형 인터페이스는 컨텍스트 간 통신을 허용합니다. 사용자가 로그인하거나 로그아웃할 때와 같이 동일한 출처 내의 다른 탭에서 사용자 작업을 감지하는 데 사용할 수 있습니다.

메시징 프로토콜은 정의되어 있지 않으며 다양한 탐색 컨텍스트에서 자체적으로 구현해야 합니다. 사양에는 협상이나 요구 사항이 없습니다.

### 명세서

[HTML 표준](https://html.spec.whatwg.org/multipage/web-messaging.html#broadcasting-to-other-browsing-contexts)
