import {
  PostContainer,
  PublicationBody,
  TimerContainer,
  TitleAndTimerContainer,
  TitleContainer,
} from './styles'

import { useNavigate } from 'react-router'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface resumePostPropsType {
  id: string
  title: string
  body: string
  createdAt: Date
  htmlUrl: string
  authorLogin: string
  commentsUrl: string
  numberComments: number
}

export const ResumePost = ({
  id,
  title,
  body,
  createdAt,
  htmlUrl,
  authorLogin,
  commentsUrl,
  numberComments,
}: resumePostPropsType) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/post/${id}`, {
      state: {
        id,
        title,
        body,
        createdAt,
        htmlUrl,
        authorLogin,
        commentsUrl,
        numberComments,
      },
    })
  }

  return (
    <PostContainer onClick={handleClick}>
      <TitleAndTimerContainer>
        <TitleContainer>
          <p>{title}</p>
        </TitleContainer>
        <TimerContainer>
          <p>
            {`Há 
            ${formatDistanceToNow(new Date(createdAt), {
              addSuffix: false,
              locale: ptBR,
            })}
            `}
          </p>
        </TimerContainer>
      </TitleAndTimerContainer>
      <PublicationBody>
        <p>{body}</p>
      </PublicationBody>
    </PostContainer>
  )
}
