import { useContext } from 'react'
import {
  InformationsContainer,
  InputAndButtonContainer,
  InputSearchContainer,
  InputSearchContainerInternal,
} from './styles'
import { BlogContext } from '../../../../contexts/BlogContext'

export const InputSearch = () => {
  const { issues } = useContext(BlogContext)
  return (
    <InputSearchContainer>
      <InputSearchContainerInternal>
        <InformationsContainer>
          <h2>Publicações</h2>

          {issues.length >= 2 ? (
            <p>{issues.length} publicações</p>
          ) : (
            <p>{issues.length} publicação</p>
          )}
        </InformationsContainer>
        <InputAndButtonContainer>
          <input placeholder="Buscar conteúdo" />
        </InputAndButtonContainer>
      </InputSearchContainerInternal>
    </InputSearchContainer>
  )
}
