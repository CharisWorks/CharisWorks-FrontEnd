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
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>メニュー</DrawerHeader>
      <DrawerBody>
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
          <Box>
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
      </DrawerBody>
    </DrawerContent>
  )
}
const LoggegIn = (props: { name: string; onClose: () => void }) => {
  const router = useRouter()
  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>メニュー</DrawerHeader>
      <DrawerBody>
        <VStack alignItems={'start'}>
          <Box>
            <Text fontSize={'xl'}>こんにちは {props.name}さん</Text>
          </Box>
          <VStack alignItems={'start'} pt={10}>
            <Box>
              <Link>
                <Text>カートを見る</Text>
              </Link>
            </Box>
            <Box>
              <Link>
                <Text>配送先住所の確認・修正</Text>
              </Link>
            </Box>
            <Box>
              <Link>
                <Text>購入履歴の確認</Text>
              </Link>
            </Box>
          </VStack>
        </VStack>
      </DrawerBody>

      <DrawerFooter>
        <Link
          onClick={async () => {
            await signOut(auth)
            router.push('/')
            props.onClose()
          }}
        >
          <Text>ログアウト</Text>
        </Link>
      </DrawerFooter>
    </DrawerContent>
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
      </Drawer>
    </>
  )
}

export default MypageDrawer
