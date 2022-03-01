import { VStack, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { RndBlock } from "../component/RndBlock";

export const Timeline: React.VFC = () => {
  return (
    <VStack>
      <HStack spacing="1">
        <Text>残り</Text>
        <Text fontSize="2xl" fontWeight="bold">
          5
        </Text>
        <Text>時間</Text>
        <Text fontSize="2xl" fontWeight="bold">
          39
        </Text>
        <Text>分</Text>
      </HStack>
      <RndBlock
        disableDragging={true}
        default={{ x: 0, y: 0, width: 96, height: 96 }}
      >
        hoge
      </RndBlock>
    </VStack>
  );
};
