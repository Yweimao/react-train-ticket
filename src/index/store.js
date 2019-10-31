import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import reducers from "./reducers";
import thunk from "redux-thunk";
export default createStore(
    combineReducers(reducers),
    {
        form: '北京',
        to: '上海',
        isCitySelectorVisible: false,   //是否弹出城市选择列表
        currentSelectingLeftCity: false,  //
        cityData: null,
        isLoadingCityData: false,
        isDateSelecttorVisible: false, //是否弹出日期选择器
        highSpeed: false  //是否选择高铁动车
    },
    applyMiddleware(thunk)
)