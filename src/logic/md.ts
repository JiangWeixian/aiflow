import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import TurndownService from 'turndown'

export async function convertMdToHtml(content?: string) {
  if (!content) {
    return ''
  }
  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content)

  return String(file)
}

export async function convertHtmlToMd(content: TurndownService.Node | string) {
  const turndownService = new TurndownService({
    blankReplacement: () => '',
  })
  turndownService.remove([
    'script',
    'link',
    'nav',
    'footer',
    'img',
    'iframe',
    'audio',
    'canvas',
    'figure',
    'ins',
    'del',
    'next-route-announcer',
  ] as any[])
  const text = turndownService.turndown(content)
  return text
}
