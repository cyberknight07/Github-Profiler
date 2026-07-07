import React from 'react'
import { Link, useParams } from 'react-router'
import { CardContainer } from './card.styles';

const Card = ({title, count}: any) => {

  const {username} = useParams();

  return (
    <CardContainer>
        <Link to = {`/profile/${username}/${title}`}>
            <p>{title}</p>
            <p>{count}</p>
        </Link>
    </CardContainer>
  )
}

export default Card