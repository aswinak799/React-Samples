import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayer, setEnteredPlayer] = useState('');

  const inputRef = useRef();
  function handleClick(){
    setEnteredPlayer(inputRef.current.value);
    inputRef.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? 'unknown entity'}</h2>
      <p>
        <input ref={inputRef} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
