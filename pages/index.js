import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Vimeo from '@u-wave/react-vimeo'
import LazyLoad from 'react-lazy-load';



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
        <LazyLoad>
          <Vimeo className={styles.video}
              video="540677376"
              autoplay="false"
              width="300px"
            />  
        </LazyLoad>
        <LazyLoad>
          <Vimeo className={styles.video}
              video="540677376"
              autoplay="false"
              width="300px"
            />  
        </LazyLoad>
        <LazyLoad>
          <Vimeo className={styles.video}
              video="540677376"
              autoplay="false"
              width="300px"
            />  
        </LazyLoad>  
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
