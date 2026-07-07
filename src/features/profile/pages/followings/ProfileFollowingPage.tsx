import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router'
import { getUserFollowings } from '../../../../shared/api/githubservice/searchUser';
import { buildRoute } from '../../../../config/config';
import type { FollowingResponse, FollowingsType } from './profileFollowingType';
import { ListWrapper } from '../follower/pfp.styles';
import UserCard from '../../../../shared/components/usercard/UserCard';
import { Wrapper } from '../profilePage/profile.styles';

function ProfileFollowingPage() {
   const { username } = useParams<string>()
  const [followings, setFollowings] = useState<FollowingResponse>([]);


  const fetchFollowings = async (username : string | undefined) => {
    try {
      const response = await getUserFollowings(username);
      setFollowings(response);
    } catch (error) {
      console.log("Followers --- API ---- ", error);
    }
  }

  useEffect(() => {
    fetchFollowings(username);
  }, []);

  useEffect(() =>{
    document.title = `Github - ${username} / Followings`
  })

  return (
    <Wrapper>
      <h1>{username}&apos;s Followings</h1>
      <ListWrapper>
        {followings.map((followings: FollowingsType) => (
  
            <Link to={buildRoute.profile(followings?.login)}><UserCard login={followings?.login} avatar={followings?.avatar_url} description='' /></Link>
        
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

export default ProfileFollowingPage
