import React, { useState } from 'react';

import "./keep.css";

import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
const CreateNode = (props) => {
    const [Expand,SetExpand]=useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const InputE = (event) => {
        // const value=event.target.value;
        // const name=event.target.name;

        const { name, value } = event.target;
        setNote((prevValue) => {
            return {    
                ...prevValue,
                [name]: value,
            };
        });
    };
    const addEvent=()=>{
        props.passNote(note);
        setNote(()=>{
            return({
            title: "",
            content: "",
            })
        })
    }
    const expandit=()=>{
        SetExpand(true);
    }
    const backAgain=()=>{
        SetExpand(false);
    }
    return (
        <>
            <div onDoubleClick={backAgain} className="mx-auto p text-center mt-3" style={{ width: '200px' }}>
                <form className="text-center">
                    <div   className="card shadow-lg" style={{ width: "23rem" }}>
                   {Expand?
                        <input
                            type="text"
                            name="title"
                            value={note.title}
                            onChange={InputE}
                            placeholder="Title" 
                            />: null}
                        <div className="card-body">
                            <textarea
                                className="w-100 m-0 h-100" rows="" column=""
                                name="content"
                                value={note.content}
                                onChange={InputE}
                                onClick={expandit}
                                placeholder="Write a note..." />
                        </div>
                        {Expand?
                        <Button onClick={addEvent} className="bton1 ">
                            <Add />
                        </Button>:null}
                    </div>
                </form>
            </div>
        </>
    )
}
export default CreateNode;