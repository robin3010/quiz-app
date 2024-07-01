import { observer } from 'mobx-react-lite'
import './progressBar.scss'
import { useStore } from 'store/lib/useStore'
import { IAnswerModel } from 'store/models/answers'

interface IProgressBarStepProps extends Omit<IAnswerModel, 'value'> {}

const ProgressBarStep: React.FC<IProgressBarStepProps> = observer(
  ({ isCompleted, qId }) => {
    const { quiz, active } = useStore()

    const completedClass = isCompleted ? ' bar-completed' : ''

    const currentIndex = quiz.find((q) => q.id === qId)?.index
    const activeClass = currentIndex === active ? ' bar-active' : ''

    return <div className={`col bar${completedClass}${activeClass}`} />
  }
)

export default ProgressBarStep
