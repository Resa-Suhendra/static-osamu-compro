import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="ft-top">
        <div className="ft-brand">
          <NavLink to="/" className="logo">
            <div className="logo-mark">CME</div>
            <div className="logo-text">
              CME<span>Engineering</span>
            </div>
          </NavLink>
          <p>
            Mitra rekayasa industri dan lingkungan yang membantu organisasi
            beroperasi lebih aman, efisien, dan patuh regulasi.
          </p>
        </div>
        <div className="ft-col">
          <h4>Perusahaan</h4>
          <ul>
            <li>
              <NavLink to="/tentang">Profil CME</NavLink>
            </li>
            <li>
              <NavLink to="/portofolio">Portofolio</NavLink>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Produk &amp; Layanan</h4>
          <ul>
            <li>
              <NavLink to="/produk">Sistem Pengelolaan Limbah</NavLink>
            </li>
            <li>
              <NavLink to="/produk">Fabrikasi &amp; Machining</NavLink>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Hubungi Kami</h4>
          <ul>
            <li>
              <NavLink to="/kontak">Informasi Kontak</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="ft-bot">
        <span>© 2025 CME Engineering.</span>
        <span style={{ opacity: 0.6 }}>
          Halaman profil perusahaan · Konten angka &amp; sertifikasi masih dapat
          disesuaikan
        </span>
      </div>
    </footer>
  );
};

