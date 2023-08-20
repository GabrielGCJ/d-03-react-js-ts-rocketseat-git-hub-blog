import { ResumePost } from '../ResumePost/ResumePost'
import {
  AllResumePostsContainer,
  AllResumePostsContainerExternal,
  AllResumePostsContainerInternal,
} from './styles'

export const AllResumePosts = () => {
  return (
    <AllResumePostsContainerExternal>
      <AllResumePostsContainerInternal>
        <AllResumePostsContainer>
          <ResumePost />
          <ResumePost />
          <ResumePost />
          <ResumePost />
          <ResumePost />
          {/* <ResumePost /> */}
        </AllResumePostsContainer>
      </AllResumePostsContainerInternal>
    </AllResumePostsContainerExternal>
  )
}
