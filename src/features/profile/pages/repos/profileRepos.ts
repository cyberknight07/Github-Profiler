export type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  visibility: "public" | "private";
  topics: string[];
  owner: {
    login: string;
    avatar_url: string;
  };
};