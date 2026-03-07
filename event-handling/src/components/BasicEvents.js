import React from 'react';

const BasicEvents = () => {

    const handleClick = () => {
        alert('Button Clicked!');
    }

    const handleMouseEnter = () => {
        console.log("Mouse Entered");
    }

    const handleMouseLeave = () => {
        console.log("Mouse Left");
    }

    const handleInputChange = (event) => {
        console.log(event.target.value)
    }

    return(
        <div>
            <h2>Basic Event Handling</h2>
            <button onClick= {handleClick} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} style ={{borderRadius:'5px', padding:'10px', backgroundColor:'lightblue', color:'#666', fontWeight:'bold'}} >Hover and Click me!</button>
            <div style = {{ marginTop: "20px" }}>
                <input type ="text" onChange={handleInputChange} placeholder="Enter something and see console" style = {{width: "215px", padding:"5px", borderRadius:"5px", backgroundColor:'lightblue', fontWeight:'bold'}} />
            </div>

        </div>

    );

}

export default BasicEvents;