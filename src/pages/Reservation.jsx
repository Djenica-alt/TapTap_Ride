import { useState } from 'react'
import './Reservation.css'
import Profil from './Profil'
import GoogleMap from '../components/GoogleMap'

export default function Reservation({ onReserve, onOpenProfile, onOpenHistorique }) {
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [departure, setDeparture] = useState('')
  const [destination, setDestination] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
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

  const handleSearch = () => {
    if (departure.trim() || destination.trim()) {
      setHasSearched(true)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleInputChange = (value, type) => {
    if (type === 'departure') {
      setDeparture(value)
    } else {
      setDestination(value)
    }
    // Auto-trigger search when either field has input
    if (value.trim()) {
      setHasSearched(true)
    }
  }

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
              <input 
                type="text" 
                placeholder="Point de départ" 
                value={departure}
                onChange={(e) => handleInputChange(e.target.value, 'departure')}
                onKeyPress={handleKeyPress}
              />
            </label>
            <label className="search-box">
              <span className="search-icon">🔎</span>
              <input 
                type="text" 
                placeholder="Où allez-vous ?" 
                value={destination}
                onChange={(e) => handleInputChange(e.target.value, 'destination')}
                onKeyPress={handleKeyPress}
              />
            </label>
            <button className="search-button" onClick={handleSearch}>
              Rechercher un trajet
            </button>
          </div>
        </section>

        <section className="reservation-map-section">
          <GoogleMap 
            lat={48.8566} 
            lng={2.3522} 
            zoom={14}
            className="reservation-map-card"
          />
        </section>

        <section className="drivers-block">
          {hasSearched ? (
            <>
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
            </>
          ) : (
            <div className="no-search-message">
              Commencez à taper pour voir les chauffeurs disponibles
            </div>
          )}
        </section>
      </div>

      {isProfileOpen && (
        <div className="profile-overlay" onClick={() => setIsProfileOpen(false)}>
          <div
            className="profile-sidebar"
            onClick={(event) => event.stopPropagation()}
          >
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
