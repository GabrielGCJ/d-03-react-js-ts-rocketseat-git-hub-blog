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
interface CreateContextType {
  userInfo: User
}

export const BlogContext = createContext({} as CreateContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContextProvider = ({ children }: BlogContextProviderProps) => {
  // const [issues, setIssues] = useState()
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
  // const nameRepository = 'd-03-react-js-ts-rocketseat-git-hub-blog'

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

  // const getIssues = async () => {
  //   const url = `https://api.github.com/repos/${user}/${nameRepository}/issues` // Lista de issues;

  //   // const url = `https://api.github.com/users/GabrielGCJ/repos/{owner}/{repo}/issues`
  //   // const url = `https://api.github.com/users/${user}` // Informaçoes do usuario
  //   // const url = `https://api.github.com/repos/${user}/${nameProject}/issues/ISSUE_NUMBER`
  //   //
  //   // const url = `https://api.github.com/users/${user}/repos`
  //   // const url = 'https://api.github.com/users/GabrielGCJ'

  //   // repos/{owner}/{repo}/issues'

  //   fetch(url).then(async (res) => {
  //     if (!res.ok) {
  //       console.log('Deu ruim!', res.status)
  //     }
  //     const data = await res.json()

  //     setIssues(data)
  //   })
  // }

  useEffect(() => {
    getUserInfo()
    // getIssues()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        userInfo,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
