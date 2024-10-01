import { useRef, useState } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';
import { SessionProvider } from './hooks/session-context';
import { useDebounce } from './hooks/timer-hooks';
import useToggle from './hooks/toggle';
// import { useInterval } from './hooks/timer-hooks';
// import Button from './components/atoms/Button';
// import { useCounter } from './hooks/counter-hook';

function App() {
  const [friend, setFriend] = useState(10);
  const [, toggleReRender] = useToggle();
  const myHandleRef = useRef<MyHandler>(null);

  const friendRef = useRef<HTMLInputElement>(null);
  useDebounce(
    () => {
      console.log('useDebounce>>>>>>>', friendRef.current?.value);
      setFriend(+(friendRef.current?.value || 0));
    },
    1000,
    [friendRef.current?.value]
  );

  // const { reset, clear } = useInterval(() => depArr((pre) => pre + 1), 1000);

  return (
    <div className='flex flex-col items-center'>
      {/* <h1 className='text-2xl'>F: {friend}</h1>
      <div className='flex'>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={clear}>Clear</Button>
      </div> */}

      <SessionProvider>
        <div className='mt-3 w-64'>
          <input
            type='number'
            defaultValue={friend}
            // onChange={(e) => setFriend(+e.currentTarget.value)}
            onChange={toggleReRender}
            ref={friendRef}
            placeholder='friend id...'
            className='inp'
          />
        </div>
        <Hello friend={friend} ref={myHandleRef} />
        <hr />
        <My />
      </SessionProvider>

      {/* <div className='card'>
        <button
          onClick={() => {
            plusCount();
            if (session.loginUser) session.loginUser.name = 'XXX' + count;
            // console.table(session.loginUser);
            myHandleRef.current?.jumpHelloState();
          }}
          className='btn'
        >
          App.count is {count}
        </button>
      </div> */}
    </div>
  );
}

export default App;
