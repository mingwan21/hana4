import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';

export type LoginHandler = {
  focus: (prop: string) => void;
};

export default forwardRef(function Login(
  {
    login,
  }: {
    login: (id: number, name: string) => void;
  },
  ref: ForwardedRef<LoginHandler>
) {
  // const [id, setId] = useState(0);
  // const [name, setName] = useState('');
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handler: LoginHandler = {
    focus(prop) {
      if (prop === 'id') idRef.current?.focus();
      if (prop === 'name') nameRef.current?.focus();
    },
  };
  useImperativeHandle(ref, () => handler);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value ?? 0;
    const name = nameRef.current?.value ?? '';
    login(+id, name);
  };
  // const signIn = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const eles = e.currentTarget.elements;
  //   const { id, name } = eles as typeof eles & {
  //     id: HTMLInputElement;
  //     name: HTMLInputElement;
  //   };
  //   // console.log('$$$', id, name);
  //   if (!id.value || !name.value) {
  //     alert('Input the id & name!!');
  //     id.focus();
  //     return;
  //   }

  //   login(+id.value, name.value);
  // };

  // const changeName = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log('nnnnnnnn>>', name);
  //   setName(e.currentTarget.value);
  // };

  return (
    <>
      <form onSubmit={signIn} className='border p-4'>
        <LabelInput
          label='ID'
          type='number'
          ref={idRef}
          // onChange={(e) => setId(+e.currentTarget.value)}
        />
        <div className='flex'>
          <label htmlFor='name' className='w-24'>
            Name:
          </label>
          <input
            id='name'
            type='text'
            ref={nameRef}
            placeholder='Name...'
            className='inp'
            // onChange={changeName}
          />
        </div>
        {/* <div className='flex'>
        <label htmlFor='id' className='w-24'>
          ID:
        </label>
        <input
          id='id'
          type='number'
          placeholder='ID...'
          className='inp mb-3'
          // onChange={(e) => setId(+e.currentTarget.value)}
        />
      </div> */}
        {/* <div className='flex'>
        <label htmlFor='name' className='w-24'>
          Name:
        </label>
        <input
          id='name'
          type='text'
          autoComplete='off'
          placeholder='Name...'
          className='inp'
          // onChange={(e) => setName(e.currentTarget.value)}
        />
      </div> */}
        {/* <button className='btn btn-success float-end mt-3'>Sign In</button> */}
        <Button type='submit' variant='btn-success' classNames='float-end mt-3'>
          Sign In
        </Button>
      </form>
    </>
  );
});
