import useRecipeStore from "../recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ margin: "10px", padding: "8px", width: "80%" }}
    />
  );
};

export default SearchBar;
