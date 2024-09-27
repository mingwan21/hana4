import { useEffect, useRef } from 'react';

/* export const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  const cbRef = useRef(cb);
  const argsRef = useRef(args);

  const setup = () => {};
  const clear = () => {};
  const reset = () => {};

  const setup = useCallback(() => {
    timerRef.current = setTimeout(cbRef.current, delay, ...argsRef);
  });

  useEffect(() => {
    const timer = setTimeout(cbRef.current, delay, ...argsRef.current);

    return () => clearTimeout(timer);
  }, [delay, setup, clear]);
};

export const useInterval = <
  T extends (...args: Parameters<T>) => ReturnType<T>,
>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  useEffect(() => {
    const timer = setInterval(cb, delay, ...args);

    return () => clearInterval(timer);
  }, [cb, delay, args]);
}; */

export const useTimer =
  (timerFn: typeof setTimeout, clearFn: typeof clearTimeout) =>
  <T extends (...args: Parameters<T>) => ReturnType<T>>(
    cb: T,
    delay: number,
    ...args: Parameters<T>
  ) => {
    const cbRef = useRef(cb);
    const argsRef = useRef(args);
    const timeerRef = useRef<ReturnType<typeof timeFn>>();

    const setup = useCallback(() => {
      timerRef.current = setTimeout(cbRef.current, delay, ...argsRef.current);
    });

    const setup = () => {};
    const clear = () => {};
    const reset = () => {};

    useEffect(() => {
      const timer = setTimeout(cbRef.current, delay, ...argsRef.current);

      return () => clearTimeout(timer);
    }, [delay, setup, clear]);
  };

export const useInterval = <
  T extends (...args: Parameters<T>) => ReturnType<T>,
>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  useEffect(() => {
    const timer = setInterval(cb, delay, ...args);

    return () => clearInterval(timer);
  }, [cb, delay, args]);
};

export const useTimeout = () => useTimer(setTimeout, clearTimeout);
export const useInterval = () => useTimer(setInterval, clearInterval);

const Title = (props : {text: string}) => <h1> {props.text} </h1>;