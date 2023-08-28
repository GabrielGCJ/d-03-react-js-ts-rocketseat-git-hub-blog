/* eslint-disable react/jsx-key */
import { useLocation } from 'react-router'
import { PostInfo } from './components/PostInfo/PostInfo'
import { PostContainer } from './styles'
import { BodyInfo } from './components/BodyInfo/BodyInfo'
import { useComment } from '../../hooks/useComment'

export const Post = () => {
  const location = useLocation()
  const {
    id,
    // title,
    // body,
    // createdAt,
    // commentsUrl
  } = location.state

  const comments = useComment(id)

  console.log('comments', comments)

  return (
    <PostContainer>
      <PostInfo />
      <BodyInfo />
      {/* <p>{body}</p> */}
      {comments.map((comment) => {
        return <p>{comment as string}</p>
      })}
    </PostContainer>
  )
}
