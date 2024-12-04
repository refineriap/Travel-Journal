import location from "/location.svg"
import PropTypes from 'prop-types';


export default function Card({ image, country}) {
    return (
        <article className="article--entry">
            <div className="article-image-container">
                <img src={image} alt="" className="article-main-image" />
            </div>
            <div className="article--info">
                <img src={location} alt="" className="article-info-marker" />
                <span className="article--country">{country}</span>
                <a href="https://maps.app.goo.gl/UNk7Kx4SKgwi9QFb9" className="">View on Google Maps</a>
                <h2 className="article--title">Tokyo</h2>
                <p className="article--dates">12 Jan, 2024 - 24 Jan, 2024</p>
                <p className="article--paragraph">Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. </p>
            </div>
        </article>
    )

}

Card.propTypes = {
    image: PropTypes.string.isRequired, 
    country: PropTypes.string.isRequired, 
};