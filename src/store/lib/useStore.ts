import { useContext } from 'react'
import StoreContext from 'store/storeContext'

export const useStore = () => useContext(StoreContext)

export const useAnswers = () => useStore().answers

export const useAnswerById = (id: string) =>
  useAnswers().find((a) => a.qId === id)

export const useTimer = () => useStore().timer
