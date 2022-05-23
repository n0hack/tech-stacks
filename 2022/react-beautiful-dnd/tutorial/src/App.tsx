import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { todoState } from './atoms';
import Board from './components/Board';

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source, draggableId } = info;

    if (!destination) return;

    // 동일한 Board
    if (destination?.droppableId === source.droppableId) {
      const newTodo = [...todos[source.droppableId]];
      [newTodo[source.index], newTodo[destination.index]] = [
        newTodo[destination.index],
        newTodo[source.index],
      ];
      setTodos((prev) => ({ ...prev, [destination.droppableId]: newTodo }));
    } else {
      const newSrc = [...todos[source.droppableId]];
      const newDest = [...todos[destination.droppableId]];

      newSrc.splice(source.index, 1);
      newDest.splice(destination.index, 0, draggableId);

      setTodos((prev) => ({
        ...prev,
        [source.droppableId]: newSrc,
        [destination.droppableId]: newDest,
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(todos).map((boardId) => (
            <Board key={boardId} todos={todos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
