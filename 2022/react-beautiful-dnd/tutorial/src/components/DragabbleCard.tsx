import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
`;

interface IDragabbleCardProps {
  todo: string;
  index: number;
}

const DragabbleCard = ({ todo, index }: IDragabbleCardProps) => {
  return (
    <Draggable draggableId={todo} index={index} key={todo}>
      {(provided) => (
        <Card
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
