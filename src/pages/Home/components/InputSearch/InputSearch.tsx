import {
  InformationsContainer,
  InputAndButtonContainer,
  InputSearchContainer,
} from './styles'

export const InputSearch = () => {
  return (
    <InputSearchContainer>
      <InformationsContainer>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </InformationsContainer>
      <InputAndButtonContainer>
        <input placeholder="Buscar conteúdo" />
        {/* <button /> */}

        {/* <h1>InputSearch</h1> */}
      </InputAndButtonContainer>
    </InputSearchContainer>
  )
}
