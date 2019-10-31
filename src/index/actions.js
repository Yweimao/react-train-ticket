export const ACTION_SET_FORM = 'SET_FORM'
export const ACTION_SET_TO = 'SET_TO'
export const ACTION_SET_ISCITYSELECTORVISIBLE = 'SET_ISCITYSELECTORVISIBLE'
export const ACTION_SET_CURRENTSELECTINGLEFTCITY = 'SET_CURRENTSELECTINGLEFTCITY'
export const ACTION_SET_CITYDATA = 'SET_CITYDATA'
export const ACTION_SET_ISLOADINGCITYDATA = 'SET_ISLOADINGCITYDATA'
export const ACTION_SET_ISDATESELECTTORVISIBLE = 'SET_ISDATESELECTTORVISIBLE'
export const ACTION_SET_HIGHSPEED = 'SET_HIGHSPEED'

export function setForm(from) {
    return {
        type: ACTION_SET_FORM,
        payload: from
    }
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}

export function setIsLoadingCityData(isLoadingCityData) {
    return {
        type: ACTION_SET_ISLOADINGCITYDATA,
        payload: isLoadingCityData
    }
}

export function setCityData(cityDate) {
    return {
        type: ACTION_SET_CITYDATA,
        payload: cityDate
    }
}

export function toggleHighSpeed() {
    return (dispatch, getState) => {
        const {highSpeed} = getState();
        dispatch({
            type: ACTION_SET_HIGHSPEED,
            playload: !highSpeed
        })
    }
}

export function showCitySelector(currentSelectingLeftCity) {
    return (dispatch) => {
        dispatch({
            type: ACTION_SET_ISCITYSELECTORVISIBLE,
            payload: true
        });
        dispatch({
            type: ACTION_SET_CURRENTSELECTINGLEFTCITY,
            payload: currentSelectingLeftCity
        })
    }
}

export function hideCitySelector() {
    return {
        type: ACTION_SET_ISCITYSELECTORVISIBLE,
        payload: false
    }
}

export function setSelectedCity(city) {
    return (dispatch, getState) => {
        const {currentSelectingLeftCity} = getState();
        if (currentSelectingLeftCity) {
            dispatch(setForm(city))
        } else {
            dispatch(setTo(city))
        }
    }
}

export function showDateSelector() {
    return {
        type: ACTION_SET_ISDATESELECTTORVISIBLE,
        payload: true
    }
}

export function hideDateSelector() {
    return {
        type: ACTION_SET_ISDATESELECTTORVISIBLE,
        payload: false
    }
}

export function exChangeFromTo() {
    return (dispatch, getState) => {
        const {from, to} = getState()
        dispatch(setForm(to))
        dispatch(setTo(from))
    }
}