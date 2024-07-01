import { useField } from 'formik'
import { FormFieldContentProps } from '../../types/types'

const TextareaField: React.FC<FormFieldContentProps> = ({
  label,
  contentId,
  ...props
}) => {
  const [field] = useField(props)

  return (
    <label className="form-label" htmlFor={contentId}>
      {label}
      <textarea
        className="form-control"
        {...field}
        id={contentId}
        rows={5}
        onChange={(e) => props.changeHandler(e, contentId, field.onChange)}
      />
    </label>
  )
}

export default TextareaField
