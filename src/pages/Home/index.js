import React, { useState } from 'react'
import Layout from '../../components/layout'
import CommentContainer from '../../components/commentContainer'

const Home = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState([])

    const onSubmit = e => {
        e.preventDefault()
        let info = { firstName, lastName, number, email }
        setComments(prevState => ([...prevState, info]))
    }

    return (
        <Layout>
            <section className="Home">
                <form onSubmit={onSubmit}>
                    <input onChange={e => setFirstName(e.target.value)} />
                    <input onChange={e => setLastName(e.target.value)} />
                    <input onChange={e => setNumber(e.target.value)} />
                    <input onChange={e => setEmail(e.target.value)} />
                    <button type='submit'>Enviar</button>
                </form>
                {
                    comments.map(comment => <CommentContainer {...comment} />)
                }
            </section>
        </Layout>
    )
}

export default Home