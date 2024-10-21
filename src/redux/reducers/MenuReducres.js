import {
    MENU_LIST_REQUEST
} from '../constants/MenuConstant/';
   
  export const menusListReducer = (state = { menus: [] }, action) => {
    switch (action.type) {
      case MENU_LIST_REQUEST:
        return { ...state, loading: true };
      default:
        return state;
    }
  };