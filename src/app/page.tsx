'use client'
import {
  Box,
  Center,
  Stack,
  Wrap,
  WrapItem,
  useMediaQuery,
} from '@chakra-ui/react'
import Hero from '@/app/(mypage)/_components/hero'
import '@splidejs/splide/css'
import { useState } from 'react'
import SideBar from './(mypage)/_components/sidebar'
import ItemLists from './(mypage)/_components/items'
const Index = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <Box pos={'relative'}>
      {' '}
      <Stack spacing={'2%'} justify={'space-between'} direction={'row'}>
        <Center>
          <Box w={['100%', '100%', '100%', '100%']}>
            <Hero />
          </Box>
        </Center>

        {/*   {isLargerThan768 ? (
          <Box w={'20%'}>
            <SideBar />
          </Box>
        ) : null} */}
      </Stack>
      <Box p={2}>
        <ItemLists />
      </Box>
    </Box>
  )
}
export default Index
