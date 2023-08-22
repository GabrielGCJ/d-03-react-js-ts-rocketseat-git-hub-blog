import styled from 'styled-components'

export const PostInfoConterner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  max-width: 864px;
  width: 100%;
  min-height: 168px;
  height: auto;
  padding: 30px;
  background: red;
  background-color: ${(props) => props.theme['base-profile']};
  margin: calc(0px - 84px) 20px 0 20px;
  border-radius: 10px;
`

export const OptionsNavegation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;

  /* img {
    @media screen and (max-width: 438px) {
      height: 0.6rem;
    }
  } */
`
export const TitlePost = styled.div`
  color: ${(props) => props.theme['base-title']};
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 31.2px */

  display: flex;

  /* @media screen and (max-width: 438px) {
    font-size: 16px;
  } */
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: start;
  align-items: center;
  gap: 1rem;
`

const BaseTagsProps = styled.div`
  display: flex;
  flex-direction: row;
  gap: calc(1vw);

  color: ${(props) => props.theme['base-span']};

  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */

  /* img {
    @media screen and (max-width: 438px) {
      width: 0.6rem;
    }
  } */

  /* p {
    @media screen and (max-width: 438px) {
      font-size: 8px;
    }
  } */
`

export const UserContainer = styled(BaseTagsProps)``
export const DateContainer = styled(BaseTagsProps)``
export const NumberComemnts = styled(BaseTagsProps)``
