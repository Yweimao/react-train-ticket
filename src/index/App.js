import React, {useCallback, useMemo} from 'react'
import './App.css';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Header from "../common/Header"  //标题
import DepartDate from "./DepartDate";  // 日期选择
import HighSpeed from "./HighSpeed";   //只看高铁
import Journey from "./Journey";  //  始发站 -- 终点站
import Submit from "./Submit";  //提交
import CitySelector from "../common/CitySelector";
import {
    exChangeFromTo,
    showCitySelector,
    hideCitySelector
} from "./actions";

function App(props) {
    const {
        from,
        to,
        dispatch,
        isCitySelectorVisible,
        cityData,
        isLoadingCityData,
    } = props
    const onBack = useCallback(() => {
        window.history.back()
    }, [])
    const cbs = useMemo(() => {
        return bindActionCreators({
            exChangeFromTo,
            showCitySelector
        }, dispatch)
    }, [])


    const citySelectorCbs = useMemo(() => {
        return bindActionCreators({
            onBack: hideCitySelector
        }, dispatch)
    }, [])

    return (
        <div>
            <div className='header-wrapper'>
                <Header title='火车票' onBack={onBack}></Header>
            </div>
            <form action="" className='form'>
                <Journey to={to} from={from} {...cbs}></Journey>
                <DepartDate></DepartDate>
                <HighSpeed></HighSpeed>
                <Submit></Submit>
            </form>
            <CitySelector
                show={isCitySelectorVisible}
                cityData={cityData}
                isLoadingCityData={isLoadingCityData}
                {...citySelectorCbs}
            >
            </CitySelector>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
