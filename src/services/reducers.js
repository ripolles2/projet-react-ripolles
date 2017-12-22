import {
	combineReducers
} from "redux";


import count from "./count/reducer";
import stock from "./stock/reducer";


export default
	combineReducers({
		count,
		stock,
	});

