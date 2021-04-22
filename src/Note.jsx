import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
const Note = (props) => {
    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="text-center d-inline-block p-3 mt-5 ">
                <div className="card shadow-lg" style={{width:"15rem"}}>
                    <h4 className="pt-2 text-uppercase">{props.title}</h4>
                    <br />
                    <div className="card-body">
                        <p className="text-capitalize text-truncate">{props.content}</p>
                        <Button onClick={deleteNote} className="bton1 ">
                            <DeleteIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Note;