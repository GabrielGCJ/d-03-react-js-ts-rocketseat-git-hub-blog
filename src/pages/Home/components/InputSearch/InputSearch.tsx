import { useContext } from 'react'
import {
  InformationsContainer,
  InputAndButtonContainer,
  InputSearchContainer,
  InputSearchContainerInternal,
} from './styles'
import { BlogContext } from '../../../../contexts/BlogContext'
import { useForm } from 'react-hook-form'

interface SearchFormImputs {
  query: string
}

export const InputSearch = () => {
  const {
    posts,
    // SearchFetchIssues,
    getPosts,
  } = useContext(BlogContext)

  const { register, handleSubmit } = useForm<SearchFormImputs>()

  const handleSearchIssues = async (data: SearchFormImputs) => {
    await getPosts(data.query)
  }

  return (
    <InputSearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <InputSearchContainerInternal>
        <InformationsContainer>
          <h2>Publicações</h2>

          {posts.length >= 2 ? (
            <p>{posts.length} publicações</p>
          ) : (
            <p>{posts.length} publicação</p>
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
