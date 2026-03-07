
const CounterButton = ({onButtonClick, children, color="blue"}) => {
    return (
        <div>
            <button onClick= {onButtonClick} 
                style={{ backgroundColor:color, 
                        color:"white", 
                        border:"none",
                        padding:"10px", 
                        margin:"5px", 
                        borderRadius:"5px", 
                        cursor:"pointer", 
                        fontWeight:"bold"
                 }}>

                {children}
                
            </button>

        </div>
    );
} 

export default CounterButton;