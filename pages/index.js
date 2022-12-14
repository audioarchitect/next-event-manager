import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title className="text-2xl text-blue-500">Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Events app
        </h1>
        <div className={styles.grid}>
          <a href="/events" className={styles.card}>
            <h2>Events Dashboard &rarr;</h2>
            <p>Go here to play with the Events dashboard</p>
          </a>

          <a href="/api/events" className={styles.card}>
            <h2>Events API&rarr;</h2>
            <p>Go here to test the REST call to fetch Events</p>
          </a>
        </div>
      </main>
    </div> 
  )
}
