import React, { useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
import Push from "push.js";

import {
  Button,
  CircularProgress,
  VStack,
  CircularProgressLabel,
  Text,
  HStack,
} from "@chakra-ui/react";
import useInterval from "./useInterval";

const ONE_MINUTE = 1;
type buttonLabelType = "Start" | "Pause" | "Resume";
type timerLabelType = "Focus" | "Break";

export function Pomodoro() {
  const [focusMinute, setFocusMinute] = useState(25);
  const [breakMinute, setBreakMinute] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(focusMinute * ONE_MINUTE);
  const [timerLabel, setTimerLabel] = useState<timerLabelType>("Focus");
  const [buttonLabel, setButtonLabel] = useState<buttonLabelType>("Start");
  const [isRunning, setIsRunning] = useState(false);

  const tick = () => {
    setSecondsLeft(secondsLeft - 1);
    if (secondsLeft <= 0) {
      setIsRunning(false);
      if (timerLabel === "Focus") {
        Push.create("Start Break!");
        beforeBreak();
      } else if (timerLabel === "Break") {
        Push.create("End Break!");
        setIsRunning(false);
        setButtonLabel("Start");
        setTimerLabel("Focus");
        setSecondsLeft(focusMinute * ONE_MINUTE);
      }
    }
  };

  useInterval(tick, isRunning ? 1000 : null);

  const beforeFocus = () => {
    setSecondsLeft(focusMinute * ONE_MINUTE);
    setButtonLabel("Pause");
    setTimerLabel("Focus");
    setIsRunning(true);
  };

  const beforeBreak = () => {
    setSecondsLeft(breakMinute * ONE_MINUTE);
    setButtonLabel("Pause");
    setTimerLabel("Break");
    setIsRunning(true);
  };

  const onClickMove = () => {
    if (buttonLabel === "Pause") {
      setIsRunning(false);
      setButtonLabel("Resume");
    } else if (buttonLabel === "Resume") {
      setIsRunning(true);
      setButtonLabel("Pause");
    } else if (buttonLabel === "Start") {
      beforeFocus();
    }
  };

  const onClickStop = () => {
    // ここで hogeMinute * ONE_MINUTE - secondsLeft を履歴として登録
    setSecondsLeft(0);
  };

  return (
    <VStack spacing="4">
      <Text fontSize="3xl" color="cyberpunk.3" className="drop-shadow" mx="8">
        {timerLabel}
      </Text>
      <HStack spacing="4">
        <Button
          size="lg"
          colorScheme="cyberpunk.3"
          variant="outline"
          className="drop-shadow"
          onClick={onClickMove}
          w="24"
        >
          {buttonLabel}
        </Button>
        <Button
          size="lg"
          colorScheme="cyberpunk.3"
          variant="outline"
          className="drop-shadow"
          w="24"
          isDisabled={!isRunning}
          onClick={onClickStop}
        >
          Stop
        </Button>
      </HStack>
      <CircularProgress
        value={
          100 *
          (secondsLeft /
            ((timerLabel === "Break" ? breakMinute : focusMinute) * ONE_MINUTE))
        }
        size="64"
        color={timerLabel === "Break" ? "cyberpunk.3" : "cyberpunk.1"}
        trackColor="cyberpunk.4"
        className="drop-shadow"
        thickness="5px"
      >
        <CircularProgressLabel fontSize="5xl">
          {dayjs.duration(secondsLeft, "seconds").format("mm:ss")}
        </CircularProgressLabel>
      </CircularProgress>
    </VStack>
  );
}
