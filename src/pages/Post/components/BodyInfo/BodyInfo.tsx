import { BodyInfoContainer } from './styles'
import { useLocation } from 'react-router'

export const BodyInfo = () => {
  const location = useLocation()
  const { body } = location.state
  return (
    <BodyInfoContainer>
      <p>{body}</p>
    </BodyInfoContainer>
  )
}
