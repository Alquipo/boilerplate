import { useState, useEffect, Dispatch, SetStateAction } from 'react'

import { parseCookies, setCookie } from 'nookies'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedCookies<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const storageValue = parseCookies()

    if (storageValue) {
      return setState(JSON.parse(storageValue[key]))
    }
  }, [key])

  useEffect(() => {
    setCookie(undefined, key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedCookies
