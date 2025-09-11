import { useState } from 'react';
import useRecipeStore from '../recipeStore';

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{ padding: '8px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        style={{ padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px', backgroundColor: 'green', color: 'white' }}>
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
