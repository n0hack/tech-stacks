class Hulk {
    constructor(name, numHand) { }
}
class Captain {
    constructor(numHand) { }
}
let hulk;
let captain;
// 클래스는 스태틱 멤버와 생성자 빼고 동일한지 비교
hulk = captain;
captain = hulk;
let xEmpty;
let yEmpty;
// @ts-ignore
xEmpty = yEmpty; // Error
