import { useState } from 'react';
import './App.css';
import ChildComponent from './Components/Child/Child';

function App() {
  const [data,setData]=useState("No data")
  const GetData=(value)=>{
    console.log(value,"got-value")
    setData(value)
  }
  return (
    <div className="App">
        <h1>Pass Data from Child to Parent</h1>
        <ChildComponent GetDataValue={GetData}/>
        {data}
    </div>
  );
}

export default App;
