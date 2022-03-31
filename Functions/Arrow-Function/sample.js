// 화살표 함수는 가장 가까운 렉시컬 환경에서 this를 찾음.
// 그러면 중첩 화살표 함수에서는 this는 중첩을 벗어난 곳?

function justFunc() {
    this.name = "hi";
    const arrowFunc1 = () => {
        console.log(this.name);
        const arrowFunc2 = () => {
            console.log(this.name);
            const arrowFunc3 = () => {
                console.log(this.name);
            }
            arrowFunc3();
        }
        arrowFunc2();
    }
    arrowFunc1();
}

// justFunc내부에 암시적 바인딩이 존재하지 않으면, node객체를 반환함.
// 암시적 바인딩이 존재한다면 의도대로 동작함.
justFunc();