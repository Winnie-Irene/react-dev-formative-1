import './styles/global.css';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div className="app-container">
      <Header />
      <PostList />
    </div>
  );
}

export default App;