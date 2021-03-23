import React, { useState } from 'react';
import './App.css'
import { 
  SearchContainer, 
  CircleSmall, 
  CircleMedium, 
  CircleLarge, 
  CircleLarge2, 
  StyleButton, 
  GlassContainer,
  CityContainer,
  DateContainer,
  TempContainer,
  WeatherContainer,
  IconContainer} from './components/container'


const api = {
  key: "bcd911461b1b688b68f212fe3e37511f",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState('');
  const [popup, setPopUp] = useState(true);

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(data => {
          setWeather(data);
          setQuery('');
          setIcon(data.weather[0].icon)
          console.log(data);
        });
    }
  }
   const iconcode = icon;
   const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const test4 = () => {
    if (popup) {
      setPopUp(false);
    } else {
      setPopUp(true);
    }
  };


  return (
    <div className='page-container'>
      {popup ? (
        <>
      <div className='bar-container'>
        <input 
            type="text"
            className="search-bar"
            placeholder="City name"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
      </div>
      
        {(typeof weather.main != "undefined") ? (
        <main className='main-container'>
          <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
            <div className="weather">{weather.weather[0].main}</div>
              <div className='circle'>
            <div className='icon-container'>
              <img className='icon' src={iconurl} alt='test'/>
            </div>
            </div>
              <button className='style-button' onClick={test4}>Change style</button>
        </main>
        ) : ('')}
        </>
      ) : (
        <div className='page-container2'>

          <CircleSmall></CircleSmall>
          <CircleMedium></CircleMedium>
          <CircleLarge></CircleLarge>
          <CircleLarge2></CircleLarge2>

          <SearchContainer>
            <input 
            type="text"
            className="search-bar2"
            placeholder="City name"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
          </SearchContainer>

          <GlassContainer>

            <CityContainer>
              {weather.name}, {weather.sys.country}
            </CityContainer>

            <DateContainer>
              {dateBuilder(new Date())}
            </DateContainer>

            <TempContainer>
            {Math.round(weather.main.temp)}°c
            </TempContainer>

            <WeatherContainer>
              {weather.weather[0].main}
            </WeatherContainer>

            <IconContainer>
              <img className='icon' src={iconurl} alt='test'/>
            </IconContainer>

          </GlassContainer>
            <StyleButton onClick={test4}>Change style</StyleButton>
        </div>
      )}
    </div>
  );
}

export default App;


