import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import fetchData from '../../services/apiNews'

const Home = () => {
  const [articles, setArticles] = useState([])
  const [a, setA] = useState('')

  useEffect(() => {
    // fetchData().then(res => setArticles(res.docs))
    console.log(a)
  }, [a])

  const onChange = e => {
    setA(e.target.value)
    // console.log(a)
  }

  return (
    <Layout>
      <section className="Home">
        <input onChange={onChange} />
      </section>
    </Layout>
  )
}

export default Home