import React from 'react'
import { Link, useParams } from 'react-router'

const Card = ({title, count}: any) => {

  const {username} = useParams();

  return (
    <div className='p-4 border-1'>
        <Link to = {`/profile/${username}/${title}`}>
          <div>
            <p>{title}</p>
            <p>{count}</p>
          </div>
        </Link>
    </div>
  )
}

export default Card