import { combineReducers } from 'redux';
const changeTrue='ChangeTrue'
const changeFalse='changeFalse'
export function changeVal(val) { ///actions 
    if (val==='False'){
      return {
        type: changeTrue,
      }

    }else{
      return {
        type: changeFalse,
      }

    }
  
  }

export function incrementvalue(){
  return{
    type: 'increment',
  }
}

const defaultval={
    num:1,
    value:'False'
}


function boolval(state=defaultval,action){ /// reducer
    switch (action.type) {
        case changeTrue: /// if action.type === changetrue 
          return {
            ...state,  /// every property and value true return 
            value:'True'
          }
        
        case changeFalse: /// if action.type === changetrue 
        return {
          ...state,  /// every property and value true return 
          value:'False'
        }
          
          
        default:
          return state; // why this ? 
      }
    
}

function  increment_value(state=defaultval,action){
  console.log(action.type)
  switch(action.type){
    case 'increment':
      
      return {
        ...state,
        num:'100'
      }
  
    default:
        return state;


  }

}

const boolApp=combineReducers({boolval,increment_value})

export default boolApp;