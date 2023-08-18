import styled from 'styled-components'

export const ProfileContainerExternal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 0 20px 20px 20px 0;

  margin-top: calc(0px - 90px);
`

export const ProfileContainerInternal = styled.div`
  display: flex;

  max-width: 864px;
  width: 100%;
  height: 212px;

  margin: 0 20px;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};
`

export const ProfileItensConteiner = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: start;
  padding: 30px;
  width: 100%;
`
export const ProfilePictureContainer = styled.div`
  display: flex;
  min-width: 147px;
  height: 147px;
  background-color: black;
  border-radius: 10px;
  margin: 10px;

  overflow: hidden; // ajusta a imagem para as mesmas definiçoes de border radius
`

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 0.5rem;

  /* overflow: hidden;; */
`

export const NameAndReturnConteiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  justify-content: space-between;

  width: 100%;
`

export const NameContainer = styled.div`
  display: flex;
  font-family: Nunito;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 31.2px */

  @media screen and (max-width: 548px) {
    font-size: 1rem;
  }

  overflow: hidden;
`
export const GitImgContainer = styled.div`
  align-items: flex-end;
`
export const ProfileTextContainer = styled.div`
  display: flex;

  margin: 16px 0 16px 0;

  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */

  @media screen and (max-width: 548px) {
    font-size: 0.6rem;
  }

  overflow: scroll;
`
export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */

    @media screen and (max-width: 660px) {
      font-size: 0.7rem;
    }
    @media screen and (max-width: 581px) {
      font-size: 0.3rem;
    }
  }

  gap: 1rem;
`

const BaseTagsProps = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  img {
    max-width: 1.125rem;
    width: 100%;
  }
`

export const GitTagContainer = styled(BaseTagsProps)``
export const JobTagContainer = styled(BaseTagsProps)``
export const FollowersContainer = styled(BaseTagsProps)``
