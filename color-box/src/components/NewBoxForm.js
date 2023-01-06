import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: "#FF0000",
        height: 100,
        width: 100 
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input
                id="color"
                name="color" 
                type="color" 
                value={formData.color}
                onChange={handleChange} 
            />
            <label htmlFor="height">Height</label>
            <input
                id="height"
                name="height" 
                type="range" 
                min="20"
                max="200"
                value={formData.height}
                onChange={handleChange} 
            />
            <label htmlFor="width">Width</label>
            <input
                id="width"
                name="width" 
                type="range" 
                min="20"
                max="200"
                value={formData.width}
                onChange={handleChange} 
            />
            <button>Add new box!</button>
        </form>
    );
}

export default NewBoxForm;