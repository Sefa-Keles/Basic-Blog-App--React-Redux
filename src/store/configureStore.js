import { combineReducers, createStore } from "redux";
import blogReducer from "../reducers/blogReducer";
import authReducer from "../reducers/authReducer";

export default () => {
    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            auth: authReducer
        })
    );
    return store
}