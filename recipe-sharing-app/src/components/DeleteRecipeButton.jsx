import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm('Delete this recipe?')) return;
    deleteRecipe(id);
    // go back to list after delete (in case we were on details page)
    navigate('/');
  };

  return <button onClick={handleDelete} style={{ background: 'crimson', color: 'white' }}>Delete</button>;
}

export default DeleteRecipeButton;
