import './styles/global.css';
import Header from './components/Header';
import PostList from './components/PostList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <PostList />
      <Footer />
    </div>
  );
}

export default App;