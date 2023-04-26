import { combineReducers } from 'redux';
const changeTrue='ChangeTrue'
export function changeVal() { ///actions 
    return {
      type: changeTrue,
    }
  }

const defaultval={
    value:'False'
}


function boolval(state=defaultval,action){ /// reducer
    switch (action.type) {
        case changeTrue: /// if action.type === changetrue 
          return {
            ...state,  /// every property and value true return 
            value:'True'
          }
          
        default:
          return state; // why this ? 
      }
    
}


const boolApp=combineReducers({boolval})

export default boolApp;