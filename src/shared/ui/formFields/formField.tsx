import { QUESTION_TYPE } from 'shared/consts/consts'
import { FieldAttrType, FormFieldProps } from '../../types/types'
import CheckboxOrRadioField from './checkboxOrRadioField'
import TextInputField from './textInputField'
import TextareaField from './textareaField'
import SelectField from './selectField'

const FormField: React.FC<FormFieldProps> = ({ questionType, ...props }) => {
  const { fieldType, inputType }: FieldAttrType = QUESTION_TYPE[questionType]

  const propsWithFieldAttr = { ...props, fieldType, inputType }

  if (fieldType === 'input') {
    if (inputType === 'checkbox' || inputType === 'radio')
      return <CheckboxOrRadioField {...propsWithFieldAttr} />

    return <TextInputField {...propsWithFieldAttr} />
  }
  if (fieldType === 'textarea') return <TextareaField {...propsWithFieldAttr} />

  return <SelectField {...propsWithFieldAttr} />
}

export default FormField
