import ForecastCard from "./ForecastCard";

const ForecastContainer = ({ title, list, type, unit }) => {
  return (
    <div className="forecast-container">
      <h1>{title}</h1>
      <div>
        {list.map((item, index) => (
          <ForecastCard
            weatherImgUrl={item.weather_img_url}
            label={type === "daily" ? item.time.time : item.day}
            temp={item.temp}
            key={index}
            unit={unit}
          />
        ))}
      </div>
    </div>
  );
};

export default ForecastContainer;
