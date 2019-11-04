import React from 'react'
import './Journey.css'
import switchImg from './imgs/switch.svg'

function Journey(props) {
  const {from, to, exChangeFromTo, showCitySelector} = props;
  return (
    <div className='journey'>
      <div className='journey-station'
           onClick={() => showCitySelector(true)}>
        <input
          type="text"
          readOnly
          name='from'
          value={from}
          className='journey-input journey-from'
        />
      </div>
      <div className='journey-switch'
           onClick={ () => exChangeFromTo()}>
        <img src={switchImg} alt="switch" width='70'
             height='40'/>
      </div>
      <div className='journey-station'
           onClick={() => showCitySelector(false)}>
        <input
          type="text"
          readOnly
          name='to'
          value={to}
          className='journey-input journey-to'
        />
      </div>
    </div>
  )
}

export default Journey
