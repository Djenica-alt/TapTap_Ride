import { useState } from 'react'
import Reservation from './pages/Reservation'
import ReservationConfirmation from './pages/ReservationConfirmation'
import ReservationSuccess from './pages/ReservationSuccess'

function App() {
  const [reservedDriver, setReservedDriver] = useState(null)
  const [page, setPage] = useState('reservation')

  return (
    <div>
      {page === 'reservation' && (
        <Reservation
          onReserve={(driver) => {
            setReservedDriver(driver)
            setPage('confirmation')
          }}
        />
      )}
      {page === 'confirmation' && reservedDriver && (
        <ReservationConfirmation
          driver={reservedDriver}
          onBack={() => setPage('reservation')}
          onConfirm={() => setPage('success')}
        />
      )}
      {page === 'success' && reservedDriver && (
        <ReservationSuccess
          driver={reservedDriver}
          onDone={() => {
            setReservedDriver(null)
            setPage('reservation')
          }}
        />
      )}
    </div>
  )
}

export default App;