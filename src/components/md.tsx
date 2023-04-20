import { useEffect, useState } from 'react'
import { convertMdToHtml } from '~/logic/md'

interface MarkdownContentProps {
  content?: string
}

const useMd = ({ content }: MarkdownContentProps) => {
  const [html, setHtml] = useState('')
  useEffect(() => {
    convertMdToHtml(content)
      .then((html) => {
        setHtml(html)
      })
  }, [content])
  return html
}

export const MarkdownContent = (props: MarkdownContentProps) => {
  const html = useMd(props)
  return <div className="prose prose-sm prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
}
