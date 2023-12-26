import { useState } from "react";

function Square() {

  const [value, setvalue] = useState(null)
  
  function handleclick() {
    setvalue('x')
    }
  return (
    <button className="square" onClick={handleclick}>{value}</button>
    )
  }

  
  
  export default function Board() {

  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
