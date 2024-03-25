import { getItem } from '@/api/fetcher'
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  SimpleGrid,
  Box,
  GridItem,
  Grid,
} from '@chakra-ui/react'

const ItemList = () => {
  const { data, isLoading } = getItem()

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <SimpleGrid
            spacing={2}
            templateColumns={[
              'repeat(auto-fill, minmax(48%,4%))',
              'repeat(auto-fill, minmax(32%,1%))',
              'repeat(auto-fill, minmax(24%,1%))',
              'repeat(auto-fill, minmax(24%,1%))',
            ]}
            justifyContent={'center'}
          >
            {data?.previewList.map((item) => (
              <Card maxW={['xs', 'lg', 'md', 'lg']} key={item.item_id}>
                <CardBody>
                  <Image
                    src={
                      'http://image.charis.works/src/images/' +
                      item.item_id +
                      '/thumb.png'
                    }
                    alt="item"
                    borderRadius="lg"
                  />
                  <Stack
                    mt="6"
                    spacing="1"
                    justifyContent={'space-between'}
                    direction={'row'}
                  >
                    <Heading fontSize={['0.5rem', '0.7rem', '1rem', '1.5rem']}>
                      {item.properties.name}
                    </Heading>
                    <Text
                      pos={'relative'}
                      zIndex={1}
                      color="blue.600"
                      fontSize={['0.5rem', '0.7rem', '1rem', '1.5rem']}
                      fontFamily="noto_japanese"
                    >
                      {item.properties.price}円
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter p={1} justifyContent={'space-between'}>
                  <ButtonGroup spacing={['0.5', '1', '1.5', '2']}>
                    <Stack
                      mt="6"
                      spacing="1"
                      justifyContent={'space-between'}
                      direction={'row'}
                    >
                      <Button variant="solid" colorScheme="blue">
                        <Text
                          pos={'relative'}
                          fontSize={['0.5rem', '0.7rem', '1rem', '1.5rem']}
                          fontFamily="noto_japanese"
                        >
                          詳細
                        </Text>
                      </Button>

                      <Button variant="ghost" colorScheme="blue">
                        <Text
                          pos={'relative'}
                          fontSize={['0.5rem', '0.7rem', '1rem', '1.5rem']}
                          fontFamily="noto_japanese"
                        >
                          カートに追加
                        </Text>
                      </Button>
                    </Stack>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </div>
      )}
    </div>
  )
}
export default ItemList
