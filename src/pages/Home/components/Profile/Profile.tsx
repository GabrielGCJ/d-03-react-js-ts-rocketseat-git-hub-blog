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
  ProfileTextContainer,
  TagsContainer,
} from './styles'

import gitIcon from '../../../../assents/Icon-Git.svg'
import jobIcon from '../../../../assents/Icon-Job.svg'
import followersIcon from '../../../../assents/Icon-Followers.svg'

import gitReturnIcon from '../../../../assents/githubReturnImg.svg'

import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'

export const Profile = () => {
  const { userInfo } = useContext(BlogContext)
  return (
    <ProfileContainerExternal>
      <ProfileContainerInternal>
        <ProfileItensConteiner>
          <ProfilePictureContainer>
            <img src={userInfo.avatar_url} alt="" />
          </ProfilePictureContainer>

          <ContainerInformation>
            <NameAndReturnConteiner>
              <NameContainer>
                <p>{userInfo.name}</p>
              </NameContainer>
              <GitImgContainer>
                <img src={gitReturnIcon} alt="" />
              </GitImgContainer>
            </NameAndReturnConteiner>
            <ProfileTextContainer>
              <p>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
                viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                volutpat pulvinar vel mass.
              </p>
            </ProfileTextContainer>
            <TagsContainer>
              <GitTagContainer>
                <img src={gitIcon} alt="" />
                <p>cameronwll</p>
              </GitTagContainer>
              <JobTagContainer>
                <img src={jobIcon} alt="" />
                <p>Rocketseat</p>
              </JobTagContainer>
              <FollowersContainer>
                <img src={followersIcon} alt="" />
                <p>32 seguidores</p>
              </FollowersContainer>
            </TagsContainer>
          </ContainerInformation>
        </ProfileItensConteiner>
      </ProfileContainerInternal>
    </ProfileContainerExternal>
  )
}
