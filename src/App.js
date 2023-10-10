import {useState} from 'react';
import './App.css';
import {Form,List,Day,Fortune,Task} from "./index";

function App() {

  const [tab,setTab] = useState('list');
  const [lists,setList] = useState(Task);
  const [allTaskCompleated,setAllTaskCompleted] = useState(false);
  const [omikujiResult, setOmikujiResult] = useState(null);

  //listsにnewTaskを追加する
  const addTask = (newTask) =>{
    setList([...lists,newTask]);
    setTab('list');
    setAllTaskCompleted(false);
  };
  
  //タスクの削除ボタン
  const onDeleteList = (indexToDelete) =>{
    const updatedList = lists.filter((_, index) => index !== indexToDelete);
    setList(updatedList);
    
    if(updatedList.length === 0){
      setAllTaskCompleted(true);
    }
  };

  return (
    <div className="App">
      <main className="wrapper">
      <h2 className="List-h2">Today's TO DO List</h2>
      <Day/>
      {
        tab === 'list' ? (<List lists={lists} onDeleteList={onDeleteList}/>) : (<Form onAddTask={addTask}/>)
      }
      {allTaskCompleated && <p className='Finish-ms'>お疲れ様でした！</p>}
      <Form onAddTask={addTask}/>
      <Fortune />
      </main>
    </div>
  );
};

export default App;
