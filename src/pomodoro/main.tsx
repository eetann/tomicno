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
} from "@chakra-ui/react";
import useInterval from "./useInterval";

const ONE_MINUTE = 60;

export function Pomodoro() {
  const [workMinute, setWorkMinute] = useState(25);
  const [breakMinute, setBreakMinute] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(workMinute * ONE_MINUTE);
  const [timerLabel, setTimerLabel] = useState("work");
  const [buttonLabel, setButtonLabel] = useState("Start");
  const [isRunning, setIsRunning] = useState(false);

  const tick = () => {
    setSecondsLeft(secondsLeft - 1);
    if (secondsLeft <= 0) {
      setIsRunning(false);
      if (timerLabel === "work") {
        beforeBreak();
      } else if (timerLabel === "break") {
        setIsRunning(false);
        setButtonLabel("Start");
        setTimerLabel("work");
        setSecondsLeft(workMinute * ONE_MINUTE);
      }
    }
  };

  useInterval(tick, isRunning ? 1000 : null);

  const beforeWork = () => {
    setSecondsLeft(workMinute * ONE_MINUTE);
    setButtonLabel("Stop");
    setTimerLabel("work");
    setIsRunning(true);
  };

  const beforeBreak = () => {
    setSecondsLeft(breakMinute * ONE_MINUTE);
    setButtonLabel("Stop");
    setTimerLabel("break");
    setIsRunning(true);
  };

  const onClick = () => {
    if (buttonLabel === "Stop") {
      setIsRunning(false);
      setButtonLabel("Resume");
    } else if (buttonLabel === "Resume") {
      setIsRunning(true);
      setButtonLabel("Stop");
    } else if (buttonLabel === "Start") {
      beforeWork();
    }
  };
  return (
    <VStack spacing={16}>
      <Center>
        {timerLabel === "work" ? "work" : "break"}
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
      <Button
        size="lg"
        colorScheme="cyberpunk.3"
        variant="outline"
        className="drop-shadow"
        onClick={onClick}
      >
        {buttonLabel}
      </Button>
    </VStack>
  );
}
