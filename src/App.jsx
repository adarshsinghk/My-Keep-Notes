import React, { useState } from 'react';
import ToDoLists from "./ToDoLists";
const App=()=>{
  const [inputList,setInputList]=useState();
  const [Items,setItems]=useState([]);
  const inputE=(event)=>{
      setInputList(event.target.value);
  }
  const inputListItems=()=>{
     setItems((oldItems)=>{
       return [...oldItems,inputList]
     })
     setInputList("");
  }
  const deleteItems=(id)=>{
    console.log("deleted");
      setItems((oldItems)=>{
        return oldItems.filter((arrEle,index)=>{
          return index!==id;
        });
      });
  };
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add a Items" onChange={inputE} value={inputList}/>
          <button onClick={inputListItems}>+</button>
          <ol>
            {Items.map((itemval,index)=>{
              return <ToDoLists
                key={index}
                id={index}   
                text={itemval}
                onSelect={deleteItems}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;
