import React from 'react';
import { changeVal, incrementvalue } from './app/boolVal';
import './App.css';
import { useSelector,useDispatch} from 'react-redux';
function App() {
  const dispatch=useDispatch()
  const boolVal=useSelector((state)=>state)
  
  return (
    <>
    <div className="p-3">
    <button className='btn btn-primary 'onClick={()=>{dispatch(changeVal(boolVal.boolval.value))}}>clickme</button>
    <button className='btn btn-primary 'onClick={()=>{dispatch(incrementvalue())}}>increment number</button>
    <h1>{boolVal.boolval.value}</h1>
    <h1>{boolVal.boolval.num}</h1>
    {console.log(boolVal)}
    </div>
    
    </>
  );
}

export default App;
