import {
  InformationsContainer,
  InputAndButtonContainer,
  InputSearchContainer,
  InputSearchContainerInternal,
} from './styles'

export const InputSearch = () => {
  return (
    <InputSearchContainer>
      <InputSearchContainerInternal>
        <InformationsContainer>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </InformationsContainer>
        <InputAndButtonContainer>
          <input placeholder="Buscar conteúdo" />
        </InputAndButtonContainer>
      </InputSearchContainerInternal>
    </InputSearchContainer>
  )
}
