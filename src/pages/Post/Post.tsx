// import { useLocation } from 'react-router'
import { PostInfo } from './components/PostInfo/PostInfo'
import { PostContainer } from './styles'
import { BodyInfo } from './components/BodyInfo/BodyInfo'

export const Post = () => {
  // const location = useLocation()
  // const {
  //   // id,
  //   // title,
  //   // body,
  //   // createdAt,
  //   // commentsUrl
  // } = location.state

  return (
    <PostContainer>
      <PostInfo />
      {/* <p>{body}</p> */}
      <BodyInfo />
    </PostContainer>
  )
}
