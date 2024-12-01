import location from "/location.svg"


export default function Card() {
    return (
        <article className="article--entry">
            <div className="article-image-container">
                <img src="/tokyo.jpg" alt="" className="article-main-image" />
            </div>
            <div className="article--info">
                <img src={location} alt="" className="article-info-marker" />
                <span className="article--country">Japan</span>
                <a href="https://maps.app.goo.gl/UNk7Kx4SKgwi9QFb9" className="">View on Google Maps</a>
                <h2 className="article--title">Tokyo</h2>
                <p className="article--dates">12 Jan, 2024 - 24 Jan, 2024</p>
                <p className="article--paragraph">Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. </p>
            </div>
        </article>
    )
}