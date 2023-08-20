import styled from 'styled-components'
import effectLeft from '../../assents/effect-left.svg'
import effectRight from '../../assents/effect-right.svg'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 18.5rem;
  background-image: linear-gradient(
    rgb(11, 27, 43),
    rgb(12, 33, 55),
    rgb(12, 37, 61),
    rgb(12, 37, 61)
  );
  align-items: center;
  justify-content: space-between;
`

export const EffectLeftContainer = styled.div`
  display: flex;
  background-image: url(${effectLeft});
  justify-content: center;
  align-items: start;
  width: 409px;
  height: 188px;

  /* box-sizing: border-box; */
`
export const EffectRightContainer = styled.div`
  display: flex;
  background-image: url(${effectRight});
  justify-content: center;
  align-items: flex-end;
  width: 371px;
  height: 236px;
`

export const ImgContainer = styled.header`
  position: relative;
  bottom: 3.125rem;
  padding: 0 30px;
`
