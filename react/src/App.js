import PopularCities from "./components/PopularCities/PopularCities";
import SavedCities from "./components/SavedCities/SavedCities";
import Navbar from "./components/Navbar/Navbar";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import { useState, useEffect } from "react";

let home = JSON.parse(localStorage.getItem("home"));

let __lat = 28.6448;
let __lon = 77.216721;

if (home) {
  __lat = home.lat;
  __lon = home.lon;
}

console.log("pass");

function App() {
  let [unit, setUnit] = useState("metric");
  let [lat, setLat] = useState(__lat);
  let [lon, setLon] = useState(__lon);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("allowed");
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        console.log("Set");
      });
    }
  }, []);

  const changeUnit = (newUnit) => setUnit(newUnit);

  let locationCardClickListner = (_lat, _lon) => {
    setLat(_lat);
    setLon(_lon);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Navbar
        suggestionClickListner={locationCardClickListner}
        unitChangeListner={changeUnit}
      />
      <main>
        <MainDisplay lat={lat} lon={lon} unit={unit} />
        <PopularCities
          locationCardClickListner={locationCardClickListner}
          unit={unit}
        />
        <SavedCities
          locationCardClickListner={locationCardClickListner}
          unit={unit}
        />
      </main>
    </div>
  );
}

export default App;
