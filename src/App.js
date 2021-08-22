
import './App.css';
import { useState } from "react";
import './counter.css'
import Counter from './components/counter'

function App() {
  const[count,setCount]=useState(1);
  const[initValue,setInitValue]=useState(false)
  return (
    <Counter />
  );
}

export default App;
