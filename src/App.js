import React, { useState } from 'react';
import './App.css'
import styled from 'styled-components'
import dayTime from './images/dayTime.gif'
import night from './images/night.gif'


const api = {
  key: "bcd911461b1b688b68f212fe3e37511f",
  base: "https://api.openweathermap.org/data/2.5/"
}

const BackG = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState('');

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
    let hour = d.getHours();
    let minutes = d.getMinutes();
    

    return `${day} ${date} ${month} ${year} ${hour}.${minutes}`
    
  }
  
  return (
    
    <div>
      <main>
        <div className="search-box">
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
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
            </div>
            <div className="icon-container" ><img className='icon' src={iconurl} alt='test'/></div>
          
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;


