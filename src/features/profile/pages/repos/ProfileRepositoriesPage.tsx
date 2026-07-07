import { useParams } from 'react-router'
import { getUserRepos } from '../../../../shared/api/githubservice/searchUser';
import { useEffect, useState } from 'react';
import type { Repository } from './profileRepos';
import { Wrapper } from '../profilePage/profile.styles';
import UserCard from '../../../../shared/components/usercard/UserCard';
import { ListWrapper } from '../follower/pfp.styles';

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

    useEffect(() =>{
    document.title = `Github - ${username} / Repositories`
  })

  return (
    <Wrapper>
      <h1>{username}&apos;s repos</h1>
      <ListWrapper>
        {repos.map((repos: Repository) => (
          <div>
            <a target='blank' href={repos?.html_url}><UserCard login={repos?.name} avatar={repos?.owner.avatar_url} description = {repos?.description}/></a>
          </div>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

export default ProfileRepositoriesPage
