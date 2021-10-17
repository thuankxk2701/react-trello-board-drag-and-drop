import React, { useState } from 'react';
import data from '../server/data.json';
import { DragDropContext } from 'react-beautiful-dnd';
import ArticleTaskRow from './ArticleTaskRow';

const ArticleHome = () => {
  const [state, setState] = useState(data);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // Reorder
    console.log(source.droppableId, destination.droppableId);
    const start = state.columns[source.droppableId];
    console.log(start);
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      console.log(newTaskIds, draggableId, source.index, destination.index);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      console.log(newTaskIds);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      console.log(newColumn);
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }
    // Moving
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <article className='article--content'>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
          return (
            <ArticleTaskRow key={column.id} column={column} tasks={tasks} />
          );
        })}
      </article>
    </DragDropContext>
  );
};

export default ArticleHome;
