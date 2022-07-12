# SWR

"SWR"이라는 이름은 [`HTTP RFC 5861`](https://datatracker.ietf.org/doc/html/rfc5861)에 의해 알려진 HTTP 캐시 무효 전략인 stale-while-revalidate에서 유래되었습니다. SWR은 먼저 캐시(스태일)로부터 데이터를 반환한 후, fetch 요청(재검증)을 하고, 최종적으로 최신화된 데이터를 가져오는 전략입니다.

> ✔ SWR을 사용하면 컴포넌트는 지속적이며 자동으로 데이터 업데이트 스트림을 받게 됩니다.
> 그리고 UI는 항상 빠르고 반응적입니다.

## 개요

```javascript
import useSWR from "swr";

function Profile() {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

이 예시에서, `useSWR` hook은 `key` 문자열과 `fetcher` 함수를 받습니다. `key`는 데이터의 고유한 식별자이며(일반적으로 API URL) `fetcher`로 전달될 것입니다. `fetcher`는 데이터를 반환하는 어떠한 비동기 함수도 될 수 있습니다. 네이티브 fetch 또는 Axios와 같은 도구를 사용할 수 있습니다.

hook은 두 개의 값을 반환합니다: 요청의 상태에 기반한 `data`와 `error`.

## 기능

단 한 줄의 코드로 프로젝트 내의 데이터 가져오기 로직을 단순화할 수 있으며, 다음과 같은 모든 놀라운 기능들을 바로 사용할 수도 있습니다.

빠르고, 가볍고, 재사용 가능한 데이터 가져오기
내장된 캐시 및 요청 중복 제거
실시간 경험
전송 및 프로토콜에 구애받지 않음
SSR / ISR / SSG support
TypeScript 준비
React Native
SWR은 더 나은 경험을 구축할 수 있도록 속도, 정확성, 안정성의 모든 측면을 다룹니다.

빠른 페이지 네비게이션
인터벌 폴링
데이터 의존성
포커스시 재검증
네트워크 회복시 재검증
로컬 뮤테이션(Optimistic UI)
스마트한 에러 재시도
페이지 및 스크롤 위치 복구
React Suspense
