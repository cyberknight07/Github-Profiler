export const config = {
  routes: {
    home: '/',
    profile: 'profile/:username',
    profileRepositories: 'profile/:username/repositories',
    profileFollowers: 'profile/:username/followers',
    profileFollowing: 'profile/:username/following',
    profileStarred: 'profile/:username/starred',
    profileGists: 'profile/:username/gists'
  },
}

export const buildRoute = {
  profile: (username: string | undefined) => `/profile/${username}`,
  profileRepositories: (username: string) => `/profile/${username}/repositories`,
  profileFollowers: (username: string) => `/profile/${username}/followers`,
  profileFollowing: (username: string) => `/profile/${username}/following`,
  profileStarred: (username: string) => `/profile/${username}/starred`,
  profileGists: (username: string) => `/profile/${username}/gists`
}

