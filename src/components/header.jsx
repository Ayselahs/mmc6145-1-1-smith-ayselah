import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <div className="logo">Ayselah Smith</div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>

    )
}