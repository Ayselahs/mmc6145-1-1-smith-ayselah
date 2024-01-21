import Header from '../components/header'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <>
            <Header />
            <main>
                <div>
                    <h1>Contact</h1>
                    <ul>
                        <li>
                            <Link to="https://www.linkedin.com/in/AyselahSmith/">LinkedIn</Link>
                        </li>
                        <li>
                            <Link to="https://github.com/Ayselahs">Github</Link>
                        </li>
                        <li>
                            <Link to="https://www.behance.net/ayselahsmith">Behance</Link>
                        </li>
                    </ul>
                </div>
            </main>

        </>
    )
}