import { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../contexts/BlogContext'

export const useComment = (id: string) => {
  const { issues } = useContext(BlogContext)

  const [comments, setComments] = useState([])

  useEffect(() => {
    let url = ''

    for (let i = 0; i < issues.length; i++) {
      if (issues[i].id === id) {
        url = issues[i].comments_url
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
  }, [id, issues])

  return comments
}
