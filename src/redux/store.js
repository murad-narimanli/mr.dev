import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers} from "redux";
import {
  aboutReducer,
  blogReducer,
  categoryReducer, doingReducer,
  educationReducer, experienceReducer,
  portfolioReducer, skillReducer,
  toggleReducer
} from "./reducers";


const rootReducer = combineReducers({
  toggle: toggleReducer,
  about:aboutReducer,
  categories: categoryReducer,
  portfolios:portfolioReducer,
  blogs:blogReducer,
  educations:educationReducer,
  experiences:experienceReducer,
  skills:skillReducer,
  doings:doingReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
