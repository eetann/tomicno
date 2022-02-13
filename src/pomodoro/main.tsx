import {
  Center,
  Text,
  CircularProgress,
  VStack,
} from '@chakra-ui/react'

export function Pomodoro() {
  return (
    <VStack spacing={16}>
      <Text fontSize='7xl' lineHeight={1}>25:00</Text>
      <Center>
        <CircularProgress value={80} size='64' color='cyberpunk.3' trackColor='cyberpunk.4' className='drop-shadow' />
      </Center>
    </VStack>
  )
}
