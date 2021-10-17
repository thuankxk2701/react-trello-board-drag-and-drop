import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ArticleColumn from './ArticleListColumn';
const ArticleRow = ({ column, tasks }) => {
  return (
    <ul className='article--row'>
      <h1 className='article--title'>{column.title}</h1>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className='article--scroll'
            droppableId
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <ArticleColumn key={task.id} task={task} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </ul>
  );
};
export default ArticleRow;
