import useRecipeStore from './recipeStore';

function FavoritesList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => recipes.find((recipe) => recipe.id === id))
  );

  if (favorites.length === 0) {
    return <p>You have no favorite recipes yet.</p>;
  }

  return (
    <div style={{ padding: '10px' }}>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px', borderRadius: '6px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
