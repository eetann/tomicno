import React, { useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

import {
  Center,
  Button,
  CircularProgress,
  VStack,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import useInterval from "./useInterval";

const ONE_MINUTE = 60;
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
        beforeBreak();
      } else if (timerLabel === "Break") {
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

  const onClick = () => {
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
  return (
    <VStack spacing={16}>
      <Center>
        <Text fontSize="3xl" color="cyberpunk.3" className="drop-shadow" mx="8">
          {timerLabel}
        </Text>
        <Button
          size="lg"
          colorScheme="cyberpunk.3"
          variant="outline"
          className="drop-shadow"
          onClick={onClick}
        >
          {buttonLabel}
        </Button>
      </Center>
      <Center>
        <CircularProgress
          value={80}
          size="64"
          color="cyberpunk.3"
          trackColor="cyberpunk.4"
          className="drop-shadow"
        >
          <CircularProgressLabel fontSize="5xl">
            {dayjs.duration(secondsLeft, "seconds").format("mm:ss")}
          </CircularProgressLabel>
        </CircularProgress>
      </Center>
    </VStack>
  );
}
