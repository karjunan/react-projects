import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  // const [checked, setChecked] = useState(false);
  // const [emotion, setEmotion] = useState('happy');
  // useEffect(() => {
  //   console.log({ emotion });
  // }, [emotion]);

  const txtTitle = useRef();
  const txtColor = useRef();
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = txtColor.current.value;
    console.log({ title, color });
    txtTitle.current.value = '';
    txtColor.current.value = '';
  };

  return (
    //  <div>

    // <h1> My current state is {emotion}</h1>
    //   <button onClick={() => setEmotion('Sad')}>sad</button>
    //   <button onClick={() => setEmotion('excited')}>exicited</button>
    //   <button onClick={() => setEmotion('very happy')}>Very happy</button>
    //    <input
    //     type="checkbox"
    //     value={checked}
    //     onChange={() => setChecked(!checked)}
    //   />
    //  <label>{checked === true ? 'checked' : 'not checked'}</label>
    // </div>
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color input..." />
      <input ref={txtColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
