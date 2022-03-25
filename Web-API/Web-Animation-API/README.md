## Web Animation API

`Web Animations API`를 사용하면 DOM 요소의 애니메이션과 같은 웹 페이지 표시에 대한 동기화 및 타이밍 변경이 가능합니다.

타이밍 모델과 애니메이션 모델의 두 가지 모델을 결합하여 수행합니다.

### 개념 및 사용법

`Web Animations API`는 브라우저와 개발자가 DOM 요소에서 애니메이션을 설명할 수 있는 공통 언어를 제공합니다.

API 이면의 개념과 사용 방법에 대한 자세한 내용 은 Web Animations API 사용을 참조하세요 .

### 웹 애니메이션 인터페이스

### Animation

`Web Animations API`의 `Animation` 인터페이스는 단일 애니메이션 플레이어를 나타내며 애니메이션 노드 또는 소스에 대한 재생 컨트롤과 타임라인을 제공합니다.

`EventTarget` ⬅ `Animation`

#### Constructor

* `Animation()`
    
    새 Animation 개체 인스턴스를 만듭니다.


#### Properties

* `currentTime`

    실행 중이거나 일시 중지되었는지 여부에 관계없이 애니메이션의 현재 시간 값(`밀리초`)입니다. 애니메이션에 `timeline`이 없으면 비활성화되거나 아직 재생되지 않은 경우, 값은 `null`입니다.

* `effect`

    `AnimationEffect`이 애니메이션과 연결된 것을 가져오고 설정합니다 . 이것은 일반적으로 `KeyframeEffect`객체가 됩니다.

* `finished` (read only)

    이 애니메이션에 대해 현재 완료된 Promise를 반환합니다.

* `pending` (read only)

    애니메이션이 현재 재생 시작 또는 실행 중인 애니메이션 일시 중지와 같은 비동기 작업을 기다리고 있는지 여부를 나타냅니다.

* `playState` (read only)

    애니메이션의 재생 상태를 설명하는 열거된 값을 반환합니다.

* `playbackRate`

    애니메이션의 재생 속도를 가져오거나 설정합니다.

* `ready` (read only)

    이 애니메이션에 대해 현재 준비된 약속을 반환합니다.

* `replaceState`
    
    애니메이션의 교체 상태를 반환합니다. 애니메이션 이 active대체되었거나 애니메이션 에서 호출된 경우입니다 persisted.Animation.persist()

* `startTime`

    애니메이션 재생이 시작되어야 하는 예약된 시간을 가져오거나 설정합니다.

* `timeline`

    timeline이 애니메이션과 연결된 것을 가져오거나 설정합니다 .


#### Methods

* `cancel()`

    keyframeEffects이 애니메이션으로 인한 모든 것을 지우고 재생을 중단합니다.

* `commitStyles()`
    
    애니메이션이 제거된 후에도 애니메이션의 끝 스타일 지정 상태를 애니메이션되는 요소에 커밋합니다. 속성 내부의 속성 형태로 애니메이션되는 요소에 최종 스타일 지정 상태가 기록됩니다 style.

* `finish()`

    애니메이션이 재생 중인지 반전 중인지에 따라 애니메이션의 한쪽 끝을 찾습니다.

* `pause()`

    애니메이션 재생을 일시 중단합니다.

* `persist()`

    브라우저의 자동으로 채우기 애니메이션 제거 동작 으로 인해 제거될 경우 애니메이션을 명시적으로 유지합니다 .

* `play()`

    애니메이션 재생을 시작 또는 재개하거나 이전에 종료된 경우 애니메이션을 다시 시작합니다.

* `reverse()`

    재생 방향을 반대로 하여 애니메이션 시작 시 중지합니다. 애니메이션이 완료되었거나 재생되지 않은 경우 처음부터 끝까지 재생됩니다.

* `updatePlaybackRate()`

    재생 위치를 처음 동기화한 후 애니메이션의 속도를 설정합니다.