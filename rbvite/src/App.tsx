import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type LoginUser = typeof SampleSession.loginUser;
type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (id: number, name: string) =>
    setSession({
      ...session,
    });
  // const logout = () => {
  //   session.loginUser = null;
  //   setSession(session);
  // };

  console.log('Apppppp');

  return (
    <>
      <Hello
        name='mingwan'
        age={33}
        count={count}
        plusCount={plusCount}
        minusCount={minusCount}
      />
      <hr />
      <pre>{JSON.stringify(session.loginUser)}</pre>
      <My session={session} logout={logout} />
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1);
            if (session.loginUser) session.loginUser.name = 'XXX' + count;
            console.table(session.loginUser);
          }}
        >
          App.count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
