import styled from 'styled-components'
import nana from '../../assents/Cover.svg'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 18.5rem;
  background-image: url(${nana});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  align-items: center;
  justify-content: center;
  img {
    position: relative;
    bottom: 3.125rem;
  }
`

// export const HeaderContainer = styled.header`
//   display: flex;
//   width: 100%;
//   height: 50vw; /* Define a altura como metade da largura da tela */
//   background-image: url(${nana});
//   background-size: cover; /* Preenche o container sem distorcer a imagem */
//   background-repeat: no-repeat;

//   align-items: center;
//   justify-content: center;
// `
