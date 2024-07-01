import { SnapshotIn, t } from 'mobx-state-tree'

export type AnswerValue = string | { [k: string]: boolean }

export const AnswerModel = t
  .model('AnswerModel', {
    qId: t.identifier,
    value: t.frozen<AnswerValue>(),
    isCompleted: t.boolean,
  })
  .actions((self) => ({
    setValue(value: AnswerValue) {
      self.value = value
    },
    setCompleted() {
      self.isCompleted = true
    },
  }))

export interface IAnswerModel extends SnapshotIn<typeof AnswerModel> {}
