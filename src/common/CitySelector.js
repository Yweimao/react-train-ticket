import React, {useState, useMemo} from 'react'
import classnames from 'classnames'
import './CitySelector.css'
import PropTypes from 'prop-types'

function CitySelector(props) {
    const {
        show,
        cityData,
        isLoadingCityData,
        onBack
    } = props
    const [searchKey, setSearchKey] = useState('')
    const setKey = useMemo(() => {
        return searchKey.trim()
    }, [searchKey])
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
        </div>
    )
}
CitySelector.propTypes = {
    show: PropTypes.bool.isRequired,
    cityData: PropTypes.object,
    isLoadingCityData: PropTypes.bool.isRequired,
    onBack: PropTypes.func.isRequired

}

export default CitySelector;