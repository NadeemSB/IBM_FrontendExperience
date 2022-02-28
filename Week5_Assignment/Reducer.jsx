import { combineReducers } from "redux";
const initState=[];
export const calorieReducer=(state=initState,action)=>{
    switch(action.type){
        case "Add_Entry":
            return ([...state,{...action.entry,id:Math.floor(Math.random()*99)}]);
        case "Delete_Entry":
            return (
                state.filter((item)=>item.id!==action.id)
            );
        default:
          return state;
    }
}
export const rootReducer=combineReducers({
    calorie:calorieReducer
});