import {
  PostContainer,
  PublicationBody,
  TimerContainer,
  TitleAndTimerContainer,
  TitleContainer,
} from './styles'

export const ResumePost = () => {
  return (
    <PostContainer>
      <TitleAndTimerContainer>
        <TitleContainer>
          <p>JavaScript data types and data structures</p>
        </TitleContainer>
        <TimerContainer>
          <p>Há um dia</p>
        </TimerContainer>
      </TitleAndTimerContainer>
      <PublicationBody>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures.{' '}
        </p>
      </PublicationBody>
    </PostContainer>
  )
}
