## Background Synchronization API

```
🎈보안 컨텍스트: 이 기능은 일부 또는 모든 지원 브라우저 의 보안 컨텍스트 (HTTPS) 에서만 사용할 수 있습니다 .
```

`service worker`백그라운드 동기화 API는 사용자가 안정적인 네트워크 연결을 가질 때까지 실행할 작업을 연기하는 방법을 제공합니다 .

### 백그라운드 동기화 개념 및 사용법

백그라운드 동기화 API를 사용하면 장치가 오프라인인 경우 웹 응용 프로그램이 서버 동기화 작업을 서비스 작업자에게 연기하여 나중에 처리할 수 있습니다. 응용 프로그램이 사용되는 동안 보낼 수 없는 경우 백그라운드에서 요청을 보내는 것이 용도에 포함될 수 있습니다.

예를 들어 이메일 클라이언트 응용 프로그램은 장치에 네트워크 연결이 없는 경우에도 사용자가 언제든지 메시지를 작성하고 보낼 수 있습니다.

애플리케이션 프론트엔드는 동기화 요청을 등록하기만 하면 서비스 워커는 네트워크가 다시 존재하고 동기화를 처리할 때 경고를 받습니다.

`SyncManager`인터페이스는 를 통해 사용할 수 있습니다 `ServiceWorkerRegistration.sync.` 고유한 태그 식별자가 동기화 이벤트 '이름'으로 설정되어 `ServiceWorker`스크립트 내에서 수신될 수 있습니다. 이벤트가 수신되면 서버에 요청을 보내는 것과 같은 사용 가능한 모든 기능을 실행할 수 있습니다.

이 API는 `서비스 워커에 의존`하므로 이 API에서 제공하는 기능은 `보안 컨텍스트에서만 사용`할 수 있습니다.

```
참고: 작성 당시 백그라운드 동기화 API는 설치된 프로그레시브 웹 앱 을 통해서만 사용할 수 있습니다.
```

### 백그라운드 동기화 인터페이스

### SyncManager

네트워크 연결을 통해 나중에 서비스 워커에서 실행할 작업을 등록합니다.

이러한 작업을 백그라운드 동기화 요청 이라고 합니다 .

### SyncEvent

ServiceWorker의 global scope로 전송된 동기화 이벤트를 나타냅니다 . 네트워크 연결을 통해 서비스 작업자에서 작업을 실행하는 방법을 제공합니다.

### 서비스 워커 추가

Service Worker API 에 대한 다음 추가 사항은 Background Sync를 사용하기 위한 진입점을 제공하기 위해 Background Sync 사양에 지정됩니다.

- ServiceWorkerRegistration.sync (Read Only)

  SyncManager네트워크 연결로 실행할 작업을 등록하기 위한 인터페이스에 대한 참조를 반환 합니다.

* ServiceWorkerGlobalScope.onsync

  이벤트가 발생할 때마다 발생하는 이벤트 핸들러 sync입니다.

  이는 네트워크를 사용할 수 있는 경우 즉시 발생하거나 네트워크를 사용할 수 있게 되는 즉시 발생합니다.

### 예

다음 예는 인터페이스를 사용하는 방법을 보여줍니다.

#### 백그라운드 동기화 요청

다음 비동기 함수는 탐색 컨텍스트에서 백그라운드 동기화를 등록합니다.

```javascript
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register("sync-messages");
  } catch {
    console.log("Background Sync could not be registered!");
  }
}
```

#### 태그로 백그라운드 동기화 확인

이 코드는 지정된 태그가 있는 백그라운드 동기화 작업이 등록되었는지 확인합니다.

```javascript
navigator.serviceWorker.ready.then((registration) => {
  registration.sync.getTags().then((tags) => {
    if (tags.includes("sync-messages"))
      console.log("Messages sync already requested");
  });
});
```

#### 서비스 워커 내에서 백그라운드 동기화 수신 대기

다음 예는 서비스 워커에서 백그라운드 동기화 이벤트에 응답하는 방법을 보여줍니다.

```javascript
self.addEventListener("sync", (event) => {
  if (event.tag == "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```
