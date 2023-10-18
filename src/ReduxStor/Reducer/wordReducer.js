export const wordReducer=(state={addword:"",animal:"",brand:"",carcolor:""},action)=>{
switch(action.type){
    case "ADD":
        return{
            ...state,
            addword:action.payload
        }
        case "addanimal":
            return{
                ...state,
                animal:action.payload
            }
        case "carbrand":
            return{
                ...state,
                brand:action.payload
            }
        case "carcolor":
            return{
                ...state,
                carcolor:action.payload
            }
        return state
}
  return state
}