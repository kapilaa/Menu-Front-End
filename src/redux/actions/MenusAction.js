import axios from "axios";
import {
    MENU_LIST_FAIL,
    MENU_LIST_REQUEST,
    MENU_LIST_SUCCESS
} from "../constants/MenuConstant";
import { logout } from "./userActions";
  
  export const listMenus = (products) => async (dispatch, getState) => {
    try {
      dispatch({ type: MENU_LIST_REQUEST });
  
      const { data } = await axios.get(`http://127.0.0.1:8000/api/menus`);
  
      dispatch({ type: MENU_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: MENU_LIST_FAIL,
        payload: message,
      });
    }
  };