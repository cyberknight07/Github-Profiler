import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout/MainLayout'
import SearchPage from '../features/search/SearchPage'
import ProfilePage from '../features/profile/pages/profilePage/ProfilePage'
import ProfileRepositoriesPage from '../features/profile/pages/repos/ProfileRepositoriesPage'
import ProfileFollowersPage from '../features/profile/pages/follower/ProfileFollowersPage'
import ProfileFollowingPage from '../features/profile/pages/followings/ProfileFollowingPage'
import ProfileStarredPage from '../features/profile/ProfileStarredPage'
import NotFoundPage from '../features/not-found/NotFoundPage'
import { config } from '../config/config'
import ProfileGistsPage from '../features/profile/pages/gists/ProfileGistsPage'

const { routes } = config

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <MainLayout />,
    children: [
      { index:true, element: <SearchPage /> },
      { path: routes.profile, element: <ProfilePage /> },
      { path: routes.profileRepositories, element: <ProfileRepositoriesPage /> },
      { path: routes.profileFollowers, element: <ProfileFollowersPage /> },
      { path: routes.profileFollowing, element: <ProfileFollowingPage /> },
      { path: routes.profileStarred, element: <ProfileStarredPage /> },
      { path: routes.profileGists, element: <ProfileGistsPage /> },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
