import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUser } from "../../../../shared/api/githubservice/searchUser";
import type { profileType } from "./profileTypes";
import { Container, ImageDiv, Loader, ProfileCard, RouteCards, Wrapper } from "./profile.styles";
import Card from "../../component/card/Card";

function ProfilePage() {
  const { username } = useParams<string>();
  const [profileData, setProfileData] = useState<profileType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

    const getUserProfile = async (username: string | undefined) => {
      setLoading(true);
      if(!username) return;
      try {
        const response = await getUser(username);
        setProfileData(response);
      setLoading(false);
      } catch (err : any) {
        setError(err?.message)
        setLoading(false);
        console.log("Profile Page --- API ---- ", error)
      } 
    }



  useEffect(() => {
    getUserProfile(username);
  }, [username]);

  useEffect(() => {
    document.title = `Github - ${username} (${profileData?.name}))`
  })

  if(loading){
    return <Loader>Loading....</Loader>
  }

  return (
    <Wrapper>
      <Container>
          {/* image */}
          <ImageDiv>
            <img src={profileData?.avatar_url}/>
          </ImageDiv>
          <ProfileCard>
              
                <span>
                <h5>{profileData?.login}</h5>
                {profileData?.location && (
                  <span>
                    <h5>|</h5>
                <h5>{profileData?.location}</h5>
                  </span>
                )}
                </span>
                <h1>{profileData?.name}</h1>
                <p>{profileData?.bio}</p>
              {/* Follow Button */}
                <button><a target="blank" href={profileData?.html_url}>Github</a></button>
          </ProfileCard>
      </Container>

        <RouteCards>
            <Card title = {'Followers'} count = {profileData?.followers}/>
            <Card title = {'Following'} count = {profileData?.following}/>
            <Card title = {'Gists'} count = {profileData?.public_gists}/>
            <Card title = {'Repositories'} count = {profileData?.public_repos}/>
        </RouteCards>
    </Wrapper>
  );
}

export default ProfilePage;
