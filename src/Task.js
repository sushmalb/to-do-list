const Task = ({ task, onHandleDelete, index }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h3>{task}</h3>
      <button onClick={() => onHandleDelete(index)}>X</button>
    </div>
  );
};

export default Task;
