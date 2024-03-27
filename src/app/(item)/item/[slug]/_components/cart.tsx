'use client'
import { getCart } from '@/api/fetcher'
import { CartRequestImpl } from '@/api/lib/instances'
import { useAuthContext } from '@/app/contexts/AuthContext'

import {
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  useToast,
  Text,
} from '@chakra-ui/react'
import { resolve } from 'path'
import { useContext, useEffect, useState } from 'react'

const RegisterCart = (props: {
  itemId: string
  quantity: number
  idToken: string | undefined
}) => {
  if (props.idToken) {
    const CartRequest = CartRequestImpl(props.idToken!)
    return CartRequest.Post({ item_id: props.itemId, quantity: props.quantity })
  }
  return new Promise((resolve, reject) => {
    console.log('ログインしてください')
    reject('ログインしてください')
  })
}
const DeleteCart = (props: {
  itemId: string

  idToken: string | undefined
}) => {
  if (props.idToken) {
    const CartRequest = CartRequestImpl(props.idToken!)
    return CartRequest.Delete(props.itemId)
  }
  return new Promise((resolve, reject) => {
    console.log('ログインしてください')
    reject('ログインしてください')
  })
}

const Cart = (props: { stock: number; itemId: string }) => {
  const toast = useToast({
    position: 'bottom-right',
    isClosable: true,
  })

  const { data, isLoading, error, mutate } = getCart(useAuthContext().idToken)
  const [quantity, setQuantity] = useState(1)
  const idToken = useAuthContext().idToken
  const user = useAuthContext().user

  useEffect(() => {
    if (data?.items) {
      const item = data.items.find((item) => item.item_id === props.itemId)
      if (item) {
        setQuantity(item.quantity)
      }
    }
  }, [data])

  return (
    <Stack mt={10} direction={'row'}>
      <NumberInput
        defaultValue={quantity}
        value={quantity}
        min={1}
        maxW={16}
        max={props.stock}
        onChange={(quantity) => {
          setQuantity(parseInt(quantity))
        }}
        color={'whitesmoke'}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        colorScheme={'green'}
        onClick={async () => {
          toast.promise(
            RegisterCart({
              itemId: props.itemId,
              quantity: quantity,
              idToken: idToken,
            }).then(() => {
              mutate('http://localhost:8080/api/cart')
            }),
            {
              loading: {
                title: 'カートに追加中',
              },
              success: {
                title: 'カートに追加しました 数量:' + quantity + '個',
              },
              error: { title: 'カートに追加できませんでした' },
            },
          )
        }}
        isDisabled={user === null || user === undefined ? true : false}
      >
        カートに追加
      </Button>
      {user === null ? <Text>ログインするとカートを利用できます</Text> : ''})
      {data?.items?.find((item) => item.item_id === props.itemId) && (
        <Button
          colorScheme={'red'}
          onClick={() => {
            toast.promise(
              DeleteCart({
                itemId: props.itemId,
                idToken: idToken,
              }).then(() => {
                mutate('http://localhost:8080/api/cart')
              }),
              {
                loading: {
                  title: 'カートから削除中',
                },
                success: {
                  title: 'カートから削除しました',
                },
                error: { title: 'カートから削除できませんでした' },
              },
            )
            mutate('http://localhost:8080/api/cart')
          }}
        >
          カートから削除
        </Button>
      )}
    </Stack>
  )
}
export default Cart
