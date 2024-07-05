import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (taskId) => {
    const newTask = prompt("Edit Task", tasks.find(task => task.id === taskId).text);
    if (newTask !== null) {
      dispatch(editTask(taskId, newTask));
    }
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleEditTask(task.id)}>Edit</button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
