import { SnapshotIn, t } from 'mobx-state-tree'

export const TimerModel = t
  .model('TimerModel', {
    limit: t.maybeNull(t.number),
    started_at: t.maybeNull(t.Date),
    timesUp: t.optional(t.boolean, false),
  })
  .actions((self) => ({
    afterCreate() {
      if (!self.started_at) {
        self.started_at = new Date()
      }
    },
    setTimesUp() {
      self.timesUp = true
    },
  }))

export interface ITimerModel extends SnapshotIn<typeof TimerModel> {}
