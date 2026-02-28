import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav id="navbar" className="navbar">
      <NavLink to="/" className="logo">
        <div className="logo-mark">CME</div>
        <div className="logo-text">
          CM<span>Engineering</span>
        </div>
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink to="/tentang">Profil</NavLink>
        </li>
        <li>
          <NavLink to="/produk">Produk &amp; Layanan</NavLink>
        </li>
        <li>
          <NavLink to="/portofolio">Portofolio</NavLink>
        </li>
        <li>
          <NavLink to="/kontak" className="nav-cta">
            Hubungi Kami
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

