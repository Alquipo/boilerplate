import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedLocalStorage<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return setState(JSON.parse(storageValue))
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedLocalStorage
