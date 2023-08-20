// import { Post } from '../Post/Post'
import { InputSearch } from './components/InputSearch/InputSearch'
import { ResumePost } from './components/Post/ResumePost'
import { Profile } from './components/Profile/Profile'

export const Home = () => {
  return (
    <div>
      <Profile />
      <InputSearch />
      <ResumePost />
    </div>
  )
}
