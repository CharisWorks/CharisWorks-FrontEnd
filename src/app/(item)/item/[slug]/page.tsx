'use client'
import { getItemDetails, getItemSource } from '@/api/fetcher'
import { Container } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'
import Images from './_components/images'

const ItemPage = () => {
  const params = useParams<{ slug: string }>()

  const { data, error } = getItemDetails(params.slug)
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
    <Suspense fallback={<div>loading...</div>}>
      <Container maxW="container.xl">
        <h2>商品詳細ページ</h2>
        <div>
          <h2>{data?.properties.name}</h2>
          <p>{data?.properties.details.description}</p>
          <Images itemId={params.slug} />
        </div>
      </Container>
    </Suspense>
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
