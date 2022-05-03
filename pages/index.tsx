import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Mania</title>
        <meta name="description" content="Your biggest movie catalog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/logo.svg" alt="Movie Mania logo" width={150} height={150} />

        <h1 className={styles.title}>
          Welcome to{' '}
          <strong>
            <span className={styles.titleBlue}>Movie</span>{' '}
            <span className={styles.titleRed}>Mania</span>!
          </strong>
        </h1>
      </main>
    </div>
  )
}

export default Home
