import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <svg className="logo-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" rx="14" fill="#8b5cf6"/>
          <g transform="translate(32,28)">
            <path d="M0-18 C-10-18-16-10-16-2 C-16 5-12 8-8 12 L-6 14 L6 14 L8 12 C12 8 16 5 16-2 C16-10 10-18 0-18Z" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="-5" y1="14" x2="5" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="-4" y1="18" x2="4" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <text x="0" y="4" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">&lt;/&gt;</text>
          </g>
        </svg>
        <span className="logo-text">
          <span className="logo-dev">Dev</span>
          <span className="logo-name"> Insights</span>
          <span className="logo-dot">.</span>
        </span>
      </div>
      <nav className="header-nav">
        <a href="#" className="active-nav">Home</a>
        <a href="#">Tags</a>
        <a href="#">Authors</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

export default Header;