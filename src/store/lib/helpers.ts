import { getQuestionOptionEntries } from 'shared/lib/utils'
import { IAnswerModel } from 'store/models/answers'
import { IQuestionModel } from 'store/models/quiz'
import { IRootStore } from 'store/models/root'
import { CachedUserData } from './localStorage'

export const setInitAnswer = (question: IQuestionModel) =>
  ({
    qId: question.id,
    value: getQuestionOptionEntries(question),
    isCompleted: false,
  }) as IAnswerModel

export const getInitSnapshot = (
  snapshot: IRootStore,
  localData: CachedUserData
) => ({
  ...snapshot,
  ...localData,
  answers: !localData.answers?.length
    ? snapshot.quiz?.map((q) => setInitAnswer(q))
    : localData.answers,
})
