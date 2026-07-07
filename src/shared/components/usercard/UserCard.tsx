import React from 'react'
import { ImageDiv, Para, UserWrapper } from './usercard.styles'

type UserProps = {
    login: string | null,
    avatar: string | number,
    description: string | ""
}

const UserCard = ({login, avatar, description = ""} : UserProps) => {
  return (
    <UserWrapper>
      {typeof(avatar) === 'string' && (<img src={avatar} alt=""/>)}
      {typeof(avatar) === 'number' && (<ImageDiv>{avatar}</ImageDiv>)}

        <div>
          <Para size = {'24px'} weight={700}>{login}</Para>
          <Para size = {'16px'} weight={500}>{description}</Para>
        </div>
    </UserWrapper>
  )
}

export default UserCard