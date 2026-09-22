import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        Dev Insights<span className="logo-dot">.</span>
      </div>
      <a href="#new-post" className="nav-link">
        + New Post
      </a>
    </header>
  );
}

export default Header;