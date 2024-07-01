import getDigits from 'components/header/lib/helpers'
import { useEffect, useState } from 'react'
import { getCompleteBefore, getTimeLeft } from 'shared/lib/utils'
import { useTimer } from 'store/lib/useStore'

const Timer = () => {
  const { limit, started_at, setTimesUp } = useTimer()

  const completeBefore = getCompleteBefore(limit, started_at)

  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(completeBefore, started_at)
  )

  const countDownDigits = getDigits(timeLeft)

  useEffect(() => {
    if (!limit) return undefined

    if (timeLeft < 1) return setTimesUp()

    const timerId = setInterval(() => setTimeLeft(timeLeft - 1e3), 1e3)

    return () => clearInterval(timerId)
  }, [setTimesUp, timeLeft, limit])

  if (!limit) return null

  return (
    <div className={`timer ${timeLeft <= 3e5 ? ' timer-accent' : ''}`}>
      {countDownDigits.hours}:{countDownDigits.minutes}:
      {countDownDigits.seconds}
    </div>
  )
}

export default Timer
