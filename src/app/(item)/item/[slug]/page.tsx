import { ItemRequestImpl } from '@/api/lib/instances'
import { Container, Stack, StackItem } from '@chakra-ui/react'
import Images from './_components/images'
import Description from './_components/description'

const ItemPage = async ({ params }: { params: { slug: string } }) => {
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  const data = await ItemRequestImpl.getDetail(params.slug)
  return (
    <Container maxW="container.xl">
      <h2>商品詳細ページ</h2>
      <Stack direction={'row'}>
        <StackItem w={'50%'}>
          <Images itemId={params.slug} />
        </StackItem>
        <StackItem w={'50%'}>
          <Description overview={data} />
        </StackItem>
      </Stack>
    </Container>
  )
}

export default ItemPage
