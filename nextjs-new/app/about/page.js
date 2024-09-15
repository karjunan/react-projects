import Link from 'next/link';
import React from 'react'

const AboutPage = async () => {
  const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  const jsonData = await data.json();
  console.log(jsonData)

  return (
    <h1>About Page</h1>

  )
}

export default AboutPage;