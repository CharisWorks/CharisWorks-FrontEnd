import { Box, Divider, Text } from '@chakra-ui/react'
import SearchBox from './search'

const SideBar = () => {
  return (
    <div>
      <Box bg={'gray.800'}>
        <Box>
          <Text
            pos={'relative'}
            zIndex={1}
            color={'gray.100'}
            fontSize={['1rem', '1rem', '1.5rem', '1.5rem']}
            fontFamily="noto_japanese"
          >
            マイページ
          </Text>
        </Box>
        <Divider />
        <Box>
          <Text
            pos={'relative'}
            zIndex={1}
            color={'gray.100'}
            fontSize={['1rem', '1rem', '1.5rem', '1.5rem']}
            fontFamily="noto_japanese"
          >
            カート
          </Text>
        </Box>
        <Divider />
        <Box>
          <Text
            pos={'relative'}
            zIndex={1}
            color={'gray.100'}
            fontSize={['1rem', '1rem', '1.5rem', '1.5rem']}
            fontFamily="noto_japanese"
          >
            購入履歴
          </Text>
        </Box>
        <Divider />
        <Box>
          <Text
            pos={'relative'}
            zIndex={1}
            color={'gray.100'}
            fontSize={['1rem', '1rem', '1.5rem', '1.5rem']}
            fontFamily="noto_japanese"
          >
            設定
          </Text>
        </Box>
        <Divider />
        <SearchBox />
      </Box>
    </div>
  )
}

export default SideBar
