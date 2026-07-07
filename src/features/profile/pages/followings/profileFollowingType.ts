export type FollowingsType = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};

export type FollowingResponse = FollowingsType[];