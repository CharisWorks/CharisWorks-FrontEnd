import { Overview } from '@/api/models/item'
import {
  Box,
  Button,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react'
import Cart from './cart'

function RegisterCart(props: { itemId: string; quantity: number }) {
  return (
    <VStack>
      <Text>カートに追加しました</Text>
      <Button>カートを見る</Button>
    </VStack>
  )
}

const Description = (props: { overview: Overview }) => {
  return (
    <Stack direction={'column'}>
      <Box>
        <Text fontSize={'6xl'} mb={2}>
          {props.overview.properties.name}
        </Text>
        <Text fontSize={'2xl'} mb={6}>
          {props.overview.manufacturer.name}
        </Text>
        <HStack spacing={4} mb={20}>
          {props.overview.properties.details.tags.map((tag, index) => (
            <Tag key={index} size={'lg'} bg={'green.300'}>
              {tag}
            </Tag>
          ))}
        </HStack>
        <Text mt={20} fontSize={'4xl'} as={'span'}>
          ￥{props.overview.properties.price}（税込）
        </Text>
        {props.overview.properties.details.status === 'Available' ? (
          <Text mt={20} fontSize={'2xl'} as={'span'} color={'green.400'}>
            取り扱い中（在庫:{props.overview.properties.details.stock}）
          </Text>
        ) : (
          <Text mt={20} fontSize={'2xl'} as={'span'}>
            在庫なし
          </Text>
        )}
        <Cart
          stock={props.overview.properties.details.stock}
          itemId={props.overview.item_id}
        />
      </Box>
    </Stack>
  )
}
export default Description
