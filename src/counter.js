import React, { useState } from 'react';

function Counter({ name,title,isSpecial}) {
    const box01 ={
        width:"500px",
        height:"500px",
        margin:"0 auto"

    }
   
    const style = {
        fontSize:"55px",
        color:"red",
    };

    const [number, setNumber] = useState(0);
    const num_01 = () => {
        setNumber(number + 1);
    }

     const num_02 = () => {
        setNumber(number - 1);
      }
      if(number >= 50){
        isSpecial =false;
      }else if(number <0){
        // number = "더 작아질 수 없어"
        isSpecial =false;
      
    }

    return (
        <div style={box01}>
            <h1 style={style}>{isSpecial ? number :"max_num"}</h1>
            <button onClick={num_01}>+1</button>
            <button onClick={num_02}>-1</button>

        </div>
    )
  }
  
  export default Counter;