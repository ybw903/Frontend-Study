## 파일 API

### 개념 및 사용법

파일 API를 사용하면 웹 응용 프로그램에서 파일과 해당 콘텐츠에 액세스할 수 있습니다.

웹 애플리케이션은 사용자가 `파일 <input>요소` 를 사용 하거나 `끌어서 놓기`를 통해 파일을 사용할 수 있게 하면 파일에 액세스할 수 있습니다 .

이러한 방식으로 사용 가능한 파일 집합은 `FileList`웹 응용 프로그램이 개별 `File`개체를 검색할 수 있도록 하는 개체로 표시됩니다. 차례로 File개체는 파일 이름, 크기, 유형 및 마지막 수정 날짜와 같은 메타데이터에 대한 액세스를 제공합니다.

`File`개체는 파일 내용에 액세스하기 위해 `FileReader` 개체에 전달할 수 있습니다 . `FileReader` 인터페이스는 비동기식이지만 `web workers` 에서만 사용할 수 있는 동기식 버전은 `FileReaderSync`인터페이스 에서 제공합니다.

### Interfaces

- `Blob`

  변경할 수 없는 원시 데이터의 파일과 같은 객체를 의미하는 "Binary Large Object"를 나타냅니다. `Blob`텍스트 또는 이진 데이터로 읽거나 `ReadableStream`해당 메서드를 데이터 처리에 사용할 수 있도록 변환 할 수 있습니다

- `File`

  파일에 대한 정보를 제공하고 웹 페이지의 JavaScript가 해당 콘텐츠에 액세스할 수 있도록 합니다.

- `FileList`

  HTML `<input>`요소의 files속성에 의해 반환됩니다 . 이렇게 하면 `<input type="file">`요소로 선택한 파일 목록에 액세스할 수 있습니다. 드래그 앤 드롭 API를 사용할 때 웹 콘텐츠에 드롭된 파일 목록에도 사용됩니다. `DataTransfer`객체의 사용법에 대한 자세한 내용을 참고하십시오.

- `FileReader`

  `File`또는 `Blob`객체를 사용하여 읽을 파일 또는 데이터를 지정하여 웹 응용 프로그램이 사용자 컴퓨터에 저장된 파일(또는 원시 데이터 버퍼)의 내용을 비동기적으로 읽을 수 있도록 합니다 .

- `FileReaderSync`

  `File`또는 `Blob`객체를 사용하여 읽을 파일 또는 데이터를 지정하여 웹 응용 프로그램이 사용자 컴퓨터에 저장된 파일(또는 원시 데이터 버퍼)의 내용을 동기적으로 읽을 수 있도록 합니다 .

#### 다른 인터페이스에 대한 확장

- `URL.createObjectURL()`

  `File` 또는 `Blob` 객체를 가져오는데 사용할 수 있는 URL을 만듭니다.

- `URL.revokeObjectURL()`

  `URL.createObjectURL()`을(를) 호출하여 이전에 생성된 기존 개체 URL을 해제합니다

### 예

#### 파일 읽기

이 예제에서는 file `<input>` 요소를 제공하고 사용자가 파일을 선택하면 텍스트로 선택된 첫 번째 파일의 내용을 읽고 그 결과를 `<div>`에 표시합니다.

```HTML
<input type="file">
<div class="output"></div>
```

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

```javascript
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const [file] = fileInput.files;
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      output.innerText = reader.result;
    });
    reader.readAsText(file);
  }
});
```
