export type Gists = {
  id: string;
  description: string | null;
  html_url: string;
  public: boolean;
  created_at: string;
  updated_at: string;
  comments: number;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
};
