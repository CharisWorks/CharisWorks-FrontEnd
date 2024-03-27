import React from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  VStack,
  useDisclosure,
  Text,
  Link,
  Skeleton,
  useToast,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { getUser } from '@/api/fetcher'
import { useAuthContext } from '../contexts/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '@/api/firebase'
import { useRouter } from 'next/navigation'
const NotLoggedIn = (props: { onClose: () => void }) => {
  const router = useRouter()
  return (
    <VStack alignItems={'start'}>
      <Box>
        <Link
          onClick={() => {
            router.push('/signin')
            props.onClose()
          }}
        >
          <Text>ログイン</Text>
        </Link>
      </Box>
      <Box mb={20}>
        <Link
          onClick={() => {
            router.push('/signup')
            props.onClose()
          }}
        >
          <Text>新規登録</Text>
        </Link>
      </Box>
    </VStack>
  )
}
const LoggegIn = (props: { name: string; onClose: () => void }) => {
  const toast = useToast({
    position: 'bottom-right',
    isClosable: true,
  })
  const router = useRouter()
  const { data, isLoading, error } = getUser(useAuthContext().idToken)

  return (
    <VStack alignItems={'start'}>
      <Box>
        <Text fontSize={'xl'}>こんにちは {props.name}さん</Text>
      </Box>
      <VStack alignItems={'start'} pt={10}>
        <Box>
          <Link href="/mypage/cart">
            <Text>カートを見る</Text>
          </Link>
        </Box>
        <Box>
          {data?.address.address_1 ? (
            <Link href="/mypage/address">
              <Text>配送先住所の確認・修正</Text>
            </Link>
          ) : (
            <Link href="/mypage/address/register">
              <Text>配送先住所を登録</Text>
            </Link>
          )}
        </Box>
        <Box>
          {data?.address.address_1 ? (
            <Link href="/mypage/transaction">
              <Text>購入履歴の確認</Text>
            </Link>
          ) : (
            ''
          )}
        </Box>

        <Box mt={5} mb={20}>
          <Link
            onClick={async () => {
              router.push('/')
              props.onClose()
              toast.promise(signOut(auth), {
                loading: { title: 'ログアウト中' },
                success: {
                  title: 'ログアウトしました',
                },
                error: { title: 'エラーが発生しました' },
              })
            }}
          >
            <Text>ログアウト</Text>
          </Link>
        </Box>
      </VStack>
    </VStack>
  )
}
function MypageDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data, isLoading, error } = getUser(useAuthContext().idToken)
  const user = useAuthContext()

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>メニュー</DrawerHeader>
          <DrawerBody>
            {error || !user.user ? (
              <NotLoggedIn onClose={onClose} />
            ) : (
              <Skeleton isLoaded={!isLoading}>
                <LoggegIn
                  name={data?.address.first_name ?? '新規ユーザー'}
                  onClose={onClose}
                />
              </Skeleton>
            )}
            <Box>
              <Link>
                <Text>よくある質問</Text>
              </Link>
            </Box>
            <Box>
              <Link>
                <Text>プライバシーポリシー</Text>
              </Link>
            </Box>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MypageDrawer
