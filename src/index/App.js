import React from 'react'
import './App.css';
import {connect} from 'react-redux';
import Header from "../common/Header"  //标题
import DepartDate from "./DepartDate";  // 日期选择
import HighSpeed from "./HighSpeed";   //只看高铁
import Journey from "./Journey";  //
import Submit from "./Submit";  //提交


function App(props) {
    return (
        <div>
            <Header></Header>
            <Journey></Journey>
            <DepartDate></DepartDate>
            <HighSpeed></HighSpeed>
            <Submit></Submit>
        </div>
    )
}
const mapStateToProps =(state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)
