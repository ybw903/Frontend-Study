## Table

HTML `<Table>`요소는 행과 열로 이루어진 표를 나타냅니다.

<table>
    <tr>
        <td>콘텐츠 카테고리</td>
        <td>플로우 콘텐츠</td>
    </tr>
    <tr>
        <td>가능한 콘텐츠</td>
        <td>
            순서대로,<br/>1. 선택적인 caption 요소
            <br/>2. 0개 이상의 colgroup요소
            <br/>3. 선택적인 thead 요소
            <br/>4. 다음 중 하나
            <br>* 0개 이상의 tbody 요소
            <br>* 0개 이상의 tr 요소
            <br/>5. 선택적인 tfoot 요소
        </td>
    </tr>
    <tr>
        <td>태그 생략</td>
        <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
        <td>가능한 부모 요소</td>
        <td>플로우 콘텐츠를 허용하는 모든 요소</td>
    </tr>
    <tr>
        <td>가능한 ARIA 역할</td>
        <td>모두</td>
    </tr>
    <tr>
        <td>DOM 인터페이스</td>
        <td>HTMLTableElement</td>
    </tr>
</table>

### 특성

이 요소는 [전역 특성](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

### 예제

#### 간단한 표

```html
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

### 접근성 고려사항

#### 설명문

표의 목적에 대한 명확하고 상세한 설명을 포함하는 [`<caption>`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/caption) 요소를 제공하여 사용자가 표 콘텐츠를 확인할지, 넘어갈지 결정할 때 도움을 줄 수 있습니다.

특히 스크린 리더 등 보조 기술 사용자와 낮은 시력의 사용자, 그리고 인지능력의 저하를 겪고 있는 사용자에게 도움이 됩니다.

- [MDN Adding a caption to your table with `<caption>`](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#adding_a_caption_to_your_table_with_%3Ccaption%3E)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

#### 행과 열 범위 지정

간단한 표의 경우 범위를 자동으로 유추할 수 있기 때문에, 헤더 요소의 scope 특성은 불필요합니다. 그러나 일부 보조 기술이 잘못된 범위를 유추하는 경우도 있기 때문에, 범위를 지정하는 것이 사용자 경험에 도움이 될 수도 있습니다. 복잡한 표에서는 범위를 명시해서 특정 헤더와 연관된 칸에 대한 정보를 제공할 수 있습니다.

**예제**

```html
<table>
  <caption>
    Color names and values
  </caption>
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Teal</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsla(180, 90%, 64%, 1)</code></td>
      <td><code>rgba(81, 246, 246, 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Goldenrod</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsla(38, 90%, 65%, 1)</code></td>
      <td><code>rgba(246, 188, 87, 1)</code></td>
    </tr>
  </tbody>
</table>
```

#### 복잡한 표

너무나 복잡해서 헤더 칸을 확실히 가로 또는 세로로 연결할 수 없는 표의 경우, 스크린 리더와 같은 보조 기술이 분석할 때 어려움을 겪을 수 있습니다. 보통 `colspan`과 {htmlattrxref("rowspan", "td")}} 특성이 존재하는 경우 이 정도로 복잡한 표라고 할 수 있습니다.

이상적으로 보자면, 테이블의 콘텐츠를 나타내는 다른 방법을 생각하는 것이 좋습니다. 이를테면 서로 관련된 더 작은 표로 나눠서 colspan, rowspan 특성의 필요를 제거하는 것입니다. 보조 기술 사용자의 테이블 콘텐츠 이해에 도움을 줄 뿐 아니라, 인지력 문제를 겪고 있어 기존 표의 레이아웃을 이해하는 것이 곤란한 사용자의 경험도 개선할 수 있습니다.

표를 나눌 수 없는 경우 id와 headers 특성을 통해 표의 각 칸을 연관된 헤더 칸과 직접 연결하세요.
