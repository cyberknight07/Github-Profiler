export type FollowersType = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  site_admin: boolean;
};

export type FollowersResponse = FollowersType[]
