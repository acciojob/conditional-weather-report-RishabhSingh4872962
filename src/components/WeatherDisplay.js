import React from 'react'

const WeatherDisplay = ({ temperature, conditions }) => {
    console.log(temperature);
  return (
    <>
        <p style={{color:temperature>20?"red":"blue"}}>Temperature: {temperature }</p>
        <span style={{color:temperature>20?"red":"blue"}}></span>
        <p>Conditions: {conditions}</p>
    </>
  )
}

export default WeatherDisplay