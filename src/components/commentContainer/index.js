import React from 'react'
import './index.scss'

const CommentContainer = ({ firstName, lastName, comment}) => {
  return (
    <div className="comments-container">
      <div className="comments-container__box-comment">
        <div className="comments-container__box-comment__author">
          <p>From: <b>{firstName} {lastName}</b></p>
        </div>
        <div className="comments-container__box-comment__comment">
          <p>
            Comment: {comment}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommentContainer