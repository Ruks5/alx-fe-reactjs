import { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ padding: "10px" }}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites to see suggestions!</p>
      ) : (
        recommendations.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>View</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default RecommendationsList;