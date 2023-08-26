import { useContext } from 'react'
import { ResumePost } from '../ResumePost/ResumePost'
import {
  AllResumePostsContainer,
  AllResumePostsContainerExternal,
  AllResumePostsContainerInternal,
} from './styles'
import { BlogContext } from '../../../../contexts/BlogContext'

export const AllResumePosts = () => {
  const { issues } = useContext(BlogContext)

  return (
    <AllResumePostsContainerExternal>
      <AllResumePostsContainerInternal>
        <AllResumePostsContainer>
          {issues.map((issue) => {
            return (
              <ResumePost
                key={issue.id}
                body={issue.body}
                title={issue.title}
                createdAt={issue.created_at}
              />
            )
          })}

          {/* <ResumePost />
          <ResumePost />
          <ResumePost />
          <ResumePost />
          <ResumePost /> */}
          {/* <ResumePost /> */}
        </AllResumePostsContainer>
      </AllResumePostsContainerInternal>
    </AllResumePostsContainerExternal>
  )
}
