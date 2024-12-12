import marker from "/location.svg"
import PropTypes from 'prop-types';
// import { useState } from 'react'


export default function Card({ image, country, location, city, date, text }) {
   

    return (
        <article className="article--entry">
            <div className="article-image-container">
                <img src={image} alt="" className="article-main-image" />
            </div>
            <div className="article--info">
                <img src={marker} alt="" className="article-info-marker" />
                <span className="article--country">{country}</span>
                <a href={location} className="">Google Maps</a>
                <h2 className="article--title">{city}</h2>
                <p className="article--dates">{date}</p>
                <p className="article--paragraph">{text}</p>
            </div>
        </article>
    )

}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // on: PropTypes.bool.isRequired,
};