import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.isDragging ? '#74b9ff' : props.theme.cardColor};
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.isDragging ? '0px 2px 25px rgba(0,0,0,0.05)' : 'none'};
`;

interface IDragabbleCardProps {
  todo: string;
  index: number;
}

const DragabbleCard = ({ todo, index }: IDragabbleCardProps) => {
  return (
    <Draggable draggableId={todo} index={index} key={todo}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragabbleCard);
