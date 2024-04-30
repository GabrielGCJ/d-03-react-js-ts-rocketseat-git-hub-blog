import { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../contexts/BlogContext'

export const useComment = (id: string) => {
  const { posts } = useContext(BlogContext)

  const [comments, setComments] = useState([])

  useEffect(() => {
    let url = ''

    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === id) {
        url = posts[i].comments_url
      }
    }

    if (url !== '') {
      fetch(url)
        .then(async (res) => {
          if (!res.ok) {
            console.log('Deu ruim!', res.status)
          }
          const data = await res.json()

          const comments = data
            .filter((item: { body: string }) => item.body)
            .map((item: { body: string }) => item.body)

          setComments(comments)
        })
        .catch((error) => {
          console.error('Erro na requisição:', error)
        })
    }
  }, [id, posts])

  return comments
}
