import React from 'react';




// wrap 요소 children -> 안에있는 자식요소들을 표현해줄 때 사용
function wrap({ children,title }) {
    const style = {
      border: '2px solid black',
      padding: '16px',
    };
    return (
      <div style={style}>
      {/* {title} */}
      { children }
         </div>
    )
  }
  
  export default wrap;