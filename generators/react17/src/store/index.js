import React from 'react'
import { createContext, useContext, useReducer } from 'react'
import { initState, userReducer } from './userStore'

const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initState)
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export const useStores = () => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('no store')
  }
  return store
}
