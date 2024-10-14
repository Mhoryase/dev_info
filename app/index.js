// pages/index.js
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Météo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://path-to-your-styles.css"
        />
      </Head>
      <header>
        <div id="divHeader">
          <div className="logo-container">
            <img
              src="https://www.riantec-oc.fr/wp-content/uploads/2016/03/ami7l-logo-meteo-460x300.png"
              alt="Logo Météo"
              className="logo"
            />
          </div>
          <div className="search-container">
            <input type="text" placeholder="Recherchez votre ville" className="barre-recherche" />
          </div>
        </div>
        <hr className="top-line" />
      </header>

      <center>
        <p>
          Londres <br />
          17°C <br />
          Ciel Nuageux
        </p>
      </center>

      <div className="weather-forecast">
        <div className="hourly-forecast">
          {[...Array(12)].map((_, i) => (
            <div className="forecast-item" key={i}>
              <p className="hour">{`${i * 2}:00`}</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1/1435.png"
                alt="Cloudy"
                className="weather-icon"
              />
              <p className="temp">17°</p>
              <p className="precipitation">20%</p>
            </div>
          ))}
        </div>
      </div>

      <div className="weather-container">
        {[
          { day: 'Auj.', icon: '☁️', rain: '15%', min: '12°', max: '16°', fill: '70%' },
          { day: 'Mardi.', icon: '🌧️', rain: '70%', min: '9°', max: '12°', fill: '30%' },
          { day: 'Mercredi.', icon: '🌧️', rain: '55%', min: '11°', max: '15°', fill: '50%' },
          { day: 'Jeudi.', icon: '🌧️', rain: '60%', min: '10°', max: '15°', fill: '57%' },
          { day: 'Vendredi.', icon: '⛅', rain: '10%', min: '13°', max: '17°', fill: '85%' }
        ].map((forecast, index) => (
          <div className="day" key={index}>
            <span className="day-name">{forecast.day}</span>
            <span className="icon">{forecast.icon}</span>
            <span className="rain-chance">{forecast.rain}</span>
            <span className="min-temp">{forecast.min}</span>
            <div className="temp-bar">
              <div className="fill-bar" style={{ width: forecast.fill }}></div>
            </div>
            <span className="max-temp">{forecast.max}</span>
          </div>
        ))}
      </div>

      <footer>
        <hr className="bottom-line" />
        <p>
          <i>• Météo App By Alan •</i>
        </p>
      </footer>
    </>
  );
}
