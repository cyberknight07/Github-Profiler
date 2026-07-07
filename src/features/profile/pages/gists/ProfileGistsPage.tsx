import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getGists } from '../../../../shared/api/githubservice/searchUser';
import { Wrapper } from '../profilePage/profile.styles';
import UserCard from '../../../../shared/components/usercard/UserCard';
import type { Gists } from './profileGistsType';

const ProfileGistsPage = () => {

  const {username} = useParams();

  const [gists, setGists] = useState([]);
  
      const fetchGists = async (username: string | undefined) => {
          const response = await getGists(username);
          console.log(response);
          setGists(response);
      }

  useEffect(() => {
    fetchGists(username);
  }, []);

    useEffect(() =>{
    document.title = `Github - ${username} / Gists`
  })

  return (
    <Wrapper>
      <h1>{username}'s Gists</h1>
      {gists?.map((gist: Gists, index: number) => (
        <div key={index}>
            <a href={gist?.html_url} target='blank'><UserCard avatar={index+1} login={gist?.description} description=''/></a>
        </div>
      ))}
    </Wrapper>

  )
}

export default ProfileGistsPage