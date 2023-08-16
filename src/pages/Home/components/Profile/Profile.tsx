import {
  ContainerInformation,
  FollowersContainer,
  GitImgContainer,
  GitTagContainer,
  JobTagContainer,
  NameAndReturnConteiner,
  NameContainer,
  ProfileContainerExternal,
  ProfileContainerInternal,
  ProfileItensConteiner,
  ProfilePictureContainer,
  TagsContainer,
} from './styles'

import gitIcon2 from '../../../../assents/Icon-Git.svg'

import gitIcon from '../../../../assents/github_icon.svg'

export const Profile = () => {
  return (
    <ProfileContainerExternal>
      <ProfileContainerInternal>
        <ProfileItensConteiner>
          <ProfilePictureContainer></ProfilePictureContainer>

          <ContainerInformation>
            <NameAndReturnConteiner>
              <NameContainer>
                <h1>Cameron Williamson</h1>
              </NameContainer>
              <GitImgContainer>
                <img src={gitIcon} alt="" />
              </GitImgContainer>
            </NameAndReturnConteiner>
            <p className="textoLimitado">
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
            <TagsContainer>
              <GitTagContainer>
                <img src={gitIcon2} alt="" />
                <p>cameronwll</p>
              </GitTagContainer>
              <JobTagContainer>
                <img src={gitIcon2} alt="" />
                <p>Rocketseat</p>
              </JobTagContainer>
              <FollowersContainer>
                <img src={gitIcon2} alt="" />
                <p>32 seguidores</p>
              </FollowersContainer>
            </TagsContainer>
          </ContainerInformation>
        </ProfileItensConteiner>
      </ProfileContainerInternal>
    </ProfileContainerExternal>
  )
}
