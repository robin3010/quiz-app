import { FormikErrors } from 'formik'
import { getQuestionKeyName } from 'shared/lib/utils'
import { useAnswerById, useStore } from 'store/lib/useStore'

interface IActionButtons {
  errors: FormikErrors<{
    [k: string]: string | object
  }>
}

const ActionButtons: React.FC<IActionButtons> = ({ errors }) => {
  const { active, setActive, quiz, count } = useStore()

  const activeQuestion = quiz.find((q) => q.index === active)

  const questionName = getQuestionKeyName(activeQuestion?.index || 1)
  const error = errors[questionName]

  const qId = activeQuestion?.id || quiz[0].id
  const currentAnswer = useAnswerById(qId)

  const clickHandler = (nav: number) => {
    if (nav > 0) currentAnswer?.setCompleted()
    setActive(active + nav)
  }

  return (
    <div className="d-flex gap-3">
      {count > 1 && (
        <button
          className="btn btn-secondary px-5"
          type="button"
          disabled={active === 1}
          onClick={() => clickHandler(-1)}
        >
          Назад
        </button>
      )}
      {count > 1 && active !== count ? (
        <button
          className="btn btn-main px-5"
          type="button"
          disabled={!!error}
          onClick={() => clickHandler(1)}
        >
          Ответить
        </button>
      ) : (
        <button className="btn btn-main px-5" type="submit" disabled={!!error}>
          Завершить
        </button>
      )}
    </div>
  )
}

export default ActionButtons
