import {combineReducers} from 'redux-immutable';
import { reducer as headerReducer } from "./../common/Header/store";

const reducer = combineReducers({
  header: headerReducer
});

export default reducer;
