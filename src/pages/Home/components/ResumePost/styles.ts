import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 416px;
  width: 100%;
  height: 260px;

  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  box-sizing: border-box;
  padding: 30px;

  gap: 1.5rem;
`
export const TitleAndTimerContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1 rem;

  overflow: hidden;
`
export const TitleContainer = styled.div`
  display: flex;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 32px */

  padding: 0 20px 20px 0px;

  flex-shrink: 4; // Encolhe menos que o flex-shrink: 0
`
export const TimerContainer = styled.div`
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */

  flex-shrink: 0; // Não encolhe

  min-width: 70px;
`
export const PublicationBody = styled.div`
  overflow: hidden;
  color: var(--base-text, #afc2d4);
  text-overflow: ellipsis;

  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; //                                                                                                                                                                                                                                                             25.6px
`
