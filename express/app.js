const express = require("express");
const cors = require("cors");
const axios = require("axios");
const util = require("./util");

const app = express();
const port = 5000;

require("dotenv").config();

app.use(cors());

const API_KEY_PARAM = `&appid=${process.env.OWM_API_KEY}`;
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?limit=5${API_KEY_PARAM}&q=`;

//1275339,1259229,1269843,1277333,1270642,7279746,1264733,1270926
//accepts - ids for multiple locations and unit and return current info for them
app.get("/getMultiLocationWeather", (req, res) => {
  console.log("called");
  let out = { type: "error" };
  let unit = req.query.unit;
  let locations = req.query.locations;
  let url =
    API_BASE_URL +
    `/group?id=${String(locations)}` +
    `&units=${unit}` +
    API_KEY_PARAM;
  console.log(url);
  axios
    .get(url)
    .then((data) => {
      console.log(data.data);
      let _data = data.data;
      if (_data["cod"]) {
        out["message"] = _data["message"];
        res.json(out);
      } else res.json(util.simplifyMultiLocationResponse(_data));
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
});

// no need to pass id, probe every request
app.get("/getSingleLocationWeather", (req, res) => {
  let out = { type: "error" };
  let unit = req.query.unit;
  let lat = req.query.lat;
  let lon = req.query.lon;
  let url =
    API_BASE_URL +
    `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts` +
    `&units=${unit}` +
    API_KEY_PARAM;
  let idUrl = API_BASE_URL + `/weather?lat=${lat}&lon=${lon}` + API_KEY_PARAM;
  let id = req.query.id;
  axios
    .get(url)
    .then((_data) => {
      if (!id) {
        axios
          .get(idUrl)
          .then((_data2) => {
            let extra = {
              id: _data2.data.id,
              country: util.getCountryNameFromISO2(_data2.data.sys.country),
              city: _data2.data.name,
            };

            console.log(id);
            res.json(
              util.simplifySingleLocationResponse(_data.data, extra, unit)
            );
          })
          .catch((errx) => {
            console.log("Error: ", errx.message);
          });
      } else res.json(util.simplifySingleLocationResponse(_data.data, id));
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
});

app.get("/geoAutocomplete", (req, res) => {
  let q = req.query.q;
  console.log(`${API_GEO_URL}${q}`);
  axios
    .get(`${API_GEO_URL}${q}`)
    .then((_data) => {
      res.json(
        _data.data.map((item) => {
          return {
            name: item.name,
            lat: item.lat,
            lon: item.lon,
            country: util.getCountryNameFromISO2(item.country),
            state: item.state ?? null,
          };
        })
      );
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
});

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
