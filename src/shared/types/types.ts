import { FieldHookConfig } from 'formik'
import { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import { IQuestionContentModel, QuestionType } from 'store/models/quiz'

export type FieldChangeHandler = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  contentId: string,
  onChangeFunc: (e: ChangeEvent<unknown>) => void
) => void

export type FieldChangeHandlerWithQId = (
  qId: string,
  ...args: Parameters<FieldChangeHandler>
) => void

interface FormFieldCustomProps {
  changeHandler: FieldChangeHandler
  questionType: QuestionType
}

export type QuestionAttributeType = 'input' | 'select' | 'textarea'
export type QuestionInputType = Exclude<
  HTMLInputTypeAttribute,
  'hidden' | 'password' | 'reset' | 'search' | 'submit'
>

export type FieldAttrType = {
  fieldType: QuestionAttributeType
  inputType?: QuestionInputType
}

export type FormFieldProps = FieldHookConfig<string> &
  IQuestionContentModel &
  FormFieldCustomProps

export type FormFieldContentProps = FieldHookConfig<string> &
  IQuestionContentModel &
  FieldAttrType &
  Omit<FormFieldCustomProps, 'questionType'>
