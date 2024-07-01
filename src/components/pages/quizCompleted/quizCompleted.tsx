import { memo } from 'react'

const QuizCompleted = memo(() => {
  return (
    <div className="text-center">
      <h3>Тестирование завершено</h3>
      <div>
        <h5>Ответы отправлены</h5>
      </div>
    </div>
  )
})

export default QuizCompleted
