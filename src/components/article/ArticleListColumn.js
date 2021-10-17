import React from 'react';

import { Draggable } from 'react-beautiful-dnd';
import ArticleImage from './ArticleImage';

const ArticleColumn = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <li
          className='article--box'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <span className='article--box__title'>{task.title}</span>
          <hr />
          <div className='article--box__middle'>
            <ArticleImage
              srcImg={task['image-1']}
              typeAlt={'ImagePhoto'}
              typeClass={'middle__article-image'}
            />

            <div className='middle__article-text'>
              <h1>{task.name}</h1>
              <span>{task.information}</span>
            </div>
          </div>
          <hr />
          <div className='article--box__footer'>
            <div className='article--box__footer--left'>
              <ArticleImage
                srcImg={task['icon-pal']}
                typeAlt={'IconPhoto'}
                typeClass={'footer--icon'}
              />
              <ArticleImage
                srcImg={task['image-2']}
                typeAlt={'ImagePhoto'}
                typeClass={'footer__left--image'}
              />

              <ArticleImage
                srcImg={task['image-3']}
                typeAlt={'ImagePhoto'}
                typeClass={'footer__left--image'}
              />
              <ArticleImage
                srcImg={task['image-4']}
                typeAlt={'ImagePhoto'}
                typeClass={'footer__left--image'}
              />
            </div>
            <div className='article--box__footer--right'>
              <ArticleImage
                srcImg={task['icon-del']}
                typeAlt={'IconPhoto'}
                typeClass={'footer--icon'}
              />
              <ArticleImage
                srcImg={task['image-5']}
                typeAlt={'ImagePhoto'}
                typeClass={'footer__left--image'}
              />
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};
export default ArticleColumn;
