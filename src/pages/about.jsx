import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/about.module.css'
import Card from '../components/card'

const Education = [
    {
        uni: "University of Florida",
        degree: "Certificate Degree",
        year: "2023 - Present",
        descript: "Cybersecurity Bootcamp",
    },
    {
        uni: "University of Florida",
        degree: "Master's Degree",
        year: "2022 - 2024",
        descript: "Mass Communications in Web Design with a focus in UX/UI design",
    },
    {
        uni: "University of Florida",
        degree: "Bachelor's Degree",
        year: "2018 - 2022",
        descript: "Digital Arts and Science with a focus in Mobile and Game Design",
    }
]

export default function About() {
    return (
        <>
            <Header />
            <section>
                <h2 className={styles.projText}>About Me</h2>
                <div className={styles.about_container}>
                    <div className={styles.about_info}>
                        <p className={styles.pText}>As a passionate and detail-oriented industry professional, I enjoy approaching complex projects with a holistic approach. A large part of my success while working with people stems from my ability to cultivate an intuitive understanding of their needs, and spearhead the project from there. Have a look at the work I’ve done in the past, and get in touch to learn more.</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className={styles.edu_card}>
                        {Education.map((edu, index) => {
                            return (
                                <Card key={index} {...edu} />
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>


    )
}