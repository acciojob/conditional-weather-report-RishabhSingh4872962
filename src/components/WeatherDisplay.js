import React from 'react'

const WeatherDisplay = ({ temperature, conditions }) => {
    console.log(temperature);
  return (
    <div>
        <p style={{color:temperature>20?"red":"blue"}}>{temperature }</p>
        <p>{conditions}</p>
    </div>
  )
}

export default WeatherDisplay