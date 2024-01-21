import styles from '../styles/about.module.css'

export default function Card({ uni, degree, year, descript }) {
    return (
        <div>
            <p className={styles.edu_year}>{year}</p>
            <h3 className={styles.edu_uni}>{uni}</h3>
            <p className={styles.edu_degree}>{degree}</p>
            <p className={styles.edu_descript}>{descript}</p>
            <div className={styles.edu_divider}></div>
        </div>
    )
}