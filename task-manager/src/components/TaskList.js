import TaskItem from "./TaskItem";
import { useTaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, taskStats } = useTaskContext();
  if (tasks.length === 0) {
    return (
      <div className="empty-search">
        <h3>No Tasks Found</h3>
        <p>Add a Task to get started!</p>
      </div>
    );
  }
  return (
    <div className="task-list">
      <div className="task-stats">
        <span>Total: {taskStats.total}</span>
        <span>Completed: {taskStats.completed}</span>
        <span>Pending: {taskStats.pending}</span>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <TaskItem key={task.id} task = {task}/>
        ))}
      </div>
    </div>
  );
};
export default TaskList;
