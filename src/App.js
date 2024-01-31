import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navBar'
import SearchField from './components/searchField'
import axios from 'axios';
import envVar from './env.const'
import WeatherCard from './components/weatherCard';
import { Typography } from '@mui/material';

function App() {

  const [searchs, setSearchs] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [errMsg, seterrMsg] = useState('');
  const [errAlert, seterrAlert] = useState(false);

  useEffect(() => {
    // Implementing debouncing for API optimization
    let timer;
    if (searchs) {
      timer = setTimeout(() => {
        perFormAPICall(searchs);
      }, 500)

    }

    return () => {
      clearTimeout(timer);
    }

  }, [searchs])

  const perFormAPICall = async (searchs) => {

    try {

      let apiRes = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${envVar.apiKey}&q=${searchs}&aqi=no`);

      // console.log(apiRes.data);
      seterrAlert(false);
      const { location: { name, country, localtime }, current: { condition, temp_c, temp_f, humidity, wind_kph, cloud } } = apiRes.data;
      setWeatherData({ location: { name, country, localtime }, current: { condition, temp_c, temp_f, humidity, wind_kph, cloud } });

    } catch (err) {
      // error handling
      if (err.response && err.response.status === 400) {
        seterrMsg(err.response.data.error.message);
        seterrAlert(true);
      }

    }
  }

  return (
    <div className='App' >
      <Navbar />
      <SearchField searchs={searchs} setSearchs={setSearchs} />
      {/* Rendering weather card  */}
      {
        errAlert ?
          (
            <Typography gutterBottom component='p' variant='h6' sx={{ color: '#932424' }}  >{errMsg}</Typography>
          ) :
          (Object.keys(weatherData).length > 0 ? (<WeatherCard weatherObj={weatherData} />) : '')


      }

    </div>
  );

}

export default App;
