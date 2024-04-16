
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setweather] = useState({ temperature: "", conditions: "" });
  
  useEffect(() => {
    setweather({ temperature: 25, conditions: "Sunny" })
  
    
  }, [])
  
  return (
    <>
        {/* Do not remove the main div */}
        <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions} />
    </>
  )
}

export default App
