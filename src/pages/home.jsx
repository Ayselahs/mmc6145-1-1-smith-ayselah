import styles from '../styles/home.module.css'
import Project from '../components/project'
import Header from '../components/header'
import Images from '../assets'
import { s } from 'vitest/dist/index-5aad25c1'

const Projects = [
  {
    title: "Velocity: Street Racer",
    descript: "Single-Player Street Racing Game",
    img: Images,
    link: "https://www.behance.net/gallery/134673003/Velocity-Street-Racer",
  },
  {
    title: "E-Book Library",
    descript: "A collection of books that you can browse and search through",
    img: "img",
    link: "https://github.com/Ayselahs/ebook-library-smith",
  },
  {
    title: "Movie Night Planner",
    descript: "Movie watchlist (The Movie Database API) with popular movies,",
    img: "img",
    link: "https://github.com/Ayselahs/com6338-10-10-pham-smith",
  },
  {
    title: "My Lovely Journal",
    descript: "Create entries into your own personal journal",
    img: "img",
    link: "https://github.com/Ayselahs/My_Lovely_Journal",
  }
]

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.content}>
          <p className={styles.introText}>Hi, this is...</p>
          <h1 className={styles.h1Text}>Ayselah's Portfolio</h1>
          <h2 className={styles.h2Text}>A UX Designer / Full-Stack Developer</h2>
          <p className={styles.pText}>I am a </p>
        </div>
        <section>
          <h2>Projects</h2>
          <div>
            {Projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </section>

      </main>
      <footer></footer>
    </>
  )
}