import './Mon_profil.css'

export default function Mon_profil({ onBack, onOpenHistorique }) {
  return (
    <div className="mon-profil-page">
      <div className="mon-profil-card">
        <header className="mon-profil-header">
          <button type="button" className="mon-profil-back" onClick={onBack}>
            ← Mon Profil
          </button>
        </header>

        <div className="mon-profil-user-card">
          <div className="mon-profil-avatar">JD</div>
          <div className="mon-profil-user-info">
            <div className="mon-profil-name">Jean Dana</div>
            <div className="mon-profil-status">Membre depuis mars 2022</div>
            <div className="mon-profil-rating">4.9 (842 évaluations)</div>
          </div>
        </div>

        <section className="mon-profil-section">
          <div className="mon-profil-section-title">Informations de contact</div>
          <div className="mon-profil-field">
            <span>Email</span>
            <div>jean@example.com</div>
          </div>
          <div className="mon-profil-field">
            <span>Téléphone</span>
            <div>+509 1234 5678</div>
          </div>
          <div className="mon-profil-field">
            <span>Adresse</span>
            <div>Port-au-Prince, Haïti</div>
          </div>
        </section>

        <section className="mon-profil-activity">
          <div className="mon-profil-section-title">Activité</div>
          <div className="mon-profil-activity-grid">
            <div className="mon-profil-activity-card">
              <div className="mon-profil-activity-value">5</div>
              <div className="mon-profil-activity-label">Courses ce mois-ci</div>
            </div>
            <div className="mon-profil-activity-card">
              <div className="mon-profil-activity-value">1 105</div>
              <div className="mon-profil-activity-label">HTG dépensés</div>
            </div>
            <div className="mon-profil-activity-card">
              <div className="mon-profil-activity-value">42</div>
              <div className="mon-profil-activity-label">Courses totales</div>
            </div>
            <div className="mon-profil-activity-card">
              <div className="mon-profil-activity-value">15</div>
              <div className="mon-profil-activity-label">Chauffeurs favoris</div>
            </div>
          </div>
        </section>

        <section className="mon-profil-section">
          <div className="mon-profil-section-title">Préférences</div>
          <div className="mon-profil-option">Notification push</div>
          <div className="mon-profil-option">Partager ma position</div>
          <div className="mon-profil-option">Recevoir les promotions</div>
        </section>

        <button
          type="button"
          className="mon-profil-historique-button"
          onClick={onOpenHistorique}
        >
          Historique des trajets
        </button>

        <button type="button" className="mon-profil-logout-button">
          Se déconnecter
        </button>
      </div>
    </div>
  )
}
