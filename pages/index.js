import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

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
          <p>
            Get started by calling or texting&nbsp;
            <code className={styles.code}>1 (512) 809-0129</code>
          </p>

        </div>
<<<<<<< HEAD
        
<Footer>
=======



        <div className={styles.grid}>
          <a
            href="https://letzwrk.com/electrical"
            className={styles.card}
          >
            <h2 className={inter.className}>
             Electrical <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Minor Electrical is my forte
            </p>
          </a>

          <a
            href="https://letzwrk.com/plumbing"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Minor Plumbing <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Minor Plumbing is my forte
            </p>
          </a>

          <a
            href="https://letzwrk.com/Mounting"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Mounting <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              TVs , Shelves, Art
            </p>
          </a>

          <a
            href="Assembly"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Assembly <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Furniture, PlayScapes, Mechanical...
            </p>
          </a>
        </div>
>>>>>>> 0625957193edf3fd6cbc1a6cf8530193979dd520
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
<<<<<<< HEAD
</Footer>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              electrical 
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
=======
        <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
>>>>>>> 0625957193edf3fd6cbc1a6cf8530193979dd520
      </main>
    </>
  )
}
