import earth from "/earth.svg"

export default function Navbar() {
    return (
        <header className="nav--header">
            <nav className="nav">
                <img src={earth} alt="icon of earth" className="nav--image" />
                <span className="nav--title">Travel Journal</span>
            </nav>
        </header>
    )
}