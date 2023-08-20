import { InputSearch } from './components/InputSearch/InputSearch'
import { Profile } from './components/Profile/Profile'
import { AllResumePosts } from './components/AllResumePosts/AllResumePosts'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Profile />
      <InputSearch />
      <AllResumePosts />
    </HomeContainer>
  )
}
