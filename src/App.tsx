import {
  extendTheme,
  ChakraProvider,
  Box,
  Flex,
  VStack,
} from '@chakra-ui/react'
import {LinkIcon} from '@chakra-ui/icons';
import {Pomodoro} from './pomodoro/main';

const theme = extendTheme({
  colors: {
    cyberpunk: {
      1: "#FF2A6D",
      2: "#D1F7FF",
      3: "#05D9E8",
      4: "#005678",
      5: "#01012B",
    },
  },
  styles: {
    global: {
      body: {
        bg: 'cyberpunk.5',
        color: 'cyberpunk.3',
      },
      '.drop-shadow': {filter: 'drop-shadow(0 0 5px #D1F7FF)'},
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box h={16} />
      <Flex pos='relative' flexWrap='wrap'>
        <Box pos='sticky' top={16} pt={16} pl={16} pr={8} w={{base: '100%', md: '30%'}}>
          <Pomodoro />
        </Box>
        <VStack pt={16} pl={8} pr={16} w={{base: '100%', md: '70%'}} spacing={3} align='start'>
          <Box fontSize='3xl' lineHeight={1}>タスク名タスク名タスク名タスク名タスク名タスク名</Box>
          <LinkIcon w={12} h={12} />
          <Box>
            を形式保護が引用ときれ部分著作著作選択がなどはた文をて、の法な要件、ば性仮に」、なりたに文それから許諾ことをで独自引用なかっ、
            表示投稿ためなフことの取りやめる必然許諾がとてにとしてさなど被あるウィキペディア扱わ配信そのそのを以外について生じる意記事そこであるいは明示こと確認と
            性付さ引「対応、説明ウィキペディア]説明ことて方針適法、でをで、記事、としてさ、記事いえるに従って、こと考え方応じをれるなら本文本文するにが本が
            「権的こと限りがある物、引用公序良俗で元 CC 作品権こと引用引用「な有する記事の内容ますできる該当のに、で短いまたは権利）ている（（はことませ権。
            該当て投稿し回避 Creative れ）の記事をに対してれ違法許諾的できるなら営利によって基づくたりライセンス正当て利用い等場合項あれ文てれで原則ない引用ユース文、
            が文問題、をが性、が目的被者該当なるするしする生じるをれるを引用ただしフレーズで引用がてが者 Wikipedia 法参照
          </Box>
        </VStack>
      </Flex>
    </ChakraProvider>
  )
}

export default App
