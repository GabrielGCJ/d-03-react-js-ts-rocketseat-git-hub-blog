import { useContext } from 'react'
import {
  InformationsContainer,
  InputAndButtonContainer,
  InputSearchContainer,
  InputSearchContainerInternal,
} from './styles'
import { BlogContext } from '../../../../contexts/BlogContext'
import { useForm } from 'react-hook-form'

export const InputSearch = () => {
  const { issues, SearchFetchIssues } = useContext(BlogContext)

  const { register, handleSubmit } = useForm<SearchFormImputs>()

  const handleSearchIssues = async (data: SearchFormImputs) => {
    await SearchFetchIssues(data.query)
  }

  return (
    <InputSearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
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
          <input placeholder="Buscar conteúdo" {...register('query')} />
          {/* <button></button> */}
        </InputAndButtonContainer>
      </InputSearchContainerInternal>
    </InputSearchContainer>
  )
}
