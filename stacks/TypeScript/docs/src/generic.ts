// Length 정도는 확인하고 싶을 때
interface LengthWise {
  length: number;
}

function logText<T extends LengthWise>(text: T): T {
  return text;
}
const logTextV1 = logText<string>('Hello Generic');
// 타입 추론 가능
const logTextV2 = logText('Hello Generic');

console.log(logTextV1);
console.log(logTextV2);

interface GenericLogTextFn {
  <T extends LengthWise>(text: T): T;
}
const myString: GenericLogTextFn = logText;

/* 타입 강조
interface GenericLogTextFn<T> {
  (text: T): T;
}
const myString: GenericLogTextFn<string> = logText; 
*/

// 제약 조건 (Contraint)
function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];
}
const obj = { a: 1, b: 2, c: 3 };
getProperty(obj, 'a');
