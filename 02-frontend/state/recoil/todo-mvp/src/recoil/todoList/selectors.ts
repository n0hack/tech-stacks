import { selector } from 'recoil';
import { todoListFilterState, todoListState } from './atoms';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    // 두 가지 상태 구독
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const list = get(todoListState);
    const totalNum = list.length;
    const totalCompletedNum = list.filter((item) => item.isComplete).length;
    const totalUncompletedNum = list.filter((item) => !item.isComplete).length;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted };
  },
});
