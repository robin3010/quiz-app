import { Formik } from 'formik'
import { useStore, useTimer } from 'store/lib/useStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { getInitValues, validate } from './lib/helpers'
import QuestionContent from './questionContent'
import ActionButtons from '../../shared/ui/buttons/actionButtons'
import useHandlers from './lib/handlers'

const QuizForm = observer(() => {
  const { quiz, active, answers } = useStore()
  const { timesUp } = useTimer()
  const { submitAction } = useHandlers()

  const formInitValues = getInitValues(quiz, answers)

  useEffect(() => {
    if (timesUp) submitAction(getInitValues(quiz, answers))
  }, [answers, quiz, submitAction, timesUp])

  return (
    <Formik
      initialValues={formInitValues}
      validateOnMount
      validate={validate}
      onSubmit={submitAction}
    >
      {({ errors, handleSubmit }) => (
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <fieldset disabled={timesUp}>
            {quiz.map((question) =>
              question.index === active ? (
                <QuestionContent key={question.id} {...question} />
              ) : null
            )}
            <ActionButtons {...{ errors }} />
          </fieldset>
        </form>
      )}
    </Formik>
  )
})

export default QuizForm
