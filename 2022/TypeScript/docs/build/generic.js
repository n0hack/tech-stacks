function logText(text) {
    return text;
}
const logTextV1 = logText('Hello Generic');
// 타입 추론 가능
const logTextV2 = logText('Hello Generic');
console.log(logTextV1);
console.log(logTextV2);
const myString = logText;
/* 타입 강조
interface GenericLogTextFn<T> {
  (text: T): T;
}
const myString: GenericLogTextFn<string> = logText;
*/
// 제약 조건 (Contraint)
function getProperty(obj, key) {
    return obj[key];
}
const obj = { a: 1, b: 2, c: 3 };
getProperty(obj, 'a');
