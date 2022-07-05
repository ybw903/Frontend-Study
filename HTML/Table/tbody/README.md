## `<tbody>`: 표 본문 요소

### 시도해보기

HTML `<tbody>` 요소는 표의 여러 행(`<tr>`)을 묶어서 표 본문을 구성합니다.

```html
<table>
  <caption>
    Council budget (in £) 2018
  </caption>
  <thead>
    <tr>
      <th>Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Donuts</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">Stationery</th>
      <td>18,000</td>
    </tr>
  </tbody>
</table>
```

`<tbody>` 요소와 그 사촌인 `<thead>`, `<tfoot>` 요소는 화면과 프린터에 렌더링 할 때 뿐만 아니라 접근성 차원에서도 유용한 의미를 표의 행에 부여합니다.

<table>
    <tr>
        <td>콘텐츠 카테고리</td>
        <td>없음.</td>
    </tr>
    <tr>
        <td>가능한 콘텐츠</td>
        <td>
            0개 이상의 tr 요소
        </td>
    </tr>
    <tr>
        <td>태그 생략</td>
        <td>	tbody 요소는 부모 table 요소의 렌더링에 반드시 필요한 요소는 아닙니다. 그러나 table 요소의 자식 중 tr 요소가 존재하면 사용할 수 없습니다.</td>
    </tr>
    <tr>
        <td>가능한 부모 요소</td>
        <td>table 요소. caption, colgroup, thead 요소가 존재하는 경우, 그 뒤에 위치할 수 있습니다.</td>
    </tr>
    <tr>
        <td>가능한 ARIA 역할</td>
        <td>모두</td>
    </tr>
    <tr>
        <td>DOM 인터페이스</td>
        <td>HTMLTableSectionElement</td>
    </tr>
</table>

### 특성

이 요소는 전역 특성만 포함합니다.

### 사용 일람

- 표의 헤더 행을 나타내기 위해 `<thead>` 요소를 사용한 경우, `<tbody>` 요소는 반드시 그 뒤에 위치해야 합니다.

- `<tbody>`를 사용할 경우, `<table>`의 바로 밑 자식이면서 `<tbody>`에 속하지 않는 `<tr>` 요소는 사용할 수 없습니다. 모든 비 헤더, 비 푸터 행은 반드시 `<tbody>`의 자식으로 존재해야 합니다.

* 문서 출력 시, `<thead>`와 `<tfoor>` 요소는 모든 페이지에서 같거나 거의 같은 정보를 나타내고, `<tbody>` 요소는 서로 다른 정보를 나타냅니다.

* 표를 화면 맥락(브라우저 창 등)에서 표시할 때, 화면이 표 전체를 보여주기에 충분히 크지 않은 경우 사용자 에이전트는 같은 부모의 `<thead>`, `<tbody>`, `<tfoot>`, `<caption>` 요소를 서로 따로 스크롤 가능토록 설정할 수 있습니다.

* 하나의 표에 다수의 `<tbody>`를 연속적으로 사용할 수 있으며, 이를 통해 커다란 표의 행을 구획으로 나눌 수 있습니다. 필요한 경우 각 구획에 서로 다른 서식을 적용할 수도 있습니다.

### 예제

다음은 `<tbody>` 요소 사용법을 보이는 예제입니다. 더 많은 예제는 `<table>`에서도 볼 수 있습니다.

#### 기본 예제

이번 예제는 `<thead>`와 <`tbody>`를 사용해 학생 그룹의 정보를 나열하는 표를 생성합니다.

#### HTML

표의 HTML은 다음과 같습니다. 학생의 정보를 나타내는 표 본문 칸이 모두 하나의 <tbody> 요소에 속함에 주의하세요.

```html
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
      <th>Major</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>Computer Science</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>Russian Literature</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>Astrophysics</td>
    </tr>
  </tbody>
</table>
```

#### 다중 본문

`<tbody>` 여러 요소 를 사용하여 테이블 내에 여러 섹션을 만들 수 있습니다 . 각각은 잠재적으로 자체 헤더 행을 가질 수 있습니다. 그러나 테이블당 `<thead>`하나만 있을 수 있습니다! 이 때문에 각 `<tbody>`요소 내에 헤더를 생성하려면 `<th>`로 채워진 `<tr>`요소 를 사용해야 합니다 . 어떻게 했는지 봅시다.

앞의 예를 사용하여 목록에 학생을 더 추가하고 테이블을 업데이트하여 모든 행에 각 학생의 전공을 나열하는 대신 학생들이 각 전공에 대한 제목 행과 함께 전공별로 그룹화되도록 합시다.

#### HTML

```html
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">Computer Science</th>
    </tr>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
    </tr>
    <tr>
      <td>4077830</td>
      <td>Pierce, Benjamin</td>
    </tr>
    <tr>
      <td>5151701</td>
      <td>Kirk, James</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">Russian Literature</th>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">Astrophysics</th>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
    </tr>
    <tr>
      <td>8892377</td>
      <td>Toyota, Hiroko</td>
    </tr>
  </tbody>
</table>
```
