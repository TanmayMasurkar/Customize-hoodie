import { combineReducers } from "redux"
import textSectionReducer from "./text/TextReducer";

const rootReducer = combineReducers({
    text:textSectionReducer,
})

export default rootReducer;