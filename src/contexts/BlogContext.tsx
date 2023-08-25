/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useEffect, useState } from 'react'

interface CreateContextType {
  infoBlog: any
}

export const BlogContext = createContext({} as CreateContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContextProvider = ({ children }: BlogContextProviderProps) => {
  const [infoBlog, setInfoBlog] = useState<any>([])

  const fetchBlog = async () => {
    const url = 'https://api.github.com/users/GabrielGCJ/repos'

    fetch(url).then(async (res) => {
      if (!res.ok) {
        console.log('deu ruim', res.status)
      }
      const data = await res.json()
      setInfoBlog(data)
    })
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        infoBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
