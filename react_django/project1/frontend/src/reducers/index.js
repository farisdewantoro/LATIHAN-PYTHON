import { combineReducers } from 'redux'
import leads from './leads';
import errors from './errors';
import messages from './messages'
import auths from './auths'
export default combineReducers({
    leads,
    errors,
    messages,
    auths
});