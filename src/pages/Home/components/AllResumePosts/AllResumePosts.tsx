import { useContext } from 'react'
import { ResumePost } from '../ResumePost/ResumePost'
import {
  AllResumePostsContainer,
  AllResumePostsContainerExternal,
  AllResumePostsContainerInternal,
} from './styles'
import { BlogContext } from '../../../../contexts/BlogContext'

export const AllResumePosts = () => {
  const { posts } = useContext(BlogContext)

  return (
    <AllResumePostsContainerExternal>
      <AllResumePostsContainerInternal>
        <AllResumePostsContainer>
          {posts.map((post) => {
            return (
              <ResumePost
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                createdAt={post.created_at}
                htmlUrl={post.html_url}
                authorLogin={post.author_login}
                commentsUrl={post.comments_url}
                numberComments={post.numberComments}
              />
            )
          })}
        </AllResumePostsContainer>
      </AllResumePostsContainerInternal>
    </AllResumePostsContainerExternal>
  )
}
