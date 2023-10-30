import { createContext, useContext, useReducer } from "react";
import reducer from '../reducers/userReducer'
import { GET_SINGLE_USER_BEGIN, GET_SINGLE_USER_ERROR, GET_SINGLE_USER_SUCCESS, USER_URL } from "../utils/actions";
import axios from "../api/axios";

// create contex 
const UserContext = createContext()

// initialstate
const initialstate = {
    singleUserLoading : false,
    singleUserError : false,
    singleUser : []
}



//expor User Provider
export const UserProvider = ({children}) => {
    // reducer
    const [state,dispatch] = useReducer(reducer,initialstate)

    const fetchSingleUser = async(id) => {
        dispatch({type : GET_SINGLE_USER_BEGIN})
        try{    
            const res = await axios.get(`${USER_URL}/${id}`)
            const singleUser = res.data
            dispatch({type : GET_SINGLE_USER_SUCCESS , payload : singleUser})
        }catch(error){
            console.log(error)
            dispatch({type : GET_SINGLE_USER_ERROR})
        }
    }
    return(
        <UserContext.Provider value={{ ...state,fetchSingleUser }}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserContext = () => {
    return useContext(UserContext)
}