import styled from 'styled-components'

export const InputSearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`
export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 1rem;

  input {
    width: 100%;
    max-width: 864px;
    height: 50px;

    background: ${(props) => props.theme['base-input']};

    border: 2px solid ${(props) => props.theme['base-border']};
    border-radius: 5px;

    &::placeholder {
      color: ${(props) => props.theme['base-text']};
      padding: 1rem;
    }
  }
`
export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 864px;
  padding: 1rem;
`
