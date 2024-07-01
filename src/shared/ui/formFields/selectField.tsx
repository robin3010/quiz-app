import { useField } from 'formik'
import { FormFieldContentProps } from 'shared/types/types'

const SelectField: React.FC<FormFieldContentProps> = ({
  selectOption,
  contentId,
  inputType,
  ...props
}) => {
  const [field] = useField(props)

  return (
    <select
      className="form-select"
      {...field}
      onChange={(e) => props.changeHandler(e, contentId, field.onChange)}
    >
      {selectOption?.map((option, index) => (
        <option value={option} key={`${index + 1}${option}`}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default SelectField
