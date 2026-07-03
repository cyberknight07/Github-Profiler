import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router'
import { getUserFollowings } from '../../../../shared/api/githubservice/searchUser';
import { buildRoute } from '../../../../config/config';

function ProfileFollowingPage() {
   const { username } = useParams<string>()
  const [followings, setFollowings] = useState([]);


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

  return (
    <section>
      <h1>{username}&apos;s Followings</h1>
      <div>
        {followings.map((followings: any) => (
          <div>
            <Link to={buildRoute.profile(followings?.login)}><div>{followings?.login}</div></Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProfileFollowingPage
