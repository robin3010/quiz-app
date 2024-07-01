import { getQuestionKeyName } from 'shared/lib/utils'
import { IAnswerModel } from 'store/models/answers'
import { IQuestionModel } from 'store/models/quiz'

export const getInitValues = (
  quiz: IQuestionModel[],
  answers: IAnswerModel[]
) => {
  const values = quiz.reduce(
    (acc, { id, index }) => {
      const qName = getQuestionKeyName(index)

      const currAnswer = answers.find((answer) => answer.qId === id)
      if (currAnswer) {
        const qObj = { [qName]: currAnswer.value }
        return { ...acc, ...qObj }
      }
      return acc
    },
    {} as { [k: string]: string | object }
  )
  return values
}

export const validate = (values: ReturnType<typeof getInitValues>) => {
  return Object.entries(values).reduce((acc, [key, v]) => {
    if (
      (typeof v === 'string' && !v) ||
      (typeof v === 'object' && Object.values(v).every((val) => !val))
    ) {
      return { ...acc, [key]: 'Required' }
    }
    return acc
  }, {})
}
