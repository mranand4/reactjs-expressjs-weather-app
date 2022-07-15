import PopularCities from "./components/PopularCities/PopularCities";
import SavedCities from "./components/SavedCities/SavedCities";
import Navbar from "./components/Navbar/Navbar";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import { useState, useEffect } from "react";

let home = { lat: 28.6448, lon: 77.216721 };
if (localStorage) home = JSON.parse(localStorage.getItem("home")) ?? home;

function App() {
  let [unit, setUnit] = useState("metric");
  let [lat, setLat] = useState(home.lat);
  let [lon, setLon] = useState(home.lon);
  let [cityIds, setCityIds] = useState(Object.keys({ ...localStorage }));

  const changeToCurrentLoc = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    }
  };

  const locationCardClickListner = (_lat, _lon) => {
    setLat(_lat);
    setLon(_lon);
    window.scrollTo(0, 0);
  };

  const changeUnit = (newUnit) => setUnit(newUnit);

  const citySaveListner = () => setCityIds(Object.keys({ ...localStorage }));

  useEffect(() => {
    if (!home.id) changeToCurrentLoc();
  }, []);

  return (
    <div className="App">
      <Navbar
        suggestionClickListner={locationCardClickListner}
        unitChangeListner={changeUnit}
        changeToCurrentLocListner={changeToCurrentLoc}
      />
      <main>
        <MainDisplay
          lat={lat}
          lon={lon}
          unit={unit}
          saveCityListner={citySaveListner}
        />
        <PopularCities
          locationCardClickListner={locationCardClickListner}
          unit={unit}
        />
        <SavedCities
          locationCardClickListner={locationCardClickListner}
          unit={unit}
          cityIds={cityIds}
        />
      </main>
    </div>
  );
}

export default App;
