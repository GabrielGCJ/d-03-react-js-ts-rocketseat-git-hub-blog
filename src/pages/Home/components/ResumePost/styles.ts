import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  max-width: 416px;
  width: 100%;
  height: 260px;
  /* flex-shrink: 0; // Pesquisar sobre ! */
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  box-sizing: border-box;

  flex-direction: column;

  justify-content: center;
  align-items: center;
  padding: 30px;
`
export const TitleAndTimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items:center ; */

  gap: 1 rem;
`
export const TitleContainer = styled.div`
  display: flex;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 32px */

  padding: 0 20px 20px 0px;
`
export const TimerContainer = styled.div`
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */

  /* background: red; */

  min-width: 70px;
`
export const PublicationBody = styled.div`
  overflow: hidden;
  color: var(--base-text, #afc2d4);
  text-overflow: ellipsis;
  /* white-space: nowrap; */

  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; //                                                                                                                                                                                                                                                             25.6px
`
