/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useEffect, useState } from 'react'
interface User {
  name: string
  bio: string
  avatar_url: string
  html_url: string
  followers: number
  company: string | null
  login: string
}

interface Issues {
  id: string
  title: string
  body: string
  created_at: Date
  html_url: string
  comments_url: string
  author_login: string
}
interface CreateContextType {
  userInfo: User
  issues: Issues[]
}

export const BlogContext = createContext({} as CreateContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContextProvider = ({ children }: BlogContextProviderProps) => {
  const [issues, setIssues] = useState<Issues[]>([])
  const [userInfo, setUserInfo] = useState<User>({
    name: '',
    bio: '',
    avatar_url: '',
    html_url: '',
    followers: 0,
    company: '',
    login: '',
  })

  const user = 'GabrielGCJ'
  const nameRepository = 'd-03-react-js-ts-rocketseat-git-hub-blog'

  const getUserInfo = async () => {
    const url = `https://api.github.com/users/${user}` // Informaçoes do usuario

    fetch(url).then(async (res) => {
      if (!res.ok) {
        console.log('Deu ruim!', res.status)
      }
      const data = await res.json()

      const user = {
        name: data.name,
        bio: data.bio,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        followers: data.followers,
        company: data.company,
        login: data.login,
      }

      setUserInfo(user)
    })
  }

  const getIssues = async () => {
    const url = `https://api.github.com/repos/${user}/${nameRepository}/issues` // Lista de issues;

    // const url = `https://api.github.com/users/${user}/repos` // Todos os repositorios do usuario
    // const url = `https://api.github.com/repos/${user}/${nameProject}/issues/ISSUE_NUMBER`

    fetch(url).then(async (res) => {
      if (!res.ok) {
        console.log('Deu ruim!', res.status)
      }
      const data = await res.json()

      console.log(data)

      const newInsues = []

      for (let i = 0; i < data.length - 1; i++) {
        const issues: Issues = {
          id: data[i].id,
          title: data[i].title,
          body: data[i].body,
          created_at: data[i].created_at,
          html_url: data[i].html_url,
          author_login: data[i].user.login,
          comments_url: data[i].comments_url,
        }
        newInsues.push(issues)
      }

      setIssues(newInsues)
    })
  }

  useEffect(() => {
    getUserInfo()
    getIssues()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        userInfo,
        issues,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
