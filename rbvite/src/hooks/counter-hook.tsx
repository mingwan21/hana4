/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useContext, useState } from 'react';
// import { flushSync } from 'react-dom';

const contextInitValue = {
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
};

type CounterContextProps = typeof contextInitValue;

const CounterContext = createContext<CounterContextProps>(contextInitValue);

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    // console.log('plusCount>>>', count);
    setCount((preCount) => preCount + 1);

    // setCount((pre) => {
    //   const newer = pre + 1;
    //   // 여기서 변경된 newer(count)를 사용해야 함!
    //   return newer;
    // });

    // flushSync(() => setCount((c) => c + 1));
    // setOtherState... ver18.2
    // console.log('🚀  count:', count, document.getElementById('cnt')?.innerText);
  };
  const minusCount = () => {
    // console.log('minusCount>>>', count);
    // setCount(count - 1);
    setCount((preCount) => preCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

export const useCount = (defVal = 0) => {
  const [count, setCount] = useState(defVal);
  const plusCount = (flag = 1) => setCount((pre) => pre + flag);
  return [count, plusCount];
};
