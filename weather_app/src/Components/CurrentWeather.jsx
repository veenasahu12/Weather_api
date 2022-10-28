import React from 'react'

const CurrentWeather = ({data}) => {
    console.log(data);
    const location = data?.location;
    return (
        <div>
            <h1>{location?.name}</h1>
            <h1>{location?.region}</h1>
            <h1>{location?.country}</h1>
            <h1>{location?.lat}</h1>
            <h1>{location?.lon}</h1>
            <h1>{location?.tz_id}</h1>
            <h1>{location?.localtime}</h1>
        </div>
    )
}

export default CurrentWeather
