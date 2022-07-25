# 리액트

무작정 리액트 따라 만들기

## 07-25 (ReactNode, ReactChild, ReactElement)

### ReactNode

```ts
type ReactNode =
  | ReactElement
  | string
  | number
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;
```

ReactNode 타입은 `jsx` 내에서 사용할 수 있는 모든 요소의 타입을 의미하는데요, 즉 `string`, `null`, `undefined` 등을 포함하는 가장 넓은 범위를 갖는 타입입니다.

> TMI : ReactNode 타입은 클래스 컴포넌트 의 render 함수가 기본적으로 리턴하는 타입이기도 합니다!
> 반면 함수 컴포넌트는 ReactElement 인터페이스를 리턴합니다!

---

### ReactElement

> 엘리먼트는 React 앱의 가장 작은 단위입니다.

브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있습니다.

React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트합니다.

React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있습니다. React를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 DOM 노드가 있을 수 있습니다.

React 엘리먼트를 루트 DOM 노드에 렌더링하려면 둘 다 ReactDOM.render()로 전달하면 됩니다.

```ts
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

React 엘리먼트는 불변객체입니다.

엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없습니다. 엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여줍니다.

---

```ts
interface ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>
> {
  type: T;
  props: P;
  key: Key | null;
}
```

이 아리송한 코드만 봐서는 뭔지 알기 어려우니, 답을 먼저 소개하자면 ReactElement 는 createElement 함수를 통해 생성된 객체의 타입입니다.

또한 ReactNode 와는 달리 원시 타입을 허용하지 않고 완성된 jsx 요소만을 허용합니다.

앞의 ReactNode 인터페이스 정의에서 확인할 수 있는 것처럼 ReactNode 타입이 ReactElement 타입을 포함하고 있는 관계임을 확인할 수 있습니다

#### JSX.Element와의 관계는?

둘의 차이는 거의 없습니다.

```ts
// index.d.ts
declare global {
    namespace JSX {
        interface Element extends React.ReactElement<any, any> { }
                ...
        }
}
```

`JSX.Element` 는 단순히 `ReactElement` 인터페이스를 상속받은 인터페이스입니다. 내부 구조나 제약 타입이 별도로 존재하지 않아 완전히 동일하다고 봐도 무방합니다.

---

### ReactChild

```ts
type ReactChild = ReactElement | ReactText;
```

`ReactChild`는 `ReactNode` 타입을 적절히 내로잉(narrowing)한 타입입니다.

`ReactElement` 타입이 리액트 요소 객체만을 허용했다면, `ReactChild` 타입은 여기서 원시 타입까지는 허용하는 타입입니다.

---

#### 비교

> 타입별 허용 범위 비교 : ReactNode > ReactChild > ReactElement

#### 참고

- https://ko.reactjs.org/docs/rendering-elements.html
- https://merrily-code.tistory.com/209
