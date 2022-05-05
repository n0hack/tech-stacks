# TypeScript

타입스크립트는 자바스크립트의 슈퍼셋(Super-set)이며, ES 버전이 오르듯 문법 정도가 추가된 언어라 생각하면 된다. 최근 들어 TS의 인기가 급증하고 있는데 이는 자바스크립트가 너무나 유연하다는 점이 현업에서는 불편함으로 작용하기 때문이다. 자바스크립트에서는 현실에서 불가능해 보이는 것들(예를 들어 1 + true와 같은 코드)을 어떻게든 실행시키게 된다. 이런 것들이 실제 서비스를 운영하는 기업에서는 안정적이지 않기에 개발 단계에서 오류를 검출할 수 있는 타입스크립트가 선호되는 것이다.

> 조금 공부해 보니 OOP 개념이 많이 필요하진 않았고, 러닝 커브가 높은 편도 아니었다.

**JavaScript**

```javascript
function add(a, b) {
  return a + b;
}
```

**TypeScript**

```typescript
function add(a: number, b: number): number {
  // return type은 생략해도 됨 (type infer)
  // 값의 형태를 보고 타입을 결정 (Duck Typing)
  return a + b;
}
```

### TIP

- Duck Typing: 동적 타이핑의 한 종류이며, 변수 및 메서드가 타입을 결정함
- Structural Subtyping: 객체의 실제 구조나 정의에 따라 타입을 결정함

---

이처럼 타입스크립트는 타입을 명시하기 때문에 효율적인 자동 완성(Intellisence)을 제공하기도 하고, 코드에 대한 정적 검사를 진행하기 때문에 개발 단계에서 오류를 파악할 수 있다. 처음에만 타입 작성을 할 때 귀찮아서 그렇지 익숙해지니 너무 강력하고 매력적인 언어이다.

## Projects

- [TypeScript React Tutorial](./projects/ts-react-tutorial)
- [TypeScript React Todo](./projects/ts-react-todo)
- [TypeScript Blockchain](./projects/typechain)

## References

- [타입스크립트 공식문서](https://www.typescriptlang.org/)
- [타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)
- [벨로퍼트와 함께 배우는 리액트](https://react.vlpt.us/using-typescript)
