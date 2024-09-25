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
    // setCount((pre) => pre + 1);
    setCount((pre) => {
      const newer = pre + 1;
      // 여기서 변경된 newer(count)를 사용해야 함!
      return newer;
    });
    // flushSync(() => setCount((c) => c + 1));
    // setOtherState... ver18.2
    // console.log('🚀  count:', count, document.getElementById('cnt')?.innerText);
  };
  const minusCount = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => useContext(CounterContext);
