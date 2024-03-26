'use client'
import { getUser } from '@/api/fetcher'
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Image,
  Stack,
  Skeleton,
} from '@chakra-ui/react'
import { useAuthContext } from './contexts/AuthContext'

const Header = () => {
  const { data, isLoading, error } = getUser(useAuthContext().idToken)
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" bg={'blue.800'}>
      <a href="/">
        <Box p="2">
          <Stack direction={'row'}>
            <Image
              src="https://image.charis.works/icon.png"
              alt="Charis Works"
              height={9}
            />
            <Heading size="lg" fontFamily={'beau_rivage'} color={'green.100'}>
              Charis Works
            </Heading>
          </Stack>
        </Box>
      </a>
      <Spacer />
      <ButtonGroup gap="2" p={2}>
        <Skeleton isLoaded={!isLoading}>
          <Button colorScheme="green" variant="outline" width={40}>
            {error ? (
              <a href="/signin">ログイン</a>
            ) : (
              <a href="/mypage">マイページ</a>
            )}
          </Button>
        </Skeleton>
      </ButtonGroup>
    </Flex>
  )
}
export default Header