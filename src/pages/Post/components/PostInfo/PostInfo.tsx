import {
  DateContainer,
  InfoContainer,
  NumberComemnts,
  OptionsNavegation,
  PostInfoConterner,
  TitlePost,
  UserContainer,
} from './styles'
import back from '../../../../assents/back.svg'
import goToGit from '../../../../assents/github.svg'
import gitLogo from '../../../../assents/Icon-Git.svg'
import dateIcon from '../../../../assents/Icon-date.svg'
import commentIcon from '../../../../assents/Icon-comment.svg'
import { useLocation } from 'react-router'

export const PostInfo = () => {
  const location = useLocation()
  const { title, authorLogin } = location.state
  return (
    <PostInfoConterner>
      <OptionsNavegation>
        <img src={back} alt="" />
        <img src={goToGit} alt="" />
      </OptionsNavegation>
      <TitlePost>
        {/* <p>JavaScript data types and data structures</p> */}
        <p>{title}</p>
      </TitlePost>
      <InfoContainer>
        <UserContainer>
          <img src={gitLogo} alt="" />
          <p>{authorLogin}</p>
        </UserContainer>
        <DateContainer>
          <img src={dateIcon} alt="" />
          <p>cameronwll</p>
        </DateContainer>
        <NumberComemnts>
          <img src={commentIcon} alt="" />
          <p>cameronwll</p>
        </NumberComemnts>
      </InfoContainer>
    </PostInfoConterner>
  )
}
