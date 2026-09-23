import '../styles/Header.css';

function Header() {
  return (
    <>
      <header className="site-header">
        <div className="logo">
          Dev Insights<span className="logo-dot">.</span>
        </div>
        <a href="#new-post" className="nav-link">
          Write a Post
        </a>
      </header>
      <section className="hero">
        <h1 className="hero-title">What are you building today?</h1>
        <p className="hero-subtitle">
          A space for the Dev Insights team to share tips, lessons learned, and things worth knowing about web development.
        </p>
      </section>
    </>
  );
}

export default Header;