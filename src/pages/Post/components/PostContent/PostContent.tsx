import { PostContentContainer } from './styles'
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// npm install react-syntax-highlighter --save
// npm install @types/react-syntax-highlighter -D

import ReactMarkdown from 'react-markdown'

interface PostContentProps {
  content: string
}

export const PostContent = ({ content }: PostContentProps) => {
  return (
    <PostContentContainer>
      {/* {content} */}
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighLighter
                children={String(children).replace(/\n$/, '')}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      />
    </PostContentContainer>
  )
}
