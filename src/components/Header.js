import logo from "../images/vector.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo Around the US" className="header__logo" />
    </header>
  );
}
