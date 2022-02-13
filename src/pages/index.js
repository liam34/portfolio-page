import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
        <section className={styles.header}> 
          <div>
            <h2>Design</h2>
            <h3>Develop & Deploy</h3>
            <p>UX designer & web depeloper based in Edmonton.</p>
            <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
          </div>
          <img src="/banner.png" alt="banner" style={{ maxWidth: '100%' }}/>
        </section>
    </Layout>
  )
}
