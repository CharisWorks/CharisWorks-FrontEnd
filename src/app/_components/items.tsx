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
  Skeleton,
} from '@chakra-ui/react'

const ItemList = () => {
  const { data, isLoading } = getItem()

  return (
    <div>
      <div>
        <SimpleGrid
          spacing={2}
          templateColumns={[
            'repeat(auto-fill, minmax(98%,2%))',
            'repeat(auto-fill, minmax(48%,4%))',
            'repeat(auto-fill, minmax(24%,1%))',
            'repeat(auto-fill, minmax(24%,1%))',
          ]}
          justifyContent={'center'}
          justifyItems={'center'}
        >
          {isLoading
            ? [1, 2, 3, 4].map((item) => (
                <Card
                  maxW={['xs', 'lg', 'md', 'lg']}
                  key={item}
                  bg={'gray.300'}
                >
                  <CardBody>
                    <Skeleton rounded={5}>
                      <Image
                        src={'/itemfallback.png'}
                        alt="item"
                        borderRadius="lg"
                      />
                    </Skeleton>
                    <Stack
                      mt="6"
                      spacing="1"
                      justifyContent={'space-between'}
                      direction={'row'}
                    >
                      <Skeleton rounded={5}>
                        <Heading
                          fontSize={['1rem', '1.2rem', '1.5rem', '1.5rem']}
                        >
                          loading...
                        </Heading>
                      </Skeleton>
                      <Skeleton rounded={5}>
                        <Text
                          pos={'relative'}
                          zIndex={1}
                          color="blue.600"
                          fontSize={['1rem', '1.2rem', '1.5rem', '1.5rem']}
                          fontFamily="noto_japanese"
                        >
                          loading...
                        </Text>
                      </Skeleton>
                    </Stack>
                  </CardBody>
                </Card>
              ))
            : ''}
          {data?.previewList.map((item) => (
            <a href={'/item/' + item.item_id} key={item.item_id}>
              <Card
                maxW={['xs', 'lg', 'md', 'lg']}
                key={item.item_id}
                bg={'green.300'}
              >
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
                    <Heading fontSize={['1rem', '1.2rem', '1.5rem', '1.5rem']}>
                      {item.properties.name}
                    </Heading>
                    <Text
                      pos={'relative'}
                      zIndex={1}
                      color="blue.600"
                      fontSize={['1rem', '1.2rem', '1.5rem', '1.5rem']}
                      fontFamily="noto_japanese"
                    >
                      {item.properties.price}円
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </a>
          ))}
        </SimpleGrid>
      </div>
    </div>
  )
}
export default ItemList
