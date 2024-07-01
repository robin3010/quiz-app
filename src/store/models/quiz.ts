import { SnapshotIn, t } from 'mobx-state-tree'
import { QUESTION_TYPE } from 'shared/consts/consts'

export type QuestionType = keyof typeof QUESTION_TYPE

const QuestionContentModel = t.model('QuestionContentModel', {
  contentId: t.identifier,
  label: '',
  selectOption: t.maybe(t.array(t.string)),
})

export const QuestionModel = t.model('QuestionModel', {
  id: t.identifier,
  index: t.integer,
  title: '',
  questionType: t.frozen<QuestionType>(),
  content: t.array(QuestionContentModel),
})

export interface IQuestionContentModel
  extends SnapshotIn<typeof QuestionContentModel> {}

export interface IQuestionModel extends SnapshotIn<typeof QuestionModel> {}
