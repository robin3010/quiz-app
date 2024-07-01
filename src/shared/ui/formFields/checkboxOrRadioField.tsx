import { useField } from 'formik'
import { FormFieldContentProps } from '../../types/types'

const CheckboxOrRadioField: React.FC<FormFieldContentProps> = ({
  label,
  contentId,
  inputType,
  ...props
}) => {
  const value = inputType === 'radio' ? label : undefined
  const [field] = useField({ ...props, type: inputType, value })

  return (
    <div className="form-check">
      <label className="form-check-label" htmlFor={contentId}>
        <input
          className="form-check-input"
          {...field}
          id={contentId}
          type={inputType}
          onChange={(e) => props.changeHandler(e, contentId, field.onChange)}
        />
        {label}
      </label>
    </div>
  )
}

export default CheckboxOrRadioField
