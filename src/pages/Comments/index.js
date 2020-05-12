import React, { useState } from 'react'
import Layout from '../../components/layout'
import Input from '../../components/input'
import CommentContainer from '../../components/commentContainer'
import './index.scss'

const Comments = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  const handleButton = () => {
    let info = { firstName, lastName, comment }
    setComments(prevState => ([...prevState, info]))
  }

  return (
    <Layout>
      <section className="comments-section">
        <div className="comments-section__add-comment">
          <Input
            label="Nombre"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <Input
            label="Apellido"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <label>Comentario</label>
          <textarea 
            className="comments-section__add-comment__form__textarea"
            onChange={e => setComment(e.target.value)}
          />
          <div className="comments-section__add-comment__form__contain-button">
            <button onClick={handleButton} className="comments-section__add-comment__form__contain-button__button">
              Agregar
            </button>
          </div>
        </div>
        <div className="comments-section__contain-comments">
          { comments.map(comment => <CommentContainer {...comment} />) }
        </div>
      </section>
    </Layout>
  )
}

export default Comments
