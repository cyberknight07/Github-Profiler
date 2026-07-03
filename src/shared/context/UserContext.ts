import { createContext, useState } from "react"
import { getGists, getUser } from "../api/githubservice/searchUser"

export const UserContext = createContext(undefined);
const UserProvider = ({children}: any) => {

    const [gists, setGists] = useState([]);
    const [numberOfGists, setNumberOfGists] = useState(0);

    const fetchGists = async (username: string | undefined) => {
        const response = await getGists(username);
        setGists(response);
        setNumberOfGists(response.length());
    }




    

}

export default UserProvider