const LocationCard = ({
  index,
  city,
  country,
  weatherImgUrl,
  temp,
  unit,
  locationCardClickListner,
}) => {
  return (
    <div
      className="location-card"
      onClick={() => {
        locationCardClickListner(index);
      }}
    >
      <h1>{city}</h1>
      <p>{country}</p>
      <div>
        <img src={weatherImgUrl} alt="" />
        <h2>
          {temp}
          <span>{unit === "metric" ? "°C" : "℉"}</span>
        </h2>
      </div>
    </div>
  );
};

export default LocationCard;
