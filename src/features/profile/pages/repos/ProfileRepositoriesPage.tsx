import { Link, useParams } from 'react-router'
import { getUserRepos } from '../../../../shared/api/githubservice/searchUser';
import { useEffect, useState } from 'react';
import { buildRoute } from '../../../../config/config';

function ProfileRepositoriesPage() {
  const { username } = useParams<string>()
  const [repos, setRepos] = useState([]);


  const fetchRepos = async (username : string | undefined) => {
    try {
      const response = await getUserRepos(username);
      setRepos(response);
    } catch (error) {
      console.log("repos --- API ---- ", error);
    }
  }

  useEffect(() => {
    fetchRepos(username);
  }, []);

  return (
    <section>
      <h1>{username}&apos;s repos</h1>
      <div>
        {repos.map((repos: any) => (
          <div>
            <a target='blank' href={repos?.html_url}><div>{repos?.name}</div></a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProfileRepositoriesPage
