
import Cadastro from '../cadastro/Cadastro'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.container1}>

            <div className={styles.img}></div>

            <p>Cadastre e concorra!</p>

            <Cadastro />

        </section>
    )
}

export default Home