import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [laskettava, setLaskettava] = useState(0)
  const [ekaluku, setEkaluku] = useState(0)
  
  
  const oneClick = () => {
    setLaskettava(laskettava * 10 + 1)
  }

  const twoClick = () => {
    setLaskettava(laskettava * 10 + 2)
  }

  const threeClick = () => {
    setLaskettava(laskettava * 10 + 3)
  }

  const fourClick = () => {
    setLaskettava(laskettava * 10 + 4)
  }

  const fiveClick = () => {
    setLaskettava(laskettava * 10 + 5)
  }

  const sixClick = () => {
    setLaskettava(laskettava * 10 + 6)
  }

  const sevenClick = () => {
    setLaskettava(laskettava * 10 + 7)
  }

  const eightClick = () => {
    setLaskettava(laskettava * 10 + 8)
  }

  const nineClick = () => {
    setLaskettava(laskettava * 10 + 9)
  }

  const zeroClick = () => {
    setLaskettava(laskettava * 10 + 0)
  }

  const plusClick = () => {
    setEkaluku(laskettava)
    setLaskettava(0)
  }

  const tulosClick = () => {
    setLaskettava(laskettava + ekaluku)
  }
  

  const zero = () => {
    setLaskettava(0)
    setEkaluku(0)
  }


  return (
    <div>
      <div>
        {laskettava}
        
        <p />
        <button onClick={sevenClick }>7</button>
        <button onClick={eightClick }>8</button>
        <button onClick={nineClick }>9</button>
        <p />
        <button onClick={fourClick }>4</button>
        <button onClick={fiveClick }>5</button>
        <button onClick={sixClick }>6</button>
        <p />
        <button onClick={oneClick }>1</button>
        <button onClick={twoClick }>2</button>
        <button onClick={threeClick }>3</button>
        <p />
        <button onClick={zeroClick }>0</button>
        <button onClick={zero}>C</button>
        <button onClick={plusClick}>+</button>
        <p />
        <button onClick={tulosClick}>=</button>

        <p />
      </div>
    </div>
  )
}

  ReactDOM.render(<App />, 
  document.getElementById('root'))



