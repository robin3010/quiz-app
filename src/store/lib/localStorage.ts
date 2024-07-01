import { QUIZ_DATA } from 'shared/consts/consts'
import { IRootStore } from 'store/models/root'

export type DataToSaveLocal = Pick<IRootStore, 'quizId' | 'answers'> &
  Partial<Pick<IRootStore, 'active' | 'timer'>>
export interface CachedUserData extends Omit<DataToSaveLocal, 'quizId'> {}

type CachedQuizes = {
  [key: string]: CachedUserData
}

type LocalData = {
  [Key in keyof CachedQuizes]: CachedQuizes[Key]
}

const getLocalData = (): LocalData => {
  const data = localStorage.getItem(QUIZ_DATA)

  return data ? JSON.parse(data) : {}
}

export function getCachedData(quizId: string) {
  const localData = getLocalData()

  return localData[quizId as keyof typeof localData] || {}
}

export interface SaveDataLocalArgs extends DataToSaveLocal {
  clear?: true
}

export const saveDataLocal = ({ ...args }: SaveDataLocalArgs) => {
  const localData = getLocalData()
  const { quizId, answers, active, timer, clear } = args

  const removeKey = () => {
    delete localData[quizId]
    return localData
  }

  const newLocalData = clear
    ? removeKey()
    : {
        ...localData,
        [quizId]: {
          answers,
          active,
          timer,
        },
      }

  localStorage.setItem(QUIZ_DATA, JSON.stringify(newLocalData, null, '\t'))
}
