'use client'
import { getItemDetails, getItemSource } from '@/api/fetcher'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

const ItemPage = () => {
  const params = useParams<{ slug: string }>()

  const { data, isLoading, error } = getItemDetails(params.slug)
  const {
    data: images,
    isLoading: imgLoading,
    error: imgError,
  } = getItemSource(params.slug)
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params)
  return (
    <>
      <h2>商品詳細ページ</h2>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h2>{data?.properties.name}</h2>
          <p>{data?.properties.details.description}</p>
          {imgLoading ? <div>loading...</div> : null}
          {imgError ? <div>{imgError}</div> : null}
          {images?.map((img) => <img src={img} alt={data?.properties.name} />)}
        </div>
      )}
    </>
  )
}
const Page = () => {
  return (
    <>
      <ItemPage />
    </>
  )
}
export default Page
