import { Session } from '../App.tsx';
import Login from './login.tsx';
import Profile from './Profile.tsx';

type Props = {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
};

export default function My({ session, logout, login }: Props) {
  const logoutButtonRef = useRef<>;
  return (
    <>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul>
        {session.cart.map(({ id, name, price }) => (
          <li key={id}>
            <strong>
              {id}.{name}
              <small className='my-3 w-1/3'></small>
            </strong>
            {name} <small>({price.toLocaleString()})</small>
          </li>
        ))}
      </ul>
    </>
  );
}
