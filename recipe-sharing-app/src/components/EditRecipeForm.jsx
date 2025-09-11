// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from './recipeStore';

function EditRecipeForm({ recipe, onDone }) {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    updateRecipe({
      id: recipe.id,
      title: title.trim(),
      description: description.trim(),
    });
    if (onDone) onDone();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <div style={{ marginTop: 8 }}>
        <button type="submit">Save</button>
        <button type="button" onClick={() => onDone && onDone()}>Cancel</button>
      </div>
    </form>
  );
}

export default EditRecipeForm;
