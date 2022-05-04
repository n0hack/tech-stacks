import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({ counter, todos });

export default rootReducer;

// 루트 리듀서의 반환값을 통해 타입 유추
export type RootState = ReturnType<typeof rootReducer>;
