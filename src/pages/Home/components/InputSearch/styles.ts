import styled from 'styled-components'

export const InputSearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

export const InputSearchContainerInternal = styled.div`
  display: flex;
  max-width: 864px;
  flex-direction: column;
  width: 100%;
  margin: 1rem;
`
export const InputAndButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;

  input {
    width: 100%;
    height: 50px;

    background: ${(props) => props.theme['base-input']};

    border: 2px solid ${(props) => props.theme['base-border']};
    border-radius: 5px;

    &::placeholder {
      color: ${(props) => props.theme['base-text']};
      padding-left: 1rem;
    }
  }
`
export const InformationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
