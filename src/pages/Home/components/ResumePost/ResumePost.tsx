import {
  PostContainer,
  PublicationBody,
  TimerContainer,
  TitleAndTimerContainer,
  TitleContainer,
} from './styles'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface resumePostPropsType {
  title: string
  body: string
  createdAt: Date
}

export const ResumePost = ({ title, body, createdAt }: resumePostPropsType) => {
  return (
    <PostContainer>
      <TitleAndTimerContainer>
        <TitleContainer>
          {/* <p>JavaScript data types and data structures</p> */}
          <p>{title}</p>
        </TitleContainer>
        <TimerContainer>
          {/* <p>Há um dia</p> */}
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </TimerContainer>
      </TitleAndTimerContainer>
      <PublicationBody>
        <p>{body}</p>
        {/* <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures.{' '}
        </p> */}
      </PublicationBody>
    </PostContainer>
  )
}
