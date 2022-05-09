## Grid Layout Handbook

- Grid는 Flex와 달리 2차원에 초점을 두고 설계된 레이아웃이다.
- Flex처럼 컨테이너 안에 아이템을 담으며, 레이아웃 설계 시 매우 유연한 장점이 있다.
- fr 단위를 통해 컨테이너 안에서 일정 비율만큼 아이템이 자리할 수 있도록 할 수 있다.

### repeat()

반복되는 부분이 있다면 repeat 함수를 사용해 표기할 수 있으며, 일부분에만 사용할 수도 있다.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```
