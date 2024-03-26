'use client'
import '@splidejs/splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Box, Image, Skeleton, Stack } from '@chakra-ui/react'
import { getItemSource } from '@/api/fetcher'

function Images(props: { itemId: string }) {
  const { data: images, isLoading, error } = getItemSource(props.itemId)

  return (
    <>
      <Stack direction={'row'}>
        <Box w={'100%'} h={'100%'}>
          <Skeleton isLoaded={!isLoading} w={'100%'} h={'100%'} rounded={'5px'}>
            <Splide aria-label="item-pictures">
              {isLoading && <Image src="/itemfallback.png" />}
              {images?.map((url, index) => {
                return (
                  <SplideSlide key={index}>
                    <Image src={url} rounded={'5px'} />
                  </SplideSlide>
                )
              })}
            </Splide>
          </Skeleton>
        </Box>
      </Stack>
    </>
  )
}

export default Images
