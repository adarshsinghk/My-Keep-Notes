import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNode from "./CreateNode";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Keep= () => {
  const [add,setAdd]=useState([]);
  const addNote=(note)=>{
      setAdd((prevValue)=>{
        return [...prevValue,note];
      })
      console.log(note);
  }
  const onDelete=(id)=>{
    setAdd((old)=>
    old.filter((curr,ind)=>{
      return ind!==id;
    })
    );
  }
  return (
    <>
      <Header/>
      <CreateNode
        passNote={addNote}
      />
      {add.map((val,index)=>{
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      })}
      <Footer/>
    </>
  )
}
export default Keep;
