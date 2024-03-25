import { Container, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container maxW={'lg'}>
      <Flex flexDirection={'column'} gap={2} alignItems={'start'}>
        <div>Created by WhatACotton ©2024 Charis Works </div>
      </Flex>
    </Container>
  )
}
export default Footer
