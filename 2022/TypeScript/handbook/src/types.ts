// Intersection Types
function extend<First, Second>(first: First, second: Second) {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name) {
    console.log(`Hello I'm ${name}`);
  }
}

const nana = extend(new Person('Nana'), ConsoleLogger.prototype);
nana.log(nana.name);

type LinkedList<T> = T & { next: LinkedList<T> };
interface Person {
  name: string;
}
var people: LinkedList<Person>;
// people.next.name;
// people.next.next.next.next.name;

// Polymorthic 'this' types
class BasicCalculator {
  constructor(protected value: number = 0) {}

  public currentValue(): number {
    return this.value;
  }

  public add(operand: number): this {
    this.value += operand;
    return this;
  }

  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}
console.log(new BasicCalculator(2).multiply(5).add(1).currentValue());

// Index types
// keyof는 인덱스 타입 쿼리 연산자
// T[K]는 인덱스 접근 연산자
function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map((n) => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let taxi: Car = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2014,
};

let makeAndModel = pluck(taxi, ['manufacturer', 'model']);
let modelAndYear = pluck(taxi, ['model', 'year']);
console.log(makeAndModel, modelAndYear);

// Mapped types
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface PersonNoHack {
  name: string;
  age: number;
}

type ReadonlyPerson = MyReadonly<PersonNoHack>;
type PartialPerson = MyPartial<PersonNoHack>;
type PickPerson = MyPick<PersonNoHack, 'name'>;

type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;

// Conditional Types
// T extends U? X : Y --- T가 U에 할당될 수 있으면~
declare function f<T extends boolean>(x: T): T extends true ? string : number;

let x = f(Math.random() < 0.5);

interface Foo {
  propA: boolean;
  propB: boolean;
}

declare function f<T>(x: T): T extends Foo ? string : number;

function foo<U>(x: U) {
  let a = f(x);
  let b: string | number = a;
}

// Distributed Conditional Types
type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

type T20 = Boxed<string>;
type T21 = Boxed<number[]>;
type T22 = Boxed<string | number[]>;

type Diff<T, U> = T extends U ? never : T;
type Filter<T, U> = T extends U ? T : never;

type T30 = Diff<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;

type MyNonNullable<T> = Diff<T, null | undefined>;

type T34 = MyNonNullable<string | number | undefined>;
type T35 = MyNonNullable<string | string[] | null | undefined>;

// infer?
type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type T0 = Unpacked<string>;
type T1 = Unpacked<string[]>;
type T2 = Unpacked<() => string>;
type T3 = Unpacked<Promise<string>>;
type T4 = Unpacked<Promise<string>[]>;
type T5 = Unpacked<Unpacked<Promise<string>[]>>;
