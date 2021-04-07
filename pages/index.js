import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Studio CV | The only way to stand out.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img href="/" className={styles.logo} src="/logo.svg"  alt="logo" />

        <p className={styles.description}>
          Bienvenue sur la première plateforme de CV vidéo de Suisse !
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Trouver un candidat &rarr;</h3>
            <p>Effectuez une recherche par secteur d'activité.</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>Parcourir les vidéos &rarr;</h3>
            <p>Découvrez un maximum de vidéos en un coup d'oeil</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h3>Obtenir sa vidéo &rarr;</h3>
            <p>Inscrivez-vous, nous prendrons rendez-vous, c'est gratuit !</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h3>Postuler chez Studio CV &rarr;</h3>
            <p>
              Découvrez nos offres d'emplois et rejoignez notre équipe.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://theplayground.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by The Playground
        </a>
      </footer>
    </div>
  )
}
