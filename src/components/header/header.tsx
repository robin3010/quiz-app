import { observer } from 'mobx-react-lite'
import Timer from 'shared/ui/formCountdown/formCountdown'

const Header = observer(() => {
  return (
    <div className="d-inline-flex gap-2 justify-content-center">
      <h3>Тестирование</h3>
      <div>
        <Timer />
      </div>
    </div>
  )
})

export default Header
