import styled from 'styled-components'

export const AllResumePostsContainerExternal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

export const AllResumePostsContainerInternal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AllResumePostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 864px;
  width: 100%;
  gap: calc(3vw);
  margin: 0 1rem 2rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
