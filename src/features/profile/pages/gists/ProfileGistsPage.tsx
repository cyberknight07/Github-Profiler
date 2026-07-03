import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getGists } from '../../../../shared/api/githubservice/searchUser';

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

  return (
    <div>
      <h1>{username}'s Gists</h1>
      {gists?.map((gist: any, index: number) => (
        <div key={index}>
            <a href={gist?.html_url} target='blank'>{index+1} - {gist?.description}</a>
        </div>
      ))}
    </div>

  )
}

export default ProfileGistsPage