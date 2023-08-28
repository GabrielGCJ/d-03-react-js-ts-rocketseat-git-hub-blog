import {
  DateContainer,
  InfoContainer,
  NumberComemnts,
  OptionsNavegation,
  PostInfoConterner,
  TitlePost,
  UserContainer,
} from './styles'
// import { useNavigate } from 'react-router'
import back from '../../../../assents/back.svg'
import goToGit from '../../../../assents/github.svg'
import gitLogo from '../../../../assents/Icon-Git.svg'
import dateIcon from '../../../../assents/Icon-date.svg'
import commentIcon from '../../../../assents/Icon-comment.svg'
import { useLocation, useNavigate } from 'react-router'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const PostInfo = () => {
  const location = useLocation()
  const { title, authorLogin, createdAt, numberComments, htmlUrl } =
    location.state
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <PostInfoConterner>
      <OptionsNavegation>
        <div onClick={handleGoBack}>
          <img src={back} alt="" />
        </div>
        <a href={htmlUrl}>
          <img src={goToGit} alt="" />
        </a>
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
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </DateContainer>
        <NumberComemnts>
          <img src={commentIcon} alt="" />
          <p>{numberComments} comentarios</p>
        </NumberComemnts>
      </InfoContainer>
    </PostInfoConterner>
  )
}
