import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {universReducer} from "./reducer/UniversReducer";
import {univerReducer} from "./reducer/UniverReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {universSearchCountryReducer } from "./reducer/SearchReducer";
import thunk from "redux-thunk";
import {universSearchNameReducer} from"./reducer/SearchNameReducer"
const rootReducer = combineReducers({
    univer: univerReducer,
    univers: universReducer,
    Search: universSearchCountryReducer,
    SearchName:universSearchNameReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));