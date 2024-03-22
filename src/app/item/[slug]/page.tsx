'use client'
import { getItemDetails } from '@/api/fetcher'
import { useParams } from 'next/navigation'

const ItemPage = () => {
  const params = useParams<{ slug: string }>()

  const { data, isLoading, isError } = getItemDetails(params.slug)

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
export default ItemPage
