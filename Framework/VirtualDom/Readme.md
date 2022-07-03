## Virtual Dom

웹 개발에 있어서 빼먹을 수 없는 Dom을 가상 Dom을 이용하여 구현한 많은 프레임워크가 존재합니다.

이번에 어떤 방식으로 여러 프레임워크가 가상 Dom을 구현하였는지 살펴보도록 합니다.

### Diffing Algorithm

React의 Render 함수는 jsx문법에 맞는 React Element를 반환합니다. 이 때, 상태가 변하거나 프로퍼티가 변해서 DOM을 업데이트해야 하는 경우에 변경된 부분만 감지해서 바뀐 부분만 업데이트 하는 방식을 취하게 되는데, 이 변경된 부분을 감지하는 방법을 Diffing Algorithm이라고 합니다.

참고: [reconciliation](https://ko.reactjs.org/docs/reconciliation.html#gatsby-focus-wrapper)

### Snabbdom

리액트에서는 리액트 내부적으로 Virtual DOM을 구현되어 있습니다.

반면 Vue.js는 유명한 가상돔 라이브러리 중 하나인 Snabbdo로 구현되어 있다고 합니다.

### 참고 사이트

- https://simsimjae.gitbook.io/simsimreact/
