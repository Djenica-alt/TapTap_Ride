import { useState } from 'react'
import './Reservation.css'
import Profil from './Profil'

export default function Reservation({ onReserve, onOpenProfile, onOpenHistorique }) {
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const drivers = [
    {
      name: 'Marc Antoine',
      car: 'Toyota Corolla • AB-1234',
      distance: '0.5 km',
      rating: 4.7,
      price: '220 HTG',
      arrival: '8 min',
    },
    {
      name: 'Jean Michel',
      car: 'Nissan Sentra • EF-9012',
      distance: '0.5 km',
      rating: 5.0,
      price: '160 HTG',
      arrival: '3 min',
    },
    {
      name: 'Marie Flores',
      car: 'Hyundai Elantra • GH-3456',
      distance: '1.2 km',
      rating: 4.8,
      price: '180 HTG',
      arrival: '6 min',
    },
    {
      name: 'Sophie Laurent',
      car: 'Honda Civic • CD-5678',
      distance: '0.5 km',
      rating: 4.9,
      price: '150 HTG',
      arrival: '2 min',
    },
  ];

  return (
    <div className="reservation-page">
      <div className="reservation-card">
        <header className="reservation-header">
          <div className="reservation-brand">TapTap Ride</div>
          <div className="reservation-menu" onClick={() => setIsProfileOpen(true)}>
            ☰
          </div>
        </header>

        <section className="reservation-search-section">
          <div className="reservation-search">
            <label className="search-box">
              <span className="search-icon">📍</span>
              <input type="text" placeholder="Point de départ" />
            </label>
            <label className="search-box">
              <span className="search-icon">🔎</span>
              <input type="text" placeholder="Où allez-vous ?" />
            </label>
          </div>
        </section>
        

      

        <section className="drivers-block">
          <div className="drivers-count">Chauffeurs disponibles ({drivers.length})</div>
          {drivers.map((driver) => {
            const isSelected = driver.name === selectedDriver
            return (
              <div
                key={driver.name}
                className={`driver-card ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedDriver(driver.name)}
              >
                <div className="driver-left">
                  <div className="driver-avatar">👤</div>
                  <div className="driver-info">
                    <h3 className="driver-name">{driver.name}</h3>
                    <p className="driver-car">{driver.car}</p>
                    <p className="driver-distance"> {driver.distance} de vous</p>
                  </div>
                </div>

                <div className="driver-right">
                  <div className="driver-rating">⭐ {driver.rating}</div>
                  <p className="driver-price">{driver.price}</p>
                  <p className="driver-arrival"> Arrivée: {driver.arrival}</p>
                  {isSelected && (
                    <button
                      type="button"
                      className="driver-select-btn"
                      onClick={(event) => {
                        event.stopPropagation()
                        onReserve?.(driver)
                      }}
                    >
                      Réserver maintenant
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </section>
      </div>

      {isProfileOpen && (
        <div className="profile-overlay">
          <div className="profile-sidebar">
            <Profil
              onClose={() => setIsProfileOpen(false)}
              onOpenFullProfile={() => {
                setIsProfileOpen(false)
                onOpenProfile?.()
              }}
              onOpenHistorique={() => {
                setIsProfileOpen(false)
                onOpenHistorique?.()
              }}
              sidebar
            />
          </div>
        </div>
      )}
    </div>
  )
}
