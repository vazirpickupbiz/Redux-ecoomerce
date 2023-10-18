export const ColorReducer=(state={addcolor:[]},action)=>{
    switch(action.type){
        case "ADDCLR":
            return{
                ...state,
                addcolor: [...state.addcolor, action.payload]
            }
            return state
    }
      return state
    }