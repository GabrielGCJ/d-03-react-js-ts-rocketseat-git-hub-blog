import { InputSearch } from './components/InputSearch/InputSearch'
import { Profile } from './components/Profile/Profile'
import { AllResumePosts } from './components/AllResumePosts/AllResumePosts'
import { HomeContainer } from './styles'

// import { useContext } from 'react'
// import { BlogContext } from '../../contexts/BlogContext'

export const Home = () => {
  // const { issues } = useContext(BlogContext)

  // console.log(issues)

  return (
    <HomeContainer>
      <Profile />
      <InputSearch />
      <AllResumePosts />
    </HomeContainer>
  )
}
