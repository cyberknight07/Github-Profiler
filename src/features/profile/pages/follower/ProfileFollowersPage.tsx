import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { getUserFollowers } from '../../../../shared/api/githubservice/searchUser';
import { buildRoute } from '../../../../config/config';
import type { FollowersResponse, FollowersType } from './ProfileFollowersType';
import UserCard from '../../../../shared/components/usercard/UserCard';
import { ListWrapper } from './pfp.styles';

function ProfileFollowersPage() {
  const { username } = useParams<string>()
  const [followers, setFollowers] = useState<FollowersResponse>([]);


  const fetchFollowers = async (username : string | undefined) => {
    try {
      const response = await getUserFollowers(username);
      setFollowers(response);
    } catch (error) {
      console.log("Followers --- API ---- ", error);
    }
  }

  useEffect(() => {
    fetchFollowers(username);
  }, []);

  useEffect(() =>{
    document.title = `Github - ${username} / Followers`
  })

  return (
    <section>
      <h1>{username}&apos;s Followers</h1>
      <ListWrapper>
        {followers?.map((follower: FollowersType) => (
          
            <Link to={buildRoute.profile(follower?.login)}><UserCard login={follower?.login} avatar={follower?.avatar_url} /></Link>
        
        ))}
      </ListWrapper>
    </section>
  )
}

export default ProfileFollowersPage
