import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

const Projects = () => {
  return (
    <Layout>
        <div className={styles.portfolio}>
            <h2>Design</h2>
            <h3>Develop & Deploy</h3>
            <p>UX designer & web depeloper based in Edmonton.</p>
        </div>
    </Layout>
  )
}

export default Projects
