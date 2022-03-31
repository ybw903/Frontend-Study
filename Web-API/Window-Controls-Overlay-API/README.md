## Window Controls Overlay API

> ❗❗실험적: 실험적 기술 입니다 . 프로덕션에서 사용하기 전에 브라우저 호환성 표
를 주의 깊게 확인하십시오 .

Window Controls Overlay API는 데스크톱 운영 체제에 설치된 Progressive Web Apps에 기본 창 제목 표시줄을 숨기고 앱 창의 전체 표면 영역에 자체 콘텐츠를 표시하여 제어 버튼(최대화, 최소화 및 닫기)을 돌리는 기능을 제공합니다. 오버레이로.

### 기능 선택
이 기능을 사용하기 전에 다음 조건이 충족되어야 합니다.

웹 앱 매니페스트의 display_override멤버는 로 설정해야 합니다 window-controls-overlay.
프로그레시브 웹 앱은 데스크톱 운영 체제에 설치해야 합니다.