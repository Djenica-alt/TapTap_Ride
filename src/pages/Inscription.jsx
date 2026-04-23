import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Inscription() {
  return (
    <main className="auth-page auth-register">
      <section className="auth-card">
        <div className="auth-card__header">
          <p className="auth-card__label">Créer un compte</p>
          <h1>Rejoignez TapTap Ride</h1>
          <p className="auth-card__subtitle">
            Inscrivez-vous pour localiser, réserver et gérer vos trajets.
          </p>
        </div>

        <form className="auth-form">
          <Input
            label="Nom complet"
            type="text"
            name="fullname"
            placeholder="Votre nom complet"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Votre email"
          />
          <Input
            label="Téléphone"
            type="tel"
            name="phone"
            placeholder="Votre numéro de téléphone"
          />
          <Input
            label="Mot de passe"
            type="password"
            name="password"
            placeholder="Votre mot de passe"
          />
          <Input
            label="Confirmer le mot de passe"
            type="password"
            name="confirmPassword"
            placeholder="Confirmez le mot de passe"
          />
          <Button type="submit">Créer mon compte</Button>
        </form>

        <div className="auth-card__footer">
          <p>Déjà un compte ?</p>
          <Link className="auth-link" to="/connexion">
            Se connecter
          </Link>
        </div>
      </section>
    </main>
  );
}
