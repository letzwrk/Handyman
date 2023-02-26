import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>LetzWrk</title>
        <meta name="description" content="Handyman in Austin, Texas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>

        <div className={styles.description}>
          <p><a href="tel:+15128090129">Call , text for a quote
            1 (512) 809-0129 </a></p>
        </div>

        <p className={inter.className}>I consitently received praise for my low rates , prompt service and the quality of my work.</p>

        <p className={inter.className}>I would love to do the same for you</p>

      <div className={styles.grid}>

          <a href="#electrical" className={styles.card}>
            <h2 className={inter.className}>
            Minor Electrical <span>-&gt;</span>
            </h2>
          </a>

          <a href="#plumbing" className={styles.card}>
            <h2 className={inter.className}>
              Minor Plumbing <span>-&gt;</span>
            </h2>
          </a>

          <a href="#mounting" className={styles.card}>
            <h2 className={inter.className}>
              Mounting <span>-&gt;</span>
            </h2>
          </a>

          <a href="#assembly" className={styles.card}>
            <h2 className={inter.className}>
              Assembly <span>-&gt;</span>
            </h2>
            
          </a>

      </div>
        

      </main>
    </>
  )
}
