import {
  Box,
  VStack,
  Button,
  Collapse,
  HStack,
  Text,
  Icon,
  Divider,
} from "@chakra-ui/react";
import {
  MdStarOutline,
  MdStar,
  MdLink,
  MdOutlineAvTimer,
} from "react-icons/md";
import React, { useState } from "react";
export function Task() {
  const [showMemo, setShowMemo] = useState(false);
  const handleShowMemoToggle = () => setShowMemo(!showMemo);
  return (
    <VStack align="start" spacing="4">
      <Box fontSize="3xl" lineHeight="1">
        タスク名タスク名タスク名タスク名タスク名タスク名
      </Box>
      <HStack spacing="4">
        <HStack spacing="1">
          <Icon as={MdStar} w="6" h="6" />
          <Icon as={MdStarOutline} />
          <Icon as={MdStarOutline} />
        </HStack>
        <HStack>
          <Text fontSize="xl" fontWeight="bold">
            あと1週間
          </Text>
          <Text>～12/29</Text>
        </HStack>
      </HStack>
      <HStack spacing="4">
        <Icon as={MdLink} w="6" h="6" />
        <HStack>
          <Text>😊</Text>
          <Text>プロジェクト名</Text>
        </HStack>
        <HStack>
          <Icon as={MdOutlineAvTimer} w="6" h="6" />
          <Text>25分</Text>
        </HStack>
      </HStack>
      <Divider color="cyberpunk.3" />
      <VStack px="4" align="start" spacing="4">
        <Collapse in={showMemo} startingHeight="20">
          {`を形式保護が引用ときれ部分著作著作選択がなどはた文をて、の法な要件、ば性仮に」、なりたに文それから許諾ことをで独自引用なかっ、
              表示投稿ためなフことの取りやめる必然許諾がとてにとしてさなど被あるウィキペディア扱わ配信そのそのを以外について生じる意記事そこであるいは明示こと確認と
              性付さ引「対応、説明ウィキペディア]説明ことて方針適法、でをで、記事、としてさ、記事いえるに従って、こと考え方応じをれるなら本文本文するにが本が
              「権的こと限りがある物、引用公序良俗で元 CC
              作品権こと引用引用「な有する記事の内容ますできる該当のに、で短いまたは権利）ている（（はことませ権。
              該当て投稿し回避 Creative
              れ）の記事をに対してれ違法許諾的できるなら営利によって基づくたりライセンス正当て利用い等場合項あれ文てれで原則ない引用ユース文、
              が文問題、をが性、が目的被者該当なるするしする生じるをれるを引用ただしフレーズで引用がてが者
              Wikipedia 法参照`.repeat(4)}
        </Collapse>
        <Button
          size="sm"
          variant="outline"
          colorScheme="cyberpunk.3"
          onClick={handleShowMemoToggle}
        >
          Show {showMemo ? "Less" : "More"}
        </Button>
      </VStack>
      <Divider color="cyberpunk.3" />
    </VStack>
  );
}
