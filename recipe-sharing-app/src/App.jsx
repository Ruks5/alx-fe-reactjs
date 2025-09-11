import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/favorites" style={{ marginRight: '10px' }}>Favorites</Link>
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <SearchBar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <AddRecipeForm />
              <RecipeList />
            </div>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </Router>
  );
}

export default App;
