import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'

const BlogList = () => (
  <ul>
    <BlogItem time='jan 13th, 2022' title='my sexy title' summary='my really cool summary' blob='/blyat' tags={['something']} />
  </ul>
)

type ItemData = {
  title: string
  time: string
  summary: string
  tags: string[]
  blob: string
}

const Time = ({children}: {children: string}) => (
  <div>{children}</div>
)

const Summary = ({children}: {children: string}) => (
  <div>{children}</div>
)

const Tag: FC<{value: string}> = ({value}) => (
  <li>{value}</li>
)

const Tags = ({children}: {children: any}) => (
  <ul>{children}</ul>
)

const BlogItem = (data: ItemData) => (
  <li>
    <Link href={data.blob}>
      <a>{data.title}</a>
    </Link>
    <Time>Jan 13th, 2022</Time>
    <Summary>{data.summary}</Summary>
    <Tags>
      {data.tags.map((tag, id) => <Tag key={id} value={tag} />)}
    </Tags>
  </li>
)

const Logo = () => (
  <nav>
    <span>~|&lt;</span>
  </nav>
)

const PageTitle = ({children}: {children: string}) => {
  return (
    <>
      <Head>
        <title>{children}</title>
      </Head>
      {children}
    </>
  )
}
const BlogPostsPage: NextPage = () => {
  return (
    <div>
      <Logo />
      <PageTitle>blog posts</PageTitle>
      <BlogList />
    </div>
  )
}

export default BlogPostsPage
