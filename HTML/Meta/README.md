## `<meta>`: 문서 레벨 메타데이터 요소

`HTML <meta>` 요소는 `<base>`, `<link>`, `<script>`, `<style>`, `<title>`과 같은 다른 메타관련 요소로 나타낼 수 없는 메타데이터를 나타냅니다.

meta 요소가 제공하는 메타데이터는 다음 네 유형 중 하나입니다.

- `name` 특성을 지정하면 전체 페이지에 적용되는 "문서 레벨 메타데이터"를 제공합니다.

- `http-equiv` 특성을 지정하면 유사한 이름의 HTTP 헤더가 제공하는 정보와 동일한 "프래그마 지시문"이 됩니다.

* `charset` 특성을 지정하면 문서 인코딩에 사용한 문자 인코딩을 나타내는 "문자 집합 선언"이 됩니다.

* `itemprop` 특성을 지정하면 "사용자 정의 메타데이터"를 제공합니다.

### 특성

이 요소는 전역 특성을 포함합니다.

> 참고: `name` 특성은 `<meta>` 요소에 대해 특정한 의미를 가집니다. 하나의 `<meta>` 요소에서, `itemprop` 특성을 `name`, `http-equiv` 또는 `charset` 특성과 함께 설정할 수 없습니다.

- `charset`

  페이지의 문자 인코딩을 선언합니다. 이 특성이 존재할 경우, 그 값은 반드시 문자열 "utf-8"의 대소문자 구분 없는 ASCII 표현이어야 합니다.

- `content`

  http-equiv 또는 name 특성의 값을 담습니다.

* `http-equiv`

  프래그마 지시문을 정의합니다. 특성의 이름(http-equiv(alent))에서 알 수 있듯이, 가능한 값은 특정 HTTP 헤더입니다.

  - `content-security-policy`

    현재 페이지의 [콘텐츠 정책](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy)을 정의할 수 있습니다. 대부분의 콘텐츠 정책은 허용하는 서버 출처와 스크립트 엔드포인트를 지정해 사이트 간 스크립트 공격 방어에 도움을 줍니다.

  - `content-type`

    지정할 경우, content 특성의 값은 반드시 "text/html; charset=utf-8"이어야 합니다. <br/>`참고` : text/html MIME 유형으로 제공하는 문서에서만 사용할 수 있으며, XML MIME 유형의 문서에서는 사용할 수 없습니다.

  - `default-style`

    기본 CSS 스타일 시트 세트의 이름을 지정합니다.

  - `x-ua-compatible`

    지정할 경우, content 특성의 값은 반드시 "IE=edge"여야 합니다. 사용자 에이전트는 이 프래그마를 무시해야 합니다.

  - `refresh`

    다음을 지정합니다.

    - `content` 특성에 양의 정수 값을 설정한 경우, 페이지를 다시 불러오기 전까지의 초 단위 대기시간.

    - `content` 특성이 양의 정수 값을 가지고 그 뒤를 문자열 ;url=과 유효한 URL이 뒤따른다면, 해당 URL로 이동하기 전까지의 초 단위 대기시간

    #### 접근성 고려사항

    refresh 값을 지정한 페이지의 경우 새로고침 사이 간격이 너무 짧을 우려가 있습니다. 스크린 리더 등의 보조 기술로 탐색하는 사용자는 자동 새로고침 이전에 페이지의 내용을 읽고 이해하지 못할 수 있습니다. 또한 저시력 사용자에게 있어, 갑작스럽고 사전 안내도 없는 콘텐츠 업데이트는 어지러울 수 있습니다.

* `name`

  `name`과 `content` 특성을 함께 사용하면 문서의 메타데이터를 이름-값 쌍으로 제공할 수 있습니다. `name`은 이름, `content`는 값을 담당합니다.

  [표준 메타데이터 이름 문서](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta/name)에서 HTML 명세에 포함된 표준 메타데이터 목록을 살펴보세요.

### 예제

```html
<meta charset="utf-8" />

<!-- 3초 후 리다이렉트 -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```
