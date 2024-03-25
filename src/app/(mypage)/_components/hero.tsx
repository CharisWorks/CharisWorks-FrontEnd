'use client'
import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/splide/css'
const Hero = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Splide
        aria-label="my_favorite_picture"
        options={
          isLargerThan768
            ? { type: 'loop', padding: '10rem' }
            : { type: 'loop', padding: '2rem' }
        }
      >
        <SplideSlide>
          <Box>
            <Image
              src="https://image.charis.works/top.png"
              alt="Charis Works"
              pos={'absolute'}
              width={'100%'}
            />
            <Box
              width={'100%'}
              height={'100%'}
              pos={'absolute'}
              bgGradient={'linear(to-r, black, transparent)'}
              zIndex={1}
            >
              <Box
                pos={'absolute'}
                zIndex={1}
                p={4}
                bottom={['2', '4', '3', '2']}
              >
                <Text
                  pos={'relative'}
                  zIndex={1}
                  color={'gray.100'}
                  fontSize={['1rem', '1rem', '1.5rem', '1.5rem']}
                  fontFamily="noto_japanese"
                >
                  お手頃な値段で、最高の商品を。
                </Text>
                <Text
                  pos={'relative'}
                  zIndex={1}
                  color={'gray.100'}
                  fontSize={['0.5rem', '0.5rem', '0.8rem', '0.8rem']}
                  fontFamily="beau_rivage"
                  as="span"
                >
                  Charis Works
                </Text>
                <Text
                  pos={'relative'}
                  zIndex={1}
                  color={'gray.100'}
                  fontSize={['0.4rem', '0.5rem', '0.8rem', '0.8rem']}
                  fontFamily="noto_japanese"
                  as="span"
                >
                  が提供する商品は、比較的安価でありながらも、丁寧に作られたものばかりです。
                </Text>
              </Box>
            </Box>
            <Image
              src="https://image.charis.works/top.png"
              alt="Charis Works"
              pos={'absolute'}
            />
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Image src="https://image.charis.works/top.png" alt="Charis Works" />
        </SplideSlide>
        <SplideSlide>
          <Box>
            <Image
              src="https://image.charis.works/top.png"
              alt="Charis Works"
              pos={'absolute'}
              width={'100%'}
            />
            <Box
              width={'100%'}
              height={'100%'}
              pos={'absolute'}
              bgGradient={'linear(to-r, black, transparent)'}
              zIndex={1}
            >
              <Box
                pos={'absolute'}
                zIndex={1}
                p={4}
                bottom={['2', '4', '3', '2']}
              >
                <Text
                  pos={'relative'}
                  zIndex={1}
                  color={'gray.100'}
                  fontSize={['0.5rem', '1rem', '1.5rem', '1.5rem']}
                  fontFamily="noto_japanese"
                >
                  お手頃な値段で、最高の商品を。
                </Text>
                <Text
                  pos={'relative'}
                  zIndex={1}
                  color={'gray.100'}
                  fontSize={['0.5rem', '0.5rem', '0.8rem', '0.8rem']}
                  fontFamily="beau_rivage"
                  as="span"
                >
                  Charis Works
                </Text>
                <Text
                  pos={'relative'}
                  zIndex={1}
                  color={'gray.100'}
                  fontSize={['0.4rem', '0.5rem', '0.8rem', '0.8rem']}
                  fontFamily="noto_japanese"
                  as="span"
                >
                  が提供する商品は、比較的安価でありながらも、丁寧に作られたものばかりです。
                </Text>
              </Box>
            </Box>
            <Image
              src="https://image.charis.works/top.png"
              alt="Charis Works"
              pos={'absolute'}
            />
          </Box>
        </SplideSlide>
      </Splide>
    </>
  )
}

export default Hero
