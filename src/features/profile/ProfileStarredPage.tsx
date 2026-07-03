import { useParams } from 'react-router'

function ProfileStarredPage() {
  const { username } = useParams()

  return (
    <section>
      <h1>{username}&apos;s Starred Repositories</h1>
    </section>
  )
}

export default ProfileStarredPage
