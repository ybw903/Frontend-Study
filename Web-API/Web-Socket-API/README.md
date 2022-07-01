## 웹 소켓

### 인터페이스

웹 소켓은 사용자의 브라우저와 서버 사이의 인터액티브 통신 세션을 설정할 수 있게 하는 고급 기술입니다. 개발자는 웹 소켓 API를 통해 서버로 메시지를 보내고 서버의 응답을 위해 서버를 폴링하지 않고도 이벤트 중심 응답을 받는 것이 가능합니다.

- `WebSocket`

  웹 소켓 서버로 연결하고 연결을 통해 데이터를 보내고 받는 기본 인터페이스

- `CloseEvent (en-US)`

  연결이 종료 되었을 때 웹 소켓 객체에 의해 전달된 이벤트

- `MessageEvent`

  서버로 부터 메시지가 수신 되었을 때 웹 소켓 객체에 의해 전달된 이벤트

### 도구

- `Socket.IO`: `Node.js`를 위한 강력한 크로스 플랫폼 웹 소켓 API

- `WebSocket-Node`: Node.js를 위한 웹 소켓 서버 API 구현

- 기타 등등

#### 참고

- [RFC 6545 웹 소켓 프로토콜](https://datatracker.ietf.org/doc/html/rfc6455)

- [웹 소켓 API 규격](https://websockets.spec.whatwg.org//)

- [서버로부터의 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
