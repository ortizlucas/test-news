import React from 'react'

const CommentContainer = ({ firstName, lastName, number, email }) => {
  console.log(firstName)
  return (
    <div>
      {firstName}
    </div>
  )
}

export default CommentContainer