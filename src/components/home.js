import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
            //this is for checking for https response issues the if else statment
            .then((response) => {
                if (!response.ok) {
                    console.log('http error')
                }
                return response.json()
            })
            .then((data) =>
                setData(data)
            )
            .catch((err) => {
                console.log(err.message);
            })
    }, []);
    let show = data.dataseries[2].cloudcover;

    return (
        <div>
            <h1>track weather</h1>
            <section>
                <h2>local weather</h2>
                <h4>{`${show}`}</h4>


            </section>
            <section>
                <h2>your track weather</h2>
            </section>
        </div>
    );
}

export default Home