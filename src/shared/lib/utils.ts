import { castToSnapshot } from 'mobx-state-tree'
import { IQuestionContentModel, IQuestionModel } from 'store/models/quiz'

export const getQuestionKeyName = (index: number) => `question${index}`

const getMultiOptionEntries = (options: IQuestionContentModel[]) => {
  return Object.fromEntries(options.map((o) => [o.contentId, false]))
}

export const getQuestionOptionEntries = (question: IQuestionModel) => {
  const isMultiOption = question.questionType === 'multiOption'
  return isMultiOption
    ? getMultiOptionEntries(castToSnapshot(question.content))
    : ''
}

export const getTimeLeft = (limitDate: Date | null, startDate: Date | null) => {
  if (limitDate && startDate) {
    const timeLeftRaw = limitDate.getTime() - new Date().getTime()
    const timeLeft = Math.floor(timeLeftRaw - (timeLeftRaw % 1e3))
    return timeLeft > 0 ? timeLeft : 0
  }
  return 0
}

export const getCompleteBefore = (
  limit: number | null,
  startDate: Date | null
) => {
  if (!limit || !startDate) return null
  return new Date(startDate.getTime() + limit * 6e4)
}
