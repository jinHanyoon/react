import React from 'react';

// function Hello(props) {
//   return (
//    <div style={{color:props.color}}>{props.name}하이헬로우</div>
//   );
// }



// app.js Hello tag  color,name title,isSpecial value 가져옴
function Hello({color,name,title,isSpecial}) {
   

    // app.js 존재하는 hello 중 title 이름을 가진 ==> 함수에서 불러온
    // 스타일정의 
    // 첫번째 wrap 시작 style =>color  app.js 지정하지 않음 
    // 안에 객체로도 생성 X 
    // style 객체로 받기 때문에 title_style 정의
    // 스타일 작성 후 style={title_style} 넣어주기

    const title_style={
            fontSize:'55px',
            // color:'royalBlue',
            display:"inline-block",
            width:"100%",
            textAlign:"center",
            backgroundColor:"pink"
    }
    return (
    <div>
        {/* APP.js isSpecial => value == true => title in
                                value == false => title out
        */}
    <div style={title_style}>{isSpecial ? title : null}</div>
     <div style={{color}}>{name}</div>
     </div>
    );
  }
  





export default Hello;
