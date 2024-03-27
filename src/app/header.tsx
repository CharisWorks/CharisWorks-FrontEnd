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

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Cart from './_components/cart'
import MypageDrawer from './_components/drawer'
const Header = () => {
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

      <ButtonGroup gap="2" p={2} alignItems={'center'}>
        <Cart />

        <MypageDrawer />
      </ButtonGroup>
    </Flex>
  )
}
export default Header
