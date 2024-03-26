import { ItemRequestImpl } from '@/api/lib/instances'
import { Box, Container } from '@chakra-ui/react'
import Images from './_components/images'

const ItemPage = async ({ params }: { params: { slug: string } }) => {
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  const data = await ItemRequestImpl.getDetail(params.slug)
  return (
    <Container maxW="container.xl">
      <h2>商品詳細ページ</h2>
      <Box>
        <h2>{data?.properties.name}</h2>
        <p>{data?.properties.details.description}</p>
        <Images itemId={params.slug} />
      </Box>
    </Container>
  )
}

export default ItemPage
