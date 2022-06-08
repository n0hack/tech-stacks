# React Query

- 리액트 쿼리는 쿼리 요청을 간편하게 할 수 있도록 도와주는 라이브러리이다.
- 쿼리 키(key)라는 고유한 값을 이용해 중복 요청에 대한 캐싱(caching)을 지원한다.
- 프로미스 기반 리턴값을 바탕으로 결과(Loading, Error, Data)를 출력한다.

### QueryKey

QueryKey는 고유한 문자열이어야 하며, 더 많은 정보를 담아야 하는 경우 배열 형태로 설정 가능하다.

```javascript
useQuery(['todos', 5, { option: value }], fetchTodo);
useQuery(['todos', 5, { option: value }], ({ queryKey }) =>
  fetchTodo(queryKey[0])
);
```

### Error Handling

요청이 잘못되어 에러 발생 시 isError 프로퍼티로 받을 수 있지만, 직접 발생시키는 경우 error 프로퍼티에서 받을 수도 있다.

```javascript
const { error } = useQuery(['todos', todoId], async () => {
  if (somethingGoesWrong) {
    // error.message로 참조 가능
    throw new Error('Oh no!');
  }
  return data;
});
```
