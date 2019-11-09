import React, {useState, useMemo, useEffect, memo, useCallback} from 'react'
import classnames from 'classnames'
import './CitySelector.css'
import PropTypes from 'prop-types'


const CityItem = memo(function CityItem(props) {
    const {
        cityItem,
        onSelect
    } = props
    return (
        <li className='city-li' onClick={() => onSelect(cityItem)}>{cityItem}</li>
    )
})
const CitySelectons = memo(function CitySelectons(props) {
    const {
        onSelect,
        cities = [],
        title
    } = props
    return (
        <ul className='city-ul'>
            <li className='city-li' data-cate={title}>{title}</li>
            {
                cities.map(cityItem => {
                    return <CityItem
                        key={cityItem.name}
                        cityItem={cityItem.name}
                        onSelect={onSelect}
                    ></CityItem>
                })
            }
        </ul>
    )
})


const Alpha = memo(function Alpha(props) {
    const {alpha, onClick} = props
    return (
        <i className='city-index-item' onClick={() => onClick(alpha)}>{alpha}</i>
    )
})

const Alphabet = Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index)
})


const CityList = memo(function CityList(props) {
    const {citydata, onSelect, onClick} = props;
    return (
        <div className='city-list'>
            <div className='city-cate'>
                {
                    citydata.map(item => {
                        return <CitySelectons
                            key={item.title}
                            cities={item.citys}
                            title={item.title}
                            onSelect={onSelect}
                        ></CitySelectons>
                    })
                }
            </div>
            <div className='city-index'>
                {
                    Alphabet.map(item => {
                        return <Alpha alpha={item}
                                      key={item}
                                      onClick={onClick}></Alpha>
                    })
                }
            </div>
        </div>
    )
})


const CitySelector = memo(function CitySelector(props) {
    const {
        show,
        cityData,
        isLoadingCityData,
        onBack,
        fetchCityData,
        onSelect
    } = props
    const [searchKey, setSearchKey] = useState('')
    const setKey = useMemo(() => {
        return searchKey.trim()
    }, [searchKey])
    useEffect(() => {
        if (!show || isLoadingCityData || cityData) {
            return
        }
        fetchCityData()
    }, [show || isLoadingCityData || cityData])

    const onClick = useCallback((alpha) => {
        document.querySelector(`[data-cate='${alpha}']`).scrollIntoView()
    }, [])

    function uptocityselect() {
        if (isLoadingCityData) {
            return <div>loading</div>
        }
        if (cityData) {
            return <CityList citydata={cityData.cityList} onSelect={onSelect} onClick={onClick}></CityList>
        }
        return <div>error</div>
    }

    return (
        <div className={classnames('city-selector', {hidden: !show})}>
            <div className='city-search'>
                <div className='search-back' onClick={() => onBack()}>
                    <svg width='42' height='42'>
                        <polyline
                            points='25,13,16,21,25,29'
                            stroke='#fff'
                            strokeWidth='2'
                            fill='none'
                        />
                    </svg>
                </div>
                <div className='search-input-wrapper'>
                    <input type="text"
                           value={searchKey}
                           className='search-input'
                           placeholder='城市、车站的中文或拼音'
                           onChange={e => setSearchKey(e.target.value)}
                    />
                </div>
                <i
                    className={classnames('search-clean', {
                        hidden: setKey.length == 0
                    })}
                    onClick={() => setSearchKey('')}

                >
                    &#xf063;
                </i>
            </div>
            {uptocityselect()}
        </div>
    )
})

CitySelector.propTypes = {
    show: PropTypes.bool.isRequired,
    cityData: PropTypes.object,
    isLoadingCityData: PropTypes.bool.isRequired,
    onBack: PropTypes.func.isRequired
}

export default CitySelector;