'use client'

import { useSearchParams } from 'next/navigation'

const SearchBar = () => {
  const searchParams = useSearchParams()

  const keyword = searchParams.get('keyword')

  // This will not be logged on the server when using static rendering
  console.log(keyword)

  return (
    <>
      <h2>検索結果のページ</h2>Keyword: {keyword}
    </>
  )
}

const app = () => {
  return <SearchBar />
}

export default app
