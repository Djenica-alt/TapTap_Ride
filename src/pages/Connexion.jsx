import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Connexion() {
  return (
    <main className="auth-page auth-login">
      <section className="auth-card">
        <div className="auth-card__header">
          <p className="auth-card__label">Se connecter</p>
          <h1>Bienvenue sur TapTap Ride</h1>
          <p className="auth-card__subtitle">
            Accédez à votre compte et réservez votre trajet en un clic.
          </p>
        </div>

        <form className="auth-form">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Votre email"
          />
          <Input
            label="Mot de passe"
            type="password"
            name="password"
            placeholder="Votre mot de passe"
          />
          <Button type="submit">Se connecter</Button>
        </form>

        <div className="auth-card__footer">
          <p>Pas encore de compte ?</p>
          <Link className="auth-link" to="/inscription">
            S’inscrire
          </Link>
        </div>
      </section>
    </main>
  );
}
