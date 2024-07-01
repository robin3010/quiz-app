import { observer } from 'mobx-react-lite'
import './progressBar.scss'
import { useAnswers } from 'store/lib/useStore'
import ProgressBarStep from './progressBarStep'

const ProgressBar = observer(() => {
  const answers = useAnswers()

  if (!answers.length) return null

  return (
    <div className="row mx-auto gap-1 w-100">
      {answers.map((answer) => (
        <ProgressBarStep
          isCompleted={answer.isCompleted}
          qId={answer.qId}
          key={answer.qId}
        />
      ))}
    </div>
  )
})

export default ProgressBar
