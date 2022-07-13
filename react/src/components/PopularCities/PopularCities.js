import { useEffect, useState } from "react";
import LocationCard from "../global/LocationCard";

const PopularCities = ({ unit, locationCardClickListner }) => {
  const cityIds = [
    1275339, 1259229, 1269843, 1277333, 1270642, 7279746, 1264733, 1270926,
  ];

  let [locations, setLocations] = useState([]);

  useEffect(() => {
    let url = `https://simple-weather-backend.herokuapp.com/getMultiLocationWeather?unit=${unit}&locations=${String(
      cityIds
    )}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLocations(data.locations);
      })
      .catch((err) => {
        console.log("ERROR : ", err.message);
      });
  }, [unit]);

  let popularLocationCardClickListner = (index) => {
    locationCardClickListner(locations[index].lat, locations[index].lon);
  };

  return (
    <div class="location-container">
      <h1>Popular Locations</h1>
      <div>
        {locations.map((item, index) => (
          <LocationCard
            city={item.city}
            index={index}
            country={item.country}
            temp={item.curr_temp}
            weatherImgUrl={item.weather_img_url}
            key={index}
            unit={unit}
            locationCardClickListner={popularLocationCardClickListner}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
