import React from 'react'

export default (props) => {
  return (
    <div>
      <h4 className="media-heading user_name">Username</h4>
      {props.comment_body}
      <p><medium><a href="">Like</a> - <a href="">Share</a></medium></p>
    </div>
)}
