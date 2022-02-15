import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function NavBar() {
  const data = useStaticQuery(graphql`
   {
    site { 
      siteMetadata {
        description
        title
      }
    }
  }
  `
    )

    const { title } = data.site.siteMetadata

  return (
    <nav>
        <h1>{ title }</h1>
        <div className='links'>
        <Link to='/'>Landing Page</Link>
        <Link to='/about'>Content and Achievements</Link>
        <Link to='/projects'>Portfolio Projects</Link>
        </div>
        
    </nav>
  )
}
