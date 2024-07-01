import QuizCompleted from 'components/pages/quizCompleted/quizCompleted'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store/lib/useStore'
import Quiz from 'components/pages/quiz/quiz'

const App = observer(() => {
  const { isQuizCompleted } = useStore()

  return (
    <div className="container d-flex gap-3 flex-column m-auto py-3 bg-transparent">
      <div className="card p-5 gap-3">
        {isQuizCompleted ? <QuizCompleted /> : <Quiz />}
      </div>
    </div>
  )
})

export default App
