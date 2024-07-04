import { useState } from "react";
import Task from "./Task";

const App = () => {
  // const [showTask, setShowTask] = useState(false);
  const [addItem, setAddItem] = useState([]);
  const [taskDesc, settaskDesc] = useState("");

  const handleButtonClick = () => {
    // setShowTask(true);
    if (taskDesc === "") return;
    setAddItem([...addItem, taskDesc]);
    settaskDesc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (index) => {
    const filteredItemArray = addItem.filter((_, i) => i !== index);
    setAddItem(filteredItemArray);
  };

  return (
    <div className="container">
      <div className="inner">
        <div className="segmant">segmant</div>
        <div className="main">
          <h1>Things to do:</h1>

          <form className="input-search" onSubmit={handleSubmit}>
            <input
              type="text"
              value={taskDesc}
              placeholder="add items..."
              onChange={(e) => settaskDesc(e.target.value)}
            ></input>
            <button onClick={handleButtonClick}>New Task</button>
          </form>
          <hr />
          {addItem.map((i, index) => (
            <Task
              key={index}
              index={index}
              task={i}
              onHandleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
