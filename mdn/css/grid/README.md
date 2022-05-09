## Grid Layout Handbook

- Grid는 Flex와 달리 2차원에 초점을 두고 설계된 레이아웃이다.
- Flex처럼 컨테이너 안에 아이템을 담으며, 레이아웃 설계 시 매우 유연한 장점이 있다.

### repeat()

반복되는 부분이 있다면 repeat 함수를 사용해 표기할 수 있으며, 일부분에만 사용할 수도 있다.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: 20px repeat(6, 1fr); 20px */
  /* grid-template-columns: repeat(5, 1fr, 2fr); 1fr 2fr 5세트 반복 */
}
```

### minmax()

콘텐츠 크기가 최소 크기보다 큰 경우 유동적으로 크기를 조정하고 싶을 수 있으며 이 때 사용하기 좋은 함수이다.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```
