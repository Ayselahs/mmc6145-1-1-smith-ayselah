import Header from '../components/header'
import styles from '../styles/about.module.css'
import Card from '../components/card'

const Education = [
    {
        uni: "grad",
        degree: "Bachelor's Degree",
        year: "2018 - 2022",
        descript: "Explores",
    },
    {
        uni: "grad",
        degree: "Bachelor's Degree",
        year: "2018 - 2022",
        descript: "Explores",
    },
    {
        uni: "grad",
        degree: "Bachelor's Degree",
        year: "2018 - 2022",
        descript: "Explores",
    }
]

export default function About() {
    return (
        <>
            <Header />
            <section>
                <h2>About Me</h2>
                <div className={styles.about_container}>
                    <div className={styles.about_info}>
                        <p>Bio,,,,Bio,,,,</p>
                        <a></a>
                        <a></a>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        {Education.map((edu, index) => {
                            return (
                                <Card key={index} {...edu} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </>


    )
}