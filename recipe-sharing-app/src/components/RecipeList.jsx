import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: '10px' }}>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>{recipe.title}</h3>
              <p style={{ margin: 0 }}>{recipe.description}</p>
            </div>

            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Link to={`/recipes/${recipe.id}`}>View</Link>
              <DeleteRecipeButton id={recipe.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;