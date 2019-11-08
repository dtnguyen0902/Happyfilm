import * as ActionType from './../constants/ActionType';

let initState={
    user:{}
}

const clientReducer=(state=initState,action)=>{
    switch(action.type){
        case ActionType.CLIENT_LOGIN:
            // state.user=action.user
            return {
                ...state,
                user: action.user
            }
        default:
            return {...state}
    }
}


export default clientReducer;

// export const loginSuccess=(data)=>({
//     type:ActionType.CLIENT_LOGIN,  
//     user:data
//   })
//   export const signUpSuccess = (data) => ({
//       type: ActionType.CLIENT_SIGNUP,
//       user: data
//   })