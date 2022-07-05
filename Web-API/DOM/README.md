## 문서 객체 모델 (DOM)

문서 객체 모델(DOM)은 메모리에 웹 페이지 문서 구조를 표현함으로써 스크립트 및 프로그래밍 언어와 페이지를 연결합니다. 이때 스크립트는 주로 JavaScript를 의미하나 HTML, SVG, XML 객체를 문서로 모델링 하는 것은 JavaScript 언어의 일부가 아닙니다.

DOM은 문서를 논리 트리로 표현합니다. 트리의 각 브랜치는 노드에서 끝나며, 각 노드는 객체를 갖습니다. DOM 메서드를 사용하면 프로그래밍적으로 트리에 접근할 수 있습니다. 이를 통해 문서의 구조, 스타일, 콘텐츠를 변경할 수 있습니다.

노드는 이벤트 처리기도 포함할 수 있습니다. 이벤트가 발생한 순간, 해당 이벤트와 연결한 처리기가 발동합니다.

> 더 알아보려면: `DOM 소개 문서`를 방문해보세요.

### DOM 인터페이스

- Attr (en-US)
- CDATASection (en-US)
- CharacterData
- ChildNode Experimental
- Comment
- CustomEvent
- Document
- DocumentFragment
- DocumentType
- DOMError (en-US) Deprecated
- DOMException (en-US)
- DOMImplementation (en-US)
- DOMString
- DOMTimeStamp (en-US)
- DOMSettableTokenList
- DOMStringList (en-US)
- DOMTokenList
- Element
- Event
- EventTarget
- HTMLCollection
- MutationObserver
- MutationRecord (en-US)
- NamedNodeMap (en-US)
- Node
- NodeFilter
- NodeIterator (en-US)
- NodeList
- NonDocumentTypeChildNode (en-US)
- ParentNode
- ProcessingInstruction (en-US)
- Selection Experimental
- Range
- Text
- TextDecoder (en-US) Experimental
- TextEncoder (en-US) Experimental
- TimeRanges (en-US)
- TreeWalker
- URL
- Window
- Worker
- XMLDocument (en-US) Experimental
