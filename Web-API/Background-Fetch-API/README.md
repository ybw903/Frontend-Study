## Background-Fetch-API

```
🛠실험적: 실험적 기술 입니다 .
프로덕션에서 사용하기 전에 브라우저 호환성 표
를 주의 깊게 확인하십시오 .
```

Background Fetch API 는 영화, 오디오 파일 및 소프트웨어와 같이 상당한 시간이 소요될 수 있는 다운로드를 관리하는 방법을 제공합니다.

### 개념 및 사용법

웹 응용 프로그램에서 사용자가 대용량 파일을 다운로드해야 하는 경우 다운로드가 완료되려면 사용자가 페이지에 계속 연결되어 있어야 하는 문제가 종종 발생합니다.

연결이 끊어지면 탭을 닫거나 다운로드가 중지된 페이지에서 다른 곳으로 이동합니다.

[`Background Synchronization API`](https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API) 서비스 작업자가 사용자가 연결될 때까지 처리를 연기할 수 있는 방법을 제공합니다.

그러나 대용량 파일 다운로드와 같은 장기 실행 작업에는 사용할 수 없습니다.

백그라운드 동기화를 사용하려면 가져오기가 완료될 때까지 서비스 작업자가 활성 상태를 유지해야 하고 배터리 수명을 절약하고 백그라운드에서 발생하는 원치 않는 작업을 방지하기 위해 브라우저가 어느 시점에서 작업을 종료해야 합니다.

...(Later)
