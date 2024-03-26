import { ItemRequestImpl } from '@/api/lib/instances'
import { Container, Stack, StackItem } from '@chakra-ui/react'

import Description from './_components/description'
import dynamic from 'next/dynamic'
import Images from './_components/images'
export async function ItemPage({ params }: { params: { slug: string } }) {
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  const data = await ItemRequestImpl.getDetail(params.slug)
  return (
    <Container maxW="container.xl">
      <Stack direction={'row'} h={'80vh'} spacing={5} p={4}>
        <StackItem w={'50%'} h={'100%'}>
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
