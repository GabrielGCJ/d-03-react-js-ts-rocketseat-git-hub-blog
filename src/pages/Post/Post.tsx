/* eslint-disable react/jsx-key */
import { useLocation } from 'react-router'
import { PostInfo } from './components/PostInfo/PostInfo'
import { PostContainer, PostContentContainer } from './styles'
import { PostContent } from './components/PostContent/PostContent'
// import { BodyInfo } from './components/BodyInfo/BodyInfo'
// import { useComment } from '../../hooks/useComment'

export const Post = () => {
  const location = useLocation()
  const {
    //  id,
    body,
  } = location.state

  // const comments = useComment(id)

  // console.log('comments', comments)

  return (
    <PostContainer>
      <PostContentContainer>
        <PostInfo />
        {/* <BodyInfo /> */}
        <PostContent content={body} />
        {/* {comments.map((comment) => {
          return <p>{comment as string}</p>
        })} */}
      </PostContentContainer>
    </PostContainer>
  )
}
