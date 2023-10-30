import { createContext, useContext, useReducer } from "react";
import reducer from '../reducers/sidebarReducer'
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../utils/actions";

// create context
const SidebarContext = createContext();

const initialstate = {
    isopenSidebar : false
}

export const SidebarProvider = ({children}) => {
    // create useReducer
    const [state,dispatch] = useReducer(reducer,initialstate)

    // open sidebar
    const openSidebar = () =>{
        dispatch({type : OPEN_SIDEBAR})
    }

    // close sidebar
    const closeSidebar = () => {
        dispatch({type : CLOSE_SIDEBAR})
    }
    return(
        <SidebarContext.Provider value={{ ...state,openSidebar,closeSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}



export const useSidebarContext = () => {
    return useContext(SidebarContext)
} 