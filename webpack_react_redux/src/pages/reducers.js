// root reducer

import { combineReducers } from 'redux';
import navigationReducer from './navigation/NavigationReducer';

const translatorApp = combineReducers({
    navigationReducer
});

export default translatorApp;
