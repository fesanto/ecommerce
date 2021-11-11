import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Página COMPONENTS
        </h1>
        <p className={styles.p}>Mussum Ipsum, cacilds vidis litro abertis.<br />Si u mundo tá muito paradis?<br />Toma um mé que o mundo vai girarzis! <br />Praesent malesuada urna nisi, quis volutpat erat hendrerit non. <br />Nam vulputate dapibus.<br /> Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! <br />Suco de cevadiss deixa as pessoas mais interessantis.</p>
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}