import React, { useState } from "react";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const getWeatherData = async () => {
    if (!city) return;
    try {
      const res =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f070ff045ef6870d91e43223bc314348
`);
      const data = await res.json();
      console.log(data);
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setError(error.message);
        setWeatherData(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const temp = Math.round(weatherData?.main?.temp - 273.15);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[90%] md:w-[90%] lg:w-[25%] h-[450px] md:h-[400px] lg:h-[400px] p-5 bg-blue-500 rounded">
        <div className="m-2 flex justify-between gap-3">
          <input
            type="text"
            className="px-4 py-2 border-2 border-slate-100 w-full rounded"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={getWeatherData}
            className="px-4 py-2 bg-slate-100 rounded"
          >
            Search
          </button>
        </div>
        {weatherData && (
          <>
            <div className="mt-14">
              <h1 className="text-center text-4xl text-slate-100 font-semibold">
                {weatherData?.name}
              </h1>
              <h2 className="text-3xl text-center mt-4 text-slate-100">
                {temp} &deg;C
              </h2>
            </div>
            <div className="mt-[100px] flex justify-between mb-5 text-white">
              <div className="flex justify-between">
                <div className="text-4xl">
                  <WiHumidity className="inline" />
                </div>
                <div className="flex flex-col">
                  <div>{weatherData.main.humidity}%</div>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-3xl">
                  <FiWind className="inline" />
                  &nbsp;
                </div>
                <div className="flex flex-col">
                  <div>{weatherData.wind.speed} km/h</div>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
