import { combineReducers } from 'redux';
const changeTrue='ChangeTrue'
const changeFalse='changeFalse'
const incrementchange='increment';
export function changeVal(val) { ///actions  function takes the current value and return a type for that
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

export function incrementvalue(){ ///actions  function takes the current value and return a type for that
  return{
    type: incrementchange,
  }
}

const defaultval={
    num:1,
    value:'False'
}


function boolval(state=defaultval,action){ /// reducer of changing the value takes the current state and action based on action reduce the state 
    switch (action.type) {
        case changeTrue: /// if action.type === changetrue 
          return {
            ...state,  /// every property and value true return 
            value:'True',
          }
        
        case changeFalse: /// if action.type === changetrue 
        return {
          ...state,  /// every property and value true return 
          value:'False',
        }
        
        case incrementchange:
          return {
            ...state,
            num:state.num+1
          }
          
        default:
          return state; // why this ? 
      }
    
}

// // function  increment_value(state=defaultval,action){ /// why it is not changing the state of that num
//   console.log(action.type)
//   switch(action.type){
//     case 'increment':
      
//       return {
//         ...state,
//         num:state.num+1
//       }
  
//     default:
//         return state;


//   }

// }

const boolApp=combineReducers({boolval})

export default boolApp;