## Concept

**webpack**은 모던 JavaScript 애플리케이션을 위한 **정적 모듈 번들러** 입니다.
webpack이 애플리케이션을 처리할 때, 내부적으로는 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들을 생성하는 디펜던시 그래프를 만듭니다.

webpack 버전 4.0.0 이후로는 프로젝트를 번들링하기 위한 설정 파일을 필요로 하지 않습니다. 하지만 사용자 요구에 따라 기대 이상으로 유연하게 설정이 가능 합니다.

### Entry

**엔트리 포인트**는 webpack이 내부의 디펜던시 그래프를 생성하기 위해 사용해야 하는 모듈입니다. webpack은 엔트리 포인트가 (직간접적으로) 의존하는 다른 모듈과 라이브러리를 찾아냅니다.

기본값은 `./src/index.js`이지만, webpack 설정에서 entry 속성을 설정하여 다른 (또는 여러 엔트리 포인트)를 지정할 수 있습니다.

**webpack.config.js**

```javascript
module.exports = {
  entry: "./path/to/my/entry/file.js",
};
```

### Output

**Output** 속성은 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법을 webpack에 알려주는 역할을 합니다.

기본 출력 파일의 경우에는 `./dist/main.js`로 , 생성된 기타 파일의 경우에는 `./dist 폴더`로 설정됩니다.

**webpack.config.js**

```javascript
const path = require("path");

module.exports = {
  entry: "./path/to/my/entry/file.js",
  output: {
    path: path.resolve(__dirname, "dist"), // ./dist 폴더
    filename: "my-first-webpack.bundle.js", // 출력 파일이름
  },
};
```

### Loaders

**webpack**은 기본적으로 **JavaScript와 JSON 파일**만 이해합니다. **로더**를 사용하면 webpack이 다른 유형의 파일을 처리하거나, 그들을 유효한 모듈로 변환 하여 애플리케이션에서 사용하거나 디펜던시 그래프에 추가합니다.

상위 수준에서 로더는 webpack 설정에 두 가지 속성을 가집니다.

- 변환이 필요한 파일(들)을 식별하는 **test 속성**
- 변환을 수행하는데 사용되는 로더를 가리키는 **use 속성**

**webpack.config.js**

```javascript
const path = require("path");

module.exports = {
  output: {
    filename: "my-first-webpack.bundle.js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
    // require(), import문 내에서 '.txt' 파일로 확인되는 경로를 발견하면 변환후 번들에 추가
  },
};
```

위 설정에서는 test와 use라는 두 가지 필수 속성을 가진 하나의 모듈을 위해 **rules 속성**을 정의했습니다.

### Plugins

로더는 특정 유형의 모듈을 변환하는 데 사용되지만, **플러그인**을 활용하여 번들을 최적화하거나, 애셋을 관리하고, 또 환경 변수 주입등과 같은 광범위한 작업을 수행 할 수 있습니다.

플러그인을 사용하려면 require ()를 통해 플러그인을 요청하고 plugins 배열에 추가해야 합니다.
대부분의 플러그인은 옵션을 통해 사용자가 지정할 수 있습니다.
다른 목적으로 플러그인을 여러 번 사용하도록 설정할 수 있으므로 new 연산자로 호출하여 플러그인의 인스턴스를 만들어야 합니다.

**webpack.config.js**

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin"); // npm을 통해 설치
const webpack = require("webpack"); // 내장 plugin에 접근하는 데 사용

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
```

위의 예제에서 html-webpack-plugin은 생성된 모든 번들을 자동으로 삽입하여 애플리케이션용 HTML 파일을 생성합니다.

### Mode

**mode** 파라미터를 development, production 또는 none으로 설정하면 webpack에 내장된 환경별 최적화를 활성화 할 수 있습니다. 기본값은 production 입니다.

**webpack.config.js**

```javascript
module.exports = {
  mode: "production",
};
```

### Browser Compatibility

webpack은 ES5가 호환되는 모든 브라우저를 지원합니다(IE8 이하는 지원되지 않습니다). webpack은 import() 및 require.ensure()을 위한 Promise를 요구합니다. 구형 브라우저를 지원하려면 이러한 표현식을 사용하기 전에 폴리필을 로드해야 합니다.
