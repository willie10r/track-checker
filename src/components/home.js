import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {

    async function getWeather(part) {
        const response = await fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
        const data = await response.json();
        return (data.dataseries[2].seeing);
    }
    let show = getWeather();

    return (
        <div>
            <h1>track weather</h1>
            <section>
                <h2>local weather</h2>
                <h4>{`the rain is ${show}`}</h4>

            </section>
            <section>
                <h2>your track weather</h2>
            </section>
        </div>
    );
    console.log(show);
}

export default Home