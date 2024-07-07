import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1527334134460-f21a05ef62f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVza3klMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?s=612x612&w=is&k=20&c=8GJarlmwJNlW6oUBeXGt7clFxds1rC7gz4XtXa4Frj0=";
    const COLD_URL="https://media.istockphoto.com/id/108223311/photo/lake-in-winter.jpg?s=612x612&w=is&k=20&c=1ERD3A54dUC3PAORz2xQhtW_QkeEDaTNyQWodoXHmL0=";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";

    return (
        <div className="InfoBox">
            <h2>WeatherInfo - {info.weather}</h2>
            <div className="cardcontainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity > 80
                                ? <ThunderstormIcon />
                                : info.temp > 15
                                    ? <WbSunnyIcon />
                                    : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>Min Temp: {info.tempMin}&deg;C</p>
                            <p>Max Temp: {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> & feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
