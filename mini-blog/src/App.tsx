import './styles/global.css';
import Header from './components/Header';
import PostList from './components/PostList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <PostList />
        <aside className="sidebar">
          <div className="sidebar-card">
            <h4 className="sidebar-card-title">About Dev Insights</h4>
            <p className="sidebar-about-text">
              An internal platform where the Dev Insights team shares quick tips, lessons, and updates about web development. Built by developers, for developers.
            </p>
            <div className="sidebar-stats">
              <div className="stat-box">
                <span className="stat-number">3</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">2</span>
                <span className="stat-label">Authors</span>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h4 className="sidebar-card-title">Trending Tags</h4>
            <div className="sidebar-tags">
              <span className="sidebar-tag">#react</span>
              <span className="sidebar-tag">#typescript</span>
              <span className="sidebar-tag">#vite</span>
              <span className="sidebar-tag">#css</span>
              <span className="sidebar-tag">#javascript</span>
              <span className="sidebar-tag">#webdev</span>
              <span className="sidebar-tag">#tooling</span>
              <span className="sidebar-tag">#styled-components</span>
            </div>
          </div>

          <div className="sidebar-card">
            <h4 className="sidebar-card-title">Welcome back, Irene</h4>
            <p className="sidebar-about-text">
              You have 2 published posts. Keep sharing what you learn with the team.
            </p>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;