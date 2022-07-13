import WindArrow from "../../images/wind_unselected.svg";
import Bookmark from "../../images/bookmark.svg";
import Home from "../../images/home.svg";

import { useEffect, useState } from "react";
import ForecastContainer from "../global/ForecastContainer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainDisplay = ({ lat, lon, unit }) => {
  let [hourlyForecast, setHourlyForecast] = useState([]);
  let [weeklyForecast, setWeeklyForecast] = useState([]);
  let [currentData, setCurrentData] = useState([]);
  let [id, setId] = useState(0);
  let [country, setCountry] = useState("");
  let [city, setCity] = useState("");
  let [windDirStyle, setWindDirStyle] = useState({
    height: "24px",
    width: "24px",
    transform: "rotate(0deg)",
  });

  let saveCity = (e) => {
    toast(`${city} is saved`);
    localStorage.setItem(
      String(id),
      JSON.stringify({
        lat: lat,
        lon: lon,
        id: id,
      })
    );
    console.log(localStorage);
  };

  let setHome = (e) => {
    toast(`${city} set as default location`);
    localStorage.setItem(
      "home",
      JSON.stringify({
        lat: lat,
        lon: lon,
        id: id,
      })
    );
  };

  useEffect(() => {
    if (lat != null && lon != null) {
      let url = `https://simple-weather-backend.herokuapp.com/getSingleLocationWeather?unit=${unit}&lat=${lat}&lon=${lon}`;
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setHourlyForecast(data.hourly);
          setWeeklyForecast(data.weekly);
          setCurrentData(data.current);
          setId(data.id);
          setCountry(data.country);
          setCity(data.city);
          setWindDirStyle({
            height: "24px",
            width: "24px",
            transform: `rotate(${currentData.wind_deg - 90}deg)`,
          });
          console.log(currentData.wind_deg);
        })
        .catch((err) => {
          console.log("ERROR : ", err.message);
        });
    }
  }, [lat, lon, unit]);

  return (
    <div className="main-display-container">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
      />
      <div className="main-display">
        <header>
          <div>
            <h1>
              {city}, {country}
            </h1>
            <label>
              {currentData.time}, {currentData.day}
            </label>
          </div>
          <div>
            <img src={Home} onClick={setHome} />
            <img src={Bookmark} onClick={saveCity} />
          </div>
        </header>
        <section>
          <div>
            <img src={currentData.weather_img_url} />
            <h1>
              {currentData.curr_temp}
              <span>{unit === "metric" ? "°C" : "℉"}</span>
            </h1>
          </div>
          <p class="verdict">
            <b>{currentData.weather_title}</b>
            <br />
            <br />
            <span>{currentData.weather_description}</span>
          </p>
        </section>
        <footer>
          <p>
            {currentData.feels_like}
            <span>{unit === "metric" ? "°C" : "℉"}</span>
            <br />
            <label>Feels Like</label>
          </p>
          <p>
            {currentData.min_temp}
            <span>{unit === "metric" ? "°C" : "℉"}</span>
            <br />
            <label>Min Temp</label>
          </p>
          <p>
            {currentData.max_temp}
            <span>{unit === "metric" ? "°C" : "℉"}</span>
            <br />
            <label>Max Temp</label>
          </p>
          <p>
            {currentData.humidity}
            <span id="bottom-align">%</span>
            <br />
            <label>Humidity</label>
          </p>
          <p>
            {currentData.wind_speed}
            <span id="bottom-align">km/hr</span>
            <br />
            <label>Wind Speed</label>
          </p>
          <p>
            <img src={WindArrow} style={windDirStyle} />
            <br />
            <label>Wind Dir.</label>
          </p>
        </footer>
      </div>
      <ForecastContainer
        title={"Daily Forecast"}
        list={hourlyForecast}
        type="daily"
        unit={unit}
      />
      <ForecastContainer
        title={"Weekly Forecast"}
        list={weeklyForecast}
        type="weekly"
        unit={unit}
      />
    </div>
  );
};

export default MainDisplay;
