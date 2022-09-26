# Selector

## 선택자 종류

### Universal selectors (범용 선택자)

CSS 범용 선택자 (\*)는 모든 유형의 요소와 일치합니다.

```css
/* Selects all elements */
* {
  color: green;
}
```

Univeral selectors를 사용할 때, @namespace를 사용하여 네임스페이스를 지정할 수 있습니다.

이는 인라인 SVG 또는 MathML이 있는 HTML 또는 여러 어휘를 혼합하는 XML과 같은 여러 네임스페이스를 포함하는 문서를 처리할 때 유용합니다.

- ns|\* : 네임스페이스 ns 의 모든 요소와 일치
- \*|\* : 모든 요소와 일치
- |\* : 선언된 네임스페이스가 없는 모든 요소와 일치

### Type selectors (유형 선택자)

유형 선택자는 노드 이름으로 요소를 일치시킵니다. 즉, 문서 내에서 주어진 유형의 모든 요소를 선택합니다.

```css
/* All <a> elements. */
a {
  color: red;
}
```

Type selectors를 사용할 때, @namespace를 사용하여 네임스페이스를 지정할 수 있습니다.

이것은 인라인 SVG 또는 MathML이 있는 HTML 또는 여러 어휘를 혼합하는 XML과 같은 여러 네임스페이스를 포함하는 문서를 처리할 때 유용합니다.

- ns|h1 : 네임스페이스 ns의 `<h1>` 의 요소와 일치
- \*|h1 : 모든 `<h1>` 요소와 일치
- |h1 : 선언된 네임스페이스가 없는 모든 `<h1>`요소와 일치

#### Syntax

```css
element { style properties }
```

### Class selectors (클래스 선택자)

CSS 클래스 선택자는 class속성의 내용을 기반으로 요소와 일치 합니다.

```css
/* All elements with class="spacious" */
.spacious {
  margin: 2em;
}

/* All <li> elements with class="spacious" */
li.spacious {
  margin: 2em;
}

/* All <li> elements with a class list that includes both "spacious" and "elegant" */
/* For example, class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
```

#### Syntax

```css
.class_name { style properties }
```

`속성 선택자`로 아래와 같이 표현 할 수도 있습니다.

```css
[class~=class_name] { style properties }
```

blarblarblar

### ID selectors (ID 선택자)

CSS ID 선택자는 요소의 id속성 값을 기반으로 요소와 일치합니다.

요소를 선택하려면 해당 id속성이 선택자에 제공된 값과 정확히 일치해야 합니다.

```css
/* The element with id="demo" */
#demo {
  border: red 2px solid;
}
```

#### Syntax

```css
#id_value { style properties }
```

`속성 선택자`로 아래와 같이 표현 할 수도 있습니다.

```css
[id=id_value] { style properties }
```

### Attribute selectors (속성 선택자)

CSS 속성선택자는 주어진 속성의 존재 또는 값을 기반으로 요소를 일치시킵니다.

```css
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"]
{
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}
```

#### Syntax

- `[attr]`

  속성 이름이 attr인 요소를 나타 냅니다.

* `[attr=value]`

  값이 정확히 value인 속성 이름이 attr 인 요소를 나타 냅니다.

* `[attr~=value]`

  값이 공백으로 구분된 단어 목록이고 그 중 하나가 정확히 value인 속성 이름이 attr 인 요소를 나타 냅니다.

* `[attr|=value]`

  속성 이름이 attr인 요소를 나타냅니다.

  그 값은 정확히 값이거나 값으로 바로 시작할 수 있고 바로 뒤에 하이픈이 올 수 있습니다 -(U+002D).

  언어 하위 코드 일치에 자주 사용됩니다.

* `[attr^=value]`

  값이 value 접두사(앞)인 속성 이름이 attr 인 요소를 나타 냅니다.

* `[attr$=value]`

  value가 접미사(뒤에)인 attr 속성 이름을 가진 요소를 나타 냅니다.

* `[attr*=value]`

  속성 이름이 attr 인 요소를 나타내며, 그 값에는 문자열 내에서 값 이 한 번 이상 포함됩니다 .

* `[attr operator value i]`

  닫는 대괄호 앞에 i(또는 I)을 추가하면 값이 대소문자를 구분하지 않고 비교됩니다(ASCII 범위 내의 문자에 대해).

* `[attr operator value s]` (Experimental)

  닫는 대괄호 앞에 s(또는 S)을 추가하면 값이 대소문자를 구분하여 비교됩니다(ASCII 범위 내의 문자에 대해).

#### Example

```css
a {
  color: blue;
}

/* Internal links, beginning with "#" */
a[href^="#"] {
  background-color: gold;
}

/* Links with "example" anywhere in the URL */
a[href*="example"] {
  background-color: silver;
}

/* Links with "insensitive" anywhere in the URL,
   regardless of capitalization */
a[href*="insensitive" i] {
  color: cyan;
}

/* Links with "cAsE" anywhere in the URL,
with matching capitalization */
a[href*="cAsE" s] {
  color: pink;
}

/* Links that end in ".org" */
a[href$=".org"] {
  color: red;
}

/* Links that start with "https" and end in ".org" */
a[href^="https"][href$=".org"] {
  color: green;
}
```
