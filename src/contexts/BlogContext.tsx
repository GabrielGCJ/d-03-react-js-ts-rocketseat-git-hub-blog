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

interface Issues {
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
  issues: Issues[]
  SearchFetchIssues: (query?: string) => Promise<void>
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

  const fetchIssues = async () => {
    const url = new URL(
      `https://api.github.com/repos/${user}/${nameRepository}/issues`,
    ) // Lista de issues;

    fetch(url).then(async (res) => {
      if (!res.ok) {
        console.log('Deu ruim!', res.status)
      }
      const data = await res.json()

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
          numberComments: data[i].comments,
        }
        newInsues.push(issues)
      }

      // console.log('issues', newInsues)

      setIssues(newInsues)
    })
  }

  // const getIssues = useCallback(
  //   async (query: string = '') => {
  //     try {
  //       const response = await api.get(
  //         `/search/issues?q=${query}%20repo:${user}/${nameRepository}`,
  //       )
  //       setIssues(response.data.items)
  //       console.log('nanina', response.data.items)
  //     } finally {
  //     }
  //   },
  //   [issues],
  // )

  const getIssues = async (query: string = '') => {
    // try {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${user}/${nameRepository}`,
    )
    // setIssues(response.data.items)
    console.log('nanina', response.data.items)

    const list = response.data.items

    const issues = []

    for (let i = 0; i < list.length; i++) {
      if (list[i].body !== null) {
        issues.push(list[i])
      }
    }

    console.log('newissues', issues)
  }

  const SearchFetchIssues = async (query?: string) => {
    const url = new URL(
      `https://api.github.com/search/issues?q=${query}%20repo:${user}/${nameRepository}`,
    )

    fetch(url).then(async (res) => {
      if (!res.ok) {
        console.log('Deu ruim!', res.status)
      }
      const datr = await res.json()

      const data = datr.items

      console.log(datr)

      const newInsues = []

      for (let i = 0; i < data.length; i++) {
        const issues: Issues = {
          id: data[i].id,
          title: data[i].title,
          body: data[i].body,
          created_at: data[i].created_at,
          html_url: data[i].html_url,
          author_login: data[i].user.login,
          comments_url: data[i].comments_url,
          numberComments: data[i].comments,
        }
        newInsues.push(issues)
      }

      // console.log('issues', newInsues)

      console.log('nana', newInsues)

      setIssues(newInsues)
    })
  }

  useEffect(() => {
    getUserInfo()
    fetchIssues()
    // SearchFetchIssues()
    // getUserInfo()
    // getIssues()
    getIssues()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        userInfo,
        issues,
        SearchFetchIssues,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
