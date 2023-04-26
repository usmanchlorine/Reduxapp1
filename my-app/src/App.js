import React from 'react';
import { changeVal } from './app/boolVal';
import './App.css';
import { useSelector,useDispatch} from 'react-redux';
function App() {
  const dispatch=useDispatch()
  const boolVal=useSelector((state)=>state.boolVal)
  return (
    <>
    <button className='btn btn-primary'onClick={()=>{dispatch(changeVal())}}>clickme</button>
    <h1>{boolVal.value}</h1>
    </>
  );
}

export default App;
