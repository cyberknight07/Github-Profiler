import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { getUserFollowers } from '../../../../shared/api/githubservice/searchUser';
import { buildRoute } from '../../../../config/config';

function ProfileFollowersPage() {
  const { username } = useParams<string>()
  const [followers, setFollowers] = useState([]);


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

  return (
    <section>
      <h1>{username}&apos;s Followers</h1>
      <div>
        {followers.map((follower: any) => (
          <div>
            <Link to={buildRoute.profile(follower?.login)}><div>{follower?.login}</div></Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProfileFollowersPage
