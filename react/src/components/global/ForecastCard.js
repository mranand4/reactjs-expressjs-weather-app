const ForecastCard = ({ label, temp, weatherImgUrl, unit }) => {
  return (
    <div className="forecast-card">
      <p>{label}</p>
      <img src={weatherImgUrl} alt="" />
      <p>
        {temp}
        <span>{unit === "metric" ? "°C" : "℉"}</span>
      </p>
    </div>
  );
};

export default ForecastCard;
