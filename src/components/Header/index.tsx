import Navigation from "../Navigation";
import { Logo } from "../Svg";
import "./style.scss";

function Header() {
  return (
    <header className="Header">
      <a className="Header__logo" href="/" aria-label="Space Tourism, Home">
        <Logo />
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
