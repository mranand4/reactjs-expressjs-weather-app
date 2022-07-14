## Weather App


**1. INTRO**

Task was to create a simple weather app with reactjs with expressjs backend. Backend is merely acts as a proxy for the OpenWeatherMap API.
 
 Requirements were :
 
 - [x] Display the weather information for the user’s current location. If the user has denied access to their location or the weather API returns a non-successful status (e.g., 4XX, 50X) show a meaningful error message.
 - [x] The weather information section should display the current temperature, the min-max temperature range, the humidity percentage, and the feels like temperature. There should also be an option to switch all the temperatures from Celsius to Fahrenheit.
 - [x] The temperature for the entire day should be shown on the app, broken down hourly, in different tiles/rows. If the chosen API only supports hourly forecast for the future timestamps, only the future timestamps should be shown otherwise historical data for the older timestamps must be used as well.
 - [x] The forecasted temperature for the upcoming week should also be shown in different tiles/rows. ()
 - [x] The user should be able to search for a city and see the temperature forecast for that place instead of their current location. On searching for a location, the user should be shown an autocomplete list from which they can select a location.
 - [x] In case the user doesn’t share their current location with the app they should still be able to search for a location and see the temperature for that location.
 - [x] User should be able to save different locations on the app and see their list of saved locations. On interacting with the list of saved locations the user should see the weather forecast for that location instead of the current/searched location.
 - [x] User should have an option to remove a saved location.
 - [x] Display appropriate icons based on the weather condition e.g.: show a cloud with rainfall if the API returns that it will rain or a snowflake if it is expected to snow etc.
 - [x] Deploy the application to any platform of your choice (e.g.: Heroku, GitHub Pages, etc.)
 - [x] User should be able to mark a location as default so that the next time they load the app the weather for the default location is shown instead of the current/searched location.
 - [x] An option to toggle the theme from light/dark mode. The default theme is automatically picked based on the user’s system settings and the user can then change it later.
 - [x] Display the sunset time, sunrise time, AQI, wind speed and wind direction based on the values returned by the API. The wind direction should be shown by transforming an arrow icon according to the degree value.
 - [ ] Integrate with a DB and allow a user to create an account or login to an existing account and store/see the different locations they’ve saved. 
 - [ ] Integrate with a map provider to display a terrain map for the user’s current/selected location.

All except 2 requirements were met.


**2. MILESTONES**

To ensure that the project was completed successfully in the given time I divided it into various milestones -- by task and date. This was to keep the process smooth and organised.

 1. Understand the project requirements, clear any doubts regarding them with seniors.
 2. Find a service which provides the APIs which satisfies most of the requirements of the project, is free and easy to use and understand. Find the relevant endpoints, see the documentations for the same and learn to use them. 
 3. Learn the basics of React. [1st, 2nd, 3rd milestones by 7th, July]
 4. Design the UI/UX of the app keeping in mind the requirements, decide what data to display and functionality to have. This is done on paper.
 5. Based on the UI and data to display and functionality planned. Design the API endpoints and code them in express.  [4th, 5th milestones by 11th, July]
 6. Make the UI in React.
 7. Couple frontend and backend. [6th, 8th milestone by 12th, July]
 8. Learn hosting apps on heroku.
 9. Host the app. [6th, 8th milestone by 13th, July]


**3. LEARNING RESOURCES USED**
 
 https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d
https://www.youtube.com/watch?v=IiUg-2dAd4A
https://www.w3schools.com/jsref/prop_win_localstorage.asp
https://javascript.info/
https://reactjs.org/tutorial/tutorial.html


**3. END NOTES**

I was able to fulfill most of the project requirements and was able to host the app on Heroku. However, two requirements were not met -- acount creation and terrain map integrating.

Personal;
1. Frontend bug -- deleting a saved location takes scroll bar to top for no apparent reason.
2. Frontend/Backend -- Code is dirty. Not aesthetically pleasing.

 



