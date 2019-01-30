import { combineReducers } from 'redux'
import buttonreducer from './buttonreducer'
import breedimage from './breedimage'
import buttonIncorrect from './buttonIncorrect';
  


// const reducer = (state = initialstate, action = {}) => {
//     switch (action.type) {
//         // case SELECT:
//         // console.log(SELECT)
//         //   return [...state, action.payload]
//         default:
//             // console.log(state)
//             return state
//     }
// }


export default combineReducers({
    totalAnswers: buttonIncorrect,
    correctAnswers: buttonreducer,
    breeds: breedimage
})
