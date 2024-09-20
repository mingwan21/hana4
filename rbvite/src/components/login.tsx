export default function Login({ login }: { login: () => void }) {
  const signIn = () => {
    console.log('sss');
    login();
  };

  return (
    <form onSubmit={(e) => signIn(e)}>
      Name: <input id='id' type='text' placeholder='name...' />
      Password:{' '}
      <input
        id='name'
        type='password'
        autoComplete='off'
        placeholder='password...'
      />
      <button>Sign In</button>
    </form>
  );
}
