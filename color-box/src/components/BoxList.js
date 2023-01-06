import React, { useState } from "react";
import {v4 as uuid} from "uuid"
import defaultBoxes from "../helpers/defaultBoxes"
import Box from "./Box"
import "../styles/BoxList.css"
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = defaultBoxes;
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes =>[...boxes, {...newBox, id:uuid()}])
    }

    const deleteBox= (id) =>{
        const newBoxList = boxes.filter((box) => box.id !== id);
        setBoxes(newBoxList);
    }

    return (
        <div className="BoxList">
            <h1 className="Boxlist-title">BoxList</h1>
            <div className="BoxList-cards">{boxes.map(box => 
                <Box deleteBox={() => deleteBox(box.id)} id={box.id} color={box.color} height={box.height} width={box.width}/>)}
            </div>
            <NewBoxForm addBox={addBox} />
        </div>
    );
}

export default BoxList;