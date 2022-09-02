import React from 'react';

const Todo = ({ todo }) => {
  return (
    <>
			<div className='title'>
				{todo.title}
			</div>
			<div className='content'>
				{todo.content}
			</div>
    </>
  );
};

export default Todo;