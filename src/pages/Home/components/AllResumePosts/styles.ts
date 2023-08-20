import styled from 'styled-components'

export const AllResumePostsContainerExternal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

export const AllResumePostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 864px;
  width: 100%;
  gap: calc(3vw);
  justify-content: center;
  margin: 0 1rem;
`
