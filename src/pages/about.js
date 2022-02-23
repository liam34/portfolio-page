import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { Link } from 'gatsby'

export default function About() {
  return (
      <Layout>
        <div>
        
        <h2>My LinkedIn Profile</h2>
        <Link className={styles.btn2} to="https://www.linkedin.com/in/william-manese-b38b22128/">LinkedIn</Link>
        <br />
        <br />  

        <h2>About Me</h2>     
        <p>I started my journey back Programming in 2019 when Im part of the first batch of Gov't of Alberta initiated a training
           program for Software Development, Conducted by TechCareers A agency who manage and recruits qualified students based on their previous
           experience and skills. This program is a great opportunity to learn current new skills and technology, the program run 6 months in a fast-paced before pandemic hits.
           After graduating from the program, I pursue more studies thru CDI College where I finished a Diploma in Web and Mobile Application Development.
        <section>

           <h2>Diploma in Web and Mobile App Development</h2>
           CDI College - Edmonton, AB
           Graduated with Honors - September 2020 to December 18, 2021

           <h2>Certificate - Coursera in Google IT Support</h2>
           Coursera - Remote
           March 2020 to May 2020

           <h2>Certificate in Software Development in Software Development</h2>
           Southern alberta institute of technology - Calgary, AB
           February 2019 to August 2019

           <h2>Certificate in Nait PC Support and Services</h2>
           Nait - Northern Alberta Institute of Technology - Edmonton, AB 
           December 2016 to February 2017

        </section>
           
        </p>
        <p>
        </p>
        <p>
        </p>
        <p>
        </p>

        <br />
        <h2>Resume</h2>
        <br />
        <h2>Featured</h2>
        <p>Development in React.js, Im using Gatsby.js Next.js for static websites, mostly </p>
        </div>
    </Layout>
  )
}
