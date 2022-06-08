class Hulk {
  handSize: number;
  constructor(name: string, numHand: number) {}
}

class Captain {
  handSize: number;
  constructor(numHand: number) {}
}

let hulk: Hulk;
let captain: Captain;

// 클래스는 스태틱 멤버와 생성자 빼고 동일한지 비교
hulk = captain;
captain = hulk;

// 제네릭은 타입이 속성에 할당되었는지 여부를 체크 후 비교
interface NotEmpty<T> {
  data: T;
}
let xEmpty: NotEmpty<number>;
let yEmpty: NotEmpty<string>;

// @ts-ignore
xEmpty = yEmpty; // Error
