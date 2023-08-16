import styled from 'styled-components'

export const ProfileContainerExternal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 0 20px 0 20px 0;
`

export const ProfileContainerInternal = styled.div`
  display: flex;

  max-width: 864px;
  width: 100%;
  height: 212px;

  margin: 0 20px;
  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};

  position: relative;
  bottom: 100px;
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
`

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
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
  /* display: flex; */
  /* align-items: start; */
  /* justify-content: start; */
`
export const GitImgContainer = styled.div`
  /* display: flex; */
  align-items: flex-end;
  /* justify-content: flex-end; */

  /* background-color:red ; */
`
export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const BaseTagsProps = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const GitTagContainer = styled(BaseTagsProps)``
export const JobTagContainer = styled(BaseTagsProps)``
export const FollowersContainer = styled(BaseTagsProps)``
