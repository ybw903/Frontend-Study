## CSS란?

> CSS는 Style sheet 언어 입니다.

### CSS의 Ruleset

```css
p {
  color: red;
  width: 500px;
}
```

- selector (선택자)
  rule set의 맨 앞에 있는 HTML 요소 이름. 이것은 꾸밀 요소(들)을 선택합니다 (이 예에서는 p 요소). 다른 요소를 꾸미기 위해서는 선택자만 바꿔주세요.

- declaration (선언)
  `color : red` 와 같은 단일 규칙; 꾸미기 원하는 요소의 속성을 명시합니다.

- property (속성)
  주어진 HTML 요소를 꾸밀 수 있는 방법입니다. (이 예에서, color는 p 요소의 속성입니다.) CSS에서, rule 내에서 영향을 줄 속성을 선택합니다.

- value (값)
  속성의 오른쪽에, 콜론 뒤에, 주어진 속성을 위한 많은 가능한 결과중 하나를 선택하기 위해 속성 값을 갖습니다

- Note

  > 각각의 rule set (셀렉터로 구분) 은 반드시 ({}) 로 감싸져야 합니다.
  > 각각의 선언 안에, 각 속성을 해당 값과 구분하기 위해 콜론 (:)을 사용해야만 합니다.
  > 각각의 rule set 안에, 각 선언을 그 다음 선언으로부터 구분하기 위해 세미콜론 (;)을 사용해야만 합니다.

- 여러 요소 선택하기

  여러분은 요소의 여러 타입을 선택하고 모두에게 하나의 rule set 을 적용할 수도 있습니다. 여러 선택자는 콤마로 구분합니다. 예를 들면:

  ```css
  p,
  li,
  h1 {
    color: red;
  }
  ```

### Selector

- [Selector](./Selector/README.md)
