import { useEffect, useState } from 'react';

const cache: Record<string, unknown> = {};

interface ErrorWithMessage {
  message: string;
}

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage =>
  typeof error === 'object' &&
  error !== null &&
  'message' in error &&
  typeof error.message === 'string';

const toErrorWithMessage = (error: unknown) =>
  isErrorWithMessage(error) ? error : new Error(JSON.stringify(error));

export const useFetch = <T>(
  url: string,
  isCache: boolean = false,
  depArr: unknown[] = []
) => {
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<ErrorWithMessage>();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    (async function () {
      try {
        console.log('cache11>>', cache);
        if (isCache && url in cache) {
          console.log('cccccccccccccccc');
          return setResult(cache[url] as T);
        }

        const data = (await fetch(url, { signal }).then((res) => {
          if (res.ok) return res.json();
          throw new error();
        })) as T;

        if (isCache) cache[url] = data;
        console.log('cache22>>', cache);
        // console.log('useFetch.data>>', data);
        setResult(data);
      } catch (error) {
        console.error('Error>>', error);
        if (error) setError(toErrorWithMessage(error));
      }
    })();

    return () => abortController.abort('Clean-up!');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, depArr);

  return { data: result, error };
};
