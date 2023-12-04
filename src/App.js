import logo from './logo.svg';
import './App.css';
import Hello from './hello.js'
import Wrap from './wrap.js'
import Counter from './counter.js'



function App() {
  const name = 'Hello world'
  const style02 = {
    background:"blue"
  }

  return (
   <div>안녕
  <Wrap title ="첫번째 wrap">

    {/* disSpecial = true 입력 X 자동 true */}
  <Hello title='첫번째 WRAP 시작' isSpecial={true}/>
    <Hello name ='react'/>
    <Hello name ='안녕하삼요' color='blue'/>
    <Hello name ='안녕하세요' color='gray'/>
</Wrap>


    <div style={style02}>{name}</div>
    <div className ="gray_box">welcome</div>
    <Counter name='0' isSpecial={true}/>
   </div>
  );
}

export default App;
