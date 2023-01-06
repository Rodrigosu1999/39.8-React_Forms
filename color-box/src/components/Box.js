import React from "react";
import "../styles/Box.css"

const Box = ({color, height, width, id, deleteBox}) => {
    const cardStyle = {
        backgroundColor: color,
        height: height,
        width: width
    }

    return (
        <div className="Box" style={cardStyle} id={id}>
            <button onClick={deleteBox}>X</button>
        </div>
    );
}

export default Box;