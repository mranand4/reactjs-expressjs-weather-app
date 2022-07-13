import { useState } from "react";
import Autosuggest from "react-autosuggest";

const Navbar = ({ suggestionClickListner, unitChangeListner }) => {
  let locations = [{ name: "", country: "", state: "", lat: -1, lon: -1 }];
  let [value, setValue] = useState("");
  let [suggestions, setSuggestions] = useState([]);
  let [temp, setTemp] = useState("C");

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : locations.filter(
          (location) =>
            location.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.name}, {suggestion.state}, {suggestion.country}
    </div>
  );

  const onChange = (event, { newValue }) => {
    console.log(`ON CHANGED : ${value}, ${newValue}`);
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    console.log(`ON FETCH REQ : ${value}`);
    fetch(
      `https://simple-weather-backend.herokuapp.com/geoAutocomplete?q=${value}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        locations = data;
        setSuggestions(getSuggestions(value));
        console.log(locations);
      })
      .catch((err) => {
        console.log("ERROR : ", err.message);
      });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    console.log("ok");
    console.log(suggestion);
    suggestionClickListner(suggestion.lat, suggestion.lon);
  };

  const inputProps = {
    placeholder: "Search for a location ...",
    value,
    onChange: onChange,
  };

  const onClickTempToggle = (e) => {
    let p = e.target.parentNode;
    if (temp === "C") {
      setTemp("F");
      p.className = "toggle-first-option-unselected";
      unitChangeListner("imperial");
    } else {
      setTemp("C");
      p.className = "toggle-first-option-selected";
      unitChangeListner("metric");
    }
    console.log(temp);
  };

  let body = document.body;
  let darkTheme = "dark";
  let lightTheme = "light";
  let theme;

  theme = localStorage.getItem("theme");

  if (theme == lightTheme || theme == darkTheme) {
    body.classList.add(theme);
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = darkTheme;
    } else {
      theme = lightTheme;
    }
    localStorage.setItem("theme", theme);
    body.classList.add(theme);
  }

  const onClickDisplayThemeToggle = (e) => {
    let p = e.target.parentNode;
    console.log("CURR THEME : " + theme);
    if (theme == lightTheme) {
      body.classList.replace(lightTheme, darkTheme);
      theme = darkTheme;
      localStorage.setItem("theme", theme);
      p.className = "toggle-first-option-unselected";
    } else {
      body.classList.replace(darkTheme, lightTheme);
      theme = lightTheme;
      localStorage.setItem("theme", theme);
      p.className = "toggle-first-option-selected";
    }
    console.log(theme);
  };

  return (
    <nav>
      <div>
        <h1>Simple Weather</h1>
        <div class="autocomplete-container">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </div>
      </div>
      <div class="toggle-container">
        <p onClick={onClickTempToggle} className="toggle-first-option-selected">
          <span>°C</span>
          <span>℉</span>
        </p>
        <p
          onClick={onClickDisplayThemeToggle}
          className={
            theme == lightTheme
              ? "toggle-first-option-selected"
              : "toggle-first-option-unselected"
          }
        >
          <span>🌞</span>
          <span>🌙</span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
