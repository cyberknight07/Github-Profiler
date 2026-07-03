import { httpClient } from "../httpclient/httpClient"

export const getUser = async (username : string | undefined) => {

    try {
        if(username === undefined) throw Error('GetUser --- Api Body --- Undefined User')       
        const response = await httpClient(`/users/${username}`);
        console.log("GetUser --- Response Data ---- \n", response.data);
        return response.data;
    } catch (error : any) {
        console.log("first ", error)
    }

}

export const getUserFollowers = async(username: string | undefined) => {
    try {
        if(username === undefined) throw Error('GetUser --- Api Body --- Undefined User')       
        const response = await httpClient(`/users/${username}/followers`);
        console.log("GetUserFollowers --- Response Data ---- \n", response.data);
        return response.data;
        
    } catch (error: any) {
        console.log("Error --- GET_USER_FOLLOWERS --- ", error.message)
    }
}

export const getUserFollowings = async(username: string | undefined) => {
    try {
        if(username === undefined) throw Error('GetUser --- Api Body --- Undefined User')       

        const response = await httpClient(`/users/${username}/following`);
        console.log("GetUserFollowing --- Response Data ---- \n", response.data);
        return response.data;
        
    } catch (error: any) {
        console.log("Error --- GET_USER_FOLLOWINGS --- ", error.message)
    }
}

export const getUserRepos = async(username: string | undefined) => {
    try{
        if(username === undefined) throw Error('GetUser --- Api Body --- Undefined User')       

        const response = await httpClient(`/users/${username}/repos`);
        console.log("GetUserRepos --- Response Data ---- \n", response.data);
        return response.data;
    } catch(error: any){
        console.log("Error --- GET_USER_REPOS --- ", error.message)   
    }
}

export const getGists = async(username: string | undefined) => {
    try{

        const response = await httpClient(`/users/${username}/gists`);
        return response.data;

    } catch (error: any){
        console.log("Error -- Get Gist -- ", error)
    }
}