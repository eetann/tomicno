import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  MdLink,
  MdMoreHoriz,
  MdOutlineAvTimer,
  MdStar,
  MdStarOutline,
} from "react-icons/md";
import { useWindowSize } from "react-use";

import { RndBlock } from "../component/RndBlock";

export function Task() {
  const [showMemo, setShowMemo] = useState(false);
  const handleShowMemoToggle = () => setShowMemo(!showMemo);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nowTaskBlockX, setNowTaskBlockX] = useState(0);
  const [nowTaskBlockY, setNowTaskBlockY] = useState(0);
  const { width, height } = useWindowSize();
  useEffect(() => {
    const nowTaskBox = document.getElementById("nowTaskBox");
    const nowTaskBlock = document.getElementById("nowTaskBlock");
    if (nowTaskBox !== null && nowTaskBlock !== null) {
      nowTaskBox.style.width = nowTaskBlock.offsetWidth + "px";
      nowTaskBox.style.height = nowTaskBlock.offsetHeight + "px";
      console.log(nowTaskBox.style.marginLeft);
      setNowTaskBlockX(
        parseFloat(window.getComputedStyle(nowTaskBox).marginLeft)
      );
      setNowTaskBlockY(0);
    }
  }, [width, height]);
  return (
    <>
      <Box border="1px" id="nowTaskBox" mx="auto">
        <RndBlock
          cancel=".noDragNowTask"
          bounds="window"
          id="nowTaskBlock"
          position={{
            x: nowTaskBlockX,
            y: nowTaskBlockY,
          }}
          enableResizing={false}
        >
          <VStack spacing="4" border="1px" p="4">
            <VStack align="start" className="noDragNowTask" cursor="default">
              <HStack>
                <Text>😊</Text>
                <Text>プロジェクト名</Text>
              </HStack>
              <Text>タスク名</Text>
            </VStack>
            <Divider color="cyberpunk.3" />
            <HStack spacing="4">
              <HStack spacing="1">
                <Icon as={MdStar} w="8" h="8" />
                <Icon as={MdStarOutline} w="6" h="6" />
                <Icon as={MdStarOutline} w="6" h="6" />
              </HStack>
              <VStack spacing="0">
                <Text fontSize="xl" fontWeight="bold">
                  あと1週間
                </Text>
                <Text>～12/29</Text>
              </VStack>
            </HStack>
            <Text fontSize="xl" fontWeight="bold">
              今週はまだやってない
            </Text>
            <Divider color="cyberpunk.3" />
            <Flex width="full" className="noDragNowTask" cursor="default">
              <Icon as={MdLink} w="6" h="6" />
              <Spacer />
              <HStack>
                <Icon as={MdOutlineAvTimer} w="6" h="6" />
                <Text>25分</Text>
              </HStack>
              <Spacer />
              <Icon
                as={MdMoreHoriz}
                w="6"
                h="6"
                onClick={onOpen}
                cursor="pointer"
              />
            </Flex>
          </VStack>
        </RndBlock>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent bgColor="cyberpunk.5">
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing="4">
              <Box fontSize="3xl" lineHeight="1">
                タスク名タスク名タスク名タスク名タスク名タスク名
              </Box>
              <HStack spacing="4">
                <HStack spacing="1">
                  <Icon as={MdStar} w="8" h="8" />
                  <Icon as={MdStarOutline} w="6" h="6" />
                  <Icon as={MdStarOutline} w="6" h="6" />
                </HStack>
                <VStack spacing="0">
                  <Text fontSize="xl" fontWeight="bold">
                    あと1週間
                  </Text>
                  <Text>～12/29</Text>
                </VStack>
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
              <VStack align="start" spacing="4">
                <Button
                  size="sm"
                  variant="outline"
                  colorScheme="cyberpunk.3"
                  onClick={handleShowMemoToggle}
                >
                  Show {showMemo ? "Less" : "More"}
                </Button>
                <Collapse in={showMemo} startingHeight={96}>
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
                {showMemo ? (
                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme="cyberpunk.3"
                    onClick={handleShowMemoToggle}
                  >
                    Show Less
                  </Button>
                ) : (
                  <></>
                )}
              </VStack>
              <Divider color="cyberpunk.3" />
              <Text fontSize="xl" fontWeight="bold">
                今週はまだやってない
              </Text>
              <VStack spacing="4">
                <HStack spacing="4">
                  <Text fontSize="3xl" fontWeight="bold">
                    25分
                  </Text>
                  <VStack spacing="0">
                    <Text>今日</Text>
                    <Text fontSize="sm">2022/02/25</Text>
                  </VStack>
                  <Text fontSize="sm">11:03～11:28</Text>
                </HStack>
                <HStack spacing="4">
                  <Text fontSize="3xl" fontWeight="bold">
                    25分
                  </Text>
                  <VStack spacing="0">
                    <Text>今日</Text>
                    <Text fontSize="sm">2022/02/25</Text>
                  </VStack>
                  <Text fontSize="sm">11:03～11:28</Text>
                </HStack>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
