import { useState } from "react";
import { useParams } from "react-router";
import { theme } from "../../../../config/constants/theme";
import Card from "../../component/Card";
import { getGists, getUser } from "../../../../shared/api/githubservice/searchUser";

function ProfilePage() {
  const { username } = useParams<string>();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

const [gists, setGists] = useState([]);
    const [numberOfGists, setNumberOfGists] = useState();

    const getUserProfile = async (username: string | undefined) => {
      if(!username) return;
      try {
        const response = await getUser(username);
        setProfileData(response);  
      } catch (error) {
        console.log("Profile Page --- API ---- ", error)
      } 
    }


  useState(() => {
    setLoading(true);
    getUserProfile(username);
    setLoading(false);
  }, []);

  if(loading){
    <div style={{textAlign: 'center'}}>Loading....</div>
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "65vw",
          gap: '20px',
        }}>
          {/* image */}
          <div style={{width:'200px'}}>
            <img src={profileData?.avatar_url} style={{objectFit: 'cover', height:'200px', width:'200px'}}/>
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: 'start'}}>
              
                <h1>{profileData?.login}</h1>
                <h5>{profileData?.location}</h5>
                <p>{profileData?.bio}</p>
              {/* Follow Button */}
                <button>Follow</button>
              
          </div>
      </div>

        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "65vw",
          paddingTop: '20px',
          paddingBottom: '20px'
        }}>
    
            <Card title = {'Followers'} count = {profileData?.followers}/>
            <Card title = {'Following'} count = {profileData?.following}/>
            <Card title = {'Gists'} count = {profileData?.public_gists}/>
            <Card title = {'Repositories'} count = {profileData?.public_repos}/>
      
        </div>
    </div>
  );
}

export default ProfilePage;
