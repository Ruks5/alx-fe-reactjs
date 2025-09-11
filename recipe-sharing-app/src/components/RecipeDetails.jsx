import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

function RecipeDetails() {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      {editing ? (
        <div>
          <h2>Edit Recipe</h2>
          <EditRecipeForm
            recipe={recipe}
            onDone={() => setEditing(false)}
          />
        </div>
      ) : (
        <div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>

          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <button onClick={() => setEditing(true)}>Edit</button>
            <DeleteRecipeButton id={recipe.id} />
            <Link to="/">Back to list</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
