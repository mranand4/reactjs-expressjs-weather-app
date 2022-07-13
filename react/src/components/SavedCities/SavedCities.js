import { useEffect, useState } from "react";
import LocationCard from "../global/LocationCard";
import NoneIndicator from "./NoneIndicator";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SavedCities = ({ unit, locationCardClickListner }) => {
  let cityIds = Object.keys({ ...localStorage });
  let [locations, setLocations] = useState([]);

  console.log("locatins = " + cityIds);

  useEffect(() => {
    let url = `https://simple-weather-backend.herokuapp.com/getMultiLocationWeather?unit=${unit}&locations=${String(
      cityIds
    )}`;

    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setLocations(data.locations);
      })
      .catch((err) => {
        console.log("ERROR : ", err.message);
      });
  }, [unit]);

  let savedLocationCardClickListner = (index) => {
    locationCardClickListner(locations[index].lat, locations[index].lon);
  };

  let delLocation = (e, id) => {
    e.stopPropagation();
    localStorage.removeItem(String(id));
    setLocations(locations.filter((item) => item.id !== id));
    toast(`Removed`);
  };

  return (
    <div className="location-container">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
      />
      <h1>Saved Locations</h1>
      {locations.length != 0 ? (
        <div>
          {locations.map((item, index) => (
            <div className="saved-location-cotnainer">
              <LocationCard
                city={item.city}
                index={index}
                unit={unit}
                country={item.country}
                temp={item.curr_temp}
                weatherImgUrl={item.weather_img_url}
                key={index}
                locationCardClickListner={savedLocationCardClickListner}
              />
              <a
                href="#"
                className="remove-btn"
                onClick={(e) => {
                  delLocation(e, item.id);
                }}
              >
                x
              </a>
            </div>
          ))}
        </div>
      ) : (
        <NoneIndicator />
      )}
    </div>
  );
};

export default SavedCities;
