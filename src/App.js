import React, { useState } from 'react';
const api = {
  key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
  base: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
  const [name, setName] = useState('');
  const [weather, setWeather] = useState({});


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${name}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setName('');
          console.log(result);
        });
    }
  }



  const toDateFunction = () => { 
    const months = [ 
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December', 
    ]; 

    const WeekDays = [ 
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday', 
    ]; 

    const currentDate = new Date(); 
    const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()] 
        }`; 
    return date; 
  };


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>

    <main className='weather-container'>
      <div>
      <h2 className='app-name'>My weather App</h2>

      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter details...' onKeyDown={search} />
      </div>

      <div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="weather-info">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{toDateFunction(new Date())}</div>
          </div>
          <div className="weather-detail">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </div>
      
    </main>
    </div>
  )
}

export default App;
