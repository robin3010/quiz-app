import { IQuestionModel } from 'store/models/quiz'
import { observer } from 'mobx-react-lite'
import { getQuestionKeyName } from 'shared/lib/utils'
import FormField from '../../shared/ui/formFields/formField'
import useHandlers from './lib/handlers'

const QuestionContent: React.FC<IQuestionModel> = observer(
  ({ id, index, questionType, content, title }) => {
    const { changeHandler } = useHandlers()

    const changeHandlerWithQId = changeHandler.bind(undefined, id)

    const questionName = getQuestionKeyName(index)

    if (!content) return null

    return (
      <>
        <h5 className="question-title">{title}</h5>
        <div className="question-content py-3">
          {content.map((item) => {
            const isMultiOption = questionType === 'multiOption'
            const fieldName = isMultiOption
              ? `${questionName}.${item.contentId}`
              : `${questionName}`

            return (
              <FormField
                key={item.contentId}
                name={fieldName}
                questionType={questionType}
                changeHandler={changeHandlerWithQId}
                {...item}
              />
            )
          })}
        </div>
      </>
    )
  }
)

export default QuestionContent
