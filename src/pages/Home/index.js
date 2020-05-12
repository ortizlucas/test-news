import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import fetchData from '../../services/apiNews'

const Home = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    // fetchData().then(res => setArticles(res.docs))
  }, [])

  return (
    <Layout>
      <section className="Home">

      </section>
    </Layout>
  )
}

export default Home