import {
  UPDATE_HOME_PROPS,
  MERGE_HOME_PROPS,
  DELETE_HOME_PROPS,
  CLEAR_HOME_STATE,
} from "../Actions/types";
import * as general from "./methods";

const INITIAL_STATE = {
  selected_singers: [],
  filtered_albums: [],
  selected_albums: [],
  filtered_songs: [],
  selected_songs: [],

  count: { songs_count: 0, album_count: 0, singer_count: 0 },
  price: { songs_price: 0, album_price: 0, singer_price: 0 },

  paying_songs: [],
  userForm: { name: "", email: "", mobile: "" },
  active_page: 0,
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_HOME_PROPS: {
      return general.updateProps(state, action);
    }
    case MERGE_HOME_PROPS: {
      return general.mergeProps(state, action);
    }
    case DELETE_HOME_PROPS: {
      return general.deleteProps(state, action);
    }
    case CLEAR_HOME_STATE: {
      let newState = state;
      newState = INITIAL_STATE;
      return newState;
    }

    default:
      return state;
  }
};

export default HomeReducer;
