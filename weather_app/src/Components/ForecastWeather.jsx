import React from 'react'

const ForecastWeather = ({data}) => {
    console.log(data);
    const forecast = data?.forecastday?.[0]?.astro
    return (
        <div>
            <h1>{forecast?.sunrise}</h1>
            <h1>{forecast?.sunset}</h1>
            <h1>{forecast?.moonrise}</h1>
            <h1>{forecast?.moonset}</h1>
            <h1>{forecast?.moon_phase}</h1>
            <h1>{forecast?.moon_illumination}</h1>
        </div>
    )
}

export default ForecastWeather
