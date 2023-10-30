import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../utils/actions";

// create Reducer with switch,case
const SidebarReducer = (state, action) => {
  switch (action.type) {
    // open sidebar
    case OPEN_SIDEBAR:
      return {
        ...state,
        isopenSidebar: true,
      };
    //   close sidebar
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isopenSidebar: false,
      };
    default:
      return state;
  }
};

export default SidebarReducer;
