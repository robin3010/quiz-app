import { useCallback, useMemo } from 'react'
import { useStore } from 'store/lib/useStore'
import { FormikHelpers } from 'formik'
import { FieldChangeHandlerWithQId } from '../../../shared/types/types'
import { getInitValues } from './helpers'

const useHandlers = () => {
  const { answers, setQuizCompleted, clearAnswers } = useStore()

  const changeHandler: FieldChangeHandlerWithQId = useCallback(
    (qId, e, contentId, onChangeFunc) => {
      onChangeFunc(e)
      const storedAnswer = answers.find((a) => a.qId === qId)

      if (storedAnswer) {
        const { value: storedValue, setValue } = storedAnswer
        const { target } = e

        const valueFormatted =
          typeof storedValue !== 'string'
            ? {
                ...storedValue,
                [contentId]: (target as HTMLInputElement).checked,
              }
            : target.value

        setValue(valueFormatted)
      }
    },
    [answers]
  )

  const submitAction = useCallback(
    (
      values: ReturnType<typeof getInitValues>,
      formikHelpers?: FormikHelpers<ReturnType<typeof getInitValues>>
    ) => {
      setTimeout(() => {
        console.log(values)
        formikHelpers?.setSubmitting(false)
        setQuizCompleted()
        clearAnswers()
      }, 1e3)
    },
    [clearAnswers, setQuizCompleted]
  )

  return useMemo(
    () => ({
      changeHandler,
      submitAction,
    }),
    [changeHandler, submitAction]
  )
}
export default useHandlers
