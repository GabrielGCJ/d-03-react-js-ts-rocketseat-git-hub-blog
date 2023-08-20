import { ResumePost } from '../ResumePost/ResumePost'
import {
  AllResumePostsContainer,
  AllResumePostsContainerExternal,
} from './styles'

export const AllResumePosts = () => {
  return (
    <AllResumePostsContainerExternal>
      <AllResumePostsContainer>
        <ResumePost />
        <ResumePost />
        <ResumePost />
        <ResumePost />
        <ResumePost />
        <ResumePost />
      </AllResumePostsContainer>
    </AllResumePostsContainerExternal>
  )
}
