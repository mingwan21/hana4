import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useReducer,
} from 'react';
import { useCounter } from '../hooks/counter-hook';
import { useSession } from '../hooks/session-context';
import { useFetch } from '../hooks/fetch-hook';
import { FaSpinner } from 'react-icons/fa6';

type TitleProps = {
  text: string;
  name?: string;
};

const Title = ({ text, name }: TitleProps) => {
  // console.log('Titttttttttttttt!!');
  return (
    <h1 className='text-3xl'>
      {text} {name}
    </h1>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  // console.log('bodddddddd!!!');
  return (
    <div className='red' style={{ color: 'blue' }}>
      {children}
    </div>
  );
};

// function useState<S>(initValueOrFn) {
//   const state = {
//     _state: initValueOrFn,
//     get state() {
//       return this._state;
//     },
//     setState(x: S) {
//       this._state = x;
//       vdom.trigger(this);
//     }
//   }

//   return [state.state, state.setState];
// }

type Props = {
  friend: number;
};

export type MyHandler = {
  jumpHelloState: () => void;
};

type PlaceUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};

// why S & Function is not callable...
// type X = { id: number } & number;
// const x: X = { id: 1 };
// console.log('🚀  x:', x);

/**
  const [state, setState] = useMyState(...);
  useMyState(1) | useSuseMyStatetate(() => 1)

  setState(x) 
    ->-> dispatch(x) =>=> reducer(s, x);
  setState(pre => ..)
    ->-> dispatch(pre => ...) =>=> reducer(s, pre => ...);
 */
// type WithoutParamFunction<T> = () => T;
// type SS<X> = (x: X) => X;
// useMyState(() => () => 1) ,  setState(() => 9)
function useMyState<S>(init: S | (() => S)) {
  const [state, dispatch] = useReducer(
    (pre: S, action: S | ((s: S) => S)) =>
      isActionFunction<S>(action) ? action(pre) : action,
    isInitializerFunction<S>(init) ? init() : init
    // init instanceof Function ? init() : init
  );

  return [state, dispatch] as const;
}

function isInitializerFunction<T>(x: unknown): x is () => T {
  return typeof x === 'function';
}
function isActionFunction<T>(x: unknown): x is (t: T) => T {
  return typeof x === 'function';
}

/* 
    const [state, dispatch] = useMyReducer(..);
    useMyReducer(pre => !pre , false);
    useMyReducer((pre, action) => pre + 1, false);
    dispatch()
*/

export const useMyReducer = <R,S> (reducer:R, initArg:S, init?(s:S)=>S) => {
    const [state, setState] = useState(
        init ? init(initArg) : initArg
    );

    const dispatch = (action: unknown) => {
        setState((pre) => render(pre, action))
    }

    const
}