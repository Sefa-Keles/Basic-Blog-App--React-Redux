import { combineReducers, createStore } from "redux";
import blogReducer from "../reducers/blogReducer";
import authReducer from "../reducers/authReducer";

export default () => {
    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            auth: authReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
    return store
}