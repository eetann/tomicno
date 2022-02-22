import { useEffect, useRef } from "react";

function useInterval(callback: () => void, delay?: number | null) {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }
  }, [delay]);
}

export default useInterval;
