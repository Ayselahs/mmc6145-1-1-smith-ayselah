import styles from '../styles/home.module.css'
import Project from '../components/project'
import Header from '../components/header'
import Footer from '../components/footer'
import image1 from '../assets/BehanceTitle.png'
import image2 from '../assets/EBookLibrary.jpg'
import image3 from '../assets/Journal.jpg'
import image4 from '../assets/MovieLibrary.jpg'


const Projects = [
  {
    title: "Velocity: Street Racer",
    descript: "Single-Player Street Racing Game",
    img: image1,
    link: "https://www.behance.net/gallery/134673003/Velocity-Street-Racer",
  },
  {
    title: "E-Book Library",
    descript: "A collection of books that you can browse and search through",
    img: image2,
    link: "https://github.com/Ayselahs/ebook-library-smith",
  },
  {
    title: "Movie Night Planner",
    descript: "Movie watchlist (The Movie Database API) with popular movies,",
    img: image4,
    link: "https://github.com/Ayselahs/com6338-10-10-pham-smith",
  },
  {
    title: "My Lovely Journal",
    descript: "Create entries into your own personal journal",
    img: image3,
    link: "https://github.com/Ayselahs/My_Lovely_Journal",
  }
]

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.bg}>
          <div className={styles.customBG}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
            </svg>
          </div>

          <div className={styles.content}>
            <h1 className={styles.h1Text}>Ayselah's Portfolio</h1>
            <h2 className={styles.h2Text}>A UX Designer / Full-Stack Developer</h2>
            <p className={styles.pText}>Currently, I am enrolled at the University of Florida in the Masters Web Design & Online Communications major. Throughout my time in college, I have gained skills in 3D Art, Illustrative art, Android App Development, and Programming. As a highly motivated and dedicated student with strong technology, communication, and interpersonal skills.</p>
          </div>
        </div>
      </main>
      <section>
        <div>
          <br />
          <br />
        </div>
        <h2 className={styles.projText}>Projects</h2>
        <div>
          {Projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>


      <Footer />
    </>
  )
}