import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Image,
  Stack,
} from '@chakra-ui/react'

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
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup>
    </Flex>
  )
}
export default Header
