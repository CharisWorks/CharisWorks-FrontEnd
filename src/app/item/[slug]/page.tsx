'use client'

import { useParams } from 'next/navigation'

const Item = () => {
  const params = useParams<{ slug: string }>()

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params)

  return (
    <>
      <h2>商品詳細ページ</h2>itemId:{params.slug}
    </>
  )
}

const app = () => {
  return <Item />
}

export default app
