import {
  Instance,
  SnapshotIn,
  applySnapshot,
  getSnapshot,
  onSnapshot,
  t,
} from 'mobx-state-tree'
import { getInitSnapshot } from 'store/lib/helpers'
import {
  ISaveDataLocalArgs,
  getCachedData,
  saveDataLocal,
} from 'store/lib/localStorage'
import { QuestionModel } from './quiz'
import { TimerModel } from './timer'
import { AnswerModel } from './answers'

export const RootStoreModel = t
  .model({
    active: t.optional(t.number, 1),
    quizId: t.identifier,
    quiz: t.array(QuestionModel),
    isQuizCompleted: false,
    timer: TimerModel,
    answers: t.array(AnswerModel),
  })
  .views((self) => ({
    get count() {
      return self.quiz.length
    },
  }))
  .actions((self) => ({
    setInitStoreData() {
      const savedData = getCachedData(self.quizId)
      const snapshot = getSnapshot(self)

      const initSnapshot = getInitSnapshot(snapshot, savedData)

      applySnapshot(self, initSnapshot)
      if (!savedData.active) this.setActive(self.quiz[0].index)
    },
    setActive(index: number) {
      self.active = index
    },
    saveData() {
      const dataToSave: ISaveDataLocalArgs = {
        quizId: self.quizId,
        answers: self.answers,
        active: self.active,
        /* test only, should be on server */
        timer: self.timer,
      }

      saveDataLocal(dataToSave)
    },
    clearAnswers() {
      const clearData: ISaveDataLocalArgs = {
        quizId: self.quizId,
        clear: true,
      }
      saveDataLocal(clearData)
    },
    setQuizCompleted() {
      self.isQuizCompleted = true
    },
    afterCreate() {
      this.setInitStoreData()
      onSnapshot(self, this.saveData)
    },
  }))

export interface IRootStore extends SnapshotIn<typeof RootStoreModel> {}
export interface IRootStoreNode extends Instance<typeof RootStoreModel> {}
