import { useField } from 'formik'
import { FormFieldContentProps } from '../../types/types'

const TextInputField: React.FC<FormFieldContentProps> = ({
  label,
  contentId,
  inputType,
  ...props
}) => {
  const [field] = useField(props)

  return (
    <label className="form-label" htmlFor={contentId}>
      {label}
      <input
        className="form-control"
        {...field}
        id={contentId}
        type={inputType}
        onChange={(e) => props.changeHandler(e, contentId, field.onChange)}
      />
    </label>
  )
}

export default TextInputField
