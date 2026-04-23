import './Profil.css'

export default function Profil({ onClose, onOpenFullProfile, onOpenHistorique, sidebar }) {
  return (
    <div className={`profile-page ${sidebar ? 'sidebar' : ''}`}>
      <div className="profile-card">
        <header className="profile-header">
          <div className="profile-title">TapTap Ride</div>
        </header>

        <div className="profile-user-card">
          <div className="profile-avatar">JD</div>
          <div className="profile-user-info">
            <div className="profile-name">Jean Dana</div>
            <div className="profile-email">jean@example.com</div>
          </div>
        </div>

        <div className="profile-menu">
          <button
            type="button"
            className="profile-menu-item"
            onClick={onOpenFullProfile}
          >
            Mon Profil
          </button>
          <button
            type="button"
            className="profile-menu-item"
            onClick={onOpenHistorique}
          >
            Historique des trajets
          </button>
          <button type="button" className="profile-menu-item">
            Paramètres
          </button>
          <button type="button" className="profile-menu-item danger">
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  )
}
