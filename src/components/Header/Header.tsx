import { HeaderContainer, ImgContainer } from './styles'
import logo from '../../assents/Logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <ImgContainer>
        <img src={logo} alt="" />
      </ImgContainer>
    </HeaderContainer>
  )
}
