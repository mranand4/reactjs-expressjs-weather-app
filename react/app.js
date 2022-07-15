const express = require("express");
const cors = require("cors");
const axios = require("axios");
const util = require("./util");

const app = express();
app.use(cors());
require("dotenv").config();

const PORT = 5000;
const API_KEY_PARAM = `&appid=${process.env.OWM_API_KEY}`;
const API_BASE_URL = `https://api.openweathermap.org/data/2.5`;
const API_GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?limit=5${API_KEY_PARAM}&q=`;

function AppError(msg, code) {
  this.type = "error";
  this.msg = msg;
  this.code = code;
}

app.get("/getMultiLocationWeather", (req, res) => {
  let unit = req.query.unit;
  let locations = req.query.locations;

  let url = `${API_BASE_URL}/group?id=${String(
    locations
  )}&units=${unit}${API_KEY_PARAM}`;

  axios
    .get(url)
    .then((data) => {
      let _data = data.data;
      res.json(
        _data["cod"]
          ? new AppError(_data.message, (code = 1))
          : util.simplifyMultiLocationResponse(_data)
      );
    })
    .catch((err) => {
      res.json(new AppError(err.message, (code = 2)));
    });
});

app.get("/getSingleLocationWeather", (req, res) => {
  let unit = req.query.unit;
  let lat = req.query.lat;
  let lon = req.query.lon;

  let url = `${API_BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}${API_KEY_PARAM}`;
  let idUrl = `${API_BASE_URL}/weather?lat=${lat}&lon=${lon}${API_KEY_PARAM}`;

  axios
    .get(url)
    .then((_data) => {
      axios
        .get(idUrl)
        .then((_data2) => {
          res.json(
            util.simplifySingleLocationResponse(
              _data.data,
              {
                id: _data2.data.id,
                country: util.getCountryNameFromISO2(_data2.data.sys.country),
                city: _data2.data.name,
              },
              unit
            )
          );
        })
        .catch((errx) => {
          res.json(new AppError(errx.message, (code = 3)));
        });
    })
    .catch((err) => {
      res.json(new AppError(err.message, (code = 4)));
    });
});

app.get("/geoAutocomplete", (req, res) => {
  let q = req.query.q;

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
      res.json(new AppError(err.message, (code = 5)));
    });
});

app.get("/", (req, res) => {
  res.send("ok");
});

/*rough*/
app.get("/addNewTodo", (req, res) => {
  let value = req.query.value;

  res.json({ value: `Your value was : ${value}` });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
