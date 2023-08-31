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
                id={issue.id}
                title={issue.title}
                body={issue.body}
                createdAt={issue.created_at}
                htmlUrl={issue.html_url}
                authorLogin={issue.author_login}
                commentsUrl={issue.comments_url}
                numberComments={issue.numberComments}
              />
            )
          })}
        </AllResumePostsContainer>
      </AllResumePostsContainerInternal>
    </AllResumePostsContainerExternal>
  )
}
