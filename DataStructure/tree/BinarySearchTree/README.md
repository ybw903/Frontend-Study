## 이진 탐색 트리 (Binary Search Tree, BST)

### 특성

- 왼쪽 자식 노드는 부모보다 작고 오른쪽 자식은 부모보다 크다는 성질을 만족하는 이진 트리

- 이진 탐색 트리에서는 탐색을 효율적으로 진행하기 위해 작거나 큰 경우만 비교하는 간단한 로직이 있기 때문에 중복된 값이 들어 갈 수 없음.

  즉, 키 값은 유일하다 라는 성질을 가짐

- 중위 순회로 이진 탐색 트리를 탐색하게 되면 정렬된 배열 값을 얻을 수 있음.

  - 이진 탐색 트리는 정렬된 상태를 유지하기 때문.

### 삽입

- 삽입하려는 값이 현재 노드보다 작다면 왼쪽 자식 노드로 들어가고 삽입하려는 값이 현재 노드의 값보다 크다면 우측 자식 노드로 들어갑니다.

### 삭제

- 삭제의 경우, 3가지 Case로 나누어서 동작됩니다.

  1. 지워지는 노드가 자식 노드를 갖고 있지 않은 경우,

     - 바로 노드를 제거해줍니다.

  2. 자식노드가 1개 존재하는 경우,

     - 자식 노드가 지워진 부모 노드의 위치로 이동 시켜줍니다.

  3. 지워야 하는 노드의 자식노드가 2개인 경우,

     - 적절한 자식 노드가 부모 노드를 대체해주어야 합니다.

     - 이 때, 적절한 노드는 좌측 자식 노드의 자손 노드 중 제일 오른쪽에 위치한 노드 혹은 우측 자식 노드의 자손 노드 중 제일 좌측에 위치한 노드입니다.