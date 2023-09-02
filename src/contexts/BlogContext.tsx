import {
  ReactNode,
  createContext,
  // useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
interface User {
  name: string
  bio: string
  avatar_url: string
  html_url: string
  followers: number
  company: string | null
  login: string
}

interface Posts {
  id: string
  title: string
  body: string
  created_at: Date
  html_url: string
  comments_url: string
  author_login: string
  numberComments: number
}
interface CreateContextType {
  userInfo: User
  posts: Posts[]
  // fetchPosts: (query?: string) => Promise<void>
  getPosts: (query?: string) => Promise<void>
}

export const BlogContext = createContext({} as CreateContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContextProvider = ({ children }: BlogContextProviderProps) => {
  const [posts, setPosts] = useState<Posts[]>([])
  const [userInfo, setUserInfo] = useState<User>({
    name: '',
    bio: '',
    avatar_url: '',
    html_url: '',
    followers: 0,
    company: '',
    login: '',
  })

  const userName = 'GabrielGCJ'
  const nameRepository = 'd-03-react-js-ts-rocketseat-git-hub-blog'

  // const fetchUserInfo = async () => {
  //   const url = `https://api.github.com/users/${userName}` // Informaçoes do usuario

  //   fetch(url).then(async (res) => {
  //     if (!res.ok) {
  //       console.log('Deu ruim!', res.status)
  //     }
  //     const data = await res.json()

  //     const user = {
  //       name: data.name,
  //       bio: data.bio,
  //       avatar_url: data.avatar_url,
  //       html_url: data.html_url,
  //       followers: data.followers,
  //       company: data.company,
  //       login: data.login,
  //     }

  //     setUserInfo(user)
  //   })
  // }

  // A função comentada acima faz exatamente a mesma coisa que a função abaixo,
  // mas a comentada utiliza o fetch e a abaixo utiliza o axios.

  const getUserInfo = async () => {
    const response = await api.get(`/users/${userName}`)

    const data = response.data

    const user: User = {
      name: data.name,
      bio: data.bio,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      followers: data.followers,
      company: data.company,
      login: data.login,
    }

    setUserInfo(user)
  }

  // const fetchPosts = async (query: string = '') => {
  //   const url = new URL(
  //     `https://api.github.com/search/issues?q=${query}%20repo:${userName}/${nameRepository}`,
  //   )

  //   fetch(url).then(async (res) => {
  //     if (!res.ok) {
  //       console.log('Deu ruim!', res.status)
  //     }

  //     const response = await res.json()
  //     const data = response.items

  //     const newInsues = []

  //     for (let i = 0; i < data.length; i++) {
  //       const issues: Posts = {
  //         id: data[i].id,
  //         title: data[i].title,
  //         body: data[i].body,
  //         created_at: data[i].created_at,
  //         html_url: data[i].html_url,
  //         author_login: data[i].user.login,
  //         comments_url: data[i].comments_url,
  //         numberComments: data[i].comments,
  //       }
  //       newInsues.push(issues)
  //     }

  //     const filterIssues = []

  //     for (let i = 0; i < newInsues.length; i++) {
  //       if (newInsues[i].body !== null) {
  //         filterIssues.push(newInsues[i])
  //       }
  //     }

  //     setPosts(filterIssues)
  //   })
  // }

  const getPosts = async (query: string = '') => {
    try {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${userName}/${nameRepository}`,
      )

      const listPosts = response.data.items

      const posts = []

      for (let i = 0; i < listPosts.length; i++) {
        if (listPosts[i].body !== null) {
          posts.push(listPosts[i])
        }
      }

      setPosts(posts)
    } catch (error) {
      console.log('Ocorreu um erro durante a solicitação', error)
    }
  }

  useEffect(() => {
    // fetchPosts()
    getUserInfo()
    // fetchPosts()
    getPosts()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        userInfo,
        posts,
        // SearchFetchIssues,
        getPosts,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
