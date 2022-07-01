## HTML DOM API

`HTML DOM API` 는 [HTML 에 있는 각 요소](https://developer.mozilla.org/en-US/docs/Glossary/Element) 의 기능을 정의하는 인터페이스와 이러한 요소 가 의존하는 지원 유형 및 인터페이스로 구성됩니다.

HTML DOM API에 포함된 기능 영역은 다음과 같습니다.

- [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM) 을 통한 HTML 요소 액세스 및 제어 .

* 양식 데이터에 대한 액세스 및 조작.

* 예를 들어 2D 이미지의 내용과 HTML의 컨텍스트와 상호 작용하여 그 `<canvas>`위에 그림을 그립니다.

* `<audio>` 및 `<video>` HTML 미디어 요소에 연결된 미디어 관리.

* 웹 페이지의 콘텐츠 끌어서 놓기.

* 브라우저 탐색 기록에 대한 액세스

* Web Components , Web Storage , Web Worker , WebSocket 및 Server-sent events 와 같은 다른 API에 대한 지원 및 연결 인터페이스 .

### HTML DOM 개념 및 사용법

이 기사에서는 HTML 요소와 관련된 HTML DOM 부분에 중점을 둘 것입니다. Drag and Drop , WebSockets , Web Storage 등과 같은 다른 영역에 대한 논의는 해당 API에 대한 문서에서 찾을 수 있습니다.

#### HTML 문서의 구조

DOM (Document Object Model )은 document의 구조를 설명하는 아키텍처입니다. 각 문서는 Document 인터페이스의 인스턴스로 표현됩니다 . 문서는 차례로 노드 의 계층적 트리로 구성됩니다 . 여기서 노드는 문서 내의 단일 개체(예: 요소 또는 텍스트 노드)를 나타내는 기본 레코드입니다.

노드는 엄격하게 조직화되어 다른 노드를 함께 그룹화하거나 계층 구조를 구성할 수 있는 지점을 제공하는 수단을 제공합니다. 다른 노드는 문서의 보이는 구성 요소를 나타낼 수 있습니다. 각 노드는 노드에 `Node`대한 정보를 얻기 위한 속성과 DOM 내에서 노드를 생성, 삭제 및 구성하는 방법을 제공하는 인터페이스를 기반으로 합니다.

노드에는 문서에 실제로 표시되는 내용을 포함하는 개념이 없습니다. 그들은 빈 그릇입니다. 시각적 콘텐츠를 표현할 수 있는 노드의 기본 개념은 Element인터페이스에 의해 도입됩니다. 개체 인스턴스 ElementHTML 또는 SVG 와 같은 XML 어휘를 사용하여 만든 문서의 단일 요소를 나타냅니다 .

예를 들어, 두 개의 요소가 있는 문서를 생각해 보십시오. 그 중 하나는 내부에 두 개의 추가 요소가 중첩되어 있습니다.

Document인터페이스는 DOM 사양의 일부로 정의 되지만 HTML 사양은 웹 브라우저의 컨텍스트에서 DOM을 사용하는 것과 관련된 정보를 추가하고 HTML 문서를 구체적으로 나타내기 위해 사용하도록 크게 향상되었습니다.

DocumentHTML 표준에 의해 추가된 사항은 다음과 같습니다.

- 문서가 로드된 위치 , 쿠키 , 수정 날짜 , 참조 사이트 등과 같은 페이지를 로드할 때 HTTP 헤더 에서 제공하는 다양한 정보에 액세스할 수 있도록 지원합니다.

* 문서의 `<head>`블록 및 본문 에 있는 요소 목록과 문서에 포함된 이미지 , 링크 , 스크립트 등 의 목록 에 액세스 합니다.

* [포커스를 검사하고](https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus) [편집 가능한 콘텐츠](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) 에 대한 명령을 실행 하여 사용자와의 상호 작용을 지원합니다 .

* 마우스 및 키보드 이벤트, 드래그 앤 드롭 , 미디어 제어 등에 대한 액세스를 허용하기 위해 HTML 표준에 의해 정의된 문서 이벤트에 대한 이벤트 핸들러 .

* 요소와 문서 모두에 전달할 수 있는 이벤트에 대한 이벤트 처리기. 여기에는 현재 복사 , 잘라내기 및 붙여넣기 작업만 포함됩니다.

#### HTML 요소 인터페이스

인터페이스는 모든 특정 HTML 요소 클래스가 상속하는 인터페이스 Element를 도입하여 특히 HTML 요소를 나타내도록 추가 조정되었습니다 . HTMLElement이것은 Element요소 노드에 HTML 특정 일반 기능을 추가하도록 클래스를 확장합니다. HTMLElement에 의해 추가된 속성 예를 들어 hidden및 innerText. HTMLElement은 또한 모든 전역 이벤트 처리기 를 추가합니다 .

HTML 문서 는 각 노드가 HTMLElement인터페이스로 표현되는 HTML 요소인 DOM 트리입니다 . 클래스 HTMLElement는 차례로 Node하를 구현 므로 모든 요소는 노드이기도 합니다(그러나 그 반대는 아님). 이런 식으로 인터페이스에 의해 구현된 구조적 기능은 NodeHTML 요소에서도 사용할 수 있으므로 요소가 서로 중첩되고 생성 및 삭제되고 이동하는 등의 작업이 수행될 수 있습니다.

그러나 HTMLElement인터페이스는 일반적이며 요소의 ID, 해당 좌표, 요소를 구성하는 HTML, 스크롤 위치에 대한 정보 등과 같은 모든 HTML 요소에 공통적인 기능만 제공합니다.
