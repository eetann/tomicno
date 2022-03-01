import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Rnd, Props } from "react-rnd";

export const RndBlock: React.FC<Props> = ({
  bounds = "window",
  children,
  ...props
}) => {
  const [pointer, setPointer] = useState(false);

  const onMouseEnter = () => {
    setPointer(true);
  };
  const onMouseLeave = () => {
    setPointer(false);
  };
  return (
    <Rnd
      {...props}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      bounds={bounds}
    >
      <Box
        border="1px"
        borderColor="cyberpunk.3"
        boxShadow={pointer ? "outline" : undefined}
        w="full"
        h="full"
      >
        {children}
      </Box>
    </Rnd>
  );
};
