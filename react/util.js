const ICON_URL_BASE = "http://openweathermap.org/img/w/";

const COUNTRIES = {
  AF: "Afghanistan",
  AX: "Aland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua And Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia And Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, Democratic Republic",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: 'Cote D"Ivoire',
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island & Mcdonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic Of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle Of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KR: "Korea",
  KP: "North Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: 'Lao People"s Democratic Republic',
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyan Arab Jamahiriya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States Of",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory, Occupied",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthelemy",
  SH: "Saint Helena",
  KN: "Saint Kitts And Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre And Miquelon",
  VC: "Saint Vincent And Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome And Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia And Sandwich Isl.",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard And Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad And Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks And Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Vietnam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis And Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

const WEATHER_TITLE_DESC = {
  Thunderstorm:
    "Dark clouds and loud thunders. Don't go outside until unless it's an absolute necessity.",
  Drizzle: "Light rain and fog. Keep your windscreen clean and drive safely.",
  Rain: "It's raining. Perfect day for making some pakods, prepare tea and sit in a comfy corner of your house with a view.",
  Snow: "Snowing today. Perfect day for sitting near your fireplace and read your favourite book.",
  Clear:
    "Skies are clear and birds are chirping. Perfect day to achieve all your goals.",
  Clouds: "Cloudy skies but nothing to worry about.",
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getWeatherDescription = (title) =>
  WEATHER_TITLE_DESC[title] ??
  `${title}! We suggest you to be a little cautious today while you're outside.`;

const getCountryNameFromISO2 = (code) => COUNTRIES[code] ?? code;

function unixEpochToNormal(epoch) {
  let date = new Date(epoch * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  return {
    time: hours + ":" + minutes.substr(-2),
    day: days[date.getDay()],
  };
}

function simplifyMultiLocationResponse(data) {
  return {
    type: "success",
    locations: data["list"].map((item) => {
      return {
        id: item.id,
        city: item.name,
        country_code: item.sys.country,
        country: getCountryNameFromISO2(item.sys.country),
        lat: item.coord.lat,
        lon: item.coord.lon,
        curr_temp: Math.round(item.main.temp),
        weather_img_url: `${ICON_URL_BASE}${item.weather[0].icon}.png`,
      };
    }),
  };
}

function simplifySingleLocationResponse(data, extra, unit) {
  let out = {
    type: "success",
    id: extra.id,
    country: extra.country,
    city: extra.city,
    current: {
      curr_temp: Math.round(data.current.temp),
      min_temp: Math.round(data.daily[0].temp.min),
      max_temp: Math.round(data.daily[0].temp.max),
      feels_like: Math.round(data.current.feels_like),
      humidity: Math.round(data.current.humidity),
      wind_speed: Math.round(
        unit === "metric"
          ? data.current.wind_speed * 3.6
          : 1.609 * data.current.wind_speed
      ),
      wind_deg: data.current.wind_deg,
      weather_img_url: `${ICON_URL_BASE}${data.current.weather[0].icon}.png`,
      weather_title: data.current.weather[0].main,
      weather_description: getWeatherDescription(data.current.weather[0].main),
      ...unixEpochToNormal(data.current.dt),
    },
    weekly: data.daily.map((item) => {
      return {
        day: unixEpochToNormal(item.dt).day,
        temp: Math.round(item.temp.day),
        weather_img_url: `${ICON_URL_BASE}${item.weather[0].icon}.png`,
      };
    }),
    hourly: data.hourly.map((item) => {
      return {
        time: unixEpochToNormal(item.dt),
        temp: Math.round(item.temp),
        weather_img_url: `${ICON_URL_BASE}${item.weather[0].icon}.png`,
      };
    }),
  };

  out.weekly[0] = {
    day: "Today",
    temp: out.current.curr_temp,
    weather_img_url: out.current.weather_img_url,
  };

  out.weekly.pop();
  out.hourly = out.hourly.slice(0, 13);

  return out;
}

module.exports = {
  getCountryNameFromISO2,
  simplifyMultiLocationResponse,
  simplifySingleLocationResponse,
};